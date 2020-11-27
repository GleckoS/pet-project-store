import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import {useForm} from "react-hook-form";
import Forms from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {LogInThunk} from "../../../../redux/LoginReducer";
import {Redirect} from "react-router-dom"

const pageTitle = "login"

const leftPart =
    {
        title: "NEW CUSTOMER",
        subTitle: "Register",
        text: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        buttonText: "CONTINUE"
    }

const rightPart =
    {
        title: "RETURNING CUSTOMER",
        subTitle: "I am a returning customer",
        firstButton: "LOGIN",
        secondButton: "Forgot password?",
        firstLabel: "E-mail",
        secondLabel: "Password"
    }

const Login = (props: any) => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: { [key: string]: string }) => {
        let arrLength = props.userList.length
        let loginTrue = false
        let passTrue = false
        let email = null
        let id = 0
        for (let i = 0; i < arrLength; i++) {

            if (data.email === props.userList[i].email) {
                loginTrue = true
            }
            if (loginTrue) {
                if (data.password === props.userList[i].password) {
                    passTrue = true
                    id = props.userList[i].id
                    email = props.userList[i].email
                    break
                }
                break
            }
        }
        if (loginTrue && passTrue) {
            props.LogInThunk(email, data.password, id)
        } else {
            alert("Введён неправильный логин или пароль!")
        }
    }
    return (
        <>
            {props.isLogged
                ? <Redirect to="/my-account"/>
                : <PageContainer>
                    <BreadCrumbs pageTitle={pageTitle}/>
                    <Forms
                        left={leftPart}
                        right={rightPart}
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                    />
                </PageContainer>
            }
        </>
    )
}

const MapStateToProps = (state: any) => {
    return {
        isLogged: state.loginReducer.isLogged,
        userList: state.loginReducer.userList
    }
}

export default connect(MapStateToProps, {LogInThunk})(Login)