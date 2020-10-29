import React, {useState} from "react";
import {MainTitle, Text} from "../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const ProductTopInform = () => {

    const [isOpened, setOpened] = useState(false);

    let showMore = () => {
        if (!isOpened) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }

    const productTitle = "SEXY",
        productImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-8-240x200.png",
        productInformPartOne = "We are so lucky living in such a wonderful time. Our almost unlimited abilities give us a real freedom. Our society doesn’t have such strict foundations as there were hundred years ago. It is so good that we have an opportunity to make a choice. Lingerie wasn’t always so stylish and erotic. Actually the concept of lingerie being visually appealing was a development of the late 19th century. Nowadays the lingerie industry is one of the most successful business spheres. The magic of the lingerie is an undoubted fact because it is a way of self expression and it gives a pleasure and satisfaction..",
        productInformPartTwo = "Our store has a great choice of wonderful lingerie and you will be amazed by its variety. Our vendors and manufacturers guarantee the high quality of our goods. So you can buy goods of premium quality by a fair price. We cooperate with the great number of fashion houses and you can find many unique and original products here.",
        productInformPartThree = "You’ll be surprised by the variety and the quality of our materials. We always stay in touch with the latest fashion tendencies - that is why our goods are so popular and we have a great number of faithful customers all over the country. Our company has a perfect reputation and a great experience and our clients’ testimonials can prove this fact.",
        productInformPartFour = "We care about our clients and never let them down. We often provide different promos and you can get a good benefit. If you have some questions you can address our superb 24/7 online support system."

    const pageTitle = "ADD TITLE"

    const PageDirectionContainer = styled.div`
    text-align: left;
    & a{
        color: black;
    }
`
    const PageDirection = styled.p`
    font-size: 12px;
    color: #444;
`
    const PageHome = styled(NavLink)`
    &:hover{
        color: #DBAD94;
    }
`
    const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`
    const DescriptionContainer = styled.div`
    transition: all 1s;
`
    const ProductInformationContainer = styled.div`
    overflow: hidden;
    transition: all 1s;
    position: relative;
    text-align: left;
    padding-left: 15%;
    height: ${(props: { isOpened: boolean }) => props.isOpened ? "auto" : "200px"};
    width: 80%;
    &::after{
        content: '';
        box-shadow: 0 0 50px 35px #fff;
        position: absolute;
        display: ${(props: { isOpened: boolean }) => props.isOpened ? "none" : "block"};
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        background: #fff;
    }
`
    const More = styled.button`
    float: left;
    padding-left: 15%;
    background-color: transparent;
    color: #E8CABA;
    border: none;
    cursor: pointer;
    font-weight: 800;
    font-size: 13px;
    &:hover{
        color: #000000;
    }
`
    const ProductIcon = styled.img`
    background-color: #f7f7f7;
`


    return (
        <>
            <PageDirectionContainer>
                <PageDirection>
                    <PageHome to="/">Home </PageHome>{">"}<strong>{pageTitle}</strong>
                </PageDirection>
            </PageDirectionContainer>
            <FlexBox>
                <div>
                    <ProductIcon src={productImg}/>
                </div>
                <DescriptionContainer>
                    <ProductInformationContainer isOpened={isOpened}>
                        <MainTitle>{productTitle}</MainTitle>
                        <Text>{productInformPartOne}</Text>
                        <Text>{productInformPartTwo}</Text>
                        <Text>{productInformPartThree}</Text>
                        <Text>{productInformPartFour}</Text>
                    </ProductInformationContainer>
                    <div>
                        <More onClick={showMore}>{isOpened ? "Hide" : "Show More"}</More>
                    </div>
                </DescriptionContainer>
            </FlexBox>
        </>
    )
}

export default ProductTopInform