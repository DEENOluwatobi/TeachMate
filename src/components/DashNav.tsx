import React, {useState} from 'react'
import { BellIcon, Cancel, DotMenu, EmailsIcon, GearIcon, GiftBoxIcon, MenuSquare, SearchIcon } from '@/icons'
import Image from 'next/image'
import { man, tmate } from '@/images'
import ThemeBtn from './ThemeBtn'
import { useTheme } from '@/context/ThemeContext';
import {motion} from "framer-motion";
import SideNav from './SideNav';

const DashNav = () => {
  const { theme } = useTheme();  
  const [rightMenu, setRightMenu] = useState(false);

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} w-full flex gap-1 p-1 md:p-2 bg-gray-100 rounded-md`}> 

        <div className='relative lg:hidden h-full justify-center items-center flex opacity-0'>
            <MenuSquare/>         
        </div>

        <div className='lg:hidden'>
            <Image
                src={tmate}
                // width={100}
                // height={10}
                className='w-8 h-8'
                alt='logo'
            />
        </div>
        <div className='flex flex-grow p-2 lg:p-3 justify-between bg-white rounded-lg'>
            <input className='w-full h-full outline-none text-sm font-barlow' type="text" placeholder='Search here'/> 
            <SearchIcon className='cursor-pointer hover:[&>path]:fill-[#f14646]'/>
        </div>

        <div className='sml:px-3 lg:px-7 py-1 hidden sml:flex gap-2 md:gap-4 border-r-2 border-r-gray-200'>
            <div className='relative bg-[#2D9CDB26] w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center rounded-2xl cursor-pointer'>
                <BellIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#2D9CDB] text-white flex justify-center items-center text-[.6em]'>
                    20
                </span>
            </div>
            <div className='relative bg-[#2D9CDB26] w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center rounded-2xl cursor-pointer'>
                <EmailsIcon className='[&>path]:fill-[#2288c3]'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#2D9CDB] text-white flex justify-center items-center text-[.6em]'>
                    53
                </span>
            </div>
            <div className='relative bg-[#dad7f1] w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center rounded-2xl cursor-pointer'>
                <GiftBoxIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#635e8a] text-white flex justify-center items-center text-[.6em]'>
                    9
                </span>
            </div>
            <div className='relative bg-[#fad7d7] w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center rounded-2xl cursor-pointer'>
                <GearIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#f14646] text-white flex justify-center items-center text-[.6em]'>
                    34
                </span>
            </div>
            <div className='bg-[#9771f788] border border-white w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center rounded-2xl cursor-pointer'>
                <ThemeBtn/>
            </div>
        </div>

        <div className='ml-auto flex justify-end items-center md:gap-2 px-1 md:px-2'>
            <span className='font-barlow hidden md:block text-[.7em] lg:text-sm text-gray-600'>Hello, Tobi</span>
            <div className='rounded-full'>
                <Image 
                  className='w-10 sml:w-8 lg:w-10 h-10 sml:h-8 lg:h-10 rounded-full border-[2px] border-white object-cover' 
                  src={man} 
                  alt='user-profile-pic'
                />
            </div>
            <div className='flex lg:hidden justify-center items-center' onClick={()=>setRightMenu(!rightMenu)}>
                <DotMenu className='fill-[#7a64f1] rotate-90' size='md' />
                {
                    rightMenu && (
                        <motion.div 
                        initial={{x: 500, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.3}}
                        className='fixed top-0 right-0 z-50 w-[280px] h-full bg-gray-100 border-[1px] border-secondaryColor'
                        >
                            <SideNav/>

                            <span 
                            onClick={()=>setRightMenu(!rightMenu)}
                            className='cursor-pointer absolute top-[10px] z-[51] right-[262px] w-8 h-8 text-red-500 flex items-center justify-center border bg-red-500 hover:text-white duration-300 rounded-full'>
                                <Cancel className='fill-[#fff]'/>
                            </span>
                        </motion.div>

                    )
                }
            </div>
        </div>
    </div>
  )
}

export default DashNav
