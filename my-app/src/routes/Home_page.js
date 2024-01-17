/*
Create a portfolio website using react js 
Where there is a 
Landing page (about yourself )
Contact us form 
About me page (carousel)
My projects ( demo of your project) 
Github 
Deployed projects ( on new tab ) 
Cscd full form for deployed
*/
import React from 'react'
import NavBar from '../components/NavBar'
import SideImg from '../components/Home_page_side_img'
import MidCont from '../components/Mid_content_home';
import Copy from '../components/copyright';

const Home_page = () => {
  return (
    <div>
       <NavBar></NavBar>
       <SideImg></SideImg>
       <MidCont></MidCont>
       <Copy></Copy>
    </div>
  )
}

export default Home_page


