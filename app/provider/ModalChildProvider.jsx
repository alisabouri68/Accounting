"use client"
import React, { createContext, useContext, useState } from 'react'
import { } from 'react'
const ModalChildContext = createContext({
    isOpenChild: false,
    contentChild: null,
    openModalChild: () => { },
    closeModalChild: () => { }

})
export default function ModalChildProvider({ children }) {
    const [isOpenChild, setIsOPenChild] = useState(false)
    const [contentChild, setContentChild] = useState(null)
    const openModalChild = (modalContent) => {
        setContentChild(modalContent)
        setIsOPenChild(true)

    }
    const closeModalChild = () => {
        setContentChild(null)
        setIsOPenChild(false)
    }
    return (
        <ModalChildContext value={{ isOpenChild, contentChild, openModalChild, closeModalChild }}>
            {children}
        </ModalChildContext>
    )
}
export const useModalChild = () => useContext(ModalChildContext)