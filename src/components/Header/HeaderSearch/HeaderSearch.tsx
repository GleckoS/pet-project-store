import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";

const Wrapper = styled.section`
    padding-top: 6px;
    padding-bottom: 5px;
    margin-bottom: 24px;
    background: #f6f6f6;
    font-size: 11px;
    line-height: 16px;
`
const Container = styled(PageContainer)`
    display: flex;
    justify-content: space-between;
`

const HeaderSearch = (props: any) => {
    return(
        <div>
            <props.SectionContainer>
            </props.SectionContainer>
        </div>
    )
}

export default HeaderSearch