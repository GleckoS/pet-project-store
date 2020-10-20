import {combineReducers, createStore} from "redux";
import SliderFirstPartReducer from "./SlidersReducers/MainPageReducers/SliderFirstPartReducer";
import SliderSecondPartReducer from "./SlidersReducers/MainPageReducers/SliderSecondPartReducer";
import SliderThirdPartReducer from "./SlidersReducers/MainPageReducers/SliderThirdPartReducer";
import SliderFourthPartReducer from "./SlidersReducers/MainPageReducers/SliderFourthPartReducer";
import SliderFifthPartReducer from "./SlidersReducers/MainPageReducers/SliderFifthPartReducer";

let reducers = combineReducers({
    sFirstPartR: SliderFirstPartReducer,
    sSecondPartR: SliderSecondPartReducer,
    sThirdPartR: SliderThirdPartReducer,
    sFourthPartR : SliderFourthPartReducer,
    sFifthPartR: SliderFifthPartReducer
})

let store = createStore(reducers)



export default store