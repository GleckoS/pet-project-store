import React from "react";
import style from "./MainPage.module.css"
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";

const MainPage = () => {
    return (
        <div className={style.d}>
            <SliderFirstPart />
            <SliderSecondPart />
        </div>
    )
}
export default MainPage