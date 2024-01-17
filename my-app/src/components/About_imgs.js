import React from 'react'
import './about_ims.css';
const About_imgs = () => {
  return (
    <>
    <div>
       <div className="images">
     <a href="https://www.instagram.com/i_diksha01/" target="_blank"> <img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_1280.png" alt="Instalogo" className="Instalogo"/></a>
     <a href="mailto:diksha0446.be21@chitkara.edu.in" target="_blank"><img src="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_960_720.png" alt="email" className="email"/></a><br/>
     <a href="https://github.com/diksha6036" target="_blank"><img src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e" alt="gitlogo" className="gitlogo"/></a>
     <a href="tel:+919393400003" target="_blank">
      <img src="https://assets.stickpng.com/thumbs/5a452570546ddca7e1fcbc7d.png" alt="tele" className="tele"/>
     </a>
   </div>
    </div>
   <div className='copy'>
      <p>&copy;Copyright &copy;2023 All Rights Reserved</p>
    </div>
    </>
  )
}

export default About_imgs
