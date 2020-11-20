import React from "react";
import {MainTitle, PseudoTitle} from "../../../../../common/selectors/StyledComponents";

const SecondFlex = (props: any) => {
    return (
        <>
            <MainTitle>{props.secondTitle}</MainTitle>
            <props.FlexContainer>
                {props.strengths.map((item: { [key: string]: string }) =>
                    <props.FlexItem>
                        <props.Icon src={item.Img}/>
                        <PseudoTitle>{item.Title}</PseudoTitle>
                        <props.AboutText>{item.Text}</props.AboutText>
                    </props.FlexItem>
                )}
            </props.FlexContainer>
        </>
    )
}

export default SecondFlex