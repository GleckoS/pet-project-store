import React from "react";
import style from "./MainPage.module.css"
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderThirdPart from "./SliderThirdPart/SliderThirdPart";

const MainPage = (props) => {
    return (
        <div className={style.d}>
            <SliderFirstPart SliderFirstPartData={props.SliderFirstPartData}/>
            <SliderSecondPart SliderSecondPartData={props.SliderSecondPartData} />
            <SliderThirdPart SliderThirdPartData={props.SliderThirdPartData}/>
        </div>
    )
}
export default MainPage