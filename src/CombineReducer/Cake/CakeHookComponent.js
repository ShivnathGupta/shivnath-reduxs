import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './CakeAction'

function CakeHookComponent() {
    const numOfCakes = useSelector(state => state.cake.numOfCake);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Cake Hook Component</h1>
            <h2>Numbers of Cakes{numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default CakeHookComponent
