"use client"
import React from 'react'
import { useModalChild } from '@/app/provider/ModalChildProvider'
export default function ModalChild() {
    const { isOpenChild, contentChild, closeModalChild } = useModalChild()
    return (
        <div
            className={`${isOpenChild ? "opacity-100 visible" : "opacity-0 invisible"} duration-300 w-screen h-screen  flex justify-center items-center fixed top-0 left-0 right-0 bg-gray-950 z-[60] overflow-auto`}
            onClick={closeModalChild}>
            <div onClick={(event) => event.stopPropagation()} className=' w-max md:w-96 flex items-center justify-center container mx-auto overflow-auto'>
                {contentChild}
            </div>
        </div>
    )
}
