import React from 'react'
import AccordionItems from './AccordionItems';
import AddCost from './content/AddCost';
import AddIncome from './content/AddIncome';
export default function AccordionList() {
    const accordionItems = [
        {
            id: "1",
            title: "هزینه ها",
            color: "bg-gray-500",
            getLocale: "cost",
            contenttwo: <AddCost />
        },
        {
            id: "2",
            title: "درامد ها",
            color: "bg-gray-500",
            getLocale: "incom",
            contenttwo: <AddIncome />

        },
        // {
        //     id: "3",
        //     title: "بانک ها",
        //     color: "bg-violet-500",
        //     content: "dfgdsgsdf"
        // },
        // {
        //     id: "4",
        //     title: "صندوق ها",
        //     color: "bg-sky-500",
        //     content: "dfgdsgsdf"
        // },
        // {
        //     id: "5",
        //     title: "گزارش مانده حساب ها",
        //     color: "bg-yellow-500",
        //     content: "dfgdsgsdf"
        // },
        // {
        //     id: "6",
        //     title: "میانبر تراکنش ها",
        //     color: "bg-pink-500",
        //     content: "dfgdsgsdf"
        // },
        // {
        //     id: "7",
        //     title: "بودجه بندی",
        //     color: "bg-lime-500",
        //     content: "dfgdsgsdf"
        // },
        // {
        //     id: "8",
        //     title: "فعالیت ها",
        //     color: "bg-red-500",
        //     content: "dfgdsgsdf"
        // },
    ]
    return (
        <div className='w-full flex flex-col gap-5 px-1'>
            {accordionItems.map((item, index) => {
                return (
                    <AccordionItems key={item.id} item={item} />
                )
            })}

        </div>
    )
}
