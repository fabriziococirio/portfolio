
import React, { useRef } from 'react'

import { useState } from "react";



import {useNavigate} from 'react-router-dom';

import HomeP2 from '../components2/HomeP2';
import AboutP2 from '../components2/AboutP2';
import ProjectP2 from '../components2/ProjectP2';
import ContactP2 from '../components2/ContactP2';





function Nav() {

  
  const navigateTo = useNavigate ();
  const handleClick=()=>navigateTo.push ('/contact');
  
  
  const Home = useRef(null);
  const Project = useRef(null);
  const About = useRef(null);
  const Contact = useRef(null);
  
  const scrollToSection = (elementRef)=> {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth',
    })
  }
  
  
const [open,setOpen]=useState(false);
  
  
    return (
       
       
       


<div className='shadow-md w-full fixed top-0 left-0'>

           {/* logo */}
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
           <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
              <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <ion-icon name="logo-ionic"></ion-icon>
              </span>
              
              iosonococi
            </div>

      {/* menu*/}
<div onClick={()=>setOpen(!open)} 
className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
<ion-icon name={ open ? 'close': 'menu'}></ion-icon>
</div>




        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        
        <li onClick={()=> scrollToSection(Home)} className="link md:ml-8 text-xl text-red-400 hover:text-gray-400 duration:500">Home</li>
        <li onClick={()=> scrollToSection(About)} className="link md:ml-8 text-xl text-red-400 hover:text-gray-400 duration:500">About</li>
        <li onClick={()=> scrollToSection(Project)} className="link md:ml-8 text-xl text-red-400 hover:text-gray-400 duration:500">Projects</li>
        <li onClick={()=> scrollToSection(Contact)} className="link md:ml-8 text-xl text-red-400 hover:text-gray-400 duration:500 ">Contact</li>
                

            
        </ul>

  
   
        </div>
  
  
        {/*
  
          <div ref={Home} className="Home">
            <HomeP2/>
          </div>
          <div ref={About} className="About">
            <AboutP2/>
          </div>
          <div ref={Project} className="Project">
            <ProjectP2/>
          </div>
          <div ref={Contact} className="Contact">
            <ContactP2/>
          </div>
   */}

  
  
  
  
      </div> 
    )
  }
  
  export default Nav
  