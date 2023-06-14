import React from 'react'



const HomeP2 = () => {
  return (
    <> 


    <div className=' home mx-auto  h-screen w-full    '>

        <div className='py-80   w-2/3 mx-auto'> 

          <p  className  ="text-left  font-mono text-green-400 text-3xl ">
            Hi, my name is
          </p>

          <h1  className="text-left  font-bold    text-8xl  text-gray-300 ">
          Fabrizio Cocirio.
          </h1>

          <br/>
          <h3 className="text-left  font-bold   text-gray-500 text-6xl ">  Frontend developer & Architect
          </h3>
          <br/>
          <p style={{color:"#00FA9A"}}  className='text-left    text-gray-200 text-3xl'> Architecture inspired me.</p>
          <br/>
          <p style={{color:"#00FA9A"}}  className='text-left     text-gray-200 text-3xl'> Coding translates my  <span className="text-red-200">ideas</span> into <span>language</span>.</p>
          
        
        </div>



        

    </div>
    
    </>
    

  )
}

export default HomeP2