import { combinedReducer, createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import thunk from "redux-thunk";

const enhanceComposers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        enhanceComposers(applyMiddleware(thunk))
    );

    return store;
};