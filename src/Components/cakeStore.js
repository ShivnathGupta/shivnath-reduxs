import {createStore} from 'redux'
import cakeReducer from './cakeReducer'
const CakeStore=createStore(cakeReducer)
export default CakeStore;