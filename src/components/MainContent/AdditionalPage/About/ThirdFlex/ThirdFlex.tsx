import React from "react";
import {MainTitle, PseudoTitle, Text} from "../../../../../common/selectors/StyledComponents";

const ThirdFlex = (props: any) => {
    return (
        <>
            <MainTitle>{props.thirdTitle}</MainTitle>
            <props.FlexContainer>
                {props.staff.map((item: { [key: string]: string }) =>
                    <props.AltFlexItem>
                        <img src={item.Img}/>
                        <PseudoTitle>{item.Title}</PseudoTitle>
                        <Text>{item.Text}</Text>
                    </props.AltFlexItem>
                )}
            </props.FlexContainer>
        </>
    )
}

export default ThirdFlex