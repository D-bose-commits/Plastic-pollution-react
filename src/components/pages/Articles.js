import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Section from '../Section';

export default function Articles() {


  return  <>
  <div className="articles">
          <ul className="articles-container">
            <li className="articles-wrapper"></li>
            <h2>Articles on Plastic Pollution</h2>
            <a href="https://ourworldindata.org/plastic-pollution?utm_source=newsletter" rel="ourworld" id= 'ourworld'>
              Plastic pollution - www.ourworlddata.com</a>
              <br></br>            
            
            <a href="http://www.int-res.com/articles/meps/37/m037p295.pdf" rel=">Marine birds and plastic pollution - www.int-res.com">
            Marine birds and plastic pollution - www.int-res.com</a>
            <Link to='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111913&xid=17259,15700021,15700124,15700149,15700168,15700173,15700186,15700191,15700201'>Plastic Pollution in the World's Ocean - https://journals.plos.org/</Link>
            <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0269749117334310'>Plastic pollution in islands of the Atlantic Ocean - www.sciencedirect.com </Link>
            <Link to='https://www.pnas.org/content/114/38/9994.short'>Threat of plastic pollution to seabirds is global - www.pnas.org</Link>
            <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0025326X12006224'>Plastic pollution in the South Pacific - www.sciencedirect.com</Link>
            <Link to='https://www.nature.com/articles/544297a/'>Sea change for plastic pollution - www.nature.com</Link>
            <li className="articles-wrapper">Section 2</li>
            <li className="articles-wrapper">Section 3</li>
            <li className="articles-wrapper">Section 4</li>
            <li className="articles-wrapper">Section 5</li>
            </ul>
          </div>

          <Footer/>
</>
  
  
}
