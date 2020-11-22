import React from "react";
import {NavLink} from "react-router-dom";

const FirstFooterSection = (props: any) => {
    return(
        <props.ListWrapper>
            <div>
                <h3>INFORMATION</h3>
            </div>
            <div>
                <ul>
                    {props.FirstSectionData.map((item: {[key: string]: string}) =>
                        <props.ListElement><props.ListLink to={item.path}>{item.name}</props.ListLink></props.ListElement>
                    )}
                </ul>
            </div>
        </props.ListWrapper>
    )
}

export default FirstFooterSection