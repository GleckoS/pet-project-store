import React from "react";
import styled from "@emotion/styled";
import Button from "../selectors/Button";


interface imgData {
    [key: string]: string
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
    &:hover{
        background-image: url(${(props: imgData) => props.hover});
        opacity: 1;
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

    return (
        <SliderItem>
            <SliderItemLink href="#">
                {props.new ? <AdditionalNEW>{newText}</AdditionalNEW> : null}
                {props.discount ? <AdditionalSALE>{saleText}</AdditionalSALE> : null}
                <SliderImg img={props.img} hover={props.hoverImg}/>
            </SliderItemLink>
            <SliderText>{props.text}</SliderText>
            <SliderPrice>{props.price}</SliderPrice>
            <Button href="#">SHOP NOW</Button>
        </SliderItem>
    )
}

export default ThirdPartSliderElement