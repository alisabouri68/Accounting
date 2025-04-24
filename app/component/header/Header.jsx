"use client"
import React, { useState } from 'react'
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import { useModal } from '@/app/provider/ModalProvider'
import Menu from '../menu/Menu';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const {isOpen,openModal, closeModal } = useModal()
    const menu = <Menu />
    const clickHandler = () => {
        if (isOpen) {
            closeModal()
        } else {
            openModal(menu)
        }
    }
    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* سمت چپ */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={clickHandler}
                            className="p-3 rounded-xl transform transition-all duration-300 
                            hover:bg-purple-600/20 hover:scale-105 active:scale-95
                            border border-gray-600/30 hover:border-purple-500/50"
                        >
                            <IoIosMenu className="text-3xl text-purple-400" />
                        </button>

                        <div className="hidden sm:block">
                            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                علی امامی صبوری
                            </span>
                        </div>
                    </div>

                    {/* سمت راست */}
                    <div className="flex items-center space-x-6">
                        <button className="relative p-3 rounded-full transition-all duration-300
                        hover:bg-purple-600/20 group">
                            <IoIosNotificationsOutline className="text-2xl text-gray-300 hover:text-purple-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </button>

                        <Link
                            href="/"
                            className="relative w-12 h-12 rounded-full border-2 border-purple-500/30 
                            overflow-hidden transform transition-all duration-300 
                            hover:scale-110 hover:border-purple-400 hover:shadow-glow"
                        >
                            <Image
                                width={48}
                                height={48}
                                src="https://cdn.appleapps.ir/2020/05/at-15896294281243-100x100.png"
                                alt='لوگو'
                                className="object-cover"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}