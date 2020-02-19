import React,{useState}  from 'react'
import {buyCake} from './CakeAction'
import { useSelector, useDispatch } from 'react-redux';

function CakeHookComponentUserDefine() {
    const numOfCakes = useSelector(state => state.cake.numOfCake);
    const dispatch = useDispatch()
    const [numberOfCake, setnumberOfCake] = useState(1)
    return (
        <div>
        <h1>Number of Cakes {numOfCakes}</h1>
        <input type="text" value={numberOfCake} onChange={(e)=>setnumberOfCake(e.target.value)} />
        <button onClick={()=>dispatch(buyCake(numberOfCake))}>Buy {numberOfCake} Cake</button>
        </div>
    )
}

export default CakeHookComponentUserDefine
