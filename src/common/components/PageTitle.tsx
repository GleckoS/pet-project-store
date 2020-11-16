import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {Text} from "../selectors/StyledComponents";

const PageTopInform = (props: any) => {

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
    const PageTitleWrapper = styled.div`
    text-align: center;
    padding-bottom: 40px;
`
    const PageTitleBox = styled.h1`
    font-size: 28px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #dddddd;
        bottom: -20px;
        left:0;
    }
`
    const H2 = styled.h2`
    font-weight: 300;
    font-size: 20px;
    opacity: .8;
`
    return (
        <>
            <PageDirectionContainer>
                <PageDirection>
                    <PageHome to="/">Home </PageHome>{"> "}<strong>{props.pageTitle}</strong>
                </PageDirection>
            </PageDirectionContainer>

            <PageTitleWrapper>
                <PageTitleBox>{props.pageTitle}</PageTitleBox>
            </PageTitleWrapper>
            {props.informTitle
                ? <>
                    <H2>{props.informTitle}</H2>
                    <Text>{props.informText}</Text>
                </>
                : null
            }
        </>
    )
}

export default PageTopInform