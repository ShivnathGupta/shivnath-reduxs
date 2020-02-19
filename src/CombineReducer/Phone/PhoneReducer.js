
//Initial State for Reducer
const initialPhoneState={
    numOfPhones:30
}

//Reducer
const phoneReducer=(state=initialPhoneState,action)=>{
    switch (action.type) {
        case 'BUY_PHONE':
            return{
                ...state,
                numOfPhones:state.numOfPhones-1
            }
    
        default:
           return state
    }
}

export default phoneReducer;