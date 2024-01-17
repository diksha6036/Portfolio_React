import './App.css';
import React from 'react';
import './index.css';
import About from './routes/About_me';
import Home from './routes/Home_page';
import Contact from './routes/Contact_me';
import Deployed from './routes/Deployed_projects';
// import Github from './routes/Github';
import Projects from './routes/My_projects'; 
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/deployed" element={<Deployed/>}/>
        {/* <Route path="/github" element={<Github/>}/> */}
        <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </>
  );
}

export default App;
