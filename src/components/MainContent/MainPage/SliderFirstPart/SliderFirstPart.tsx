import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import {PageContainer} from "../../../../common/selectors/StyledComponents";

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
    max-width: 1170px;
    height: 584px;
    border-radius: 10px;
    background-image: url( ${(props: { img: string }) => props.img});
    background-size: cover;
    @media (max-width: 1200px) {
        width: 940px;
        height: 465px;
    }
`
const Wrapper = styled(PageContainer)`
`
const Text = styled.h3`
    padding-top: 110px;
    padding-left: 60px;
    font-size: 60px;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    max-width: 400px;
    line-height: 60px;
`
const Button = styled.a`
    padding: 19px 26px;
    margin-left: 60px;
    color: white;
    background-color: #E8CABA;
    border-radius: 5px;
        &:hover{
            background-color: #DBAD94;
        }
`

const SliderFirstPart = (props: any) => {
    return (
        <Wrapper>
            <Slider {...settings}>
                {props.SliderFirstPartData.map((dialog: { [key: string]: string }) =>
                    <SliderWrapper img={dialog.img}>
                        <Text>{dialog.text}</Text>
                        <Button href="#">{buttonText}</Button>
                    </SliderWrapper>
                )}
            </Slider>
        </Wrapper>
    )
}

export default SliderFirstPart