import React, { ReactNode } from 'react'
import DashNav from './DashNav';

interface RightPaneProps {
  children: ReactNode;
}

const Rightpane: React.FC<RightPaneProps> = ({ children }) => {
  return (
    <div>
      <DashNav/>
      <div className='p-2'>
        {children}
      </div>
    </div>
  )
}

export default Rightpane