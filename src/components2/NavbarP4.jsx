import React, { useRef } from 'react'


import {Link} from "react-router-dom"

import {useNavigate} from 'react-router-dom';

import HomeP2 from './HomeP2';
import AboutP2 from './AboutP2';
import ProjectP2 from './ProjectP2';
import ContactP2 from './ContactP2';








function NavbarP2() {

  
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




  return (
     <>



     

<header > 

 

      <nav className='bg-gray-100 fixed inset-x-0'>
            <ul>
               
                <li onClick={()=> scrollToSection(Home)} className="link">Home</li>
                <li onClick={()=> scrollToSection(About)} className="link">About</li>
                <li onClick={()=> scrollToSection(Project)} className="link">Projects</li>
                <li onClick={()=> scrollToSection(Contact)} className="link">Contact</li>
        
               
            </ul>
        </nav>



      

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

</header>






    </> 
  )
}

export default NavbarP2
