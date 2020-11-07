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

function App() {

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

    return (
        <Router>
            <Header/>

            <Switch>
                {/*Main page*/}
                <Route exact path="/" render={() => <MainPageContainer/>}/>
                {/*Item page*/}

                {
                    Urls.map(item=>
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
                {/*Other pages*/}
            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
