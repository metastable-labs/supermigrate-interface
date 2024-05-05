import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

import { ISMSelect, IOption } from './types';
import SMClickAnimation from '../click-animation';
import { SecondarySelectIcon } from '@/public/icons';

const SMSelect = ({ text, disabled, onClick, options }: ISMSelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption>();

  const showOptions = isOpen && Boolean(options?.length);

  const handleValue = (option: IOption) => {
    setIsOpen((prev) => !prev);
    setSelectedOption(option);

    if (onClick) onClick(option);
  };

  return (
    <div className="relative">
      <SMClickAnimation
        onClick={() => setIsOpen((prev) => !prev)}
        className={classNames(
          'flex justify-between items-center gap-2 cursor-pointer py-[6px] px-3 bg-white rounded-[5px] text-[14px] leading-[21.7px] font-bold text-center text-primary-200 min-w-[113px]',
          { 'pointer-events-none': disabled },
        )}>
        {!selectedOption && <span className="whitespace-nowrap">{text}</span>}
        {selectedOption && (
          <div className="flex items-center gap-2">
            {selectedOption.icon}
            <span className="whitespace-nowrap">{selectedOption.text}</span>
          </div>
        )}
        <SecondarySelectIcon />
      </SMClickAnimation>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            key={0}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: '200px' }}
            exit={{ opacity: 0, maxHeight: 0 }}
            className="w-full bg-primary-150 flex flex-col gap-3 rounded-[5px] absolute z-10 top-[120%] px-2 py-4 overflow-auto">
            {options?.map((option, index) => (
              <SMClickAnimation
                key={index}
                onClick={() => handleValue(option)}
                className={classNames('flex items-center gap-2 cursor-pointer py-2 px-3 rounded-[5px] text-[14px] leading-[21.7px] font-bold text-center transition-colors duration-200 ease-in-out', {
                  'bg-primary-200': option.value === selectedOption?.value,
                  'hover:bg-primary-1300': option.value !== selectedOption?.value,
                })}>
                {option.icon}
                <span>{option.text}</span>
              </SMClickAnimation>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SMSelect;
