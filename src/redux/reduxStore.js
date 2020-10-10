import {combineReducers, createStore} from "redux";
import SliderFirstPartReducer from "./SlidersReducers/SliderFirstPartReducer";
import SliderSecondPartReducer from "./SlidersReducers/SliderSecondPartReducer";

let reducers = combineReducers({
    sFirstPartR: SliderFirstPartReducer,
    sSecondPartR: SliderSecondPartReducer
})

let store = createStore(reducers)



export default store