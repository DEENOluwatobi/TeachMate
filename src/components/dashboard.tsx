import React from 'react'
import Leftpane from './Leftpane'
import Rightpane from './Rightpane'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-6'>
        <div className='col-span-1'>
            <Leftpane/>
        </div>
        <div className='col-span-5'>
            <Rightpane/>
        </div>
    </div>
  )
}

export default Dashboard