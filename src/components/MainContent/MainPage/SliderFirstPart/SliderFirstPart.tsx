import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";

const buttonText = "SHOP COLLECTION"

const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
}

const SliderWrapper = styled.div`
    position: relative;
    max-width: 1170px;
    height: 584px;
    border-radius: 10px;
    background-image: url( ${(props: { img: string }) => props.img});
    background-size: cover;
    background-position: center;
    @media (max-width: 1196px) {
        max-width: 940px;
        height: 465px;
    }
    @media(max-width: 988px){
        max-width: 720px;
        height: 375px;
    }
    @media(max-width: 764px){
        width: calc(100% - 30px);
    }
    @media(max-width: 480px){
        height: 300px;
    }
`
const Wrapper = styled(PageContainer)`

`
const Text = styled.h3`
    text-align: left;
    padding-top: 110px;
    padding-left: 90px;
    font-size: 68px;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    max-width: 500px;
    line-height: 60px;
    margin-bottom: 30px;
    color: #000000;
    @media (max-width: 1196px) {
        padding: 60px 0 0 60px;
    }
    @media(max-width: 988px){
        font-size: 42px;
        line-height: 42px;
        max-width: 300px;
        margin-bottom: 20px;
    }
    @media(max-width: 764px){
        max-width: 100%;
        font-size: 34px;
        font-weight: 200;
        padding: 0;
        margin: 240px auto 0;
        text-align: center;
    }
    @media(max-width: 480px){
        font-size: 30px;
        letter-spacing: 0;
        margin: 170px auto 0;
    }
`
const Link = styled(Button)`
    position: absolute;
    left: 95px;
    font-size: 16px;
    padding: 19px 26px;
    @media(max-width: 1196px){
        left: 60px;    
    }
    @media(max-width: 988px){
        font-size: 14px;
        padding: 14px 21px;
    }
    @media(max-width: 764px){
        padding: 9px 16px;
        font-size: 12px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        bottom: 40px;
    }
`

const SliderFirstPart = (props: any) => {
    return (
        <Wrapper>
            <Slider {...settings}>
                {props.SliderData.map((dialog: { [key: string]: string }) =>
                    <SliderWrapper img={dialog.img}>
                        <Text>{dialog.text}</Text>
                        <Link to="#">{buttonText}</Link>
                    </SliderWrapper>
                )}
            </Slider>
        </Wrapper>
    )
}

export default SliderFirstPart