import {type as findOrdersType} from '../actions/findOrders'
const initial_state = []
function reducer( state = initial_state, action= {}){
    switch(action.type){
        case findOrdersType:{
            const orders = action.payload
            return orders
        }
        default:
            return state
    }
}
export default reducer