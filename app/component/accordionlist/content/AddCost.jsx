"use client"
import React from 'react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useModal } from '@/app/provider/ModalProvider'
import { IoSaveSharp } from "react-icons/io5";
import { usevalCalc } from '@/app/provider/CalcValProvider';
import { CiCalendarDate } from "react-icons/ci";
import { FaSackDollar } from 'react-icons/fa6';
import { FaHome } from "react-icons/fa";
import DatePickerWrapper from './DatePickerWrapper';
import Calc from "./Calc";
import AccountCost from "./AccountCost";
import AccountIncome from "./AccountIncome";
import { useModalChild } from '@/app/provider/ModalChildProvider';
export default function AddCost({handler}) {
    const { closeModal } = useModal()
    const { val, setVal, persistToStorage } = usevalCalc()
    const { openModalChild } = useModalChild()
    const calc = <Calc />
    const accuntcost = <AccountCost />
    const accuntincome = <AccountIncome />
    const itemAdd = [
        {
            id: "1",
            icon: <CiCalendarDate />,
            title: null,
            content: <DatePickerWrapper />,
            onclick: null,
        },
        {
            id: "2",
            icon: <FaSackDollar />,
            title: "مبلغ",
            content: null,
            click: () => { openModalChild(calc) },
            submit:()=>{submitCostHandler}
        },
        {
            id: "3",
            icon: <FaHome />,
            title: "عنوان هزینه",
            content: null,
            click: () => { openModalChild(accuntcost) },
            submit:()=>{submitIncomitHandler}

        },
    ]
    const formatWithCommas = (value) => {
        if (value === 'Error') return value;
        const parts = value.split('.');
        let integerPart = parts[0].replace(/\D/g, '') || '0';
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts[1] ? `${integerPart}.${parts[1]}` : integerPart;
    };
    const submitCostHandler = () => {
        if (val.value != "0" && val.name && val.date) {

            persistToStorage("cost")
            closeModal()
            setVal(preveState => ({
                ...preveState,
                value: "0",
                name: "",
                date: ""
            }))
        } else if (!val.date) {
            alert("لطفا تاریخ انتخاب نمایید")
        } else if (val.value === "0") {
            alert("لطفا قیمت را وارد نمایید")
        } else if (!val.name) {
            alert("لطفا عنوان هزینه را انتخاب نمایید")
        }
    }
    const submitIncomitHandler = () => {
        if (val.value != "0" && val.name && val.date) {

            persistToStorage("incom")
            closeModal()
            setVal(preveState => ({
                ...preveState,
                value: "0",
                name: "",
                date: ""
            }))
        } else if (!val.date) {
            alert("لطفا تاریخ انتخاب نمایید")
        } else if (val.value === "0") {
            alert("لطفا قیمت را وارد نمایید")
        } else if (!val.name) {
            alert("لطفا عنوان هزینه را انتخاب نمایید")
        }
    }
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-lg shadow-2xl">
            {/* هدر */}
            <button 
                onClick={closeModal}
                className="flex items-center px-6 py-4 w-full bg-gradient-to-r from-purple-900/50 to-pink-900/30
                hover:from-purple-900/70 transition-all duration-300 group border-b border-gray-700/50"
            >
                <MdKeyboardArrowRight className="text-3xl text-purple-400 group-hover:rotate-180 transition-transform" />
                <span className="mr-2 text-lg font-medium bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
                    برگشت
                </span>
            </button>

            {/* محتوا */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                {itemAdd.map((item) => (
                    <div
                        key={item.id}
                        onClick={item.click}
                        className="flex items-center justify-between p-4 rounded-xl transition-all duration-300
                        bg-gray-800/50 hover:bg-gray-700/40 border border-gray-700/50 hover:border-purple-500/30
                        shadow-md hover:shadow-lg cursor-pointer group"
                    >
                        <div className="flex items-center gap-4 flex-1">
                            <span className="text-2xl text-purple-400 group-hover:text-pink-300 transition-colors">
                                {item.icon}
                            </span>
                            
                            <div className="flex-1">
                                {item.title ? (
                                    <h4 className="text-gray-300 group-hover:text-white font-medium">{item.title}</h4>
                                ) : (
                                    item.content
                                )}
                                
                                {item.id === "2" && (
                                    <p className="text-lg font-semibold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
                                        {formatWithCommas(val.value)} ریال
                                    </p>
                                )}
                                
                                {item.id === "3" && val.name && (
                                    <div className="mt-1 px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm inline-block">
                                        {val.name}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <MdOutlineKeyboardArrowLeft className="text-2xl text-gray-400 group-hover:text-purple-300" />
                    </div>
                ))}
            </div>

            {/* دکمه ثبت */}
            <div className="p-4 border-t border-gray-700/50">
                <button 
                    onClick={submitCostHandler}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-400
                    hover:from-green-600 hover:to-teal-500 transition-all duration-300
                    shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95
                    flex items-center justify-center gap-3 group"
                >
                    <IoSaveSharp className="text-2xl text-white group-hover:animate-bounce" />
                    <span className="text-lg font-semibold text-white">ثبت نهایی</span>
                </button>
            </div>
        </div>
    )
}