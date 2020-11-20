import React from "react";
import {MainTitle, PseudoTitle} from "../../../../../common/selectors/StyledComponents";

const ThirdFlex = (props: any) => {
    return (
        <>
            <MainTitle>{props.thirdTitle}</MainTitle>
            <props.FlexContainer>
                {props.staff.map((item: { [key: string]: string }) =>
                    <props.AltFlexItem>
                        <img src={item.Img}/>
                        <PseudoTitle>{item.Title}</PseudoTitle>
                        <props.AboutText>{item.Text}</props.AboutText>
                    </props.AltFlexItem>
                )}
            </props.FlexContainer>
        </>
    )
}

export default ThirdFlex