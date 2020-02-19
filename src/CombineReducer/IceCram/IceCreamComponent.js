import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from './IceCreamAction'
function BuyIceCream(props) {
    return (
        <div>
       
            <h1>Buy Phone from IceCream Component {props.NumberOfIceCream}</h1>
            <button onClick={props.BuyIceCream}>Buy IceCream</button>
    
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        NumberOfIceCream:state.icecream.numOfIceCream
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyIceCream:()=>(dispatch(buyIceCream()))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuyIceCream)
