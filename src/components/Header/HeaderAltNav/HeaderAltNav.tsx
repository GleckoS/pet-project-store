import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";

const Wrapper = styled.section`
    display: none;
    height: 32px;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,.1);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    @media(max-width: 764px){
        display: block;
    }
`
const Container = styled(PageContainer)`
`

const HeaderAltNav = () => {
    return(
        <Wrapper>
            <Container>
awed
            </Container>
        </Wrapper>
    )
}

export default HeaderAltNav