"use client"
import React from 'react'
import { useModal } from '@/app/provider/ModalProvider'
export default function Modal() {
    const { isOpen, content, closeModal } = useModal()
    return (
        <div
            className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} duration-300 w-screen h-screen  flex justify-start items-start fixed top-0 left-0 right-0 bg-gray-950  z-50 overflow-auto`}
            onClick={closeModal}>
            <div onClick={(event) => event.stopPropagation()} className=' h-full w-max flex items-center justify-center  container mx-auto'>
                {content}
            </div>
        </div>
    )
}
