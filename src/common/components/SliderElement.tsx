import React, {useState} from "react";
import styled from "@emotion/styled";
import {Button} from "../selectors/StyledComponents";
import {Images} from "../textConst/images";
import {Redirect} from "react-router-dom";


interface imgData {
    [key: string]: any
}

const newText = "NEW!",
    saleText = "SALE!"


const ThirdPartSliderElement = (props: any) => {

    const Item = styled.div`
    margin: 25px auto;
    height: 390px;
    width: 270px;
    display: flex!important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 988px){
        width: 220px;
    }
`
    const Img = styled.div`
    align-self: center;
    margin: 0 auto;
    position: relative;
    width: 270px;
    height: 280px;
    background-image: url(${(props: imgData) => props.img});
    background-position: center;
    opacity: 0.9;
    border-radius: 10px;
    z-index: 0;      
    &:hover{
            background-image: url(${(props: imgData) => props.hover});
            background-color: #dddddd;
    }
    @media(max-width: 988px) and (min-width: 481px){
        width: 220px;
    }
`

    const Link = styled.div`
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
    const Text = styled.h3`
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
    const Price = styled.h4`
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
    @media(max-width: 988px) and (min-width: 481px){
         left: 40px;
         line-height: 25px;
         padding: 0 7px;
    }
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
    @media(max-width: 988px) and (min-width: 481px){
         right: 40px;
         line-height: 25px;
         padding: 0 7px;
    }
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
    &:hover + div{
            background-image: url(${(props: imgData) => props.hover});
            background-color: #dddddd;
    }
`
    const AddButton = styled.button`
    border-radius: 50%;
    margin: 5px;
    border: none;
    background-color: #f7f7f7;
    cursor: pointer;
    pointer-events: auto;
    width: 26px;
    height: 26px;
    padding: 0;
    position: relative;
    &:hover{
        background-color: #ededed;
    }
`
    const Icon = styled.img`
    width: 14px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
`
    let [isRegister, setRegister] = useState(false)

    const WishAdd = () => {
        debugger
        props.isLogged ? props.currentUser.wish.push(props.item) : setRegister(true)
    }
    const Zoom = () => {

    }
    const Compare = () => {

    }

    return (
        <>
            {isRegister
                ? <Redirect to="/login"/>
                : <Item>
                    <Link>
                        {props.item.new ? <AdditionalNEW>{newText}</AdditionalNEW> : null}
                        {props.item.discount ? <AdditionalSALE>{saleText}</AdditionalSALE> : null}
                        <AdditionalButtons img={props.item.img} hover={props.item.hoverImg}>
                            <AddButton onClick={WishAdd}><Icon src={Images.emptyHearth}/></AddButton>
                            <AddButton onClick={Zoom}><Icon src={Images.zoom}/></AddButton>
                            <AddButton onClick={Compare}><Icon src={Images.doubleArrows}/></AddButton>
                        </AdditionalButtons>
                        <Img img={props.item.img} hover={props.item.hoverImg}/>
                    </Link>
                    <Text>{props.item.text}</Text>
                    <Price>{props.item.price}</Price>
                    <Button to="#">SHOP NOW</Button>
                </Item>
            }
        </>

    )
}

export default ThirdPartSliderElement