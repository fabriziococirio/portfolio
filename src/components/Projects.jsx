import React from 'react'




const projects = () => {
  return (
    


    <div className='projects  grid place-items-center  mx-auto  ' >

      <div className='flex mt-20' > 
                       
            <h3 className='  font-bold font-mono  text-green-400 text-3xl ' > 02. <span className=' font-sans text-4xl   mt-0'>Projects</span>  </h3> 
           
      </div>
      

    {/* Responsive grid */}

      <div className="container my-20 h-max" > 
        <div className='grid grid-cols-2   md:grid-cols-2 lg:grid-cols-2    '>
          
          {/* Rettangolo_SX */}
          <div className=' image h-96 w-400  border-2 inline-block '>
            <img className="h-40 w-72 " src='../assets/projects/js-documentation.PNG'/>
          </div>

         {/* Rettangolo_DX */}
        
          <div className=' rectangle h-92 w-3/5 '>
             <div>
                <h1 className=' titulo1 text-white text-right '> Project 01</h1>
                <h1 className=' titulo2 text-white text-right'> Halcyon Theme</h1>
             </div>
             <div className=' w-5/6 float-right text-right'>
                <p className=' text-p text-white leading-7  '>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                 Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
             </div>
          </div>
        </div>
      </div>


      <div className="container my-20 h-max" > 
        <div className='grid grid-cols-2   md:grid-cols-2 lg:grid-cols-2    '>
          
          {/* Rettangolo_SX */}
          <div className=' image h-96 w-400  border-2 inline-block '>
            <img className="h-40 w-72 " src=''/>
          </div>

         {/* Rettangolo_DX */}
        
          <div className=' rectangle h-92 w-3/5 '>
             <div>
                <h1 className=' titulo1 text-white text-right '> Project 01</h1>
                <h1 className=' titulo2 text-white text-right'> Halcyon Theme</h1>
             </div>
             <div className=' w-5/6 float-right text-right'>
                <p className=' text-p text-white leading-7  '>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                 Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
             </div>
          </div>
        </div>
      </div>





    </div>
    
  )
}

export default projects