import React from 'react'
import TaskCollab from '../inc/TaskCollab'
import { useTheme } from '@/context/ThemeContext'
import TaskList from '../inc/TaskList'

const Task = () => {
  const { theme } = useTheme()
  return (
    <div className='w-full flex flex-col h-full gap-2'>
      <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} w-full p-2`}>
        <TaskCollab/>
      </div>

      <div>
        <TaskList/>
      </div>
    </div>
  )
}

export default Task