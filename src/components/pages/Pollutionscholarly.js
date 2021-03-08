import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArticleCardPS from '../ArticleCardPS';

export default function Pollutionscholarly() {
  return  <>

        <ArticleCardPS />
        <div className='articles'>

            <div className='article-container'>
            <h1>--Plastic Pollution Facts and Information Articles--</h1>

            <div className='articles-wrapper'>
            <a href="https://ourworldindata.org/plastic-pollution?utm_source=newsletter" target="_blank" >
            Plastic Pollution  --  Our World in Data</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111913&xid=17259,15700021,15700124,15700149,15700168,15700173,15700186,15700191,15700201" target="_blank" >
            Plastic Pollution in the World's Oceans: More than 5 Trillion Plastic Pieces Weighing over 250,000 Tons Afloat at Sea  --  Plos one - Marcus Eriksen ,Laurent C. M. Lebreton,Henry S. Carson,Martin Thiel,Charles J. Moore,Jose C. Borerro,Francois Galgani,Peter G. Ryan,Julia Reisser</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0080466" target="_blank" >
            Marine Plastic Pollution in Waters around Australia: Characteristics, Concentrations, and Pathways  --  Plos one - Julia Reisser,Jeremy Shaw,Chris Wilcox,Britta Denise Hardesty,Maira Proietti,Michele Thums,Charitha Pattiaratchi </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://journals.sagepub.com/doi/abs/10.3184/003685018X15294876706211" target="_blank" >
            Plastic Pollution and Potential Solutions  --  Sage Journals - Christopher J. Rhodes  </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://journals.openedition.org/factsreports/5319" target="_blank" >
            The challenges of measuring plastic pollution  --  Open Edition Journals - Julien Boucher and Guillaume Billard </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14572" target="_blank" >
            https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14572  --  Wiley Online Library - Fredric M. Windsor  Isabelle Durance  Alice A. Horton  Richard C. Thompson  Charles R. Tyler  Steve J. Ormerod </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.nature.com/articles/544297a" target="_blank" >
            Sea change for plastic pollution  --  Nature - Melanie Bergmann, Mine B. Tekman & Lars Gutow </a>
            </div>

            </div>
        </div>
        <Footer/>
</>


}