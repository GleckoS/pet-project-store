import {combineReducers, createStore} from "redux";
import SliderFirstPartReducer from "./SlidersReducers/SliderFirstPartReducer";
import SliderSecondPartReducer from "./SlidersReducers/SliderSecondPartReducer";
import SliderThirdPartReducer from "./SlidersReducers/SliderThirdPartReducer";
import SliderFourthPartReducer from "./SlidersReducers/SliderFourthPartReducer";
import SliderFifthPartReducer from "./SlidersReducers/SliderFifthPartReducer";

let reducers = combineReducers({
    sFirstPartR: SliderFirstPartReducer,
    sSecondPartR: SliderSecondPartReducer,
    sThirdPartR: SliderThirdPartReducer,
    sFourthPartR : SliderFourthPartReducer,
    sFifthPartR: SliderFifthPartReducer
})

let store = createStore(reducers)



export default store