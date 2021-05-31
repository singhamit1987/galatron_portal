const initialState = 0
export const quantitychanger = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREASE':
        return state + 1
        break;

        case 'DECREASE':
        return state - 1
        break;

        default:
        return state
    }
    
}