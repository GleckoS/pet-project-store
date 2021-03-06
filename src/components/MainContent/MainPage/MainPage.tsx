import React from "react";
import SliderFirstPart from "./SliderFirstPart/SliderFirstPart";
import SliderSecondPart from "./SliderSecondPart/SliderSecondPart";
import SliderFourthPart from "./SliderFourthPart/SliderFourthPart";
import SliderThirdPart from "./SliderThird_FifthPart/SliderThird_FifthPart";
import InformPart from "./InformPart/InformPart";
import { useForm } from "react-hook-form";




const MainPage = (props: any) => {


    let thirdSlider = props.items.filter((e: any) => e.id >= 0 && e.id < 5)
    let fifthSlider = props.items.filter((e: any) => e.id >= 5)

    const { register, handleSubmit, errors, reset} = useForm();
    const onSubmit = (data: {email: string}) => {
        props.setNewsLetter({email: data.email})
        reset()
        alert("Вы успешно подписались!") // TODO: изменить на более приятный вид :)
    }

    return (

        <React.Fragment>
            <SliderFirstPart SliderData={props.SlidersData.firstSlider}/>
            <SliderSecondPart SliderData={props.SlidersData.secondSlider} />
            <SliderThirdPart SliderData={thirdSlider} currentUser={props.currentUser} isLogged={props.isLogged}/>
            <SliderFourthPart SliderData={props.SlidersData.fourthSlider}/>
            <SliderThirdPart SliderData={fifthSlider} currentUser={props.currentUser} isLogged={props.isLogged}/>
            <InformPart onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors}/>
        </React.Fragment>
    )
}
export default MainPage