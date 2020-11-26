import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import SliderDataReducer from "./MainPageReducer"
import ItemsDataReducer from "./itemPageReducer"
import LoginReducer from "./LoginReducer";

let reducers = combineReducers({
    sliderReducer: SliderDataReducer,
    itemPageReducer: ItemsDataReducer,
    loginReducer: LoginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store