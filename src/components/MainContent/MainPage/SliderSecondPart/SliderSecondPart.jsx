import React from "react";
import style from "./SliderSecondPart.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const SliderSecondPart = (props) => {
    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false
    };

    const DivMainPageInnerWrapper = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding-top: 5px;
`
    const DivSliderItem = styled.div`
    height: 380px;
    width: 270px;
`
    const ImgSlider = styled.img`
    align-self: center;
    margin: 0 auto;
`
    const H3SliderText = styled.h3`
    font-size: 16px;
    color: #000000;
    letter-spacing: .7px;
    position: relative;
    margin-bottom: 40px;
    transition: .3s linear;
      &::after{
        position: absolute;
      content: "";
      width: 40px;
      height: 2px;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: -10px;
      background-color: #E8CABA;
      transition: .3s linear;
      }
`
    const ASliderItemLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    margin: 10px;
    padding-top: 10px;
    transition: .3s linear;
       &:hover > ${H3SliderText} {
          color: #E8CABA;
       }
`
    /*Решение верхней проблемы*/

    const ButtonSlider = styled.button`
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: 600;
    background-color: #E8CABA;
    padding: 7px 20px;
    border-radius: 4px;
    transition: .3s linear;
    cursor: pointer;
    margin-bottom: 40px;
      &:hover{
        background-color: #DBAD94;
      }
    
`


    return (
        <DivMainPageInnerWrapper>
            <Slider {...settings}>
                {props.SliderSecondPartData.map(dialog =>
                    <DivSliderItem>
                        <ASliderItemLink href="#">
                            <ImgSlider src={dialog.img}/>
                            <H3SliderText>{dialog.text}</H3SliderText>
                            <ButtonSlider href="#">SHOP NOW</ButtonSlider>
                        </ASliderItemLink>
                    </DivSliderItem>
                )}
            </Slider>
        </DivMainPageInnerWrapper>
    )
}

export default SliderSecondPart