"use client"
import React from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";
import { useModal } from '@/app/provider/ModalProvider'

export default function Add({ t1, t2 ,contentModal}) {
    const { isOPen, content, openModal, closeModale } = useModal()
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <div>
                <button className='bg-green-500 p-2 rounded-full text-3xl' onClick={()=>openModal(contentModal)}>
                    <HiMiniPlusSmall />
                </button>
            </div>
            <div className='flex flex-col text-center gap-3 text-gray-200'>
                <span>{t1}</span>
                <span>{t2}</span>
            </div>
        </div>
    )
}
