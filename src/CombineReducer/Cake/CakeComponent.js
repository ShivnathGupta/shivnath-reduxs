import React from 'react'
import { buyCake } from './CakeAction'
import { connect } from 'react-redux'
function store(props) {
    return (
        <div>
            <h2>Number of Cakes {props.NumberOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        NumberOfCake: state.cake.numOfCake
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(store)
