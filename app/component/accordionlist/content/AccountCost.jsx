"use client"
import React, { useState } from 'react'
import { data } from './data';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { usevalCalc } from '@/app/provider/CalcValProvider';
import { useModalChild } from '@/app/provider/ModalChildProvider'

const AccordionItem = ({ item, isOpen, onClick, onSelectChild }) => {
  return (
    <div className='border-b border-gray-100/20'>
      <button
        className={`flex justify-between items-center w-full p-4 transition-all duration-300
          ${isOpen ? 'bg-gray-700/50' : 'hover:bg-gray-700/30'} rounded-lg`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className='flex gap-4 items-center'>
          <span className='text-2xl text-purple-400'>{item.icon}</span>
          <span className='text-gray-200 font-medium'>{item.title}</span>
        </div>
        <MdKeyboardArrowLeft
          className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90 -mr-1 text-purple-400' : 'text-gray-400'}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {item.child?.map((childItem) => (
          <ChildItem
            key={childItem.id}
            item={childItem}
            parentTitle={item.title}
            onSelect={onSelectChild}
          />
        ))}
      </div>
    </div>
  );
};

const ChildItem = ({ item, parentTitle, onSelect }) => {
  const handleClick = () => {
    onSelect(`${parentTitle}_${item.title}`);
  };

  return (
    <div className='pl-14 pr-4 py-2'>
      <button
        onClick={handleClick}
        className='w-full text-start p-3 rounded-lg transition-all duration-300
          hover:bg-purple-500/20 hover:pl-5 group'
      >
        <span className='text-gray-300 group-hover:text-purple-300'>
          {item.title}
        </span>
      </button>
    </div>
  );
};

export default function AccountCost() {
  const { setVal } = usevalCalc();
  const [openItemId, setOpenItemId] = useState(null);
  const { closeModalChild } = useModalChild();

  const handleItemToggle = (itemId) => {
    setOpenItemId((prev) => (prev === itemId ? null : itemId));
  };

  const handleSelect = (value) => {
    setVal((prev) => ({
      ...prev,
      name: value
    }));
    closeModalChild();
  };

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 h-screen flex flex-col overflow-y-auto custom-scrollbar p-4'>
      <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6 px-4'>
        انتخاب دسته بندی
      </h2>

      <div className='space-y-2'>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onClick={() => handleItemToggle(item.id)}
            onSelectChild={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}