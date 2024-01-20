import React from 'react'
import { BellIcon, EmailsIcon, GearIcon, GiftBoxIcon, SearchIcon } from '@/icons'
import Image from 'next/image'
import { man } from '@/images'
import ThemeBtn from './ThemeBtn'

const DashNav = () => {
  return (
    <div className='w-full flex p-2 bg-gray-100 rounded-md'>
        <div className='flex-grow p-3 flex justify-between bg-white rounded-lg'>
            <input className='w-full h-full outline-none text-sm font-barlow' type="text" placeholder='Search here'/> 
            <SearchIcon className='cursor-pointer hover:[&>path]:fill-[#f14646]'/>
        </div>

        <div className='px-7 py-1 flex gap-4 border-r-2 border-r-gray-200'>
            <div className='relative bg-[#2D9CDB26] w-10 h-full flex justify-center items-center rounded-2xl cursor-pointer'>
                <BellIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#2D9CDB] text-white flex justify-center items-center text-[.6em]'>
                    20
                </span>
            </div>
            <div className='relative bg-[#2D9CDB26] w-10 h-full flex justify-center items-center rounded-2xl cursor-pointer'>
                <EmailsIcon className='[&>path]:fill-[#2288c3]'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#2D9CDB] text-white flex justify-center items-center text-[.6em]'>
                    53
                </span>
            </div>
            <div className='relative bg-[#dad7f1] w-10 h-full flex justify-center items-center rounded-2xl cursor-pointer'>
                <GiftBoxIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#635e8a] text-white flex justify-center items-center text-[.6em]'>
                    9
                </span>
            </div>
            <div className='relative bg-[#fad7d7] w-10 h-full flex justify-center items-center rounded-2xl cursor-pointer'>
                <GearIcon size='md'/>
                <span className='absolute -top-[8px] -right-2.5 w-6 h-6 rounded-full border-4 border-gray-100 bg-[#f14646] text-white flex justify-center items-center text-[.6em]'>
                    34
                </span>
            </div>
            <div className='bg-[#753ffe88] w-10 h-full flex justify-center items-center rounded-2xl cursor-pointer'>
                <ThemeBtn/>
            </div>
        </div>

        <div className='ml-auto flex justify-end items-center gap-2 px-2'>
            <span className='font-barlow text-sm text-gray-600'>Hello, Tobi</span>
            <div className='rounded-full'>
                <Image 
                  className='w-11 h-11 rounded-full border-[2px] border-white object-fill' 
                  src={man} 
                  alt='user-profile-pic'
                />
            </div>
        </div>
    </div>
  )
}

export default DashNav
