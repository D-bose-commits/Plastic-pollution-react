import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe'

export default function Questionnaires() {
  return <>
  <div className='questionnaire'>
  <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSft6SAfbUqmH1cvrc39FDGjXwNvWx7ppNosjFlN6N-e0L794g/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0"/>
  </div>
  </>
}