import React from "react";
import {MainTitle, Text} from "../../../../../common/selectors/StyledComponents";

const DeliveryBottomInform = (props: any) => {
    return (
        <React.Fragment>
            <MainTitle>{props.informTitle}</MainTitle>
            <Text>{props.informText}</Text>
        </React.Fragment>
    )
}
export default DeliveryBottomInform