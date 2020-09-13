import React from 'react'
import Header from '../../sections/header'
import  OrderDetails from '../../sections/orderDetails'
import AddProduct from '../../sections/addProduct'
import findOrders from '../../../redux/actions/findOrders'
import findCurrentOrder from '../../../redux/actions/findCurrentOrder'
import swal from 'sweetalert'
import { connect } from 'react-redux'

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            name:'',
            sku:'',
            price:0,
            quantity:0
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.goBack = this.goBack.bind(this)
    }
    openModal(){
        this.setState({ open:true })
    }
    closeModal(){
        this.setState({ open:false })
    }
    onChangeText(field, value){
        switch (field) {
            case 'name':
                this.setState({ name:value.target.value })
                break;
            case 'sku':
                this.setState({ sku:value.target.value })
                break;
            case 'price':
                this.setState({ price: parseFloat(value.target.value) })
                break;
            case 'quantity':
                this.setState({ quantity: parseFloat(value.target.value) })
                break;
        }
    }
    goBack(){
        this.props.history.goBack()
    }
    async addProduct(){
        if( !this.state.name || !this.state.sku || this.state.quantity<=0 || this.state.price<=0  ){
            swal({
                title: "Uuuups",
                text: "All data is required",
                icon: "info",
                button: "Okay",
            })
        }else{
            const product = {
                name: this.state.name,
                sku: this.state.sku,
                quantity: this.state.quantity,
                price: parseFloat(this.state.price)
            }
            const { items } = this.props.currentOrder
            items.push(product)
            const currentOrder = { ...this.props.currentOrder, items }
            await new Promise( resolve =>{
                resolve(this.props.findCurrentOrder(currentOrder))
            })
            const orders = this.props.orders.filter(order =>  order.name != this.props.currentOrder.name)
            orders.unshift(currentOrder)
            await new Promise( resolve => {
                resolve(this.props.findOrders(orders))
            })
            this.closeModal()
            this.setState({
                name:'',
                sku:'',
                quantity:0,
                price:0
            })
            swal({
                title: "Yeahhh",
                text: "Product have been added successfully",
                icon: "success",
                button: "Okay",
            })
        }
          
    }
    render(){
        return(
            <>
                <Header title={this.props.currentOrder.name} />
                <OrderDetails order={this.props.currentOrder} open={this.state.open} openModal={this.openModal} closeModal={this.closeModal} goBack={this.goBack}/>
                <AddProduct open={this.state.open} closeModal={this.closeModal} onChangeText={this.onChangeText} addProduct={this.addProduct} name={this.state.name} sku={this.state.sku} quantity={this.state.quantity} price={this.state.price}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return({
        currentOrder: state.currentOrder,
        orders: state.orders
    })
}
const mapDispatchToProps = {
    findOrders,
    findCurrentOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)