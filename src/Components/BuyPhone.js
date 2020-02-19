import React from 'react'
import {createStore} from 'redux'
import {connect} from 'react-redux';
import BuyIceCream from './BuyIceCream';

//Component
function BuyPhone(props) {
    return (
        <div>
            <h1>Buy Phone {props.NumberOfPhones}</h1>
            <button onClick={props.BuyPhone}>Buy Phone</button>
            <BuyIceCream nop={props.NumberOfPhones}/>
        </div>
    )
}


//Action Creater
const buyPhone=()=>{
    //Action
    return{
        type:'BUY_PHONE'
    }
}


//Initial State for Reducer
const initialPhoneState={
    numOfPhones:30
}


//Reducer
const phoneReducer=(state=initialPhoneState,action)=>{
    switch (action.type) {
        case 'BUY_PHONE':
            return{
                ...state,
                numOfPhones:state.numOfPhones-1
            }
    
        default:
           return state
    }
}
export const PhoneStore=createStore(phoneReducer);
const mapStateToProps=state=>{
    return{
        NumberOfPhones:state.numOfPhones
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyPhone:()=>dispatch(buyPhone())
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(BuyPhone)
