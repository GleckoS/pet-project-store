import React from "react";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import {connect} from "react-redux";
import {LogInThunk} from "../../../../redux/LoginReducer";
import {Redirect} from "react-router-dom";
import WishTable from "./WishTable/WishTable";

const pageTitle = "Wish List"

const WishList = (props: any) => {
    return (
        <>
            <PageContainer>
                <BreadCrumbs pageTitle={pageTitle}/>
                <WishTable/>
            </PageContainer>
            {/*{props.isLogged
                ? <Redirect to="/my-account"/>
                : <PageContainer>
                    <BreadCrumbs pageTitle={pageTitle}/>
                </PageContainer>
            }*/}
        </>
    )
}

const MapStateToProps = (state: any) => {
    return {
        isLogged: state.loginReducer.isLogged,
    }
}

export default connect(MapStateToProps, {})(WishList)