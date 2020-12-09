import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {RiShoppingBagFill} from "react-icons/all";

const Wrapper = styled.section`
    display: none;
    height: 32px;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,.1);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    @media(max-width: 764px){
        display: block;
    }
`
const Container = styled(PageContainer)`
    display: flex;
    justify-content: space-between;
`
const Cart = styled.button`
    border: none;
    background-color: transparent;
    margin: 5px 15px 0 0;
    padding: 5px;
    &:hover{
        color: #E8CABA;
    }
`
const Nav = styled.button`
    border: none;
    background-color: transparent;
    margin: 5px 0 0 15px;
    padding: 5px;
`
const Burger = styled.span`
  position: absolute;
  top: 50%; 
  margin-top: -1px;
  left: 0; 
  margin-left: 15px;
  width: 20px;
  height: 2px;
  background-color: #222;
  &::after,
  &::before{
      position: absolute;
      top: 50%; margin-top: -1px;
      left: 50%; margin-left: -10px;
      width: 20px;
      height: 2px;
      background-color: #222;
      content: '';
      display: block;
      transition: 0.2s;
  }
  &::after{
      transform: translateY(-5px);
  }
  &::before{
      transform: translateY(5px); 
  }
`

const BurgerClick = () => {
    /*Доделать анимацию + выпадающую навигацию*/
}

const HeaderAltNav = () => {
    return(
        <Wrapper>
            <Container>
                <Nav><Burger/></Nav>
                <Cart><RiShoppingBagFill/></Cart>
            </Container>
        </Wrapper>
    )
}

export default HeaderAltNav