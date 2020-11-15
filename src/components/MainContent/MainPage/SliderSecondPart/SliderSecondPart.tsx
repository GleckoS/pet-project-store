import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { Button } from "../../../../common/selectors/StyledComponents";

const buttonText = "SHOP NOW"

const SliderSecondPart = (props: any) => {
    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const DivMainPageInnerWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 5px;
    @media (max-width: 1200px) {
        width: 940px;
    }
`
    const DivSliderItem = styled.div`
    height: 380px;
    max-width: 100%;
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
      max-width: 40px;
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
    &:hover{
        & h3{
             color: #E8CABA;
             &::after{
                max-width: 60px;
                height: 2px;
                transition: .3s linear;
             }
        }
    }
    
`
    return (
        <DivMainPageInnerWrapper>
            <Slider {...settings}>
                {props.SliderSecondPartData.map((dialog: { [key: string]: string }) =>
                    <DivSliderItem>
                        <ASliderItemLink href="#">
                            <ImgSlider src={dialog.img}/>
                            <H3SliderText>{dialog.text}</H3SliderText>
                            <Button to="/">{buttonText}</Button>
                        </ASliderItemLink>
                    </DivSliderItem>
                )}
            </Slider>
        </DivMainPageInnerWrapper>
    )
}

export default SliderSecondPart