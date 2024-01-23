import React, { ReactNode } from 'react'
import DashNav from './DashNav';
import SideNav from './SideNav';

interface RightPaneProps {
  children: ReactNode;
}

const Rightpane: React.FC<RightPaneProps> = ({ children }) => {
  return (
    <div className='relative flex flex-col gap-1 md:gap-2 h-full'>
      <DashNav/>

      <div className='grid grid-cols-4 h-full gap-2'>
        <div className='col-span-4 md:col-span-3 h-[calc(100vh-5.5em)] overflow-y-scroll rounded-md scroll-smooth'>
          {children}
        </div>

        <div className='hidden md:col-span-1 h-full rounded-md'>
          <SideNav/>
        </div>
      </div>
    </div>
  )
}

export default Rightpane