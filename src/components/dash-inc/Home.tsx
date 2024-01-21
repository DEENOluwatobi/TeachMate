"use client"
import React, { useState } from 'react'
import HomeGraph from '../charts/HomeGraph'
import { ArrowDown, Board, Calender, FileAssign, FileComplete, FileUncomplete, PlusCircle, Team } from '@/icons'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import Collab from '../inc/Collab'

interface HomeProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { theme } = useTheme();  
  const [currentPage, setCurrentPageLocal] = useState<string>('home');

  const handlePageChange = (page: string) => {
      setCurrentPage(page);
      setCurrentPageLocal(page);
  };

  return (
    <div className=' flex flex-col gap-2'>
      <div className='grid grid-cols-2 gap-2'>
        <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} w-full h-[20em] gap-2 flex flex-col justify-center items-center p-2 bg-gray-100 rounded-md overflow-hidden`}>
          
          <div className='w-full flex justify-between items-center px-2'>
            <div className='flex justify-center items-center gap-1 shadow-sm shadow-gray-300 rounded-md p-2'>
              <div className='w-9 h-9 border-[1px] border-primaryColor rounded-md flex justify-center items-center'><Board className='[&>g]:stroke-[#7a64f1]'/></div>
              <div className='flex flex-col leading-4'>
                <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>Activities</span>
                <span className='text-[.7em] font-poppins text-gray-600'>Activity details</span>
              </div>
            </div>

            <div className='h-full flex justify-center items-center shadow-sm shadow-gray-300 rounded-md p-2'>
              <select className='appearance-none bg-transparent border-none font-barlow font-medium text-[.9em] text-gray-500 outline-none '>
                <option>This week</option>
                <option>1 week ago</option>
                <option>2 weeks ago</option>
              </select>
              <div className="inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ArrowDown className='w-5 h-5 mt-1'/>
              </div>
            </div>
          </div>

          <HomeGraph/>
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} p-2 h-full bg-gray-100 rounded-md flex flex-col gap-4 pb-4`}>
          <div className='w-full flex justify-between items-center px-2'>
            <div className='flex justify-center items-center gap-1 shadow-sm shadow-gray-300 rounded-md p-2'>
              <div className='w-9 h-9 border-[1px] border-primaryColor rounded-md flex justify-center items-center'><Calender size='mid' className='[&>g]:stroke-[#7a64f1]'/></div>
              <div className='flex flex-col leading-4'>
                <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>Progress Task</span>
                <span className='text-[.7em] font-poppins text-gray-600'>Progress details</span>
              </div>
            </div>

            <Link href="#task" onClick={() => handlePageChange('task')} className='h-full flex justify-center gap-1 bg-blue-100 items-center shadow-sm shadow-gray-300 rounded-md p-2'>
              <span className='font-barlow font-medium text-[.9em] text-gray-500 '>
                Add task
              </span>
              <div className="inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <PlusCircle className='w-5 h-5'/>
              </div>
            </Link>

          </div>

          <div className='grid grid-cols-3 gap-4 px-4 h-full pt-3 pb-5'>

            <div className='bg-primaryColor h-full w-full shadow-sm shadow-gray-300 rounded-xl bg-opacity-70 flex justify-center gap-4 items-center flex-col py-4 px-2'>
              <div className='bg-white bg-opacity-60 p-4 rounded-lg shadow-md w-14 h-14 flex justify-center items-center'>
                <FileUncomplete className='[&>path]:fill-[#3d28b5] w-10 h-10' size='lg'/>
              </div>
              <div className='flex flex-col justify-center items-center text-white font-barlow'>
                <span className='font-thin text-[.9em]'>Total tasks</span>
                <span className='font-medium text-[2em]'>12</span>
              </div>
            </div>

            <div className='bg-secondaryColor h-full w-full shadow-sm shadow-gray-300 rounded-xl bg-opacity-70 flex justify-center gap-4 items-center flex-col'>
              <div className='bg-white bg-opacity-60 p-4 rounded-lg shadow-md w-14 h-14 flex justify-center items-center'>
                <FileAssign className='[&>path]:fill-[#3d28b5] w-10 h-10' size='lg'/>
              </div>
              <div className='flex flex-col justify-center items-center text-white font-barlow'>
                <span className='font-thin text-[.9em]'>Assigned</span>
                <span className='font-medium text-[2em]'>8</span>
              </div>
            </div>

            <div className='bg-tertiaryColor h-full w-full shadow-sm shadow-gray-300 rounded-xl bg-opacity-70 flex justify-center gap-4 items-center flex-col'>
              <div className='bg-white bg-opacity-60 p-4 rounded-lg shadow-md w-14 h-14 flex justify-center items-center'>
                <FileComplete className='[&>path]:fill-[#3d28b5] w-10 h-10' size='lg'/>
              </div>
              <div className='flex flex-col justify-center items-center text-white font-barlow'>
                <span className='font-thin text-[.9em]'>Completed</span>
                <span className='font-medium text-[2em]'>4</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} p-2 bg-gray-100 rounded-md overflow-hidden w-full h-full flex flex-col gap-2`}>

        <div className='w-full flex justify-between items-center px-2'>

            <div className='flex justify-center items-center gap-1 shadow-sm shadow-gray-300 rounded-md p-2'>
              <div className='w-9 h-9 border-[1px] border-primaryColor rounded-md flex justify-center items-center'><Team size='mid' className='fill-[#7a64f1]'/></div>
              <div className='flex flex-col leading-4'>
                <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>Task Collaboration</span>
                <span className='text-[.7em] font-poppins text-gray-600'>Team&apos;s work</span>
              </div>
            </div>

            <div className='flex gap-1'>
              <span className='bg-white bg-opacity-60 rounded-lg shadow-md w-9 h-9 flex justify-center items-center cursor-pointer'>
                <ArrowDown className='w-5 h-5 rotate-90'/>
              </span>
              <span className='bg-white bg-opacity-60 rounded-lg shadow-md w-9 h-9 flex justify-center items-center cursor-pointer'>
              <ArrowDown className='w-5 h-5 rotate-[270deg]'/>
              </span>
            </div>
          
        </div>

        <div className='bg-white bg-opacity-60 rounded-lg shadow-md w-full h-[2px] '></div>

        <div className='w-full'>
            <Collab/>
        </div>
      </div>
    </div>
  )
}

export default Home