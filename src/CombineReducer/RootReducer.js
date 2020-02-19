import {combineReducers} from 'redux'
import CakeReducer from './Cake/CakeReducer'
import PhoneReduce from './Phone/PhoneReducer'
import IceCreamReducer from './IceCram/IceCreamReducer'
const rootReducer=combineReducers({
    cake:CakeReducer,
    phone:PhoneReduce,
    icecream:IceCreamReducer
})
export default rootReducer;