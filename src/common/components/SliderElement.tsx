import React from "react";
import styled from "@emotion/styled";
import { Button } from "../selectors/StyledComponents";



interface imgData {
    [key: string]: any
}

const newText = "NEW!",
    saleText = "SALE!"


const ThirdPartSliderElement = (props: any) => {

    const SliderItem = styled.div`
    margin: 25px auto;
    height: 390px;
    width: 270px;
    display: flex!important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
    const SliderImg = styled.div`
    align-self: center;
    margin: 0 auto;
    position: relative;
    width: 270px;
    height: 280px;
    background-image: url(${(props: imgData) => props.img});
    opacity: 0.9;
    border-radius: 10px;
    z-index: 0;      
    &:hover{
            background-image: url(${(props: imgData) => props.hover});
            background-color: #dddddd;
        }
`

    const SliderItemLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    margin: 10px;
    transition: .3s linear;
    border-radius: 10px;
    position: relative;
    &:hover{
        & > div{
            opacity: 1;
        }
    }
`
    const SliderText = styled.h3`
    font-size: 16px;
    color: #000000;
    letter-spacing: .7px;
    position: relative;
    margin: 0 0 9px;
    transition: .3s linear;
      &:hover{
         color: #E8CABA;
      }  
`
    const SliderPrice = styled.h4`
    font-size: 14px;
    color: #000000;
    margin: 0 0 16px;
    line-height: 16px;
    font-weight: 400;
`

    const AdditionalNEW = styled.p`
    position: absolute;
    top: 8px;
    transform: translateX(300%);
    font-size: 10px;
    background-color: #c8c8c8;
    padding: 3px; 
    border-radius: 3px;
    color: #ffffff;
    z-index: 3;
`
    const AdditionalSALE = styled.p`
    position: absolute;
    top: 8px;
    transform: translateX(-300%);
    font-size: 10px;
    background-color: #c8c8c8;
    padding: 3px; 
    border-radius: 3px;
    color: #ffffff;
    z-index: 3;
`
    const AdditionalButtons = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 12px;
    right: 25px;
    width: 22px;
    line-height: 22px;
    transition: .5s all ease;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    & button{
        border-radius: 50%;
        margin: 5px;
        border: none;
        background-color: #f7f7f7;
        cursor: pointer;
        pointer-events: auto;
    }
    &:hover + div{
            background-image: url(${(props: imgData) => props.hover});
            background-color: #dddddd;
        }
`
    const Alert = () => {
        alert("!")
    }

    return (
        <SliderItem>
            <SliderItemLink href="#">
                {props.new ? <AdditionalNEW>{newText}</AdditionalNEW> : null}
                {props.discount ? <AdditionalSALE>{saleText}</AdditionalSALE> : null}
                <AdditionalButtons img={props.img} hover={props.hoverImg}>
                    <button onClick={Alert}>Л</button>
                    <button onClick={Alert}>С</button>
                    <button onClick={Alert}>К</button>
                </AdditionalButtons>
                <SliderImg img={props.img} hover={props.hoverImg}/>
            </SliderItemLink>
            <SliderText>{props.text}</SliderText>
            <SliderPrice>{props.price}</SliderPrice>
            <Button to="#">SHOP NOW</Button>
        </SliderItem>
    )
}

export default ThirdPartSliderElement