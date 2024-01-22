"use client"
import { useTheme } from '@/context/ThemeContext';
import { Cancel, Delete, DotMenu, Edit, Mark, PlusCircle, Task } from '@/icons';
import React, {useState, useRef} from 'react';
import { DatePicker } from "antd";
import Modal from '../modals/Modal';
import { motion } from "framer-motion"
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
    const [ addTask, setAddTask ] = useState(false);
    // const [markTask, setMarkTask] = useState<'pending' | 'completed'>('pending');
    const [ title, setTitle] = useState('');
    const [ desc, setDesc] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isDescActive, setIsDescActive] = useState(false);
    const [date, setDate] = useState(new Date());

    const DateChange = () => {
      setDate(date);
    }

    const handleMenuClick = (index: number) => {
      setMenu(index === menu ? null : index);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
      const q = event.target.value;
        if (q !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    };

    const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDesc(event.target.value);
      const q = event.target.value;
        if (q !== '') {
          setIsDescActive(true);
        } else {
          setIsDescActive(false);
        }
    };

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

    const [ editTask, setEditTask ] = useState(Array(tasks.length).fill(false));
    const [ deleteTask, setDeleteTask ] = useState(Array(tasks.length).fill(false));
    const [ markTask, setMarkTask ] = useState(Array(tasks.length).fill(false));

    const openModal = (index: number) => {
      const newOpenTasks = [...editTask];
      newOpenTasks[index] = true;
      setEditTask(newOpenTasks);
    };

    const closeModal = (index: number) => {
      const newOpenTasks = [...editTask];
      newOpenTasks[index] = false;
      setEditTask(newOpenTasks);
    };

    const openDeleteModal = (index: number) => {
      const newDeleteTasks = [...deleteTask];
      newDeleteTasks[index] = true;
      setDeleteTask(newDeleteTasks);
    };

    const closeDeleteModal = (index: number) => {
      const newDeleteTasks = [...deleteTask];
      newDeleteTasks[index] = false;
      setDeleteTask(newDeleteTasks);
    };

    const openMarkModal = (index: number) => {
      const newMarkTasks = [...markTask];
      newMarkTasks[index] = true;
      setMarkTask(newMarkTasks);
    };

    const closeMarkModal = (index: number) => {
      const newMarkTasks = [...markTask];
      newMarkTasks[index] = false;
      setMarkTask(newMarkTasks);
    };

    //  const tasks = useSelector(selectTasks) || task;

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} relative h-full w-full flex-col p-2 flex gap-2 rounded-md`}>
      <div className='w-full flex justify-between items-center'>
        <div className='flex justify-start items-center gap-1 shadow-sm shadow-gray-300 rounded-md p-2'>
            <div className='w-9 h-9 border-[1px] border-primaryColor rounded-md flex justify-center items-center'><Task className='fill-[#7a64f1]'/></div>
            <div className='flex flex-col leading-4'>
              <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>Tasks List</span>
            </div>
        </div>

        <div onClick={()=>setAddTask(!addTask)} className='h-full flex justify-center gap-1 bg-primaryLight bg-opacity-60 items-center shadow-sm shadow-gray-300 rounded-md p-2 cursor-pointer'>
            <span className='font-barlow font-medium text-[.9em] text-gray-500 '>
                Add task
            </span>
            <div className="inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <PlusCircle className='w-5 h-5 fill-primaryColor'/>
            </div>
        </div>

            {
              addTask && (
                <Modal isOpen={addTask} onClose={()=>setAddTask(!addTask)}>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center gap-1'>
                        <PlusCircle className='w-8 h-8 fill-primaryColor'/>
                        <span className='text-secondaryColor font-barlow text-[1em] font-medium'>Create New Task</span>
                      </div>

                      <div className='p-2 border-[1px] border-secondaryLight border-opacity-50 rounded-lg flex-col flex gap-2'>
                        <div className="poll-label relative">
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={handleInputChange}
                                className={`relative flex items-center overflow-hidden w-full border-[2px] py-2 px-1 text-sm focus-within:border-primaryColor rounded-lg md:py-3 md:px-2 outline-none bg-transparent`}
                              />
                            <label htmlFor="text" className={`${isActive ? "active" : ""} `}>Title</label>
                        </div> 

                        <div className="poll-label relative">
                            <input
                                id="desc"
                                type="text"
                                value={desc}
                                onChange={handleDescChange}
                                className={`relative flex items-center overflow-hidden w-full border-[2px] py-2 px-1 text-sm focus-within:border-primaryColor rounded-lg md:py-3 md:px-2 outline-none bg-transparent`}
                              />
                            <label htmlFor="text" className={`${isDescActive ? "active" : ""} `}>Description</label>
                        </div> 

                        <div className='w-full flex justify-between items-center border-[2px] py-2 px-2 rounded-lg gap-2'>
                          <label className='text-[.95em] text-primaryColor'>Date</label>
                          <DatePicker 
                            onChange={DateChange} 
                            className="w-20 lg:w-full  rounded-xl border border-gray-200 bg-white py-2 px-2 text-[12px] md:text-sm  outline-none focus:outline-none hover:border-primaryColor"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full origin-center rounded-3xl bg-primaryColor px-4 py-1 text-center text-base font-semibold capitalize text-white shadow-md transition duration-200 ease-in hover:bg-opacity-60 focus:outline-none  focus:ring-2 active:scale-95 md:px-10 md:py-3 lg:px-16"
                      >
                        <span className="w-full">Add Task</span>
                      </button>

                    </div>
                </Modal>
              )
            }

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
                        <tr key={task.id} className={`${task.status === 'pending' ? 'bg-gray-100' : ''} border-b-[1px] border-[#d1d1d1df] text-gray-500 text-[.9em] font-barlow`}>
                            <td >{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate}</td>
                            <td className={`${task.status === 'pending' ? 'text-orange-400' : 'text-green-500'} capitalize`}>{task.status}</td>
                            <td className='relative' key={task.id} onClick={() => handleMenuClick(index)}>
                              <DotMenu 
                                className='rotate-90 fill-[#7a64f1] cursor-pointer' 
                                size='md'
                              />
                              <div>
                                {
                                  menu === index && (
                                    <motion.div
                                      initial={{ opacity: 0, translateX: "-10%", translateY: "-10%", }}
                                      animate={{ opacity: 1,translateX: "-10%",translateY: "-110%", }} 
                                      exit={{ opacity: 0, translateX: "-10%", translateY: "-10%" }}
                                      key={task.id} 
                                      className='flex flex-col justify-center items-start gap-1 absolute w-[7em] right-0 border-[1px] bg-white shadow-md rounded-md p-2 '
                                    >
                                        <span onClick={() => openModal(index)} className='flex justify-start items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 duration-300 transition-all ease-in-out w-full rounded-md p-1'>
                                          <Edit className='fill-[#7a64f1]'/>
                                          Edit
                                        </span>

                                        <span onClick={() => openDeleteModal(index)} className='flex justify-start items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 duration-300 transition-all ease-in-out w-full rounded-md p-1'>
                                          <Delete className='fill-[#f01a1a]'/>
                                          Delete
                                        </span>

                                        <span onClick={() => openMarkModal(index)} className='flex justify-start items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 duration-300 transition-all ease-in-out w-full rounded-md p-1'>
                                          <Mark className='fill-[#53ce0b]'/>
                                          Mark
                                        </span>

                                        <span 
                                          onClick={() => handleMenuClick(index)}
                                          className='absolute -top-1 -right-1 cursor-pointer shadow-sm shadow-secondaryLight rounded-full w-4 h-4 flex justify-center items-center font-medium pb-[2px] text-white bg-red-500'
                                        >
                                          x
                                        </span>
                                    </motion.div>
                                  )
                                }
                              </div>
                            </td>

                            <div>
                              {
                                editTask[index] && (
                                  <motion.div
                                    className="fixed top-0 left-0 z-[110] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800/30 "
                                    onClick={() => closeModal(index)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <motion.div
                                      initial={{opacity: 0, translateX: '-50%', translateY: '-30%' }}
                                      animate={{opacity: 1, translateX: '-50%', translateY: '-50%' }}
                                      exit={{ opacity: 0, translateX: '-50%', translateY: '-30%' }}
                                      className="relative -bottom-[250px] md:top-1/2 bg-white p-2 rounded-md left-1/2 w-[22rem] md:max-w-lg -translate-x-1/2 -translate-y-1/2 flex gap-2 flex-col"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div className='flex items-center gap-1'>
                                        <Edit className='w-8 h-8 fill-primaryColor'/>
                                        <span className='text-secondaryColor font-barlow text-[1em] font-medium'>Edit Task</span>
                                      </div>

                                      <div className='p-2 border-[1px] border-secondaryLight border-opacity-50 rounded-lg flex-col flex gap-2 '>
                                        <div className="poll-label relative">
                                            <input
                                                id="title"
                                                type="text"
                                                value={task.title}
                                                className={`relative flex items-center overflow-hidden w-full border-[2px] py-2 px-1 text-sm focus-within:border-primaryColor rounded-lg md:py-3 md:px-2 outline-none bg-transparent`}
                                              />
                                        </div> 

                                        <div className="poll-label relative">
                                            <input
                                                id="desc"
                                                type="text"
                                                value={task.description}
                                                onChange={handleDescChange}
                                                className={`relative flex items-center overflow-hidden w-full border-[2px] py-2 px-1 text-sm focus-within:border-primaryColor rounded-lg md:py-3 md:px-2 outline-none bg-transparent`}
                                              />
                                        </div> 

                                        <div className='w-full flex justify-between items-center border-[2px] py-2 px-2 rounded-lg gap-2'>
                                          <label className='text-[.95em] text-primaryColor'>Date</label>
                                          <DatePicker 
                                            onChange={DateChange}
                                            className="w-20 lg:w-full  rounded-xl border border-gray-200 bg-white py-2 px-2 text-[12px] md:text-sm  outline-none focus:outline-none hover:border-primaryColor"
                                          />
                                        </div>

                                        <button
                                          type="button"
                                          onClick={() => closeModal(index)}
                                          className="absolute -bottom-[3.2rem] right-[44%] inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondaryColor text-sm text-white shadow-lg transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
                                        >
                                          <Cancel className='w-3.5 h-3.5 fill-[#ffffff]'/>
                                        </button>
                                      </div>
                                      <button
                                      type="submit"
                                      className="w-full origin-center rounded-3xl bg-primaryColor px-4 py-1 text-center text-base font-semibold capitalize text-white shadow-md transition duration-200 ease-in hover:bg-opacity-60 focus:outline-none  focus:ring-2 active:scale-95 md:px-10 md:py-3 lg:px-16"
                                    >
                                      <span className="w-full">Save Changes</span>
                                    </button>
                                    </motion.div>  
                                  </motion.div>
                                )
                              }                      
                            </div>

                            <div>
                              {
                                deleteTask[index] && (
                                  <motion.div
                                    className="fixed top-0 left-0 z-[110] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800/30 "
                                    onClick={() => closeDeleteModal(index)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <motion.div
                                      initial={{opacity: 0, translateX: '-50%', translateY: '-30%' }}
                                      animate={{opacity: 1, translateX: '-50%', translateY: '-50%' }}
                                      exit={{ opacity: 0, translateX: '-50%', translateY: '-30%' }}
                                      className="relative -bottom-[250px] md:top-1/2 bg-white p-2 rounded-md left-1/2 w-[22rem] md:max-w-lg -translate-x-1/2 -translate-y-1/2 flex gap-2 flex-col"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div className='flex items-center gap-1'>
                                        <Delete className='w-8 h-8 fill-primaryColor'/>
                                        <span className='text-secondaryColor font-barlow text-[1em] font-medium'>Delete Task</span>
                                      </div>

                                      <div className='p-2 border-[1px] border-secondaryLight border-opacity-50 rounded-lg flex-col flex gap-2'>
                                        <span>
                                          Are you sure you want to delete the task - <span className='text-[1em] font-bold text-primaryColor'>{task.title}</span>?
                                        </span>

                                        <button
                                          type="button"
                                          onClick={() => closeDeleteModal(index)}
                                          className="absolute -bottom-[3.2rem] right-[44%] inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondaryColor text-sm text-white shadow-lg transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
                                        >
                                          <Cancel className='w-3.5 h-3.5 fill-[#ffffff]'/>
                                        </button>
                                      </div>
                                      <button
                                      type="submit"
                                      className="w-full origin-center rounded-3xl bg-primaryColor px-4 py-1 text-center text-base font-semibold capitalize text-white shadow-md transition duration-200 ease-in hover:bg-opacity-60 focus:outline-none  focus:ring-2 active:scale-95 md:px-10 md:py-3 lg:px-16"
                                    >
                                      <span className="w-full">Delete Task</span>
                                    </button>
                                    </motion.div>  
                                  </motion.div>
                                )
                              }                      
                            </div>
                        </tr>
                        
                    ))}
                </tbody>
                
            </table>
        </div>

    </div>

  );
};

export default TaskList;

