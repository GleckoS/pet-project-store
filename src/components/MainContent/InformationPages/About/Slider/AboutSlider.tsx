import React from "react";
import {MainTitle, PseudoTitle} from "../../../../../common/selectors/StyledComponents";
import Slider from "react-slick";

const AboutSlider = (props: any) => {
    const settings = {
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: false
    }
    return (
        <>
            <MainTitle>{props.fourthTitle}</MainTitle>
            <Slider {...settings}>
                {props.commentarySlider.map((item: { [key: string]: string }) =>
                    <props.SliderItem>
                        <props.Commentary src={item.Img}/>
                        <PseudoTitle>{item.Title}</PseudoTitle>
                        <props.AboutText>
                            {item.Text}
                        </props.AboutText>
                    </props.SliderItem>
                )
                }
            </Slider>
        </>
    )
}

export default AboutSlider