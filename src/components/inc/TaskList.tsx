"use client"
import { useTheme } from '@/context/ThemeContext';
import { Board, Delete, DotMenu, Edit, Mark, Task } from '@/icons';
import React, {useState, useEffect, useRef} from 'react';
// import { useSelector } from 'react-redux';
// import { selectTasks } from '@/redux/tasksSlice';

interface Task {
  id: React.Key;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
}


const TaskList: React.FC = () => {
    const { theme } = useTheme();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [ menu, setMenu ] =  useState<number | null>(null);

    const handleMenuClick = (index: number) => {
      setMenu(index === menu ? null : index);
    };
    
    // CLOSE MENU ON OUT CLICK
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setMenu(null);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    const tasks: Task[] = [
      {
        id: 1,
        title: 'JavaScript Project',
        description: 'Web design - Collaborate',
        dueDate: '2024-02-01',
        status: 'pending',
      },
      {
        id: 2,
        title: 'Python Task',
        description: 'Introduction to python',
        dueDate: '2024-04-03',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Figma Community Project',
        description: 'UI Kit - Collaborate',
        dueDate: '2024-07-13',
        status: 'pending',
      },
      {
        id: 4,
        title: 'Data Structure Project',
        description: 'Algorithm - Collaborate',
        dueDate: '2024-04-01',
        status: 'pending',
      },
      {
        id: 5,
        title: 'CSS Task',
        description: 'Bootstrap',
        dueDate: '2024-01-30',
        status: 'completed',
      },
      
    ];

    //  const tasks = useSelector(selectTasks) || task;

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} h-full w-full flex-col p-2 flex gap-2 rounded-md`}>
        <div className='flex justify-start items-center gap-1 shadow-sm shadow-gray-300 rounded-md p-2'>
          <div className='w-9 h-9 border-[1px] border-primaryColor rounded-md flex justify-center items-center'><Task className='fill-[#7a64f1]'/></div>
            <div className='flex flex-col leading-4'>
              <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>Tasks List</span>
            </div>
        </div>
        
        <div className='h-full w-full'>
            <table className='w-full'>
                <thead>
                    <tr className='text-[.8em] text-primaryColor bg-purple-200 py-4 rounded-sm font-medium'>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id} className={`${task.status === 'pending' ? 'bg-gray-100' : 'bg-green-100'} border-b-[1px] border-[#d1d1d1df] text-gray-500 text-[.9em] font-barlow`}>
                            <td >{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate}</td>
                            <td className={`${task.status === 'pending' ? 'text-red-400' : 'text-green-500'} `}>{task.status}</td>
                            <td className='relative' key={task.id} onClick={() => handleMenuClick(index)}>
                              <DotMenu 
                                className='rotate-90 fill-[#7a64f1] cursor-pointer' 
                                size='md'
                              />

                              {
                                menu === index && (
                                  <div key={task.id} className='flex flex-col justify-center items-start gap-2 absolute -top-20 right-0 border-[1px] bg-white shadow p-3 '>
                                    <span className='flex justify-center items-center gap-1 cursor-pointer'>
                                      <Edit className='fill-[#7a64f1]'/>
                                      Edit
                                    </span>

                                    <span className='flex justify-center items-center gap-1 cursor-pointer'>
                                      <Delete className='fill-[#f01a1a]'/>
                                      Delete
                                    </span>

                                    <span className='flex justify-center items-center gap-1 cursor-pointer'>
                                      <Mark className='fill-[#53ce0b]'/>
                                      Mark
                                    </span>

                                    <span 
                                      onClick={() => handleMenuClick(index)}
                                      className='absolute -top-1 -right-1 cursor-pointer shadow-sm shadow-secondaryLight rounded-full w-4 h-4 flex justify-center items-center font-medium pb-[2px] text-white bg-red-500'
                                    >
                                      x
                                    </span>
                                  </div>
                                )
                              }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>

  );
};

export default TaskList;
