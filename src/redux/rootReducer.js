import { combineReducers } from "redux";
import { IncreaseQtyReducer } from './reducers/product.reducer';
import { getCategoryReducer } from './reducers/category.reducer';
import { changeLanguageReducer } from './reducers/language.reducer';

export const allReducers = combineReducers({
    IncreaseQtyReducer:IncreaseQtyReducer,
    getCategoryReducer:getCategoryReducer,
    changeLanguageReducer : changeLanguageReducer
})