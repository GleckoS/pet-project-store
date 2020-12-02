import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import EditForm from "./EditForm/EditForm";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import AccountBreadCrumbs from "../../../../common/components/AccountBreadCrumbs";

const EditAccInform = (props: any) => {

    const pageTitle = "Edit Account Information"

    const formData =
        [
            {
                label: "First Name",
                name: "firstName",
                value: props.currentUser.firstName
            },
            {
                label: "Last Name",
                name: "lastName",
                value: props.currentUser.lastName
            },
            {
                label: "E-mail",
                name: "email",
                value: props.currentUser.email
            },
            {
                label: "Phone Number",
                name: "phoneNumber",
                value: props.currentUser.phoneNumber
            },
        ]

    const { register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        //TODO: изменение информации
        console.log(data);
    }

    return(
        <PageContainer>
            <AccountBreadCrumbs pageTitle={pageTitle}/>
            <EditForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </PageContainer>
    )
}

const MapStateToProps = (state: any) => {
    return{
        currentUser: state.loginReducer.currentUser
    }
}

export default connect(MapStateToProps, {})(EditAccInform)