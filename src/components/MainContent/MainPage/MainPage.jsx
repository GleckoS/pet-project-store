import React from "react";
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderThirdPart from "./SliderThirdPart/SliderThirdPart";
import SliderFourthPart from "./SliderFourthPart/SliderFourthPart";

const MainPage = (props) => {
    return (
        <React.Fragment>
            <SliderFirstPart SliderFirstPartData={props.SliderFirstPartData}/>
            <SliderSecondPart SliderSecondPartData={props.SliderSecondPartData} />
            <SliderThirdPart SliderThirdPartData={props.SliderThirdPartData}/>
            <SliderFourthPart SliderFourthPartData={props.SliderFourthPartData}/>
        </React.Fragment>
    )
}
export default MainPage