import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import SliderDataReducer from "./SliderReducer"

let reducers = combineReducers({
    sliderReducer: SliderDataReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store