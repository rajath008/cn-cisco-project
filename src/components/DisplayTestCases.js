import React from 'react'
import BugReportIcon from '@mui/icons-material/BugReport';
import InfoIcon from '@mui/icons-material/Info';


const quest = [
    {
        num: 1,
        name: "Write a python program to find the number of distinct elements in a given array  ",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"


    },
    {
        num: 2,
        name: "Write a python program to implement linear search and binary search",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"



    },
    {
        num: 3,
        name: "Write a python program to read,print,add and multiply 2 matrices",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"


    },
    {
        num: 4,
        name: "Write a python program to implement a uniform cost search algorithm.",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"


    },
    {
        num: 5,
        name: "Write a python program to implement the tic-tac-tow game and demonstrate the steps.",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"


    },
    {
        num: 6,
        name: "Write a python program to implement Map coloring problem using Graph coloring algorithm.",
        testcase: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero!"


    }
]
const DisplayTestCases = (props) => {
    return (
        <>
        <div className='p-10 bg-black flex-row flex justify-between text-white text-2xl '>
            <h1>Submitted Test cases for <span className='text-yellow-400'>{props.name} </span></h1>
      
      <BugReportIcon sx={{fontSize:40}}/>
        </div>
        <div className='bg-gradient-to-b from-yellow-500 justify-between align-middle to-yellow-400 grid grid-cols-2  '>
        {
            quest.map((q) => {
                return (
                    
                    <div class="flex flex-col rounded-lg ml-auto mr-auto mt-10 mb-10 max-w-sm bg-black text-white pb-5 pt-5 overflow-hidden shadow-lg">
                    <div class="px-10 py-5">
                      <div class="font-bold text-xl mb-2">{q.num}.{q.name}</div>
                      
                    </div>
                    <div className='flex justify-center items-center m-10'>
                        <textarea className='text-black p-3' name="" id="" cols="30" rows="10" value={q.testcase} readOnly></textarea>
                    </div>
                    <div className='flex justify-between'>
                    <button className='m-auto bg-green-400 text-white p-3 rounded-lg hover:bg-white hover:text-green-500'>Accept</button>
                    <button className='m-auto bg-red-600 text-white p-3 rounded-lg hover:bg-white hover:text-red-500'>Decline</button>
                    </div>
                   
                  </div>
                  
                )
            }
            )
        }
        </div>
        </>
    )
}
export default DisplayTestCases