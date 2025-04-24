"use client";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { usevalCalc } from "@/app/provider/CalcValProvider";
export default function DatePickerWrapper() {
    const { setVal } = usevalCalc()
    const [value, setValue] = useState(new Date())
    const changeHandler = (date) => {
        const newDate = date ? date.toDate().toISOString() : null;
        setValue(newDate)
        setVal(prev => ({
            ...prev,
            date: newDate
        }));
    }
    console.log(value)
    return (
        <div className="text-right direction-rtl p-4" >
            <DatePicker
                value={value}
                onChange={changeHandler}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                placeholder="تاریخ را انتخاب کنید"
                style={{
                    width: "100%",
                    padding: "20px",
                    fontSize: "16px",
                    fontWeight: "bolder",
                    color: "black"
                }}
            />
        </div>
    );
}
