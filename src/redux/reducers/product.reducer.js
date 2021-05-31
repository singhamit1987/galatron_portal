import { useSelector } from 'react-redux';
import { INCREASE_QTY, DECREASE_QTY } from '../type/product.types';

const initalQty = 1

export const IncreaseQtyReducer = (state = initalQty, action) => {
    switch(action.type) {
        case INCREASE_QTY:
            return action.payload + 1
            break;

        case DECREASE_QTY:
            if(action.payload > 1) {
                return action.payload - 1  
            } else {
                return state
            }
                   
            break;

        default:
            return state
    }
}