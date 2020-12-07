import React from "react"
import styled from "@emotion/styled"
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import {NavLink} from "react-router-dom";

const FirstSectionData =
    [
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Delivery Information',
            path: '/delivery'
        },
        {
            name: 'Privacy Policy',
            path: '/privacy'
        },
        {
            name: 'Terms & Conditions',
            path: '/terms'
        },
        {
            name: 'Contact us',
            path: '/contact'
        },
        {
            name: 'Returns',
            path: '/returns'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
    ]

const SecondSectionData =
    [
        {
            name: 'My Account',
            path: '/my-account'
        },
        {
            name: 'Order History',
            path: '/order-history'
        },
        {
            name: 'Gift Certificates',
            path: '/certificates'
        },
        {
            name: 'Site map',
            path: '/sitemap'
        }
    ]

const ThirdSectionData =
    [
        {
            name: 'My Company Glasgow D04 89GR',
            link: '/https://www.google.com/maps/?q=40.6700,+-73.9400'
        },
        {
            name: '(800) 123-4567',
            link: 'tel:8001234567'
        },
        {
            name: 'shevabogdan16@gmail.com',
            link: 'mailto:shevabogdan16@gmail.com'
        },
        {
            name: '7 Days a week from 9:00 am to 7:00 pm'
        }
    ]

const FooterInformWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto 24px;
    font-size: 14px;
    color: #000000;
    font-family: "Montserrat", sans-serif;
    letter-spacing: .3px;
    font-weight: 300;
    @media (max-width: 1196px) {
        max-width: 970px;
    }
    @media (max-width: 988px) {
        max-width: 750px;
        font-size: 12px;
        font-weight: 400;
    }
    @media (max-width: 764px) {
        width: 100%;
        padding: 0;
    }    
`
const ListWrapper = styled.section`
    width: 15%;
    @media (max-width: 1196px) {
        padding: 0 10px;
    }
    @media (max-width: 988px) {
        width: 25%;
    }  
`
const AltListWrapper = styled.section`
    width: 30%;
    @media (max-width: 1196px) {
        padding: 0 10px;
    }  
    @media (max-width: 988px) {
        width: 25%;
    } 
`
const ListElement = styled.li`
    width: 100%;
    padding: 3px 0;
    a{
        color: #000;
    }
    &:hover{
        a{
            color: #E8CABA;
        }
    }
    @media (max-width: 1196px) {
        padding: 0;
    } 
`
const ListLink = styled(NavLink)`
    font-family: 'Hind', sans-serif;
    color: #000000;
    &:hover{
        color: #E8CABA;
    }
`
const LastSection = styled.section`
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1196px) {
        padding: 0 10px;
    }
    @media (max-width: 988px) {
        display: block;
        width: 25%;
    }    
`
const Social = styled.ul`
    display: flex;
    li{
    padding-right: 20px;
        a{
            transition: .1ms linear;
            color: #000;
        }
        &:hover{
            a{
                color: #E8CABA;
            }
        }  
    }
`

const Footer = () => {
    return (
        <footer>
            <FooterInformWrapper>
                <FirstSection
                    ListWrapper={ListWrapper}
                    ListElement={ListElement}
                    ListLink={ListLink}
                    FirstSectionData={FirstSectionData}
                />
                <SecondSection
                    ListWrapper={ListWrapper}
                    SecondSectionData={SecondSectionData}
                    ListElement={ListElement}
                    ListLink={ListLink}
                />
                <ThirdSection
                    AltListWrapper={AltListWrapper}
                    ThirdSectionData={ThirdSectionData}
                    ListElement={ListElement}
                />
                <FourthSection
                    ListElement={ListElement}
                    ListLink={ListLink}
                    Section={LastSection}
                    Social={Social}
                />
            </FooterInformWrapper>
        </footer>
    )
}

export default Footer