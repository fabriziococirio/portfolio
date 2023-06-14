import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import logo_2 from "../assets/img/logo_2.png";

import {Link} from "react-router-dom"

import {useNavigate} from 'react-router-dom';

import { useRef } from "react";

import HomeP2 from './HomeP2';
import AboutP2 from './AboutP2';
import ProjectP2 from './ProjectP2';
import ContactP2 from './ContactP2';



 




function NavbarP2() {


  const [open, setOpen] = useState(false);


const navigateTo = useNavigate ();
const handleClick=()=>navigateTo.push ('/contact');

const HomeP2 = useRef(null);
const ProjectP2 = useRef(null);
const AboutP2 = useRef(null);
const ContactP2 = useRef(null);
 

const scrollToSection = (elementRef)=> {
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior:'smooth',
  })
}


  return (
    <header className="navbar py-8 ">
      {/*<div className=" xl:max-w-7xl xl:space-x-0   max-w-full   w-full  place-content-evenly ">*/}

      <div className=" flex-grow" >
        {/*<img className="w-20  border border-1 ml-1 flex-grow" src={logo_2} />*/}

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer "
          onClick={() => setOpen(!open)}
        />

        <div className=" flex-grow  flex ml-12  "> 
              <img className="w-20   ml-1  " src={logo_2} />
              <h1 className="text-white text-5xl mt-4 font-semibold font-mono ">F/C</h1>
        </div>

        </div> 



        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className=" navbartext font-mono text-xl text-gray-400 lg:flex lg:justify-between mr-8 ">
            
            
             <li onClick={()=> scrollToSection(HomeP2)} className="link">  
              <a className=" lg:px-5 py-2 block hover:text-white "  > <span className="number">01.</span>Home</a>
            </li>

            <li onClick={()=> scrollToSection(ProjectP2)} className="link">  
              <a className="lg:px-5 py-2 block hover:text-white " > <span className="number">02.</span>Projects</a>
            </li>

            <li onClick={()=> scrollToSection(AboutP2)} className="link">  
              <a className="lg:px-5 py-2 block hover:text-white " > <span className="number">03.</span>About</a>
            </li>

            <li onClick={()=> scrollToSection(ContactP2)} className="link"> 
              <a className="lg:px-5 py-2 block hover:text-white  "><span className="number">04.</span>Contact</a>
            </li>

           </ul>
        </nav>




        <div ref={HomeP2} className="Home">
          <HomeP2/>
        </div>
        <div ref={AboutP2} className="About">
          <AboutP2/>
        </div>
        <div ref={ProjectP2} className="Project">
          <ProjectP2/>
        </div>
        <div ref={ContactP2} className="Contact">
          <ContactP2/>
        </div>












      
    </header>
  );



  
}

export default NavbarP2;
