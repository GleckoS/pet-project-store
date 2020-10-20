import React from "react";
import {MainTitle, PseudoTitle, Text} from "../../../../../common/selectors/StyledComponents";

const SecondFlex = (props: any) => {
    return (
        <>
            <MainTitle>{props.secondTitle}</MainTitle>
            <props.FlexContainer>
                {props.strengths.map((item: { [key: string]: string }) =>
                    <props.FlexItem>
                        <props.Icon src={item.Img}/>
                        <PseudoTitle>{item.Title}</PseudoTitle>
                        <Text>{item.Text}</Text>
                    </props.FlexItem>
                )}
            </props.FlexContainer>
        </>
    )
}

export default SecondFlex