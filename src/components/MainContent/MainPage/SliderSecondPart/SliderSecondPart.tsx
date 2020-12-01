import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";
import {NavLink} from "react-router-dom";

const buttonText = "SHOP NOW"

const Wrapper = styled(PageContainer)`
    padding-top: 5px;
`
const Item = styled.div`
    height: 380px;
    width: 270px;
`
const Img = styled.img`
    align-self: center;
    margin: 0 auto;
    width: 220px;
`
const Text = styled.h3`
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
const Link = styled(NavLink)`
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
                width: 60px;
                height: 2px;
                transition: .3s linear;
             }
        }
    }
    
`
const Next = styled.div`
    padding: 10px;
    transition: .3s linear;
    position: absolute;
    top:  50%;
    right: 10px;
    opacity: 0;
    &::before{
        color: #DBAD94;
    }
    @media(max-width: 988px){
        opacity: 1;
    }
`
const Prev = styled.div`
    padding: 10px;
    transition: .3s linear;
    position: absolute;
    top: 50%;
    left: 10px;
    opacity: 0;
    &::before{
        color: #DBAD94;
        border-radius: 0;
    }
    @media(max-width: 988px){
        opacity: 1;
    }
`

function SampleNextArrow(props: any) {
    return (
        <Next className={props.className} onClick={props.onClick}/>
    )
}

function SamplePrevArrow(props: any) {
    return (
        <Prev className={props.className} onClick={props.onClick}/>
    )
}

const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
        {
            breakpoint: 1196,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 764,
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

const SliderSecondPart = (props: any) => {
    return (
        <Wrapper>
            <Slider {...settings}>
                {props.SliderData.map((dialog: { [key: string]: string }) =>
                    <Item>
                        <Link to={dialog.link}>
                            <Img src={dialog.img}/>
                            <Text>{dialog.text}</Text>
                            <Button to={dialog.link}>{buttonText}</Button>
                        </Link>
                    </Item>
                )}
            </Slider>
        </Wrapper>
    )
}

export default SliderSecondPart