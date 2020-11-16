import React from "react";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";
import {Button} from "../../../../../common/selectors/StyledComponents";

const LoginForm = (props: any) => {

    const FlexWrapper = styled.div`
    display: flex;
    text-align: left;
`
    const LeftPart = styled.div`
    width: 50%;
    padding: 30px;
    border: 1px solid #ddd;
    margin: 0 15px;
    position: relative;
`
    const RightPart = styled.div`
    width: 50%;
    padding: 30px;
    border: 1px solid #ddd;
    margin: 0 15px;
`
    const PartTitle = styled.h2`
    font-weight: 400;
    margin: 0 0 20px;
`
    const BorderText = styled.p`
    border-bottom: 1px solid #e8e8e8;
    padding: 30px 0;
    margin: 0;
    font-weight: 300;
    font-size: 18px;
`
    const LeftPartButton = styled(Button)`
    position: absolute;
    bottom: 10%;
`
    const RightPartButton = styled(Button)`
    margin: 15px 0;
    text-align: center;
    width: 100px;
`
    const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`
    const LoginInput = styled.input`
    width: 411px;
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

    return (
        <FlexWrapper>
            <LeftPart>
                <PartTitle>{props.left.title}</PartTitle>
                <BorderText><strong>{props.left.title}</strong></BorderText>
                <BorderText>{props.left.text}</BorderText>
                <LeftPartButton to="/register">{props.left.buttonText}</LeftPartButton>
            </LeftPart>
            <RightPart>
                <PartTitle>{props.right.title}</PartTitle>
                <BorderText><strong>{props.right.subTitle}</strong></BorderText>
                <LoginForm onSubmit={props.handleSubmit(props.onSubmit)}>
                    <label>{props.right.firstLabel}</label>
                    <LoginInput placeholder="E-mail" name="E-mail" ref={props.register({required: true})}/>
                    <label>{props.right.secondLabel}</label>
                    <LoginInput placeholder="password" name="Password" ref={props.register({required: true})}/>
                    <RightPartButton to="/" type="submit">{props.right.FirstButton}</RightPartButton>
                    <NavLink to="/">{props.right.SecondButton}</NavLink>
                </LoginForm>
            </RightPart>
        </FlexWrapper>
    )
}

export default LoginForm