import React from 'react'
import Header from '../../sections/header'
import findOrders from '../../../redux/actions/findOrders'
import findCurrentOrder from '../../../redux/actions/findCurrentOrder'
import { connect } from 'react-redux'
import OrdersList from '../../sections/ordersList'
import Loader from '../../sections/loader'
class ProductList extends React.Component{
    constructor( props ){
        super( props )
        this.state={
            loading:false
        }
        this.setCurrentOrder = this.setCurrentOrder.bind(this)
    }
    async componentDidMount(){
        if(this.props.orders.length>0){
            console.log('I´m not fetching anymore')
            return false
        }else{
            this.setState({ loading:true })
            const url= 'https://eshop-deve.herokuapp.com/api/v2/orders'
            const request = await fetch(url, {
                headers:{
                    'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'
                }
            })
            const response = await request.json()
            await new Promise( resolve => {
                resolve( this.props.findOrders(response.orders) )
            })
            this.setState({ loading:false })
        }
    }
    async setCurrentOrder( item ){
        const {
            findCurrentOrder,
            history,
        } = this.props;
        await new Promise ( resolve =>{
            resolve(findCurrentOrder( item ))
        })
        history.push(`/order`)
    }
    render(){
        return(
            <>
                <Loader loading={ this.state.loading }/>
                <Header title='Orders List' />
                <OrdersList orders={this.props.orders} loading={this.state.loading} setCurrentOrder={this.setCurrentOrder}/>
            </>
        )
    }
}
const mapStateToProps = state => {
    return({
        orders: state.orders,
        currentOrder: state.currentOrder
    })
}
const mapDispatchToProps = {
    findOrders,
    findCurrentOrder
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)