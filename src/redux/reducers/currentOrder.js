import {type as findCurrentOrderType} from '../actions/findCurrentOrder'
const initial_state = {}
function reducer( state = initial_state, action= {}){
    switch(action.type){
        case findCurrentOrderType:{
            const order = action.payload
            return order
        }
        default:
            return state
    }
}
export default reducer