import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageContainer from "./components/MainContent/MainPage/MainPageContainer";
import About from "./components/MainContent/InformationPages/About/About";
import Delivery from "./components/MainContent/InformationPages/Delivery Information/Delivery";
import Privacy from "./components/MainContent/InformationPages/Privacy Policy/Privacy";
import Terms from "./components/MainContent/InformationPages/Terms & Conditions/Terms";
import Contact from "./components/MainContent/InformationPages/Contact Us/Contact";
import SiteMap from "./components/MainContent/InformationPages/Site Map/SiteMap";
import ProductPageContainer from "./components/MainContent/ItemPage/productPageContainer";
import Login from "./components/MainContent/AccountPages/LoginPage/Login";
import Registration from "./components/MainContent/AccountPages/RegistrationPage/Registration";
import MyAccount from "./components/MainContent/AccountPages/MyAccount/MyAccount";
import {connect} from "react-redux";
import {SetUsersThunk} from "./redux/LoginReducer";
import EditAccInform from "./components/MainContent/AccountPages/EditAccInform/EditAccInform";
import ChangePassword from "./components/MainContent/AccountPages/ChangePassword/ChangePassword";

function App(props) {

    const Urls =
        [
            {
                url: "bras"
            },
            {
                url: "bra-sets"
            },
            {
                url: "balconette-bras"
            },
            {
                url: "multiway-bras"
            },
            {
                url: "full-cup-bras"
            },
            {
                url: "lingerie-brands"
            },
            {
                url: "minimiser-bras"
            },
            {
                url: "panties"
            },
            {
                url: "bikini"
            },
            {
                url: "laist-waist"
            },
            {
                url: "high-leg"
            },
            {
                url: "cotton"
            },
            {
                url: "lace-up"
            },
            {
                url: "dream"
            },
            {
                url: "bra-separates"
            },
            {
                url: "stockings"
            },
            {
                url: "vinyl-latex-leather"
            },
            {
                url: "sexy-lingerie"
            },
            {
                url: "new-in"
            },
            {
                url: "bustiers"
            },
            {
                url: "corsets"
            },
            {
                url: "perfect"
            },
            {
                url: "waist-cinches"
            },
            {
                url: "accessories"
            },
            {
                url: "panties"
            },
            {
                url: "corsets"
            },
            {
                url: "sexy"
            },
            {
                url: "sleep"
            },
            {
                url: "swim"
            },
            {
                url: "stockings"
            },
            {
                url: "accessories"
            },
        ]

    props.SetUsersThunk()
    return (
        <Router>
            <Header/>

            <Switch>

                {/*Main page*/}
                <Route exact path="/" render={() => <MainPageContainer/>}/>

                {/*Item page*/}
                {
                    Urls.map(item =>
                        <Route exact path={"/" + item.url} render={() => <ProductPageContainer url={item.url}/>}/>
                    )
                }

                {/*Inform pages*/}
                <Route exact path="/about" render={() => <About/>}/>
                <Route exact path="/delivery" render={() => <Delivery/>}/>
                <Route exact path="/privacy" render={() => <Privacy/>}/>
                <Route exact path="/terms" render={() => <Terms/>}/>
                <Route exact path="/contact" render={() => <Contact/>}/>
                <Route exact path="/sitemap" render={() => <SiteMap/>}/>

                {/*Account pages*/}
                <Route exact path="/my-account" render={() => <MyAccount/>}/>
                <Route exact path="/login" render={() => <Login/>}/>
                <Route exact path="/register" render={() => <Registration/>}/>
                <Route exact path="/edit-acc-inform" render={() => <EditAccInform/>}/>
                <Route exact path="/change-password" render={() => <ChangePassword/>}/>

            </Switch>

            <Footer/>
        </Router>
    );
}


const mapStateToProps = () => {

}

export default connect(mapStateToProps, {SetUsersThunk})(App)