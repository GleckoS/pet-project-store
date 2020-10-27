import React from "react";
import PageTopInform from "../../../../common/components/PageTitle";
import Map from "./Map/Map";
import {PageContainer} from "../../../../common/selectors/StyledComponents";

const SiteMap = () => {

    const pageTitle = "Site Map"

    return(
        <PageContainer>
            <PageTopInform
                pageTitle={pageTitle}
                informTitle={null}
                informText={null}
            />
            <Map/>
        </PageContainer>
    )
}

export default SiteMap