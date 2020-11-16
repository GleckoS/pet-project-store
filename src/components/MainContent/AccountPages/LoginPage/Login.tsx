import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import {useForm} from "react-hook-form";
import Forms from "./LoginForm/LoginForm";

const Login = () => {

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

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: { [key: string]: string }) => console.log(data);

    return (
        <PageContainer>
            <BreadCrumbs pageTitle={pageTitle}/>
            <Forms
                left={leftPart}
                right={rightPart}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            />
        </PageContainer>
    )
}

export default Login