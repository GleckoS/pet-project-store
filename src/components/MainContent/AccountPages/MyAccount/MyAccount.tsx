import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import MyAccountMainPart from "./MyAccountMainPart/MyAccountMainPart";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const MyAccount = (props: any) => {

    const pageTitle = "Account"
    return (
        <>
            {props.isLogged
                ? <PageContainer>
                    <BreadCrumbs pageTitle={pageTitle}/>
                    <MyAccountMainPart/>
                </PageContainer>
                : <Redirect to="/login"/>
            }
        </>
    )
}

const MapStateToProps = (state: any) => {
    return{
        isLogged: state.loginReducer.isLogged,
        /*currentUser: state.loginReducer.currentUser*/
    }
}

export default connect(MapStateToProps, {})(MyAccount)