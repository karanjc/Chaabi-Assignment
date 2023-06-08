import {combineReducers, createStore} from "redux"
import { AppReducer } from "./AppReducer"
import { AuthReducer } from "./AuthReducer"


const store=createStore(combineReducers({AuthReducer,AppReducer}))

export {store}