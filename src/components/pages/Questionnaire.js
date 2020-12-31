import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe'
import Footer from '../Footer';


export default function Questionnaires() {
  return <>
  <div className='questionnaires'>
  <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSft6SAfbUqmH1cvrc39FDGjXwNvWx7ppNosjFlN6N-e0L794g/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0"/>
  </div>
  <Footer />
  </>
}