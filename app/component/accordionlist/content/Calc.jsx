"use client"
import React, { useState } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { useModalChild } from '@/app/provider/ModalChildProvider';
import { usevalCalc } from '@/app/provider/CalcValProvider';

export default function Calc() {
    const { setVal, val } = usevalCalc()
    const [currentValue, setCurrentValue] = useState(val.value);
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [newNumber, setNewNumber] = useState(false);
    const { closeModalChild } = useModalChild()
    const okHandler = () => {
        setVal(prevState => ({
            ...prevState,
            value: currentValue,
        }))
        closeModalChild()
    }
    const handleNumber = (num) => {
        if (newNumber) {
            let processedNum = num.replace(/^0+/, '');
            if (processedNum === '') processedNum = '0';
            setCurrentValue(processedNum);
            setNewNumber(false);
        } else {
            setCurrentValue((prev) => {
                if (prev === '0') {
                    if (/^0+$/.test(num)) return '0';
                    const trimmedNum = num.replace(/^0+/, '');
                    return trimmedNum === '' ? '0' : trimmedNum;
                }
                return prev + num;
            });
        }
    };

    const handleOperator = (op) => {
        if (operator && previousValue !== null) {
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let result = calculate(prev, current, operator);
            if (result === 'Error') return;

            setPreviousValue(result.toString());
            setCurrentValue(result.toString());
            setOperator(op);
            setNewNumber(true);
        } else {
            setPreviousValue(currentValue);
            setOperator(op);
            setNewNumber(true);
        }
    };

    const calculate = (prev, current, op) => {
        switch (op) {
            case '+': return prev + current;
            case '-': return prev - current;
            case 'x': return prev * current;
            case '/':
                if (current === 0) {
                    handleClear();
                    return 'Error';
                }
                return prev / current;
            default: return current;
        }
    };

    const handleCalculate = () => {
        if (operator && previousValue !== null) {
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let result = calculate(prev, current, operator);
            if (result === 'Error') return;

            setCurrentValue(result.toString());
            setPreviousValue(null);
            setOperator(null);
            setNewNumber(true);
        }
    };

    const handleClear = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setNewNumber(false);
    };

    const handleDelete = () => {
        setCurrentValue(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    };

    const handleCancel = () => {
        setCurrentValue('0');
        setNewNumber(false);
    };

    const formatWithCommas = (value) => {
        if (value === 'Error') return value;
        const parts = value.split('.');
        let integerPart = parts[0].replace(/\D/g, '') || '0';
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts[1] ? `${integerPart}.${parts[1]}` : integerPart;
    };

    return (
        <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-4 space-y-4">
            {/* نمایشگر */}
            <div className="bg-gray-900/50 rounded-xl p-4 shadow-inner">
                <div className="flex justify-between items-center text-gray-400 mb-2">
                    <button
                        onClick={handleClear}
                        className="text-sm hover:text-red-500 transition-colors"
                    >
                        Clear
                    </button>
                    <span className="text-lg font-mono">{operator || ' '}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">ریال</span>
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-mono text-gray-100">
                            {formatWithCommas(currentValue)}
                        </span>
                        <button
                            onClick={handleDelete}
                            className="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
                        >
                            <FaDeleteLeft className="text-2xl text-red-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* بدنه ماشین حساب */}
            <div className="flex gap-3">
                {/* اپراتورها */}
                <div className="flex flex-col gap-2 w-1/4">
                    {['/', 'x', '-', '+', '='].map((op) => (
                        <button
                            key={op}
                            onClick={() => op === '=' ? handleCalculate() : handleOperator(op)}
                            className={`p-4 rounded-xl text-xl font-bold transition-all
                                ${op === '=' ?
                                    'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600' :
                                    'bg-gray-700/50 hover:bg-purple-600/50'}
                                active:scale-95 shadow-md`}
                        >
                            {op}
                        </button>
                    ))}
                </div>

                {/* اعداد */}
                <div className="grid grid-cols-3 gap-2 w-3/4">
                    {['9', '8', '7', '6', '5', '4', '3', '2', '1', '000', '00', '0'].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumber(num)}
                            className="p-4 rounded-xl bg-gray-700/50 hover:bg-gray-600/70 
                                active:scale-95 transition-all text-xl font-medium
                                shadow-md hover:shadow-lg"
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </div>

            {/* دکمه‌های پایانی */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={okHandler}
                    className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-400
                        hover:from-green-600 hover:to-teal-500 transition-all
                        shadow-lg hover:shadow-xl font-semibold"
                >
                    تأیید
                </button>
                <button
                    onClick={closeModalChild}
                    className="p-3 rounded-xl border-2 border-purple-500/50 
                        hover:border-purple-400 hover:bg-purple-900/20
                        transition-all shadow hover:shadow-md"
                >
                    لغو
                </button>
            </div>
        </div>
    )
}