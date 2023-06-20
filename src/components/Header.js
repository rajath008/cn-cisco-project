import React from 'react'
import '../App.css'
import BugReportIcon from '@mui/icons-material/BugReport';


const Header = () => {
 
  return (

    <div className='pt-32 pb-32 pr-10 pl-10 bg-gradient-to-b from-gray-800 to-black text-white flex flex-row justify-between'>
    <div>
    <h1 class="mt-10 animate-typing overflow-hidden whitespace-nowrap  border-r-white pr-5 text-6xl text-white font-bold">Welcome Back <span className='text-yellow-500'>. . .</span></h1>        
    
    <h1 class="mt-5 mb-10 font-mono  animate-typing overflow-hidden whitespace-nowrap  text-yellow-500 border-r-white pr-5 text-4xl  font-bold">"UserName"</h1>        
    </div>
    <div className='mt-10'>
      
      <BugReportIcon sx={{fontSize:70}}/>
    </div>
    
    </div>
    
  )
}

export default Header