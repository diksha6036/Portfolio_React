import './NavBar.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
    <div className='header'>
      <Link to="/">
        <h1 className='heading_port'>Portfolio</h1>
      </Link>
      <ul className='nav-items'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About </Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="https://github.com/diksha6036" target="_blank">Github</Link>
        </li>
        <li className='Subparent' >
        <li> <a href="/deployed" className='Subparent' >
                Deployed Projects</a>  
                <div className='submenu'><ul><li><a href="https://diksha6036.github.io/TaskManager_Website/" target='_blank'>Task Manager</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Quizify</a></li>
            <li><a href="/">Timer</a></li></ul></div></li>
          
          
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
       <hr className='hrTag'/>
    </>
  )
}
