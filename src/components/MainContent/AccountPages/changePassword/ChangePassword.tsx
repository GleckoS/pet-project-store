import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

const ChangePassword = (props: any) => {

    const pageTitle = "Change Password"

    const formData =
        [
            {
                label: "Password",
                name: "password"
            },
            {
                label: "Confirm",
                name: "passwordConfirm"
            }
        ]

    const { register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        //TODO: изменение пароля
        console.log(data);
    }

    return(
        <PageContainer>
            <BreadCrumbs pageTitle={pageTitle}/>
            <ChangePasswordForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </PageContainer>
    )
}


const MapStateToProps = () => {
    return{

    }
}

export default connect(MapStateToProps, {})(ChangePassword)