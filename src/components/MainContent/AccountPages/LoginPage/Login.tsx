import React from "react";
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import styled from "@emotion/styled";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";

const Login = () => {

    const pageTitle = "login"

    const leftTitle = "NEW CUSTOMER",
        leftSubTitle = "Register",
        leftText = "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        leftButtonText = "CONTINUE"

    const rightTitle = "RETURNING CUSTOMER",
        rightSubTitle = "I am a returning customer",
        rightFirstButton = "LOGIN",
        rightSecondButton = "Forgot password?",
        firstLabel = "E-mail",
        secondLabel = "Password"

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

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: { [key: string]: string }) => console.log(data);
    return (
        <PageContainer>
            <BreadCrumbs pageTitle={pageTitle}/>
            <FlexWrapper>
                <LeftPart>
                    <PartTitle>{leftTitle}</PartTitle>
                    <BorderText><strong>{leftSubTitle}</strong></BorderText>
                    <BorderText>{leftText}</BorderText>
                    <LeftPartButton to="/register">{leftButtonText}</LeftPartButton>
                </LeftPart>
                <RightPart>
                    <PartTitle>{rightTitle}</PartTitle>
                    <BorderText><strong>{rightSubTitle}</strong></BorderText>
                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <label>{firstLabel}</label>
                        <LoginInput placeholder="E-mail" name="E-mail" ref={register({required: true})}/>
                        <label>{secondLabel}</label>
                        <LoginInput placeholder="password" name="Password" ref={register({required: true})}/>
                        <RightPartButton to="/" type="submit">{rightFirstButton}</RightPartButton>
                        <NavLink to="/">{rightSecondButton}</NavLink>
                    </LoginForm>
                </RightPart>
            </FlexWrapper>
        </PageContainer>
    )
}

export default Login