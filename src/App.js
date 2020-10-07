import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./components/MainContent/MainPage/MainPage";

function App() {
  return (
      <Router>
          <Header/>

          <Switch>
              <Route path="/">
                  <MainPage/>
              </Route>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
