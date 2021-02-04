import React from "react";

const SecondFooterSection = (props: any) => {

    const {
        ListWrapper,
        ListElement,
        ListLink,
        SecondSectionData,
        Title,
        Content,
        open,
        isOpened,
        setOpened
    } = props



    return(
        <ListWrapper>
            <Title onClick={() => {open(setOpened, isOpened)}}>
                <h3>MY ACCOUNT</h3>
            </Title>
            <Content isOpened={isOpened}>
                <ul>
                    {SecondSectionData.map((item: {[key: string]: string}) =>
                        <ListElement key={item.id}><ListLink to={item.path}>{item.name}</ListLink></ListElement>
                    )}
                </ul>
            </Content>
        </ListWrapper>
    )
}

export default SecondFooterSection