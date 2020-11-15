import React from "react"
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

export const Button = styled(NavLink)`
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 12px;
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
export const Text = styled.p`
    font-size: 14px;
    color: #4a4a4a;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: .4px;
    opacity: 0.8;
    padding-bottom: 10px;
`
export const PseudoTitle = styled.h6`
    font-size: 12px;
    font-weight: 500;
    opacity: 0.8;
`
export const MainTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
`
export const PageContainer = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
`