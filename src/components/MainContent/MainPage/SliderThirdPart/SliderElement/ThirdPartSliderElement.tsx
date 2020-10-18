import React from "react";
import styled from "@emotion/styled";

interface imgData {
    [key: string]: string
}

const DivSliderItem = styled.div`
    margin: 25px auto;
    height: 390px;
    width: 270px;
    display: flex!important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DivSliderImg = styled.div`
    align-self: center;
    margin: 0 auto;
    position: relative;
    width: 270px;
    height: 280px;
    background-image: url(${(props: imgData) => props.img});
    &:hover{
        background-image: url(${(props: imgData) => props.hover});
    }
`
const H3SliderText = styled.h3`
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
const H4SliderPrice = styled.h4`
    font-size: 14px;
    color: #000000;
    margin: 0 0 16px;
    line-height: 16px;
    font-weight: 400;
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
    border-radius: 10px;

`
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
const PAdditionalNEW = styled.p`
    position: absolute;
    top: 8px;
    transform: translateX(300%);
    font-size: 10px;
    background-color: #c8c8c8;
    padding: 3px; 
    border-radius: 3px;
    color: #ffffff;
`
const PAdditionalSALE = styled.p`
    position: absolute;
    top: 8px;
    transform: translateX(-300%);
    font-size: 10px;
    background-color: #c8c8c8;
    padding: 3px; 
    border-radius: 3px;
    color: #ffffff;
`


const ThirdPartSliderElement = (props: any) => {
    return (
        <DivSliderItem>
            <ASliderItemLink href="#">
                {props.new ? <PAdditionalNEW>NEW!</PAdditionalNEW> : null}
                {props.discount ? <PAdditionalSALE>SALE!</PAdditionalSALE> : null}
                <DivSliderImg img={props.img} hover={props.hoverImg}/>
            </ASliderItemLink>
            <H3SliderText>{props.text}</H3SliderText>
            <H4SliderPrice>{props.price}</H4SliderPrice>
            <ButtonSlider>SHOP NOW</ButtonSlider>
        </DivSliderItem>
    )
}

export default ThirdPartSliderElement