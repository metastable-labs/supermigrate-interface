'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { ISMSelect, IOption } from './types';
import SMClickAnimation from '../click-animation';
import SMModal from '../modal';
import { SearchIcon, SecondarySelectIcon } from '@/public/icons';

const SMSelect = ({ text, disabled, onClick, options, defaultId }: ISMSelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const [searchedOptions, setSearchedOptions] = useState<IOption[]>(options || []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleValue = (option: IOption) => {
    setIsOpen((prev) => !prev);
    setSelectedOption(option);

    if (onClick) onClick(option);
  };

  const handleSearch = () => {
    if (!searchText || !options) {
      return setSearchedOptions(options || []);
    }

    const filteredOptions = options.filter((option) => option.text.toLowerCase().includes(searchText.toLowerCase()) || option.value.toLowerCase().includes(searchText.toLowerCase()));

    setSearchedOptions([...filteredOptions]);
  };

  useEffect(() => {
    if (defaultId && options) {
      const defaultOption = options.find((option) => option.id === defaultId);
      if (defaultOption) setSelectedOption(defaultOption);
    }
  }, [defaultId, options]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, options]);

  return (
    <>
      <SMClickAnimation
        onClick={toggleOpen}
        className={classNames(
          'flex justify-between items-center gap-2 cursor-pointer py-[6px] px-3 bg-white rounded-[5px] text-[14px] leading-[21.7px] font-bold text-center text-primary-200 min-w-[113px]',
          { 'pointer-events-none': disabled },
        )}>
        {!selectedOption && <span className="whitespace-nowrap">{text}</span>}
        {selectedOption && (
          <div className="flex items-center gap-2">
            {selectedOption.icon}
            <span className="whitespace-nowrap">{selectedOption.value}</span>
          </div>
        )}
        <SecondarySelectIcon />
      </SMClickAnimation>

      <SMModal show={isOpen} close={toggleOpen} variant="secondary">
        <div className="w-[303px] md:w-[408px] flex flex-col gap-5">
          <h1 className="text-primary-50 text-[18px] leading-[27.9px]">{text}</h1>

          <div className="px-3 py-2.5 flex items-center justify-center gap-2 bg-white border border-primary-250 rounded-base">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className=" text-primary-700 w-full outline-none placeholder:text-primary-2050 text-sm tracking-[-0.084px]"
            />
          </div>

          <div className="flex flex-col self-stretch gap-6  h-[281px] overflow-y-auto overflow-x-visible">
            {searchedOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleValue(option)}
                className={classNames(
                  'flex items-center justify-between self-stretch bg-white hover:bg-primary-650 transition-colors duration-300 gap-2 px-2 rounded-base cursor-pointer text-[14px] leading-[21.7px] font-medium text-primary-200',
                  {
                    'shadow-md': selectedOption?.id === option.id,
                  },
                )}>
                <div className="flex items-center justify-center gap-2">
                  {option.icon}
                  <div className="flex flex-col">
                    <span className="text-primary-50">{option.text}</span>
                    <span className="text-[10px] leading-[15.5px]">{option.value}</span>
                  </div>
                </div>

                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </SMModal>
    </>
  );
};

export default SMSelect;
