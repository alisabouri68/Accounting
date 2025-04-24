"use client"
import React, { useState, createContext, useContext } from 'react'
const DataContext = createContext(null)
export default function ValDateProvider({ children }) {
    const [valueDate, setValueDate] = useState()
    return (
        <DataContext.Provider value={{ valueDate, setValueDate }}>
            {children}
        </DataContext.Provider>
    )
}
export const useValueDate = () => useContext(DataContext)