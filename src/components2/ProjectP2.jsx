import React from 'react'




const ProjectP2 = () => {
  return (
    


    <div className='projects  grid place-items-center  mx-auto  ' >

      <div className='flex mt-20' > 
                       
            <h3 className='  font-bold font-mono  text-green-400 text-3xl ' > 02. <span className=' font-sans text-4xl   mt-0'>Projects</span>  </h3> 
            <hr className="  h-px  w-96 mt-6 ml-10 bg-green-300  border-0 rounded "/>
      </div>
      

    {/* Responsive grid */}

      <div className="container my-20 h-max" > 
        <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2  gap-4 place-items-center '>
          

          {/* Rettangolo_01 */}
          <div className='bg-blue-200 box-border h-96 w-72 p-4 border-4'>
            <img className="h-40 w-72 " src='https://www.mubis.es/media/users/12828/295269/robocop-la-serie-saldra-en-el-mercado-estadounidense-original.jpg'/>
            <div className='bg-red-200  h-44 my-3'>
              <h1 className='text-bold'>Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova</h1>
            </div>
          </div>

          {/* Rettangolo_02 */}
          <div className='bg-blue-200 box-border h-96 w-72 p-4 border-4'>
            <img className="h-40 w-72" src='https://www.italia.it/content/dam/tdh/es/interests/piemonte/torino/torino-in-48-ore/media/20220223132855-piazza-san-carlo-torino-piemonte-shutterstock-2102981095-rid.jpg'/>
            <div className='bg-red-300  h-44 my-3'>
              <h1 className='text-bold'>Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova Prova</h1>
            </div>
          </div>
          

          
          <div className='bg-blue-500 box-border h-96 w-72 p-4 border-4'>C</div>
          
          <div className='bg-blue-600 box-border h-96 w-72 p-4 border-4'>D</div>

          <div className='bg-blue-700 box-border h-96 w-72 p-4 border-4'>E</div>

          <div className='bg-blue-800 box-border h-96 w-72 p-4 border-4'>F</div>
        
        
        </div>
      </div>


    </div>
    
  )
}

export default ProjectP2