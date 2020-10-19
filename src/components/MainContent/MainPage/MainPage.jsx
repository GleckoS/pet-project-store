import React from "react";
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderFourthPart from "./SliderFourthPart/SliderFourthPart";
import SliderThirdPart from "./SliderThird_FifthPart/SliderThird_FifthPart";
import InformPart from "./InformPart/InformPart";


const MainPage = (props) => {
    return (
        <React.Fragment>
            <SliderFirstPart SliderFirstPartData={props.SliderFirstPartData}/>
            <SliderSecondPart SliderSecondPartData={props.SliderSecondPartData} />
            <SliderThirdPart SliderThirdPartData={props.SliderThirdPartData}/>
            <SliderFourthPart SliderFourthPartData={props.SliderFourthPartData}/>
            <SliderThirdPart SliderThirdPartData={props.SliderFifthPartData}/>
            <InformPart/>
        </React.Fragment>
    )
}
export default MainPage