"use client"
import React, { useState } from 'react';
import Leftpane from './Leftpane'
import Rightpane from './Rightpane'
import Home from './dash-inc/Home';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
        case 'home':
            return <Home/>;         
        default:
            return null;
    }
};


  return (
    <div className='grid grid-cols-6 h-screen w-full p-2 gap-2'>
        <div className='col-span-1'>
            <Leftpane setCurrentPage={setCurrentPage}/>
        </div>
        <div className='col-span-5'>
            <Rightpane>{renderPage()}</Rightpane>
        </div>
    </div>
  )
}

export default Dashboard