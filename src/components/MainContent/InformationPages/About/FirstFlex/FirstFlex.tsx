import React from "react";
import {Text} from "../../../../../common/selectors/StyledComponents";

const FirstFlex = (props: any) => {
    return(
        <props.FlexContainer>
            {props.inform.map((item: {[key:string] :string}) =>
                <props.FlexItem>
                    <props.H5>{item.Title}</props.H5>
                    <Text>{item.Text}</Text>
                </props.FlexItem>
            )}
        </props.FlexContainer>
    )
}

export default FirstFlex