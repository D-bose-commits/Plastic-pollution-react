import Iframe from 'react-iframe'
import React from 'react';
import '../../App.css';

export default function Questionnaires() {
  //return <h1 className='questionnaires'>Quizzes</h1>;
  
  return <>
    <div className='questionnaire'>
    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSc_n7RslE-_7BlrvRsJPG6NutuYZshxEqwGOgxpUd8lVNVllA/viewform?embedded=true" width="640" height="1414" frameborder="0" marginheight="0" marginwidth="0"/>
    </div>
    </>
  }
