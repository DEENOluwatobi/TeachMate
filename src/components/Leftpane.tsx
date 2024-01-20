import { logo } from '@/images'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import Home from './dash-inc/Home';
import { HomeIcon } from '@/icons';

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
    <div className='bg-gray-100 h-full'>
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
                  backgroundColor: currentPage === 'home' ? '#FC3E0326' : 'transparent',
                  color: currentPage === 'home' ? '#FC3E03' : '#000',
                  fontWeight: currentPage === 'home' ? '600' : '400',
              }}
          >
              {currentPage === 'home' && (
                  <span
                      className="absolute -left-6 w-3 h-full rounded-lg"
                      style={{ backgroundColor: '#f14646' }}
                  ></span>
              )}
              <HomeIcon size='sm' className={currentPage === 'home' ? '[&>path]:fill-[#f14646]' : '#000'} />
              Dashboard
          </Link>


        </div>
    </div>
  )
}

export default Leftpane