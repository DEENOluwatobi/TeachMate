import React from 'react'
import Calender from './side-inc/Calender'
import { useTheme } from '@/context/ThemeContext'

const SideNav = () => {;
  const { theme } = useTheme()
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} h-full w-full p-2`}>
      <Calender/>
    </div>
  )
}

export default SideNav