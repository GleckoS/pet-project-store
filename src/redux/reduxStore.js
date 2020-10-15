import {combineReducers, createStore} from "redux";
import SliderFirstPartReducer from "./SlidersReducers/SliderFirstPartReducer";
import SliderSecondPartReducer from "./SlidersReducers/SliderSecondPartReducer";
import SliderThirdPartReducer from "./SlidersReducers/SliderThirdPartReducer";

let reducers = combineReducers({
    sFirstPartR: SliderFirstPartReducer,
    sSecondPartR: SliderSecondPartReducer,
    sThirdPartR: SliderThirdPartReducer
})

let store = createStore(reducers)



export default store