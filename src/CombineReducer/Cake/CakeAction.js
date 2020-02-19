export const buyCake = (NumberOfCake=1) => {
    return {
        type: 'BUY_CAKE',
        payload:NumberOfCake
    }
}
