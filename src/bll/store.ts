import { applyMiddleware } from "redux";
import {combineReducers, createStore} from "redux";
import {LoginReducer} from "./LoginReducer";
import thunk from "redux-thunk";
import {PasswordRecReducer} from "./PassworRecReducer";
import {ProfileReducer} from "./ProfileReducer";
import Registration from "../pages/Registration/Registration";
import {EntNewPas} from "./EntNewPas";


const reducers = combineReducers({
    test:LoginReducer,
    passwordRec:PasswordRecReducer,
    profile: ProfileReducer,
    registration: Registration,
    entNewPas: EntNewPas
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev