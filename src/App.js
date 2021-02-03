import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideosDocumentaries from './components/pages/VideosDocumentaries';
import Articles from './components/pages/Articles';
import SignUp from './components/pages/SignUp';
import Questionaire1 from './components/pages/Questionaire1';
import Questionaire2 from './components/pages/Questionaire2';
import Questionaire3 from './components/pages/Questionaire3';
import ReactPlayer from "react-player"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/videosdocumentaries' component={VideosDocumentaries}/>
          <Route path='/Questionaire1' component={Questionaire1} />
          <Route path='/articles' component={Articles} />
          <Route path='/sign-up' component={SignUp} />
   
        </Switch>
      </Router>
    </>
  );
}

export default App;

//Npm install , npm install react-router-dom, npm i react-player, npm i react-iframe
