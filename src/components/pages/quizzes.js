import React from 'react';
import '../../App.css';
//import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';

import Footer from '../Footer';

function quizzes() {
  return (
    <>
      <Quiz2 /> 
      <Quiz3 />
      
      <Footer />
    </>
  );
}

export default quizzes;
