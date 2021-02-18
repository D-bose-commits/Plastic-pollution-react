import Iframe from 'react-iframe'
import React from 'react';
import '../../App.css';

export default function Questionnaires() {
  //return <h1 className='questionnaires'>Quizzes</h1>;
  
  return <>
    <div className='questionnaire'>
    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSfQwCnuC3HDjt3AxOJ-KGhDU6tXJMQL8l274JxPl7_pfJChJg/viewform?embedded=true" width="640" height="1414" frameborder="0" marginheight="0" marginwidth="0"/>
    </div>
    </>
  }
//<a href="source URL">Questionnaire link</a>
//Go to https://forms.google.com/and open your form.
//Click Send.
//Next to Send via, click Embed 
//Click the HTML and click Copy.
//Paste the HTML into your site or blog.
