import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from './CakeAction'
import {buyIceCream} from '../IceCram/IceCreamAction'
import {buyPhone} from '../Phone/PhoneAction'

function CakeOwnProps(props) {
    return (
        <div>
            <h1>Item {props.NumberOfCake}</h1>
            <button onClick={props.BuyCake} >buy Item</button>
        </div>
    )
}
// const mapStateToProps = (state,ownProps) => {
//     const Item=ownProps.cake ? state.cake.numOfCake : state.icecream.numOfIceCream
//     return {
//         NumberOfCake: Item
//     }
// } 
const mapStateToProps = (state, ownProps) => {
    switch (ownProps.NumberOfCake) {
        case "cake":
            return {
                NumberOfCake: state.cake.numOfCake
            };
        case "icecream":
            return {
                NumberOfCake: state.icecream.numOfIceCream
            };
        default:
            return {
                
                NumberOfCake: state.phone.numOfPhones
            }
        }
    // if (ownProps.cake) {
    //     return {
    //         NumberOfCake: state.cake.numOfCake
    //     }
    // }
    // else if (ownProps.icecream) {
    //     return {
    //         NumberOfCake: state.icecream.numOfIceCream
    //     }
    // }
    // else {
    //     return {
    //         NumberOfCake: state.phone.numOfPhones
    //     }

    // }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    switch (ownProps.NumberOfCake) {
        case "cake":
            return {
                BuyCake:()=>dispatch(buyCake())
            };
        case "icecream":
            return {
                BuyCake:()=>dispatch(buyIceCream())
            };
        default:
            return {
                
                BuyCake:()=>dispatch(buyPhone())
            }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeOwnProps)
