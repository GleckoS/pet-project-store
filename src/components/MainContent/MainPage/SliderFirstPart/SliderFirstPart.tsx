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
    @media (max-width: 1200px) {
        width: 940px;
        height: 465px;
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
`
const Link = styled(Button)`
    position: absolute;
    left: 95px;
    font-size: 16px;
    padding: 19px 26px;
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