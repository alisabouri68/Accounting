"use client"
import React, { createContext, useContext, useState } from 'react'
import { } from 'react'
const ModalContext = createContext({
    isOpen: false,
    content: null,
    openModal: () => { },
    closeModal: () => { }

})
export default function ModalProvider({ children }) {
    const [isOpen, setIsOPen] = useState(false)
    const [content, setContent] = useState(null)
    const openModal = (modalContent) => {
        setContent(modalContent)
        setIsOPen(true)

    }
    const closeModal = () => {
        setContent(null)
        setIsOPen(false)
    }
    return (
        <ModalContext value={{ isOpen, content, openModal, closeModal }}>
            {children}
        </ModalContext>
    )
}
export const useModal = () => useContext(ModalContext)