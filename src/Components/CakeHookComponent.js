import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {buyCake} from './cakeAction'

function CakeHookComponent() {
    const numOfCakes=useSelector(state=>state.numOfCake);
    const dispatch=useDispatch()
    return (
        <div>
        <h3>Numbers of Cakes{numOfCakes}</h3>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>            
        </div>
    )
}

export default CakeHookComponent
