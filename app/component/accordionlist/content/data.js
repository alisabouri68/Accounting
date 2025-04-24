"use client"
import { IoFastFoodOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaMosque } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaGift } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
export const data = [
    {
        id: "1",
        title: "اغذیه",
        icon: <IoFastFoodOutline />,
        child: [
            {
                id: "1",
                title: "تنقلات"
            },
            {
                id: "2",
                title: "گوشت قرمز"
            },
            {
                id: "3",
                title: "مرغ"
            },
            {
                id: "4",
                title: "ماهی و میگو"
            },
            {
                id: "5",
                title: "برنج"
            },
            {
                id: "6",
                title: "نان"
            },
            {
                id: "7",
                title: "لبنیات"
            },
            {
                id: "8",
                title: "نوشیدنی"
            },
            {
                id: "9",
                title: "حبوبات"
            },
            {
                id: "10",
                title: "غلات"
            },
            {
                id: "11",
                title: "میوه و تره بار"
            },
            {
                id: "12",
                title: "غذای بیرون"
            },
            {
                id: "13",
                title: "رستوران"
            },
            {
                id: "14",
                title: "کافی شاپ"
            },
            {
                id: "15",
                title: "سایر"
            },
        ]
    },
    {
        id: "2",
        title: "مسکن",
        icon: <LuHouse />,
        child: [
            {
                id: "1",
                title: "قبض اب",
            },
            {
                id: "2",
                title: "قبض بق",
            },
            {
                id: "3",
                title: "قبض گاز",
            },
            {
                id: "4",
                title: "قبض تلفن",
            },
            {
                id: "5",
                title: "شارژ ساختمان",
            },
            {
                id: "6",
                title: "اجاره منزل",
            },
            {
                id: "7",
                title: "لوازم منزل",
            },
            {
                id: "8",
                title: "قبض و شارژ موبایل",
            },
            {
                id: "9",
                title: "بیمه ساختمان",
            },
            {
                id: "10",
                title: "عوارض شهر داری",
            },
            {
                id: "",
                title: "مالیات",
            },
            {
                id: "11",
                title: "تعمیرات ساختمان",
            },
            {
                id: "12",
                title: "سایر",
            },
        ]
    },
    {
        id: "3",
        title: "پوشاک",
        icon: <GiClothes />,
        child: [
            {
                id: "1",
                title: "خرید پوشاک",
            },
            {
                id: "2",
                title: "خشکشویی",
            },
            {
                id: "3",
                title: "خیاطی",
            },
            {
                id: "4",
                title: "سایر",
            },
        ]
    },
    {
        id: "4",
        title: "خودرو",
        icon: <FaCarSide />,
        child: [
            {
                id: "1",
                title: "بنزین",
            },
            {
                id: "2",
                title: "روغن",
            },
            {
                id: "3",
                title: "تعمیرات",
            },
            {
                id: "4",
                title: "بیمه ثالث",
            },
            {
                id: "5",
                title: "جرایم",
            },
            {
                id: "6",
                title: "طرح ترافیک",
            },
            {
                id: "7",
                title: "بیمه بدنه",
            },
            {
                id: "8",
                title: "تغیرات اساسی",
            },
            {
                id: "9",
                title: "عوارض",
            },
            {
                id: "10",
                title: "سایر",
            },
        ]
    },
    {
        id: "5",
        title: "ایاب و ذهاب و مسافرت",
        icon: <MdCardTravel />,
        child: [
            {
                id: "1",
                title: "کرایه تاکسی"
            },
            {
                id: "2",
                title: "کرایه اژانس"
            },
            {
                id: "3",
                title: "کرایه اتوبوس"
            },
            {
                id: "4",
                title: "کرایه مترو"
            },
            {
                id: "5",
                title: "سرویس"
            },
            {
                id: "6",
                title: "بلیط قطار"
            },
            {
                id: "7",
                title: "بلیط هوپیما"
            },
            {
                id: "8",
                title: "بلیط اتوبوس"
            },
            {
                id: "9",
                title: "هتل ومحل اقامت"
            },
            {
                id: "10",
                title: "سایر"
            },
        ]
    },
    {
        id: "6",
        title: "اموزش و تحصیلات",
        icon: <IoSchool />,
        child: [
            {
                id: "1",
                title: "کلاس های ورزشی",
            },
            {
                id: "2",
                title: "شهریه مدرسه",
            },
            {
                id: "3",
                title: "شهریه دانشکاه",
            },
            {
                id: "4",
                title: "شهریه مهد کودک",
            },
            {
                id: "5",
                title: "کلاس های اموزشی",
            },
            {
                id: "6",
                title: "لوازم تحریر",
            },
            {
                id: "7",
                title: "سایر",
            },
        ]
    },
    {
        id: "7",
        title: "فرهنگی وسرگرمی",
        icon: <FaTheaterMasks />,
        child: [
            {
                id: "1",
                title: "نرم افزار",
            },
            {
                id: "2",
                title: "کتاب",
            },
            {
                id: "3",
                title: "فیلم",
            },
            {
                id: "4",
                title: "سینما",
            },
            {
                id: "5",
                title: "روزنامه و مجله",
            },
            {
                id: "6",
                title: "موسیقی",
            },
            {
                id: "7",
                title: "سایر",
            },
        ]
    },
    {
        id: "8",
        title: "بهداشتی و درمانی",
        icon: <FaUserDoctor />,
        child: [
            {
                id: "1",
                title: "ویزیت پزشک",
            },
            {
                id: "2",
                title: "لوازم بهداشتی",
            },
            {
                id: "3",
                title: "دندان پزشکی",
            },
            {
                id: "4",
                title: "جراحی",
            },
            {
                id: "5",
                title: "ازمایشگاه",
            },
            {
                id: "6",
                title: "دارو",
            },
            {
                id: "7",
                title: "سایر",
            },
        ]
    },
    {
        id: "9",
        title: "هدایا",
        icon: <FaGift />,
        child: [
            {
                id: "1",
                title: "سوغات",
            },
            {
                id: "2",
                title: "فرهنگی",
            },
            {
                id: "3",
                title: "لوازم",
            },
            {
                id: "4",
                title: "سایر",
            },
        ]
    },
    {
        id: "10",
        title: "هزینه های اداری",
        icon: <HiMiniBuildingOffice />,
        child: [
            {
                id: "1",
                title: "هزینه های تشکیل پرونده",
            },
            {
                id: "2",
                title: "کارمزد بانک",
            },
            {
                id: "3",
                title: "کارمزد خدمات دولتی و اداری",
            },
            {
                id: "4",
                title: "سایر",
            },
        ]
    },
    {
        id: "11",
        title: "دیون اسلامی",
        icon: <FaMosque />,
        child: [
            {
                id: "1",
                title: "دیه",
            },
            {
                id: "2",
                title: "خمس",
            },
            {
                id: "3",
                title: "ذکات",
            },
            {
                id: "4",
                title: "فطریه",
            },
            {
                id: "5",
                title: "صدقه",
            },
            {
                id: "6",
                title: "کفاره",
            },
            {
                id: "7",
                title: "سایر",
            },
        ]
    },
    {
        id: "12",
        title: "سرمایه گذاری",
        icon: <FaChartLine />,
        child: [
            {
                id: "1",
                title: "سهام",
            },
            {
                id: "2",
                title: "سهام اعدالت",
            },
            {
                id: "3",
                title: "اوراق مشاکت",
            },
            {
                id: "4",
                title: "سایر",
            },
        ]
    },
]

