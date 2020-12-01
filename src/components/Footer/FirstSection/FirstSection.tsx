import React from "react";

const FirstFooterSection = (props: any) => {

    const {ListWrapper, ListElement, ListLink, FirstSectionData} = props

    return(
        <ListWrapper>
            <div>
                <h3>INFORMATION</h3>
            </div>
            <div>
                <ul>
                    {FirstSectionData.map((item: {[key: string]: string}) =>
                        <ListElement><ListLink to={item.path}>{item.name}</ListLink></ListElement>
                    )}
                </ul>
            </div>
        </ListWrapper>
    )
}

export default FirstFooterSection