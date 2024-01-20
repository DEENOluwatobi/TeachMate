import React from 'react'
import HomeGraph from '../charts/HomeGraph'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='w-full h-[20em] flex justify-center items-center p-2 bg-gray-100 rounded-md'>
          <div className='flex'>
          
          </div>
          <HomeGraph/>
        </div>

        <div className='p-2 h-full bg-gray-100 rounded-md'>

        </div>
      </div>
    </div>
  )
}

export default Home