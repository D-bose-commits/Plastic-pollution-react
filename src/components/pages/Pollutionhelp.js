import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArticleCardPH from '../ArticleCardPH';

export default function Pollutionhelp() {
  return  <>

        <ArticleCardPH />
        <div className='articles'>

            <div className='article-container'>
            <h1>--How to reduce your own Pollution--</h1>

            <div className='articles-wrapper'>
            <a href="https://www.oceanicsociety.org/blog/1720/7-ways-to-reduce-ocean-plastic-pollution-today" target="_blank" >
            7 Ways To Reduce Ocean Plastic Pollution Today  --  Oceanic Society</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.citytosea.org.uk/12-ways-to-reduce-plastic-pollution/" target="_blank" >
            12 ways to reduce plasticpollution small changes that make a big difference  --  City to Sea</a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://friendsoftheearth.uk/plastics" target="_blank" >
            Plastic pollution How to reduce plastic in the ocean  --  Friends of the Earth </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.wwf.org.uk/updates/ten-tips-reduce-your-plastic-footprint" target="_blank" >
            Ten tips to reduce your plastic footprint  --  World Wide Fund for Nature </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.glo-be.be/en/articles/14-tips-prevent-plastic-pollution" target="_blank" >
            14 tips to prevent plastic pollution  --  Glo-be </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.earthday.org/what-you-can-do-to-end-plastic-pollution/" target="_blank" >
            What can you do to end plastic pollution --  EarthDay </a>
            </div>

            <div className='articles-wrapper'>
            <a href="https://www.wri.org/blog/2020/05/how-to-reduce-plastic-ocean-pollution" target="_blank" >
            How to Reduce Plastic and Other Ocean Pollution Simultaneously -- World Resources Institute </a>
            </div>

            </div>
        </div>
        <Footer/>
</>


}