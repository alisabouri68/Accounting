import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useModal } from '@/app/provider/ModalProvider'
import { MdEmojiEmotions } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GiBackup } from "react-icons/gi";
import { CiUnlock, CiSettings } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SiAparat } from "react-icons/si";
import { PiTelegramLogoThin } from "react-icons/pi";
import Link from 'next/link';

export default function Menu() {
    const { isOpen, content, closeModal } = useModal()
    const menuItem = [
        {
            id: "1",
            title: "ویرایش اطلاعات کاربری",
            icons: <CiEdit />,
            href: "/"

        },
        {
            id: "2",
            title: "پشتیبان گیری",
            icons: <GiBackup />,
            href: "/"

        },
        {
            id: "3",
            title: "مدیریت دسترسی ها",
            icons: <CiUnlock />,
            href: "/"

        },
        {
            id: "4",
            title: "تنظیمات پایه",
            icons: <CiSettings />,
            href: "/"

        },
        {
            id: "5",
            title: "اموزش",
            icons: <IoSchoolOutline />,
            href: "/"

        },
        {
            id: "6",
            title: "پشتیبانی",
            icons: <CiHeadphones />,
            href: "/"

        },
        {
            id: "7",
            title: "ارسال برنامه به دیگران",
            icons: <CiShare2 />,
            href: "/"

        },
        {
            id: "8",
            title: "امتیاز به برنامه",
            icons: <CiStar />,
            href: "/"

        },
        {
            id: "9",
            title: "حریم خصوصی و امنیت کاربران",
            icons: <MdOutlinePrivacyTip />,
            href: "/"

        },
        {
            id: "10",
            title: "درباره پارمیس",
            icons: <FcAbout />,
            href: "/"

        },
    ]
    const dataFoterMenu = [
        {
            id: "1",
            icons: <CiInstagram />,
            href: "/"
        },
        {
            id: "2",
            icons: <CiLinkedin />,
            href: "/"
        },
        {
            id: "3",
            icons: <SiAparat />,
            href: "/"
        },
        {
            id: "4",
            icons: <PiTelegramLogoThin />,
            href: "/"
        },
    ]
    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-lg shadow-2xl">
            {/* هدر منو */}
            <button 
                onClick={closeModal}
                className="flex items-center p-6 w-full bg-gradient-to-r from-purple-900/50 to-pink-900/30
                hover:bg-gradient-to-l transition-all duration-300 group"
            >
                <MdKeyboardArrowRight className="text-3xl text-purple-400 group-hover:rotate-180 transition-transform" />
                <span className="mr-2 text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    بیشتر
                </span>
            </button>

            {/* بخش کاربر */}
            <div className="flex flex-col gap-5 items-center px-8 py-6 border-b border-gray-700/50">
                <div className="p-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 shadow-glow">
                    <MdEmojiEmotions className="text-4xl text-white" />
                </div>
                <h3 className="mt-4 text-xl font-medium bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
                    علی امامی صبوری
                </h3>
            </div>

            {/* لیست منو */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {menuItem.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="flex justify-between items-center px-6 py-4 transition-all duration-300
                        hover:bg-purple-900/20 hover:border-l-4 hover:border-purple-400
                        active:bg-purple-900/30 group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl text-purple-400 group-hover:text-pink-300 transition-colors">
                                {item.icons}
                            </span>
                            <span className="text-gray-200 group-hover:text-white font-medium">
                                {item.title}
                            </span>
                        </div>
                        <MdOutlineKeyboardArrowLeft className="text-2xl text-gray-400 group-hover:text-purple-300" />
                    </Link>
                ))}
            </div>

            {/* فوتر */}
            <div className="flex items-center justify-center gap-6 p-6 border-t border-gray-700/50">
                {dataFoterMenu.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="p-3 rounded-xl text-3xl transition-all duration-300
                        hover:bg-white/10 hover:scale-110 hover:shadow-glow"
                        style={{
                            color: {
                                '1': '#E1306C', // Instagram
                                '2': '#0A66C2', // LinkedIn
                                '3': '#ED1F24', // Aparat
                                '4': '#2AABEE'  // Telegram
                            }[item.id]
                        }}
                    >
                        {item.icons}
                    </Link>
                ))}
            </div>
        </div>
    )
}
