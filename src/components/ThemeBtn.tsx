import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import IconButton from '@/base/IconButton';
import { useMid } from '@/utils/useMediaQuery';
import { Moon, Sun } from '@/icons';

const ThemeBtn = () => {
    const mid = useMid();
    const { theme, toggleTheme } = useTheme();

    const iconClick = () => {
        if (theme === 'light') {
            toggleTheme();
        } else if (theme === 'dark') {
            toggleTheme();
        }
    }

    return (
        <div className=' h-full flex justify-center items-center py-2'>
            <IconButton
                icon={theme === 'dark' ? <Sun className='[&>path]:fill-[#ffffff]'/> : <Moon className='[&>path]:fill-[#fcfcfc]'/> }
                onClick={iconClick}
                size={mid ? 'xs' : 'xs'}
            />
        </div>
    );
};

export default ThemeBtn;