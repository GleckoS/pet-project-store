import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";
import MyAccountMainPart from "./MyAccountMainPart/MyAccountMainPart";

const MyAccount = () => {

    const pageTitle = "My Account"

    return(
        <PageContainer>
            <BreadCrumbs pageTitle={pageTitle}/>
            <MyAccountMainPart/>
        </PageContainer>
    )
}

export default MyAccount