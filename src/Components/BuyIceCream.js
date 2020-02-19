import React from 'react'
import {createStore} from 'redux'
import {connect} from 'react-redux'



function BuyIceCream(props) {
    return (
        <div>
        <hr />
            <h1>Buy Phone from IceCream Component {props.nop}</h1>
            <h1>Number of IceCream{props.NumberOfIceCream}</h1>
            <button onClick={props.BuyIceCream}>Buy IceCream</button>
        <hr/>
        </div>
    )
}
const buyIceCream = () => {
    return {
        type: 'BUY_ICECREAM'
    }
}
const initialIceCreamState={
    numOfIceCream:50
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
   switch (action.type) {
       case 'BUY_ICECREAM':
           return {
                ...state,
                numOfIceCream:state.numOfIceCream-1
           }
       default:
           return state
   }

}
export const IceCreamStore=createStore(iceCreamReducer)
const mapStateToProps=state=>{
    return{
        NumberOfIceCream:state.numOfIceCream
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyIceCream:()=>(dispatch(buyIceCream()))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuyIceCream)
