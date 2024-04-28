import { applyMiddleware, createStore } from "redux"
import {thunk }from "redux-thunk" // Correct import of thunk
import { rootReducer } from "../Reducer/reducer"

export const store = createStore(rootReducer, applyMiddleware(thunk))
