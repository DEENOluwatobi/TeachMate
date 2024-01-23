import React from 'react'
import Calender from './side-inc/Calender'
import { useTheme } from '@/context/ThemeContext'
import { Chat, DotMenu, LinkIcon } from '@/icons'
import Image, { StaticImageData } from 'next/image';
import { girl, man2, js, woman, eye, design, javascript, student, man } from '@/images';

interface CollabData {
  image: StaticImageData;
  title: string;
  category: string;
  daysUsed: number;
  totalDays: number;
  notificationNumber: number;
  friends: StaticImageData[];
}

const SideNav: React.FC = () => {

  const collabs: CollabData[] = [
    {
      image: javascript,
      title: 'JavaScript Project',
      category: 'Web Design - Collaborate',
      daysUsed: 10,
      totalDays: 30,
      notificationNumber: 5,
      friends: [girl, eye, man, man2],
    },

    {
      image: student,
      title: 'Figma Community Project',
      category: 'UI Kit - Collaborate',
      daysUsed: 8,
      totalDays: 25,
      notificationNumber: 3,
      friends: [woman, man2, girl, eye],
    },
    {
      image: js,
      title: 'Data Structure Project',
      category: 'Algorithm - Collaborate',
      daysUsed: 13,
      totalDays: 20,
      notificationNumber: 8,
      friends: [woman, eye, man, man2],
    },
  ];

  const { theme } = useTheme()
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'}  overflow-hidden w-full p-2`}>
      <Calender/>

      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center mt-3 px-1 py-2'>
          <span className='text-[.7em] md:text-[.9em] text-primaryColor font-medium font-poppins'>Recent Task</span>
          <span className='text-[.5em] md:text-[.8em] text-gray-700'>View all</span>
        </div>

        <div className='grid grid-cols-1 gap-2 overflow-y-scroll'>
          {collabs.map((collab, index) => (
            <div key={index}>
                <div className='w-full p-2 bg-white rounded-lg border border-primaryLight'>

                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col leading-5'>
                            <span className='font-poppins text-[.7em] mt-1 font-medium text-secondaryColor'>{collab.title}</span>
                            <span className='text-[.6em] font-poppins text-gray-600'>{collab.category}</span>
                        </div>

                        <div className='cursor-pointer'>
                            <DotMenu size='md'/>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-[.7em] text-primaryColor'>
                          <span className='font-semibold text-[.9rem]'>{collab.daysUsed} {" "}</span>
                          of {collab.totalDays} Tasks
                        </p>

                        <p className='text-[.7em] text-primaryColor'> {collab.totalDays - collab.daysUsed} days left</p>
                    </div>

                    <div className='w-full mb-1'>
                        <input 
                          type="range" 
                          name="" 
                          id="" 
                          value={collab.daysUsed} 
                          max= {collab.totalDays} 
                          className='w-full h-[2px] rounded-md'                     
                        />
                    </div>

                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center gap-2 w-full'>
                            <div className='flex justify-center items-center gap-[1px] cursor-pointer'>
                              <Chat className='cursor-pointer [&>path]:fill-[#1370db]' size='md'/>
                              <span className='text-[.7em] text-[#1370db]'>{collab.notificationNumber}</span>
                            </div>
                            <LinkIcon className='cursor-pointer [&>g]:stroke-[#1370db]' size='md'/>
                        </div>

                        <div className='w-full flex justify-end'>
                          {collab.friends.map((friend, friendIndex) => (
                            <Image 
                              key={friendIndex} 
                              src={friend} 
                              alt={`Friend ${friendIndex + 1}`} 
                              className={`w-6 h-6 rounded-full border-[1px] border-secondaryColor object-cover`}
                            />
                          ))}
                        </div> 
                    </div>



                </div>
            </div>
          ))}
        </div>




      </div>
    </div>
  )
}

export default SideNav