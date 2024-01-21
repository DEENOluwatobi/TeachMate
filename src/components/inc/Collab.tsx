"use client";
import { Chat, DotMenu, LinkIcon } from '@/icons';
import { man } from '@/images';
import Image from 'next/image';
import React from 'react';

// Define the interface for the data structure
interface CollabData {
  image: string;
  title: string;
  category: string;
  daysUsed: number;
  totalDays: number;
  notificationNumber: number;
  friends: string[];
}

// Define the Collab component with the TypeScript interface
const Collab: React.FC = () => {
  // Sample array of collabs
  const collabs: CollabData[] = [
    {
      image: 'path/to/image1.jpg',
      title: 'JavaScript Project',
      category: 'Web Design - Collaborate',
      daysUsed: 10,
      totalDays: 30,
      notificationNumber: 5,
      friends: ['friend1_1.jpg', 'friend1_2.jpg', 'friend1_3.jpg', 'friend1_4.jpg'],
    },

    {
      image: 'path/to/image2.jpg',
      title: 'Figma Community Project',
      category: 'UI Kit - Collaborate',
      daysUsed: 8,
      totalDays: 25,
      notificationNumber: 3,
      friends: ['friend2_1.jpg', 'friend2_2.jpg', 'friend2_3.jpg', 'friend2_4.jpg'],
    },
  ];

  return (
    <div className='grid grid-cols-2 px-4 gap-6'>
      {collabs.map((collab, index) => (
        <div key={index}>
          {/* <img src={collab.image} alt={collab.title} />
          <h2>{collab.title}</h2>
          <p>Category: {collab.category}</p>
          <p>Range Value: {collab.rangeValue}</p>
          <p>Days Used: {collab.daysUsed}</p>
          <p>Total Days: {collab.totalDays}</p>
          <p>Notification Number: {collab.notificationNumber}</p>
          <div>
            Friends:
            {collab.friends.map((friend, friendIndex) => (
              <img key={friendIndex} src={friend} alt={`Friend ${friendIndex + 1}`} />
            ))}
          </div> */}

            <div className='w-full p-8 bg-slate-200 rounded-lg'>
                <div>
                    <Image
                        src={man}
                        className='w-full h-[13em] object-cover cursor-pointer rounded-md'
                        alt={collab.title}
                    />
                </div>

                <div className='flex justify-between items-center gap-2'>
                    <div className='flex flex-col leading-5'>
                        <span className='font-poppins text-[1em] mt-1 font-medium text-secondaryColor'>{collab.title}</span>
                        <span className='text-[.8em] font-poppins text-gray-600'>{collab.category}</span>
                    </div>

                    <div className='cursor-pointer'>
                        <DotMenu />
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <p>
                    <span>{collab.daysUsed} {" "}</span>
                    of {collab.totalDays} Tasks
                    </p>

                    <p> {collab.totalDays - collab.daysUsed} days left</p>
                </div>

                <div className='w-full'>
                    <input type="range" name="" id="" value={collab.daysUsed} max= {collab.totalDays} className='w-full'/>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center justify-center gap-1'>
                        <Chat className='cursor-pointer [&>path]:fill-[#1370db]' size='md'/>
                        <LinkIcon className='cursor-pointer [&>g]:stroke-[#1370db]' size='md'/>
                    </div>

                    <div>

                    </div>
                </div>



            </div>
        </div>
      ))}
    </div>
  );
};

export default Collab;
