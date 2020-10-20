import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import FirstFlex from "./FirstFlex/FirstFlex";
import SecondFlex from "./SecondFlex/SecondFlex";
import ThirdFlex from "./ThirdFlex/ThirdFlex";
import AboutSlider from "./Slider/AboutSlider";
import PageTopInform from "./PageTitle/PageTitle";

const About = () => {


    const pageTitle = "About",
        secondTitle = "STORE EVENTS",
        thirdTitle = "OUR TEAM",
        fourthTitle = "TESTIMONIALS"

    const informTitle = "CATERING TO YOUR REQUIREMENTS, HANDLING YOUR NEEDS WITH CARE",
        informText = "Our store is more than just another average online retailer. " +
            "We sell not only top quality products, but give our customers a positive online shopping experience. " +
            "Forget about struggling to do everything at once: taking care of the family, running your business, " +
            "walking your dog, cleaning the house, doing the shopping, etc. " +
            "Purchase the goods you need every day or just like in a few clicks or taps, " +
            "depending on the device you use to access the Internet. We work to make your life more enjoyable."

    const strengths =
        [
            {
                Title: "FOR CONVENIENCE OF CHOICE",
                Img: "./search1.png",
                Text: "We think about the convenience of your choice. " +
                    "Our products are supplied with star rating that should help hesitant buyers to take a decision. " +
                    "What’s more, you can search our site if you know exactly what you are looking for or use" +
                    " a bunch of different filters that will considerably save your time and efforts.",
            },
            {
                Title: "DELIVERY TO ALL REGIONS",
                Img: "./car1.png",
                Text: "We deliver our goods worldwide. No matter where you live," +
                    " your order will be shipped in time and delivered right to your door or to any" +
                    " other location you have stated. The packages are handled with utmost care, " +
                    "so the ordered products will be handed to you safe and sound, just like you expect them to be.",
            }
            ,
            {
                Title: "THE HIGHEST QUALITY OF PRODUCTS",
                Img: "./like1.png",
                Text: "We guarantee the highest quality of the products we sell. " +
                    "Several decades of successful operation and millions of happy customers let us feel certain about that. " +
                    "Besides, all items we sell pass thorough quality control, " +
                    "so no characteristics mismatch can escape the eye of our professionals."
            }
        ]

    const inform =
        [
            {
                Title: "14500",
                Text: "PRODUCTS AVAILABLE",
            },
            {
                Title: "81%",
                Text: "CLIENTS COME BACK",
            },
            {
                Title: "10 mlns",
                Text: "SITE MEMBERS"
            }
        ]

    const staff =
        [
            {
                Title: "ROBERT JOHNSON",
                Text: "Senior salesman with 15 years of experience. He knows everything about the products he offers.",
                Img: "./article-1.jpg"
            },
            {
                Title: "JESSICA PRISTON",
                Text: "Mega positive shop assistant always ready to help you make the right choice and charm you with a smile.",
                Img: "./article-2.jpg"
            },
            {
                Title: "SAM KROMSTAIN",
                Text: "Wholesale manager. Contact him if you want to buy a batch of the products offered at our store.",
                Img: "./article-3.jpg"
            },
            {
                Title: "EDNA BARTON",
                Text: "Quality control manager. Her mission is to check the products we ship and settle quality issues if any.",
                Img: "./article-4.jpg"
            },
        ]
    const commentarySlider =
        [
            {
                Title: "MARY TABA",
                Text: "“Guys, you rock! Made a purchase at your store recently. " +
                    "The order has been shipped and delivered on time. The quality is superb!" +
                    " The price is quite reasonable. " +
                    "Told all my friends about your excellent service and the variety of choice." +
                    " I think I’ll be your loyal customer in future as well." +
                    " I wish your store many more years of prosperity.” ",
                Img: "./commentary.png",
            },
            {
                Title: "VIRGINIA UBERT",
                Text: "“Having the distressing experience with some online shops before decided to say " +
                    "‘’THANK YOU” to all personnel of this store. You are not only friendly, " +
                    "but deliver really good products in the shortest possible terms. In a word, " +
                    "I am absolutely happy with my purchase and the service. Everything was perfect!”",
                Img: "./commentary.png",
            }
        ]

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
    const PageTitleWrapper = styled.div`
    text-align: center;
    padding-bottom: 40px;
`
    const PageTitleBox = styled.h1`
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
    const AltFlexItem = styled.div`
    width: 292px;
    & img{
        border-radius: 8px;
    }
`
    const Icon = styled.img`
    color: #E8CABA;
    padding: 23px;
    width: 50px;
    border: 2px #E8CABA solid;
    border-radius: 50%;
`
    const Commentary = styled.img`
    width: 64px;
    margin: 0 auto;
    padding-top: 15px;
`
    const H5 = styled.h5`
    color: #E8CABA;
    font-size: 56px;
    font-weight: 400;
    margin: 0;
`
    const SliderItem = styled.div`
    max-width: 920px;
`

    return (
        <PageContainer>
            <PageTopInform
                PageDirectionContainer={PageDirectionContainer}
                PageDirection={PageDirection}
                PageHome={PageHome}
                PageTitleWrapper={PageTitleWrapper}
                PageTitleBox={PageTitleBox}
                pageTitle={pageTitle}
                informTitle={informTitle}
                informText={informText}
            />
            <FirstFlex
                inform={inform}
                FlexContainer={FlexContainer}
                FlexItem={FlexItem}
                H5={H5}
            />
            <SecondFlex
                secondTitle={secondTitle}
                strengths={strengths}
                FlexContainer={FlexContainer}
                FlexItem={FlexItem}
                Icon={Icon}
            />
            <ThirdFlex
                thirdTitle={thirdTitle}
                staff={staff}
                FlexContainer={FlexContainer}
                AltFlexItem={AltFlexItem}
            />
            <AboutSlider
                fourthTitle={fourthTitle}
                commentarySlider={commentarySlider}
                SliderItem={SliderItem}
                Commentary={Commentary}
            />

        </PageContainer>
    )
}

export default About