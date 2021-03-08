import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCards';

export default function Pollutionhelp() {
  return  <>

        <ArticleCard />
        <div className='articles'>

            <div className='article-container'>
            <h1>--Plastic Pollution Facts and Information Articles--</h1>

            <div className='articles-wrapper'>
            <a href="https://www.greenpeace.org/usa/key-facts-about-plastic-pollution/" target="_blank" >
            Key Facts About Plastic Pollution  --  GreenPeace</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.sas.org.uk/our-work/plastic-pollution/plastic-pollution-facts-figures/" target="_blank" >
            Plastic pollution facts and figures  --  Surfers Against Sewage</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.globalcitizen.org/en/content/plastic-pollution-facts/" target="_blank" >
            10 Plastic Pollution Facts That Show Why We Need To Do More  --  Global Citizen </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.ecowatch.com/22-facts-about-plastic-pollution-and-10-things-we-can-do-about-it-1881885971.html" target="_blank" >
            22 Facts About Plastic Pollution (And 10 Things We Can Do About It)  --  EcoWatch </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://plasticoceans.org/the-facts/" target="_blank" >
            Plastic Pollution "The Facts"   --  Plastic Ocean </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.condorferries.co.uk/plastic-in-the-ocean-statistics" target="_blank" >
            Shocking Ocean Plastic Statistics: The Threat to Marine life, The Ocean & Humanity  --  CondorFerries </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.nationalgeographic.co.uk/10-shocking-facts-about-plastic" target="_blank" >
            10 Shocking Facts about Plastic  --  National Geographic </a>
            </div>

            </div>
        </div>
        <Footer/>
</>


}