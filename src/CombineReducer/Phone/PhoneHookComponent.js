import React from 'react'
import { buyPhone } from './PhoneAction'
import { useSelector, useDispatch } from 'react-redux'

function PhoneHookComponent() {
    const phone = useSelector(state => state.phone.numOfPhones)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>PhoneHookComponent</h1>
            <h2>Number of Phones{phone}</h2>
            <button onClick={() => dispatch(buyPhone())}>Buy Phones</button>
        </div>
    )
}

export default PhoneHookComponent
