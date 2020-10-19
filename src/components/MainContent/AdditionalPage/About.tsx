import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const About = () => {


    const firstTitle = "About",
        secondTitle = "STORE EVENTS",
        thirdTitle = "OUR TEAM"

    const informTitle = "CATERING TO YOUR REQUIREMENTS, HANDLING YOUR NEEDS WITH CARE",
        informText = "Our store is more than just another average online retailer. " +
            "We sell not only top quality products, but give our customers a positive online shopping experience. " +
            "Forget about struggling to do everything at once: taking care of the family, running your business, " +
            "walking your dog, cleaning the house, doing the shopping, etc. " +
            "Purchase the goods you need every day or just like in a few clicks or taps, " +
            "depending on the device you use to access the Internet. We work to make your life more enjoyable."

    const convenienceTitle = "FOR CONVENIENCE OF CHOICE",
        convenienceImg = "./search1.png",
        convenienceText = "We think about the convenience of your choice. " +
            "Our products are supplied with star rating that should help hesitant buyers to take a decision. " +
            "What’s more, you can search our site if you know exactly what you are looking for or use" +
            " a bunch of different filters that will considerably save your time and efforts.",
        deliveryTitle = "DELIVERY TO ALL REGIONS",
        deliveryImg = "./car1.png",
        deliveryText = "We deliver our goods worldwide. No matter where you live," +
            " your order will be shipped in time and delivered right to your door or to any" +
            " other location you have stated. The packages are handled with utmost care, " +
            "so the ordered products will be handed to you safe and sound, just like you expect them to be.",
        qualityTitle = "THE HIGHEST QUALITY OF PRODUCTS",
        qualityImg = "./like1.png",
        qualityText = "We guarantee the highest quality of the products we sell. " +
            "Several decades of successful operation and millions of happy customers let us feel certain about that. " +
            "Besides, all items we sell pass thorough quality control, " +
            "so no characteristics mismatch can escape the eye of our professionals."

    const productTitle = "14500",
        productText = "PRODUCTS AVAILABLE",
        clientsTitle = "81%",
        clientsText = "CLIENTS COME BACK",
        membersTitle = "10 mlns",
        membersText = "SITE MEMBERS"

    const PageContainer = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
`
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
    const PageTitleContainer = styled.div`
    text-align: center;
    padding-bottom: 40px;
`
    const PageTitle = styled.h1`
    font-size: 24px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 1170px;
        height: 1px;
        background-color: #dddddd;
        bottom: -20px;
        left:0;
    }
`
    const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
    const FlexItem = styled.div`
    width: 370px;
`
    const Icon = styled.img`
    color: #E8CABA;
    padding: 23px;
    width: 50px;
    border: 2px #E8CABA solid;
    border-radius: 50%;
`
    const H5 = styled.h5`
    color: #E8CABA;
    font-size: 56px;
    font-weight: 400;
    margin: 0;
`

    return (
        <PageContainer>
            <PageDirectionContainer>
                <PageDirection><PageHome to="/">Home</PageHome> {">"} <strong>About</strong></PageDirection>
            </PageDirectionContainer>
            <PageTitleContainer>
                <PageTitle>{firstTitle}</PageTitle>
            </PageTitleContainer>
            <div>
                <h3>{informTitle}</h3>
                <p>{informText}</p>
            </div>
            <FlexContainer>
                <FlexItem>
                    <H5>{productTitle}</H5>
                    <p>{productText}</p>
                </FlexItem>
                <FlexItem>
                    <H5>{clientsTitle}</H5>
                    <p>{clientsText}</p>
                </FlexItem>
                <FlexItem>
                    <H5>{membersTitle}</H5>
                    <p>{membersText}</p>
                </FlexItem>
            </FlexContainer>
            <div>
                <h3>{secondTitle}</h3>
            </div>
            <FlexContainer>
                <FlexItem>
                    <Icon src={convenienceImg}/>
                    <h6>{convenienceTitle}</h6>
                    <p>{convenienceText}</p>
                </FlexItem>
                <FlexItem>
                    <Icon src={deliveryImg}/>
                    <h6>{deliveryTitle}</h6>
                    <p>{deliveryText}</p>
                </FlexItem>
                <FlexItem>
                    <Icon src={qualityImg}/>
                    <h6>{qualityTitle}</h6>
                    <p>{qualityText}</p>
                </FlexItem>
            </FlexContainer>
            <h3>{thirdTitle}</h3>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <h3></h3>
                <div></div>
            </div>
        </PageContainer>
    )
}

export default About