import React, { useRef } from 'react'
import "/src/App.css"
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {BrowserRouter,Link,Route} from "react-router-dom"

import {useNavigate} from 'react-router-dom';
import logo_2 from "../assets/img/logo_2.png";





function Navbar_c() {

const navigateTo = useNavigate ();
const handleClick=()=>navigateTo.push ('/contact');


const home = useRef(null);
const projects = useRef(null);
const about = useRef(null);
const contact = useRef(null);

const scrollToSection = (elementRef)=> {
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:'smooth',
  })
}


  return (
    <>
    <header className='navbar fixed 
     '>


      <div className=" prova 
      flex-grow 
      
      
      " 
      >
              <img className="w-20   ml-1  " src={logo_2} />
              <h1 className="text-white text-5xl mt-4 font-semibold font-mono ">F/C</h1>
      </div>


      <nav
                className={`${
                  open ? "block" : "hidden"
                  } w-full lg:flex lg:items-center lg:w-auto`}>


              <ul className=" navbartext lg:font-mono lg:text-xl text-gray-400 lg:flex lg:justify-between mr-8 ">
                
                <li>
                     <a onClick={()=> scrollToSection(home)}  
                     className="lg:px-5 py-2 block hover:text-white 
                     link ">
                     <span className="number">01.</span>Home </a> 
                </li>
                <li>
                     <a onClick={()=> scrollToSection(about)}  
                     className="lg:px-5 py-2 block hover:text-white 
                     link ">
                     <span className="number">02.</span>About </a> 
                </li>
                <li>
                     <a onClick={()=> scrollToSection(projects)}  
                     className="lg:px-5 py-2 block hover:text-white 
                     link ">
                     <span className="number">03.</span>Projects </a> 
                </li>
                <li>
                     <a onClick={()=> scrollToSection(contact)}  
                     className="lg:px-5 py-2 block hover:text-white 
                     link ">
                     <span className="number">04.</span>Contact </a> 
                </li>   
                <li>
                     <a onClick={()=> scrollToSection(contact)}  
                     className="lg:px-5 py-2 border border-3 text-red-200 block hover:text-white 
                     link ">
                     Resume </a> 
                </li>   
               

              </ul>

        </nav>


        </header>

      

        <div ref={home} className="home">
          <Home/>
        </div>
        <div ref={about} className="about">
          <About/>
        </div>
        <div ref={projects} className="projects">
          <Projects/>
        </div>
        <div ref={contact} className="contact">
          <Contact/>
        </div>


        



    </>
  )
}

export default Navbar_c
