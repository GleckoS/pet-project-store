import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPageContainer from "./components/MainContent/MainPage/MainPageContainer";
import About from "./components/MainContent/AdditionalPage/About";

function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route exact path="/" render={() => <MainPageContainer/>}/>
                <Route path="/about" render={() => <About/>}/>
            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
