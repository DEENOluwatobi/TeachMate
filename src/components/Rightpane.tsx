import React, { ReactNode } from 'react'
import DashNav from './DashNav';
import SideNav from './SideNav';

interface RightPaneProps {
  children: ReactNode;
}

const Rightpane: React.FC<RightPaneProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-2 h-full'>
      <DashNav/>

      <div className='grid grid-cols-4 h-full gap-2'>
        <div className='col-span-3 p-2 h-full bg-gray-100 rounded-md'>
          {children}
        </div>

        <div className='col-span-1 p-2 h-full bg-gray-100 rounded-md'>
          <SideNav/>
        </div>
      </div>
    </div>
  )
}

export default Rightpane