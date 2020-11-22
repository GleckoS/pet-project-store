import React from "react"
import styled from "@emotion/styled"
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import {NavLink} from "react-router-dom";

const Footer = () => {

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
                name: 'Affiliates',
                path: '/affiliates'
            },
            {
                name: 'Site map',
                path: '/sitemap'
            }
        ]

    const ThirdSectionData =
        [
            {
                name: 'My Company Glasgow D04 89GR'
            },
            {
                name: '(800) 123-4567'
            },
            {
                name: 'livedemo-admin@templatemonster.me'
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
    letter-spacing: .7px;
    font-weight: 300;
    @media (max-width: 1196px) {
        max-width: 970px;
    }
    @media (max-width: 988px) {
        max-width: 750px;
    }
    @media (max-width: 764px) {
        width: 100%;
        padding: 0;
    }    
`
    const ListWrapper = styled.section`
    width: 16.66666667%;
`
    const AltListWrapper = styled.section`
    width: 33.33333337%;
`
    const ListElement = styled.li`
    width: 100%;
    padding: 4px 0;
`
    const ListLink = styled(NavLink)`
    font-family: 'Hind', sans-serif;
    color: #000000;
    &:hover{
        color: #E8CABA;
    }
`
    const Section = styled.section`
    width: 33.33333337%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 764px) {
        display: block;
    }   
`

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
                    Section={Section}
                />
            </FooterInformWrapper>
        </footer>
    )
}

export default Footer