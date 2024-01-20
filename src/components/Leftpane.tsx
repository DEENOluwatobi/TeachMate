import { logo } from '@/images'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { Cog, Courses, HomeIcon, Play, Reward, Task } from '@/icons';

interface LeftMenuProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Leftpane: React.FC<LeftMenuProps> = ({ setCurrentPage }) => {
  const [currentPage, setCurrentPageLocal] = useState<string>('home');

  const handlePageChange = (page: string) => {
      setCurrentPage(page);
      setCurrentPageLocal(page);
  };


  return (
    <div className='bg-gray-100 h-full rounded-md p-2'>
        <div>
          <Image
            src={logo}
            width={100}
            height={10}
            alt='logo'
          />
        </div>

        <div className='flex flex-col text-[13px] gap-2 mt-5 '>
          <Link
              href="#home"
              onClick={() => handlePageChange('home')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'home' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'home' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'home' ? '600' : '400',
              }}
          >
              {currentPage === 'home' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <HomeIcon size='sm' className={currentPage === 'home' ? '[&>path]:stroke-[#7B68EE]' : '[&>path]:stroke-[#464444]'} />
              Dashboard
          </Link>

          <Link
              href="#courses"
              onClick={() => handlePageChange('courses')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'courses' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'courses' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'courses' ? '600' : '400',
              }}
          >
              {currentPage === 'courses' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <Courses size='sm' className={`${currentPage === 'courses' ? 'fill-[#7B68EE]' : 'fill-[#464444]'} ml-[2px]`} />
              My Courses
          </Link>

          <Link
              href="#lessons"
              onClick={() => handlePageChange('lessons')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'lessons' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'lessons' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'lessons' ? '600' : '400',
              }}
          >
              {currentPage === 'lessons' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <Play size='sm' className={`${currentPage === 'lessons' ? 'fill-[#7B68EE]' : 'fill-[#787777]'} `} />
              Lessons
          </Link>

          <Link
              href="#task"
              onClick={() => handlePageChange('task')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'task' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'task' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'task' ? '600' : '400',
              }}
          >
              {currentPage === 'task' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <Task size='sm' className={`${currentPage === 'task' ? 'fill-[#7B68EE]' : 'fill-[#464444]'} `}/>
              Tasks
          </Link>

          <Link
              href="#rewards"
              onClick={() => handlePageChange('rewards')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'rewards' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'rewards' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'rewards' ? '600' : '400',
              }}
          >
              {currentPage === 'rewards' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <Reward size='sm' className={`${currentPage === 'rewards' ? 'fill-[#7B68EE]' : 'fill-[#646262]'} `} />
              Rewards
          </Link>

          <Link
              href="#settings"
              onClick={() => handlePageChange('settings')}
              className='flex gap-2 items-center px-2 py-3 rounded-lg font-barlow relative'
              style={{
                  backgroundColor: currentPage === 'settings' ? '#D8BFFF' : 'transparent',
                  color: currentPage === 'settings' ? '#7B68EE' : '#000',
                  fontWeight: currentPage === 'settings' ? '600' : '400',
              }}
          >
              {currentPage === 'settings' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#7B68EE' }}
                  ></span>
              )}
              <Cog size='sm' className={`${currentPage === 'settings' ? 'stroke-[#7B68EE]' : 'stroke-[#464444]'} ml-[2px]`}/>
              Settings
          </Link>


        </div>
    </div>
  )
}

export default Leftpane