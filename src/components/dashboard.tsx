"use client"
import React, { useState } from 'react';
import Leftpane from './Leftpane'
import Rightpane from './Rightpane'
import Home from './dash-inc/Home';
import { useTheme } from '@/context/ThemeContext';
import Courses from './dash-inc/Courses';
import Lesson from './dash-inc/Lesson';
import Task from './dash-inc/Task';
import Rewards from './dash-inc/Rewards';
import Settings from './dash-inc/Settings';
import { Cancel, MenuSquare } from '@/icons';
import {motion} from "framer-motion";

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [menu, setMenu] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
        case 'home':
            return <Home setCurrentPage={setCurrentPage}/>;
        case 'courses':
            return <Courses/>  
        case 'lessons':
            return <Lesson/>
        case 'task':
            return <Task/>    
        case 'rewards':
            return <Rewards/>
        case 'settings':
            return <Settings/>
        default:
            return null;
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'dark-gradient-bg' : 'gradient-bg'} w-full h-full`}>
        <div className={`relative max-w-[1400px] mx-auto grid grid-cols-6 h-screen w-full p-1 md:p-2 gap-1 md:gap-2`}>
            <div className='hidden lg:grid col-span-1 w-full'>
                <Leftpane setCurrentPage={setCurrentPage}/>
            </div>
            <div className='col-span-6 lg:col-span-5'>
                <Rightpane>{renderPage()}</Rightpane>
            </div>

            <div className='fixed top-4 md:top-6 left-2 md:left-4 lg:hidden' onClick={()=>setMenu(!menu)}>
                <MenuSquare />         
            </div>
            {
                menu && (
                    <motion.div 
                        initial={{x: -500, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.3}}
                        onClick={()=>setMenu(!menu)}
                        className='fixed top-0 left-0 z-50 w-[200px] h-full bg-gray-100 border-[1px] border-secondaryColor'
                        >
                            <Leftpane setCurrentPage={setCurrentPage}/>

                            <span 
                            onClick={()=>setMenu(!menu)}
                            className='cursor-pointer absolute top-[20px] z-[51] left-[180px] w-8 h-8 text-red-500 flex items-center justify-center border bg-red-500 hover:text-white duration-300 rounded-full'>
                                <Cancel className='fill-[#fff]'/>
                            </span>
                        </motion.div>
                )
            }

        </div>

    </div>
  )
}

export default Dashboard