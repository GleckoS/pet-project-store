import React from "react";

const SecondFooterSection = (props: any) => {

    const {ListWrapper, ListElement, ListLink, SecondSectionData} = props

    return(
        <ListWrapper>
            <div>
                <h3>MY ACCOUNT</h3>
            </div>
            <div>
                <ul>
                    {SecondSectionData.map((item: {[key: string]: string}) =>
                        <ListElement><ListLink to={item.path}>{item.name}</ListLink></ListElement>
                    )}
                </ul>
            </div>
        </ListWrapper>
    )
}

export default SecondFooterSection