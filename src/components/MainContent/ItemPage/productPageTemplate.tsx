import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const Template = (props: any) => {

    const pageTitle = "ADD TITLE"

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
    const FlexBox = styled.div`
    display: flex;
`

    return(
        <>
            <PageDirectionContainer>
                <PageDirection>
                    <PageHome to="/">Home </PageHome>{">"}<strong>{pageTitle}</strong>
                </PageDirection>
            </PageDirectionContainer>
        <FlexBox>
            <div>
                <div>
                    {/* фотка категории */}
                </div>
                <div>
                    {/*Надпись*/}
                </div>
                <div>
                    {/* слайдер бестселлеров*/}
                </div>
                <div>
                    {/* Расширенные Функции поиска*/}
                </div>
            </div>
            <div>
                <div>
                    {/* Текст с выездом */}
                </div>
                <div>
                    {/* Функции поиска */}
                </div>
                <div>
                    {/* map девок */}
                </div>
            </div>
        </FlexBox>
            </>
    )
}

export default Template