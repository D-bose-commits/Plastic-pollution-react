import React, { createContext, useEffect, useState } from "react";



import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideosDocumentaries from './components/pages/VideosDocumentaries';
import Articles from './components/pages/Articles';


// import SignUp from './components/pages/SignUp';

import Signup from './user/signup/Signup';
import Login from './user/login/Login';
import Quiz2 from './components/pages/Quiz2';
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Quiz3 from './components/pages/Quiz3';
import yes from './app/yes';


import Questionnaires from './components/pages/Questionnaire';

import ReactPlayer from "react-player"
import quizzes from './components/pages/quizzes';
import Pollutionfacts from "./components/pages/Pollutionfacts";
import Pollutionhelp from "./components/pages/Pollutionhelp";
import Pollutionscholarly from "./components/pages/Pollutionscholarly";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/videosdocumentaries' component={VideosDocumentaries}/>
          <Route path='/questionnaire' component={Questionnaires} />
          <Route path='/articles' component={Articles} />
          <Route path='/Pollutionfacts' component={Pollutionfacts} />
          <Route path='/Pollutionhelp' component={Pollutionhelp} />
          <Route path='/Pollutionscholarly' component={Pollutionscholarly} />
         
          <Route path='/News' render={()=> <NewsContextProvider>
              <News />
            </NewsContextProvider>} />
          <Route path='/quizzes' component={quizzes} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/login' component={Login} />


          {/* <Route path='/sign-up' component={SignUp} /> */}

        </Switch>
      </Router>
    </>
  );
}




var acc =  document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc [i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.MaxHeight) {
      panel.style.MaxHeight = null;
    } else { panel.style.MaxHeight = panel.scrollHeight + 'px'

    }
    })
  }

export default App;

//Npm install , npm install react-router-dom, npm i react-player, npm i react-iframe

