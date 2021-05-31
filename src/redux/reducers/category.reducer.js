import * as actions from '../type/category.types'

const initialState = {
    category: null
};

export const getCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ALL_PRODUCTS:
            return {
                ...state,
                category: null,
            };

        case actions.PRODUCT_BY_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };

        default:
            return state
    }
}