export const dataIncome = [
    {
        id: "1",
        title: "حقوق",
        icon: <FaSackDollar />,
        child: [
            {
                id: "1",
                title: "حقوق ماهیانه"

            },
            {
                id: "2",
                title: "عیدی"

            },
            {
                id: "3",
                title: "پاداش"

            },
            {
                id: "4",
                title: "مزایا"

            },
            {
                id: "5",
                title: "سایر"

            },
        ]
    },
    {
        id: "2",
        title: "فروش",
        icon: <FaDatabase />,
        child: [
            {
                id: "1",
                title: "لوازم"

            },
            {
                id: "2",
                title: "مسکن"

            },
            {
                id: "3",
                title: "خودرو"

            },
            {
                id: "4",
                title: "سایر"

            }
        ]
    },
    {
        id: "3",
        title: "سود سرمایه",
        icon: <FaPercent />,
        child: [
            {
                id: "1",
                title: "سود سپرده بانکی"

            },
            {
                id: "2",
                title: "سود اوراق مشارکت"

            },
            {
                id: "3",
                title: "سود سهام"

            },
            {
                id: "4",
                title: "سایر"

            }
        ]
    },
    {
        id: "4",
        title: "یارانه و هدایا",
        icon: <FaGift />,
        child: [
            {
                id: "1",
                title: "یارانه نقدی"

            },
            {
                id: "2",
                title: "هدیه"

            },
            {
                id: "3",
                title: "سایر"

            }
        ]
    },
    {
        id: "5",
        title: "درامد و اجاره",
        icon: <FaHandHoldingDollar />,
        child: [
            {
                id: "1",
                title: "اجاره اپارتمان"

            },
            {
                id: "2",
                title: "اجاره مغازه"

            },
            {
                id: "3",
                title: "اجاره شرکت"

            },
            {
                id: "4",
                title: "سایر"

            }
        ]
    },
]