import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {Images} from "../../../common/textConst/images";

const Wrapper = styled.section`
    margin-bottom: 24px;
    padding: 0 10px 0;
    @media(max-width: 764px){
        height: 180px;
    }
`
const Section = styled(PageContainer)`
    height: 55px;
`
const Logo = styled.h1`
    float: left;
    text-align: left;
    margin: 0;
    width: 285px;
    padding: 0 15px 0 0;
    @media (max-width: 988px) {
        width: auto;
    }
    @media(max-width: 764px){
        float: none;
        width: 175px;
        margin: 0 auto;
    }
`
const Search = styled.div`
    float: left;
    position: relative;
    width: 509px;
    @media (max-width: 1196px) {
        width: 278px;
    }
    @media (max-width: 988px) {
        width: 182px;
    }
    @media(max-width: 764px){
        float: none;
        width: calc(100% - 48px);
        margin-top: 9px;
    }
`
const Input = styled.input`
    width: calc(100% - 60px);
    display: inline-block;
    color: #7f8187;
    padding: 20.5px 35px 20.5px 25px;
    border: none;
    border-radius: 6px;
    background-color: #f6f6f6;
    font: 300 12px/16px "Hind",sans-serif;
    &:focus{
        box-shadow: 0 0 3px 3px rgba(0,0,0,.075);
    }
    @media(max-width: 764px){
        float: none;
        width: 100%;
        padding: 10px 30px 10px 18px;
    }
   
`
const Button = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    padding: 20px 10px;
    cursor: pointer;
`
const ButtonImg = styled.img`
    width: 14px;
    background-color: transparent;   
`
const Other = styled.div`
    float: left;
    text-align: left;
    @media(max-width: 764px){
        float: none;
        display: flex;
        flex-direction: column;
    }
`
const Shipping = styled(NavLink)`
    display: inline-block;
    position: relative;
    width: 107px;
    height: 36px;
    margin-left: 18px;
    border-radius: 4px;
    padding: 14px 15px 5px 40px;
    color: #fff;
    background: #e8caba;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .8px;
    font-weight: 700;
    &:hover{
        background-color: #DBAD94;
    }
    &::before{
        content: url(${Images.plane});
        position: absolute;
        left: -10px;
        bottom: -6px;
        transform: scale(0.45) rotate(40deg);
    }
    @media (max-width: 988px) {
        width: 95px;
        letter-spacing: 0;
    }
    @media(max-width: 764px){
        font-weight: 800;
        float: none;
        margin: 9px auto 0;
        width: calc(100% - 55px);
        padding: 9px 5px 12px 7%;
        height: auto;
        letter-spacing: .8px;
        &::before{
            display: none;
        }
    }
`
const Deals = styled(NavLink)`
    display: inline-block;
    position: relative;
    width: 107px;
    height: 36px;
    margin-left: 18px;
    border-radius: 4px;
    padding: 14px 15px 5px 40px;
    color: #fff;
    background: #e8caba;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .8px;
    font-weight: 700;
    &:hover{
        background-color: #DBAD94;
    }
    &::before{
        content: url(${Images.star});
        position: absolute;
        left: -25px;
        bottom: -22px;
        transform: scale(0.25);
    }
    @media (max-width: 988px) {
        width: 95px;
    }
    @media(max-width: 764px){
        float: none;
        margin: 9px auto 0;
        width: calc(100% - 55px);
        padding: 9px 5px 12px 7%;
        height: auto;
        letter-spacing: .8px;
        font-weight: 800;
        &::before{
            display: none;
        }
    }
`

const HeaderSearch = () => {
    return (
        <Wrapper>
            <Section>
                <Logo>
                    <NavLink to="/"><img alt="logo"
                                         src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/logo-175x47.png"/></NavLink>
                </Logo>
                <Search>
                    <Input placeholder="I am looking for..."/>
                    <Button><ButtonImg alt="search button" src={Images.search2}/></Button>
                </Search>
                <Other>
                    <Deals to="/deals">
                        Daily Deals & Offers
                    </Deals>
                    <Shipping to="/delivery">
                        Free Shipping WORLDWIDE
                    </Shipping>
                </Other>
            </Section>
        </Wrapper>
    )
}
export default HeaderSearch
