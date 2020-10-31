import React from "react";
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";

const InformPart = () => {

    const firstTitle = "Special Offer",
        firstText = "SAVE 50% ON ALL ITEMS",
        firstImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-1-370x247.jpg",
        secondTitle = "New Arrivals",
        secondText = "GET AN EXTRA 10% OFF YOUR FIRST ORDER",
        secondImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-2-370x247.jpg",
        thirdTitle = "SUMMER SALE",
        thirdText = "GET UP TO 60% OFF*",
        thirdPseudoText = "*Online only. Select styles. Price reflects discount",
        buttonText = "SHOP NOW"

    const FlexBox = styled.div`
    
    display: flex;
    justify-content: space-evenly;

`
    const FlexItem = styled.div`
    z-index: -100;
    position: relative;
    width: 33.3%;
    margin: 0 15px;
    height: 247px;
    background-color: #E8CABA;
    border-radius: 6px;
`
    const FlexLink = styled.a`
    
`
    const FlexImg = styled.img`
    position: absolute;
    z-index: -20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-image: url(${(props: { img: string | null }) => props.img});
`

    return (
        <PageContainer>
            <FlexBox>
                <FlexItem>
                    <FlexImg img={firstImg}/>
                    <FlexLink>

                    </FlexLink>
                    <div>
                        <p>{firstTitle}</p>
                        <h3>{firstText}</h3>
                        <Button>{buttonText}</Button>
                    </div>
                </FlexItem>
                <FlexItem>
                    <FlexImg img={secondImg}/>
                    <FlexLink>

                    </FlexLink>
                    <div>
                        <p>{secondTitle}</p>
                        <h3>{secondText}</h3>
                        <Button>{buttonText}</Button>
                    </div>
                </FlexItem>
                <FlexItem>
                    <FlexLink>

                    </FlexLink>
                    <div>
                        <p>{thirdTitle}</p>
                        <h3>{thirdText}</h3>
                        <p>{thirdPseudoText}</p>
                        <Button>{buttonText}</Button>
                    </div>
                </FlexItem>
            </FlexBox>
            <div>

            </div>
        </PageContainer>
    )
}

export default InformPart