import React, {useState} from "react"
import {PageContainer} from "../../../../common/selectors/StyledComponents"
import PageTopInform from "../../../../common/components/PageTitle"
import {useForm} from "react-hook-form";
import styled from "@emotion/styled";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {connect} from "react-redux";
import {RegisterThunk, SetUsersThunk} from "../../../../redux/LoginReducer";
import {Redirect} from "react-router-dom";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import MyAccountMainPart from "../MyAccount/MyAccountMainPart/MyAccountMainPart";
import AccountBreadCrumbs from "../../../../common/components/AccountBreadCrumbs";

const Registration = (props: any) => {

    const pageTitle = "Register"

    const legend =
        {
            first: "Your Personal Details",
            second: "Your Password",
            third: "Newsletter"
        }

    const firstPartData =
        [
            {
                label: "First Name",
                name: "firstName",
                alertText: "First Name must be between 1 and 32 characters!",
                rules:
                    [
                        {
                            required: true,
                            minLength: 1,
                            maxLength: 32
                        }
                    ]
            },
            {
                label: "Last Name",
                name: "lastName",
                alertText: "Last Name must be between 1 and 32 characters!",
                rules:
                    [
                        {
                            required: true,
                            minLength: 1,
                            maxLength: 32
                        }
                    ]
            },
            {
                label: "E-Mail",
                name: "email",
                alertText: "E-Mail Address does not appear to be valid!",
                rules:
                    [
                        {
                            required: true,
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                        }
                    ]
            },
            {
                label: "Telephone",
                name: "phoneNumber",
                alertText: "Telephone must be between 3 and 32 characters!",
                rules:
                    [
                        {
                            required: true,
                            minLength: 3,
                            maxLength: 32
                        }
                    ]
            }
        ]

    const secondPartData =
        [
            {
                label: "Password",
                name: "password",
                alertText: "Password must be between 4 and 20 characters!",
                rules:
                    [
                        {
                            required: true,
                            minLength: 4,
                            maxLength: 20
                        }
                    ]
            },
            {
                label: "Confirm",
                name: "passwordConfirm",
                alertText: "Password confirmation does not match password!",
                rules:
                    [
                        {
                            validate: (value: string) => value === watch('password')
                        }
                    ]
            }
        ]

    const {register, handleSubmit, errors, watch} = useForm();
    let [isRegister, setRegister] = useState(false)

    const onSubmit = (data: any) => {
        /*Проверка на уникальность Email  (Вместо back-end)*/
        let isUnique = true
        for(let i = 0; i < props.userList.length; i++){
            debugger
            if(data.email === props.userList[i].email){
                isUnique = false
                break
            }
        }
        if(isUnique){
            props.RegisterThunk(data)
            props.SetUsersThunk()
            setRegister(true)
        } else{
            alert("Такой пользователь уже зарегистрирован!")
        }
        //TODO: Решить проблему с валидацией
    }

    return (
        <>
            {props.isLogged || isRegister
                ? <Redirect to="/my-account"/>
                : <PageContainer>
                    <AccountBreadCrumbs pageTitle={pageTitle}/>
                    <RegistrationForm
                        legend={legend}
                        firstPartData={firstPartData}
                        secondPartData={secondPartData}
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        onSubmit={onSubmit}
                    />
                </PageContainer>
            }
        </>
    )
}

const mapStateToProps = (state: any) => {
    return{
        isLogged: state.loginReducer.isLogged,
        userList: state.loginReducer.userList
    }
}

export default connect(mapStateToProps,{RegisterThunk, SetUsersThunk})(Registration)
