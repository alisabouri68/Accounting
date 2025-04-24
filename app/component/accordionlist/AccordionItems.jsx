"use client"
import React, { useEffect, useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { HiMiniPlusSmall } from 'react-icons/hi2';
import { useModal } from '@/app/provider/ModalProvider';
import { MdDelete } from "react-icons/md";
import moment from 'moment-jalaali';
import { v4 as uuidv4 } from 'uuid';
import { usevalCalc } from '@/app/provider/CalcValProvider';
import PieCharts from '../PieCharts';
const AccordionItem = ({ item }) => {
  const [isOpens, setIsOpens] = useState(false);
  const [localData, setLocalData] = useState([]);
  const { isOpen, content, openModal, closeModal } = useModal()
  const { val, setVal, persistToStorage } = usevalCalc()
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(item.getLocale);
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setLocalData(Array.isArray(parsedData) ? parsedData : []);
    } catch (error) {
      console.error("Error loading data:", error);
      setLocalData([]);
    }
  }, [isOpens, isOpen]);

  const toggleAccordion = () => setIsOpens(prev => !prev);
  const formatWithCommas = (value) => {
    if (value === 'Error') return value;
    const parts = value.split('.');
    let integerPart = parts[0].replace(/\D/g, '') || '0';
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts[1] ? `${integerPart}.${parts[1]}` : integerPart;
  };
  const clicmodalhandler = () => {
    setVal(preveState => ({
      ...preveState,
      id: uuidv4()
    }))
    openModal(item.contenttwo)
  }
  const handleDelete = (id) => {
    const updatedData = localData.filter(item => item.id !== id);
    setLocalData(updatedData);

    if (typeof window !== 'undefined') {
      try {
        const storedData = JSON.parse(localStorage.getItem(item.getLocale)) || [];

        const newData = storedData.filter(item => item.id !== id);

        localStorage.setItem(item.getLocale, JSON.stringify(newData));
      } catch (error) {
        console.error('خطا در به‌روزرسانی localStorage:', error);
      }
    }
  };
  return (
    <div className={`group rounded-xl shadow-lg transition-all duration-300 
      ${isOpens ? 'bg-gradient-to-br ' + item.color + ' border border-white/20' :
        'bg-gray-800/50 hover:bg-gray-700/60 backdrop-blur-sm'}`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleAccordion()}
        aria-expanded={isOpens}
      >
        <span className="text-lg font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          {item.title}
        </span>
        <span className={`text-xl transition-transform ${isOpens ? 'rotate-180 text-purple-300' : 'text-gray-400'}`}>
          {isOpens ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>

      {isOpens && (
        <div className="p-4 pt-0 space-y-4 animate-accordionOpen">
          <div className="border-t border-white/10 pt-4">
            {localData.length > 0 ? (
              <div className="space-y-3">
                {localData.map((dataItem) => (
                  <div
                    key={dataItem.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-purple-300">
                        {formatWithCommas(dataItem.value)} ریال
                      </div>
                      <div className="flex-1 text-gray-200">{dataItem.name}</div>
                      <div className="text-sm text-gray-400">
                        {dataItem.date ?
                          moment(dataItem.date).format("jYYYY/jMM/jDD") :
                          '--/--/--'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(dataItem.id)}
                      className="p-2 hover:text-red-400 rounded-full transition-colors"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-400">
                هیچ موردی ثبت نشده است
              </div>
            )}
          </div>

          {/* نمودار */}
          {localData.length > 0 && (
            <div className="p-4 bg-gray-900/20 rounded-xl">
              <PieCharts locals={localData} />
            </div>
          )}

          {/* دکمه افزودن */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={clicmodalhandler}
              className="p-2 bg-gradient-to-br from-green-500/30 to-teal-400/30 rounded-full
              hover:from-green-500/40 hover:to-teal-400/40 transition-all
              shadow hover:shadow-md flex items-center gap-2 group"
            >
              <HiMiniPlusSmall className="text-2xl text-green-400 group-hover:text-teal-300" />
              <span className="text-sm font-medium text-gray-200">افزودن آیتم جدید</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;