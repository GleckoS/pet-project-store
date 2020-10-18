import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'

const buttonText = "SHOP COLLECTION"

const SliderFirstPart = (props: any) => {
    const settings = {
        dots: true,
        arrows: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    }

    const DivSliderWrapper = styled.div`
    width: 1170px;
    height: 584px;
    border-radius: 10px;
    background-image: url( ${(props: { img: string }) => props.img});
`
    const DivMainPageInnerWrapper = styled.div`
    width: 1170px;
    margin: 0 auto;
`
    const H3SliderText = styled.h3`
    padding-top: 110px;
    padding-left: 60px;
    font-size: 60px;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    max-width: 400px;
    line-height: 60px;
`
    const ASliderButton = styled.a`
    padding: 19px 26px;
    margin-left: 60px;
    color: white;
    background-color: #E8CABA;
    border-radius: 5px;
        &:hover{
            background-color: #DBAD94;
        }
`

    return (
        <DivMainPageInnerWrapper>
            <Slider {...settings}>
                {props.SliderFirstPartData.map((dialog: { [key: string]: string }) =>
                    <DivSliderWrapper img={dialog.img}>
                        <H3SliderText>{dialog.text}</H3SliderText>
                        <ASliderButton href="#">{buttonText}</ASliderButton>
                    </DivSliderWrapper>
                )}
            </Slider>
        </DivMainPageInnerWrapper>
    )
}

export default SliderFirstPart