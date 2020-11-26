import React from "react";
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderFourthPart from "./SliderFourthPart/SliderFourthPart";
import SliderThirdPart from "./SliderThird_FifthPart/SliderThird_FifthPart";
import InformPart from "./InformPart/InformPart";
import { useForm } from "react-hook-form";




const MainPage = (props: any) => {

    const { register, handleSubmit, errors, reset} = useForm();
    const onSubmit = (data: {email: string}) => {
        props.setNewsLetter({email: data.email})
        reset()
        alert("Вы успешно подписались!") // TODO: изменить на более приятный вид :)
    }
    return (

        <React.Fragment>
            <SliderFirstPart SliderFirstPartData={props.SlidersData.firstSlider}/>
            <SliderSecondPart SliderSecondPartData={props.SlidersData.secondSlider} />
            <SliderThirdPart SliderThirdPartData={props.SlidersData.thirdSlider}/>
            <SliderFourthPart SliderFourthPartData={props.SlidersData.fourthSlider}/>
            <SliderThirdPart SliderThirdPartData={props.SlidersData.fifthSlider}/>
            <InformPart onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors}/>
        </React.Fragment>
    )
}
export default MainPage