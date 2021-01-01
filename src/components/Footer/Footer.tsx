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
            path: '/about',
            id: '1'
        },
        {
            name: 'Delivery Information',
            path: '/delivery',
            id: '2'
        },
        {
            name: 'Privacy Policy',
            path: '/privacy',
            id: '3'
        },
        {
            name: 'Terms & Conditions',
            path: '/terms',
            id: '4'
        },
        {
            name: 'Contact us',
            path: '/contact',
            id: '5'
        },
        {
            name: 'Returns',
            path: '/returns',
            id: '6'
        },
        {
            name: 'Blog',
            path: '/blog',
            id: '7'
        },
    ]

const SecondSectionData =
    [
        {
            name: 'My Account',
            path: '/my-account',
            id: '1'
        },
        {
            name: 'Order History',
            path: '/order-history',
            id: '2'
        },
        {
            name: 'Gift Certificates',
            path: '/certificates',
            id: '3'
        },
        {
            name: 'Site map',
            path: '/sitemap',
            id: '4'
        }
    ]

const ThirdSectionData =
    [
        {
            name: 'My Company Glasgow D04 89GR',
            link: '/https://www.google.com/maps/?q=40.6700,+-73.9400',
            id: '1'
        },
        {
            name: '(800) 123-4567',
            link: 'tel:8001234567',
            id: '2'
        },
        {
            name: 'shevabogdan16@gmail.com',
            link: 'mailto:shevabogdan16@gmail.com',
            id: '3'
        },
        {
            name: '7 Days a week from 9:00 am to 7:00 pm',
            id: '4'
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
    flex-direction: column;
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
  @media (max-width: 764px) {
    width: 100%;
    padding: 0;
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
  @media (max-width: 764px) {
    width: 100%;
    padding: 0;
  }
`
const ListElement = styled.li`
  width: 100%;
  padding: 3px 0;

  a {
    color: #000;
  }

  &:hover {
    a {
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

  &:hover {
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
  @media (max-width: 764px) {
    width: 100%;
    padding: 0;
  }
  
`
const Social = styled.ul`
  display: flex;

  li {
    padding-right: 20px;

    a {
      transition: .1ms linear;
      color: #000;
    }

    &:hover {
      a {
        color: #E8CABA;
      }
    }
  }
`

const Title = styled.div`
  @media (max-width: 764px) {
    text-align: center;
    background-color: #f6f6f6;
    padding: 6px 0;
    margin: 1px 0;
  }
`

const Content = styled.div`
  @media (max-width: 764px) {
    height: ${(props: { isOpened: boolean }) => props.isOpened
            ? 'auto'
            : '0'
    };
    opacity: ${(props: { isOpened: boolean }) => props.isOpened
            ? '1'
            : '0'
    };
    visibility: ${(props: { isOpened: boolean }) => props.isOpened
            ? 'visible'
            : 'hidden'
    };
    text-align: center;
    margin: 0 auto;
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
                    Title={Title}
                    Content={Content}
                />
                <SecondSection
                    ListWrapper={ListWrapper}
                    SecondSectionData={SecondSectionData}
                    ListElement={ListElement}
                    ListLink={ListLink}
                    Title={Title}
                    Content={Content}
                />
                <ThirdSection
                    AltListWrapper={AltListWrapper}
                    ThirdSectionData={ThirdSectionData}
                    ListElement={ListElement}
                    Title={Title}
                    Content={Content}
                />
                <FourthSection
                    ListElement={ListElement}
                    ListLink={ListLink}
                    Section={LastSection}
                    Social={Social}
                    Title={Title}
                    Content={Content}
                />
            </FooterInformWrapper>
        </footer>
    )
}

export default Footer