import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageContainer from "./components/MainContent/MainPage/MainPageContainer";
import About from "./components/MainContent/AdditionalPage/About/About";
import Delivery from "./components/MainContent/AdditionalPage/Delivery Information/Delivery";
import Privacy from "./components/MainContent/AdditionalPage/Privacy Policy/Privacy";
import Terms from "./components/MainContent/AdditionalPage/Terms & Conditions/Terms";
import Contact from "./components/MainContent/AdditionalPage/Contact Us/Contact";

function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route exact path="/" render={() => <MainPageContainer/>}/>
                <Route exact path="/about" render={() => <About/>}/>
                <Route exact path="/delivery" render={() => <Delivery/>}/>
                <Route exact path="/privacy" render={() => <Privacy/>}/>
                <Route exact path="/terms" render={() => <Terms/>}/>
                <Route exact path="/contact" render={() => <Contact/>}/>
            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
