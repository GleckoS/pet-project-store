import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {AiFillHome} from "react-icons/all";

const BreadCrumbs = (props: any) => {

    const PageDirectionContainer = styled.div`
    text-align: left;
    & a{
        color: black;
    }
`
    const PageDirection = styled.p`
    font-size: 12px;
    color: #444;
`
    const PageHome = styled(NavLink)`
    &:hover{
        color: #DBAD94;
    }
`
    return(
        <PageDirectionContainer>
            <PageDirection>
                <PageHome to="/"><AiFillHome/></PageHome>{"  >  "}<strong>{props.pageTitle}</strong>
            </PageDirection>
        </PageDirectionContainer>
    )
}

export default BreadCrumbs