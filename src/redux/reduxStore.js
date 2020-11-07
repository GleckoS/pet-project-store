import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import SliderDataReducer from "./SliderReducer"
import ItemsDataReducer from "./itemPageReducer"

let reducers = combineReducers({
    sliderReducer: SliderDataReducer,
    itemPageReducer: ItemsDataReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store