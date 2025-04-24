'use client'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ValueCalcContext = createContext(null)

export function CalcValProvider({ children }) {
  const [val, setVal] = useState({
    value: "0",
    name: "",
    id:"",
    date:"",
  })

  const persistToStorage = useCallback((la) => {
    try {
      const storedData = localStorage.getItem(la)
      const historyArray = storedData ? JSON.parse(storedData) : []

      const newHistory = [val, ...historyArray]

      localStorage.setItem(la, JSON.stringify(newHistory))
    } catch (error) {
      console.error('خطا در دسترسی به localStorage:', error)
    }
  }, [val])

  const contextValue = useMemo(() => ({
    val,
    setVal,
    persistToStorage
  }), [val, persistToStorage])

  return (
    <ValueCalcContext.Provider value={contextValue}>
      {children}
    </ValueCalcContext.Provider>
  )
}

export const usevalCalc = () => useContext(ValueCalcContext)