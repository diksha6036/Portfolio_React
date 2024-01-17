import React from 'react'
import './About_S.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
const About_S = () => {
    const [first]=useTypewriter({
        words:["→ a Full Stack Developer !"]
    });
    const [second]=useTypewriter({
        words:["I have a strong command over both front end and back end technologies,allowing me to build complete and scable applications. On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React and Angular."]
    });
    const [third]=useTypewriter({
        words:["→ having a Good knowledge of C , C++ , Java !"]
    });
    const [fourth]=useTypewriter({
        words:["Skilled software developer with a strong command of C, C++, and Java programming languages. Experienced in designing, developing, and optimizing software applications, with a proven track record of delivering high-quality code on time and within budget. Proficient in problem-solving, algorithm design, and software architecture."]
    });
    const [fifth]=useTypewriter({
        words:["→ very Disciplined and Focused"]
    });
    const [sixth]=useTypewriter({
        words:["In my journey of personal and professional development, I take pride in holding the prestigious NCC 'A' Certificate. This certification reflects not only my commitment to discipline and leadership but also my dedication to serving my community and country. I bring the values of teamwork, leadership, and a strong work ethic, instilled by my NCC experience, to every endeavor I undertake."]
    });

    
  return (
    <>
    <div className='cont'>
   <h1 className='Heading'>Hi, My name is <span className='Diksha'>Diksha</span> and I am </h1>
   <span className='FSD'>{first}</span><br />
   <div className='sec'>
   <span >{second}</span></div><br />
   <div className='third'><span>{third}</span></div><br />
   <div className='fourth'><span>{fourth}</span></div><br />
   <div className='fifth'><span>{fifth}</span></div><br />
   <div className='sixth'><span>{sixth}</span></div><br />

   <br /><br />
   <span></span>

   </div>
   <div className='copyyy'>
      <p>&copy;Copyright &copy;2023 All Rights Reserved</p>
    </div>
   </>
  )
}

export default About_S

