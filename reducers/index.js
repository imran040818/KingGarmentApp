import { combineReducers, createStore, applyMiddleware } from "redux";
import {employeeReducer} from "./employeeReducer";
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    employeeReducer
});
export default rootReducers;

// const rootReducer = (state,action)=>{
//     return AppReducers(state,action);
// }

// let store = createStore(rootReducer,applyMiddleware(thunk))
// export default store;