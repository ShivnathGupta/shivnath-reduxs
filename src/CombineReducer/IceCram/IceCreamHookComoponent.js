import React from 'react'
import { buyIceCream } from './IceCreamAction'
import { useSelector, useDispatch } from 'react-redux'

function IceCreamHookComoponent() {
    const iceCream = useSelector(state => state.icecream.numOfIceCream);
    const Dispacth = useDispatch();
    return (
        <div>
            <h1>IceCreamHookComoponent</h1>
            <h2>Number of Ice Cream{iceCream}</h2>
            <button onClick={() => Dispacth(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamHookComoponent
