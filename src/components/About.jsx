



import React from 'react'

const About = () => {
  return (
 
    <div  className='about h-screen  grid place-items-center mx-auto '>    
    

        <div className='container '>
         <div className="grid grid-cols-2 ">

               <div> 
                  <div className='flex  ' > 
                       
                      <h3 className='  font-bold font-mono  text-green-400 text-3xl ' > 01. <span className=' font-sans text-4xl   mt-0'>About me</span>  </h3> 
                      <hr className="  h-px  w-96 mt-6 ml-10 bg-green-300  border-0 rounded "/>
                  </div>
                  <p className=' font-light  text-2xl font-sans pt-5 text-gray-300 text-left  leading-relaxed '>
                    Fabrizio Cocirio born in Turin, Italy, on 1/10/1981.                                                  
                    I graduated in Architecture with a specialization in Urban and Territorial Design at the first Faculty 
                    of Architecture of the Polytechnic of Turin and since 2010 I have been enrolled in the Order of Architects, 
                    Planners and Landscape Architects of Turin. (OAT).
                    I currently work as a freelance (self-employed) in Spain, in Tarragona, the city where I live.
                    <br/>
                    <br/>

                    Fabrizio Cocirio born in Turin, Italy, on 1/10/1981.                                                  
                    I graduated in Architecture with a specialization in Urban and Territorial Design at the first Faculty 
                    of Architecture of the Polytechnic of Turin and since 2010 I have been enrolled in the Order of Architects, 
                    Planners and Landscape Architects of Turin. (OAT).
                    <br/>
                    <br/>
                    I currently work as a freelance (self-employed) in Spain, in Tarragona, the city where I live.
                    Fabrizio Cocirio born in Turin, Italy, on 1/10/1981.                                                  
                    I graduated in Architecture with a specialization in Urban and Territorial Design at the first Faculty 
                    of Architecture of the Polytechnic of Turin and since 2010 I have been enrolled in the Order of Architects, 
                    Planners and Landscape Architects of Turin. (OAT).
                    I currently work as a freelance (self-employed) in Spain, in Tarragona, the city where I live.

                  </p>
              </div>

              <div className=' w-2/3 pl-16 pt-28'>
                 
                  <img className= " immagine h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer " 
                  src="/src/assets/img/2.jpg" alt="image description"/>
              </div>
          
        </div>
  
    </div>
    </div>
    

    


    
  )
}

export default About