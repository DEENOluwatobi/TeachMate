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

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState<string>('home');

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
        <div className={` max-w-[1400px] mx-auto grid grid-cols-6 h-screen w-full p-2 gap-2`}>
            <div className='col-span-1'>
                <Leftpane setCurrentPage={setCurrentPage}/>
            </div>
            <div className='col-span-5'>
                <Rightpane>{renderPage()}</Rightpane>
            </div>
        </div>

    </div>
  )
}

export default Dashboard