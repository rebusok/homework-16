import { applyMiddleware } from "redux";
import {combineReducers, createStore} from "redux";
import {TestReducer} from "./testReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    test:TestReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev