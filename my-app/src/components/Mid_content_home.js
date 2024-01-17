import React from 'react'
import './Mid_content_home.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

export default function Mid_content_home() {
    const [text]=useTypewriter({
        words:['Web development','C Programming','Java','C++'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:90,

    });
  return (
    <div>
      <div>
        <h2>Hi, My Name is <span className='Diksha'> Diksha </span>and I am</h2>
        <h3> skilled in <span className='textt'>{text}</span><span><Cursor/></span></h3>

      </div>
      <Link to="/about" className='linkc'> <button className='button1' >About</button></Link>
      <Link to="/contact" className='linkc'> <button className='button2'>Contact</button></Link>
    </div>
  )
}
