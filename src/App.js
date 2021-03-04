import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideosDocumentaries from './components/pages/VideosDocumentaries';


// import SignUp from './components/pages/SignUp';

import Signup from './user/signup/Signup';
import Login from './user/login/Login';
import Quiz2 from './components/pages/Quiz2';
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Quiz3 from './components/pages/Quiz3';
import yes from './app/yes';


import Questionnaire from './components/pages/ContactForm';

import ReactPlayer from "react-player"
import quizzes from './components/pages/quizzes';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/videosdocumentaries' component={VideosDocumentaries}/>
          <Route path='/questionnaires' component={Questionnaires} />
          <Route path='/News' render={()=> <NewsContextProvider>
              <News />
            </NewsContextProvider>} />
          <Route path='/Quiz2' component={Quiz2} />
          <Route path='/Quiz3' component={Quiz3} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/login' component={Login} />


          {/* <Route path='/sign-up' component={SignUp} /> */}

        </Switch>
      </Router>
    </>
  );
}
export default App;

//Npm install , npm install react-router-dom, npm i react-player, npm i react-iframe
