import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {NavLink} from "react-router-dom";

const Wrapper = styled.section`
    padding: 6px 10px 5px;
    margin-bottom: 24px;
    background: #f6f6f6;
    font-size: 11px;
    line-height: 16px;
    @media(max-width: 764px){
    margin-bottom: 12px;
    
    }
`
const Container = styled(PageContainer)`
    display: flex;
    justify-content: space-between;
`
const Item = styled.span`
    padding: 0 0 0 20px;
    a{
       color: #000000; 
       &:hover{
          color: #E8CABA;
       }
    }
`
const PhoneInf = styled.span`
    @media(max-width: 764px){
        display: none;
    }
`
const PhoneLink = styled.a`
    color: #000000;
    font-size: 14px;
    :hover{
          color: #E8CABA;
    }
`

const HeaderInform = () => {
    return(
        <Wrapper>
            <Container>
                <div>
                    <span>
                        <PhoneInf>24/7  CUSTOMER SERVICE   -</PhoneInf>
                        <PhoneLink href="tel:8001234567"> (800) 123-4567</PhoneLink>
                    </span>
                </div>
                <div>
                    <Item>ENGLISH</Item>
                    <Item>US Dollar</Item>
                    <Item><NavLink to="/my-account">My Account</NavLink></Item>
                    <Item><NavLink to="/wish">Wishlist</NavLink></Item>
                </div>
            </Container>
        </Wrapper>
    )
}

export default HeaderInform