import React from "react"
import styled from "@emotion/styled"
import {PageContainer} from "../../common/selectors/StyledComponents"
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderInform from "./HeaderInform/HeaderInform";


const Header = () => {

    const SectionContainer = styled(PageContainer)`

`

    return(
        <header>
            <HeaderInform
            />
            <HeaderSearch
                SectionContainer={SectionContainer}
            />
            <HeaderNav
                SectionContainer={SectionContainer}
            />
        </header>
    )
}

export default Header