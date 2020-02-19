import React from 'react'
import {connect} from 'react-redux';
import {buyPhone} from './PhoneAction'

//Component
function BuyPhone(props) {
    return (
        <div>
            <h1>Buy Phone {props.NumberOfPhones}</h1>
            <button onClick={props.BuyPhone}>Buy Phone</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        NumberOfPhones:state.phone.numOfPhones
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyPhone:()=>dispatch(buyPhone())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuyPhone)
