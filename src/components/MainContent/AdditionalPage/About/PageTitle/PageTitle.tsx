import React from "react";
import {Text} from "../../../../../common/selectors/StyledComponents";

const PageTopInform = (props: any) => {
    return (
        <>
            <props.PageDirectionContainer>
                <props.PageDirection>
                    <props.PageHome to="/">Home </props.PageHome>{">"}<strong> About</strong>
                </props.PageDirection>
            </props.PageDirectionContainer>

            <props.PageTitleWrapper>
                <props.PageTitleBox>{props.pageTitle}</props.PageTitleBox>
            </props.PageTitleWrapper>

            <h3>{props.informTitle}</h3>
            <Text>{props.informText}</Text>
        </>
    )
}

export default PageTopInform