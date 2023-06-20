import React from 'react'
import BugReportIcon from '@mui/icons-material/BugReport';
import InfoIcon from '@mui/icons-material/Info';



const Form = () => {
  return (
  <>
    <div className='p-10 bg-black flex-row flex justify-between text-white text-2xl '>
            <h1>Input test cases <span className='text-yellow-400'>. . .</span></h1>
      
      <BugReportIcon sx={{fontSize:40}}/>
        </div>
        <div className='p-20 bg-gradient-to-b flex justify-center items-center from-yellow-500  align-middle to-yellow-400   '>
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Subject
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Autofill"/>
     
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Question Number
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Autofill"></input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Question
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Autofill"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Test cases
      </label>
      <textarea maxLength={30} class="mb-3 pb-20 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Testcases"/>
      <p className="pt-3 text-gray-700">

<span><InfoIcon className='mr-2 '></InfoIcon></span> Note : If multiple test cases are present seperate the inputs with a space in between them.
</p>
    </div>
   
    
  </div>
  <button  className='mt-10 align-middle bg-black text-white p-4 rounded-lg hover:bg-white hover:text-yellow-500 '>Submit</button>

</form>
    </div>
    </>
  )
}

export default Form