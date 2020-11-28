import React from "react";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import WishTable from "./WishTable/WishTable";

const pageTitle = "Wish List"

const WishList = (props: any) => {
    return (
        <>
            {props.isLogged
                ? <PageContainer>
                    <BreadCrumbs pageTitle={pageTitle}/>
                    <WishTable
                        currentUser={props.currentUser}
                    />
                </PageContainer>
                : <Redirect to="/my-account"/>
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

export default connect(MapStateToProps, {})(WishList)