import React from "react";
import {MainTitle, PseudoTitle, Text} from "../../../../../common/selectors/StyledComponents";
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
                        <Text>
                            {item.Text}
                        </Text>
                    </props.SliderItem>
                )
                }
            </Slider>
        </>
    )
}

export default AboutSlider