import React from "react";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";

const formTitle = "Subscribe",
    yes = "Yes",
    no = "No",
    next = "CONTINUE",
    back = "BACK"

const RadioContainer = styled.div`
    display: flex;
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 14px 0;
`
const Title = styled.label`
    padding: 0 40px;
`
const Continue = styled.button`
    color: #ffffff;
    background-color: #E8CABA;
    border: none;
    border-radius: 4px;
    padding: 9px 21px 8px;
    font-weight: 600;
    &:hover{
        background-color: #dbad94;
    }
`
const Back = styled(NavLink)`
    color: #ffffff;
    background-color: #2b2b2b;
    border-radius: 4px;
    padding: 9px 21px 8px;
    font-weight: 600;
    &:hover{
        background-color: #000000;
    }
`

const NewsLetterForm = (props: any) => {

    const {register, handleSubmit, onSubmit, currentUser} = props

    let first = false,
        second = false
    debugger
    if(currentUser.newsletter == 1){
        first = true
    } else{
        second = true
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RadioContainer>
                <Title>{formTitle}</Title>
                <div>
                    <input name="newsletter" type="radio" value="1" ref={register} defaultChecked={first}/>
                    <label>{yes}</label>
                    <input name="newsletter" type="radio" value="0" ref={register} defaultChecked={second}/>
                    <label>{no}</label>
                </div>
            </RadioContainer>
            <ButtonsContainer>
                <Back to="/my-account">{back}</Back>
                <Continue type="submit">{next}</Continue>
            </ButtonsContainer>
        </form>
    )
}

export default NewsLetterForm