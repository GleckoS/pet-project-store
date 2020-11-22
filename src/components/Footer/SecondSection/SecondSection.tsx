import React from "react";
import {NavLink} from "react-router-dom";

const SecondFooterSection = (props: any) => {
    return(
        <props.ListWrapper>
            <div>
                <h3>MY ACCOUNT</h3>
            </div>
            <div>
                <ul>
                    {props.SecondSectionData.map((item: {[key: string]: string}) =>
                        <props.ListElement><props.ListLink to={item.path}>{item.name}</props.ListLink></props.ListElement>
                    )}
                </ul>
            </div>
        </props.ListWrapper>
    )
}

export default SecondFooterSection