import React,{useState} from 'react'
import {buyCake} from './CakeAction'
import {connect} from 'react-redux'

function CakeComponentUserDefine(props) {
    const [numberOfCake, setnumberOfCake] = useState(1)
    return (
        <div>
        <h1>Number of Cakes{props.NOC}</h1>
        <input type="text" value={numberOfCake} onChange={(e)=>setnumberOfCake(e.target.value)} />
        <button onClick={()=>props.buyCake(numberOfCake)}>Buy {numberOfCake} Cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        NOC: state.cake.numOfCake
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (NumOfCake) => {
            dispatch(buyCake(NumOfCake))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponentUserDefine)
