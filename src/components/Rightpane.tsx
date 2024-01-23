import React, { ReactNode } from 'react'
import DashNav from './DashNav';
import SideNav from './SideNav';

interface RightPaneProps {
  children: ReactNode;
}

const Rightpane: React.FC<RightPaneProps> = ({ children }) => {
  return (
    <div className='relative flex flex-col gap-1 md:gap-2 h-full '>
      <DashNav/>
     
      <div className='flex h-full gap-2 w-full'>

        <div className='w-full lg:w-[75%] h-[calc(100vh-5.5em)] overflow-y-scroll rounded-md scroll-smooth'>
          {children}
        </div>

        <div className='hidden lg:flex lg:w-[25%] h-[calc(100vh-5.5em)] overflow-y-scroll scrollbar-hide rounded-md'>
          <SideNav/>
        </div>
      </div>
    </div>
  )
}

export default Rightpane