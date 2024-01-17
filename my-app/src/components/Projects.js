import React from 'react'
import './Projects.css';
import HeroSlider,{Slide} from 'hero-slider';
const TaskImg="https://i.ibb.co/CJsjkmn/Task-manager.jpg";
const PortImg="https://i.ibb.co/CvFGVMT/Portfolio.jpg";
const Dummy="https://i.ytimg.com/vi/MsoJQzG2FUU/maxresdefault.jpg";
const Dummy2="https://raw.githubusercontent.com/suraj122/AC-STYLE-images/master/html-css-projects/training-studio.png";
const Projects = () => {
  return (
    <>
    <div className='Sliderr'>
      <div className='Under'>
      <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChnage={(previousSlide,nextSlide)=>console.log("onBeforeChnage",previousSlide,nextSlide)}
      onChange={nextSlide=>console.log("onChange",nextSlide)}
      onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
      style={{
        backgroundColor:"rgba(0,0,0,0.33)"
      }}
      settings={{
        slidingDuration:200,
        slidingDelay:10,
        shouldAutoplay:true,
        shouldDisplayButtons:true,
        autoplayDuration:5000,
        Height:"70%"
      }} 
      >
        <Slide
        background={{
          backgroundImageSrc:TaskImg,
          backgroundAttachment:"fixed"
        }}
        />
        {/* <Slide
        background={{
          backgroundImageSrc:PortImg,
          backgroundAttachment:"fixed"
        }}
      /> */}
       <Slide
        background={{
          backgroundImageSrc:Dummy,
          backgroundAttachment:"fixed"
        }}
        />
        <Slide
        background={{
          backgroundImageSrc:Dummy2,
          backgroundAttachment:"fixed"
        }}
        />
      </HeroSlider>
      </div>
    </div>
      <div className='copyy'>
      <p>&copy;Copyright &copy;2023 All Rights Reserved</p>
    </div>
   </>
  )
}

export default Projects

