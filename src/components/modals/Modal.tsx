import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Cancel } from '@/icons';
import { useTheme } from '@/context/ThemeContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[110] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800/30 "
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{
          opacity: 0,
          translateX: '-50%',
          translateY: '-30%',
        }}
        animate={{
          opacity: 1,
          translateX: '-50%',
          translateY: '-50%',
        }}
        exit={{ opacity: 0, translateX: '-50%', translateY: '-30%' }}
        className="relative -bottom-[250px] md:top-1/2 left-1/2 w-[22rem] md:max-w-lg -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -bottom-[3.2rem] right-[44%] inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondaryColor text-sm text-white shadow-lg transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
        >
          <Cancel className='w-3.5 h-3.5 fill-[#ffffff]'/>
        </button>
        <div className={`${theme === 'dark' ? 'bg-gray-300 opacity-80 backdrop-blur-sm border-[1px] border-white' : 'bg-gray-100'} p-2 rounded-md`}>
         {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
