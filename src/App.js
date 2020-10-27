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
import Template from "./components/MainContent/ItemPage/productPageTemplate";
import SiteMap from "./components/MainContent/InformationPages/Site Map/SiteMap";

function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                {/*Main page*/}
                <Route exact path="/" render={() => <MainPageContainer/>}/>
                {/*Item page*/}
                <Route exact path="/first" render={() => <Template/>}/>
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
