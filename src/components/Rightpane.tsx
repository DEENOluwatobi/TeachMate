import React, { ReactNode } from 'react'
import DashNav from './DashNav';

interface RightPaneProps {
  children: ReactNode;
}

const Rightpane: React.FC<RightPaneProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-2'>
      <DashNav/>
      <div className='p-2 h-full bg-gray-100 rounded-md'>
        {children}
      </div>
    </div>
  )
}

export default Rightpane