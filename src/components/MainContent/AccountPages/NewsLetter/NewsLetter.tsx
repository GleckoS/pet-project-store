import React, {useState} from "react";
import {connect} from "react-redux";
import PageTopInform from "../../../../common/components/PageTitle";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import NewsLetterForm from "./NewsLetterForm/NewsLetterForm";
import {useForm} from "react-hook-form";
import {Redirect} from "react-router-dom";
import {UpdateUserThunk} from "../../../../redux/LoginReducer";
import AccountBreadCrumbs from "../../../../common/components/AccountBreadCrumbs";

const pageTitle = "Newsletter"

const NewsLetter = (props: any) => {

    const {register, handleSubmit} = useForm();

    let [isConfirmed, setConfirmed] = useState(true)
    const onSubmit = (data: any) => {
        props.currentUser.newsletter = data.newsletter
        setConfirmed(false)
        props.UpdateUserThunk(props.currentUser)
    }

    return (
        <>
            {isConfirmed && props.isLogged
                ? <PageContainer>
                    <AccountBreadCrumbs
                        pageTitle={pageTitle}
                    />
                    <NewsLetterForm
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        currentUser={props.currentUser}
                    />
                </PageContainer>
                : <Redirect to="/login"/>
            }
        </>
    )
}

const MapStateToProps = (state: any) => {
    return {
        isLogged: state.loginReducer.isLogged,
        currentUser: state.loginReducer.currentUser
    }
}

export default connect(MapStateToProps, {UpdateUserThunk})(NewsLetter)