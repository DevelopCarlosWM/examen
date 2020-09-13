import {combineReducers, createStore}from 'redux'
import orders from './reducers/orders'
import currentOrder from './reducers/currentOrder'
const reducer=combineReducers({
    orders,
    currentOrder
})
const store=createStore(reducer);
export default store