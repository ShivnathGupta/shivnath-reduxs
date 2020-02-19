import React from 'react'
import {buyCake} from './cakeAction'
import {connect} from 'react-redux'

function store(props ) {
    return (
        <div>
            <h1>Number of Cakes{props.NumberOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps =state=>{
    return{
        NumberOfCake:state.numOfCake
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(store)
