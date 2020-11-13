import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import BreadCrumbs from "../../../../common/components/BreadCrubms";

const Login = () => {

    const pageTitle = "login"

    return(
        <PageContainer>
            <BreadCrumbs pageTitle={pageTitle}/>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </PageContainer>
    )
}

export default Login