const initialIceCreamState={
    numOfIceCream:50
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
   switch (action.type) {
       case 'BUY_ICECREAM':
           return {
                ...state,
                numOfIceCream:state.numOfIceCream-1
           }
       default:
           return state
   }

}
export default iceCreamReducer