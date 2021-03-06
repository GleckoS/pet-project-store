import React from "react"
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

export const Button = styled(NavLink)` /*link*/
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
    @media (max-width: 1196px) {
        max-width: 970px;
    }
    @media (max-width: 988px) {
        max-width: 750px;
    }
    @media (max-width: 764px) {
        width: 100%;
        padding: 0;
    }
`
export const SubmitButton = styled.button`
    background-color: #E8CABA;
    border: none;
    border-radius: 6px;
    padding: 10px;
    margin: 15px 0;
    text-align: center;
    width: 100px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    &:hover{
        background-color: #DBAD94;
    }
`
export const RegistrationInput = styled.input`
    width: 100%;
    display: inline-block;
    color: #7f8187;
    height: 35px;
    padding: 5.5px 10px 5.5px 33px;
    border: none;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 4px;
    &:focus{
        box-shadow: 0 0 3px 3px rgba(0,0,0,.05);
    }
`
export const FormInputWrapper = styled.div`
    display: flex;
    & div{
            width: 85%;
    }
`
export const InputLabel = styled.label`
    width: 20%;
    line-height: 66px;
    &::after{
        content: "*";
        color: red;
    }
`
export const ErrorMessage = styled.span`
    color: red;
`
