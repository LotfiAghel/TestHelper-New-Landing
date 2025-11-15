'use client';
import React, { useEffect, useState } from 'react';
import { Download, Apple, Send, Instagram, Linkedin, Menu } from 'lucide-react';
import { LinkedIn } from '@/components/foundations/social-icons';
import Image from 'next/image';
import { LearnBranch } from '@/types';
import { handleUrlAttach } from '@/utils/consts';

const NavLink = ({ children, link = '#' }) => (
    <a href={link} className="text-[#F8F9FA] hover:text-white transition-colors text-sm mb-2 block">
        {children}
    </a>
);

type filesType = {
    learnBranch: number,
    name: string,
    version: string,
    file: string,
    isRemoved: boolean,
    id: number,
}


export async function getAppUrlrops(): Promise<filesType[]> {
    const result = await fetch('https://testhelper.com/toefl-api/v1/generic/Models__AppDownloadFile')
        .then(item => item.json())
        .then((res: filesType[]) => res.filter(item => !item.isRemoved));
    return result;
}

const AppStoreBadge = ({ store, icon: Icon, link = '#' }) => (
    <a
        dir='ltr'
        href={link}
        className="flex items-center  justify-end gap-2 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors w-[150px] md:w-[170px] border-2 border-[#343739] shadow-md"
        aria-label={`Download from ${store} Store`}
    >
        {Icon}
        <div className="text-right text-nowrap justify-between w-full">
            <p className="text-[10px] text-white leading-none">دریافت از</p>
            <p className="text-lg font-semibold text-white leading-tight">{store}</p>
        </div>
    </a>
);


const NewFooter = ({ type }: { type: LearnBranch }) => {
    const bgColor = "bg-[#100F16]";
    const accentColor = "bg-[#171521]";

    const [data, setData] = useState<filesType[]>([]);

    useEffect(() => {
        getAppUrlrops()
            .then(res => {
                setData(res)
            });
    }, []);
    const properApp = data.find(item => item.learnBranch == type)

    return (
        <div className={`flex items-start justify-center ${bgColor}`}>
            <footer className={`w-full text-white ${bgColor} font-sans py-4`}>
                <div className={`${accentColor} flex w-full flex-col md:flex-row justify-between items-start md:items-center`}>
                    <div className='py-[1rem] flex px-[2rem] md:px-[3rem] xl:px-[15rem] flex-col md:flex-row-reverse w-full justify-between items-start md:items-center'>
                        <div className="flex items-center gap-4 order-1 md:order-2">
                            <div className={`p-3 rounded-xl`}>
                                <Image
                                    width={60}
                                    height={60}
                                    alt='TestHelper'
                                    src={'/images/TestHelperFooterLogo.webp'}
                                />
                            </div>
                            <h2 className="text-2xl font-extrabold text-white">
                                دانلود اپلیکیشن تست هلپر
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-3 order-2 md:order-1 mt-6 md:mt-0">
                            <AppStoreBadge
                                link={
                                    handleUrlAttach(`${properApp?.file}`)
                                }
                                store="Android"
                                icon={
                                    <Image
                                        src={'/images/android-logo.svg'}
                                        width={15}
                                        height={15}
                                        alt='testHelper Android Application'
                                        className="w-6 h-6 text-gray-300"
                                    />
                                } />
                            <AppStoreBadge

                                store="Google Play" icon={
                                    <Image
                                        src={'/images/google-play-store-logo-svgrepo-com.svg'}
                                        width={15}
                                        height={15}
                                        alt='testHelper Android Application'
                                        className="w-6 h-6 text-gray-300"
                                    />
                                } />
                            <AppStoreBadge

                                store="Apple Store" icon={
                                    <Image
                                        src={'/images/apple-svgrepo-com.svg'}
                                        width={15}
                                        height={15}
                                        alt='testHelper Android Application'
                                        className="w-6 h-6 text-gray-300"
                                    />
                                } />
                        </div>
                    </div>
                </div>

                <div className=' px-[2rem] md:px-[3rem] xl:px-[15rem]'>
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-8">

                        <div className="md:col-span-3 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-[#F8F9FA]">آزمون ها</h3>
                                <NavLink link='/toefl' >آزمون تافل</NavLink>
                                <NavLink link='/ielts'>آزمون آیلتس</NavLink>
                                <NavLink link='/gre'>آزمون GRE</NavLink>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-4 text-[#F8F9FA]">خدمات مشتریان</h3>
                                <NavLink link='/contact-us'>پیام به پشتیبانی</NavLink>
                                <NavLink>راهنمای کاربران</NavLink>
                                <NavLink link='/contact-us'>تماس با ما</NavLink>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-4 text-[#F8F9FA]">تست هلپر</h3>
                                <NavLink link='/about-us'>درباره ما</NavLink>
                                <NavLink>شرایط استفاده</NavLink>
                                <NavLink>حریم خصوصی</NavLink>
                            </div>

                        </div>

                        <div className="md:col-span-2 lg:col-span-3 flex flex-col items-start md:items-end">
                            <p className="text-gray-300 mb-4 text-center md:text-right">
                                تست هلپر را در شبکه‌های اجتماعی دنبال کنید
                            </p>
                            <div className="flex gap-4">
                                <a href={"https://www.linkedin.com/company/testhelper/"} aria-label="LinkedIn" className="bg-[#0078D4] w-[28px] h-[28px] rounded-sm">
                                    <Image
                                        width={28}
                                        height={28}
                                        alt='TestHelper Telegram Channel'
                                        src={'/images/linkedin-logo.svg.svg'}
                                        className=" text-white" />
                                </a>
                                <a href={
                                    "https://t.me/TestHelperLinks"
                                } aria-label="Telegram">
                                    <Image
                                        width={28}
                                        height={28}
                                        alt='TestHelper Telegram Channel'
                                        src={'/images/telegram-logo.svg.svg'}
                                        className=" text-white" />
                                </a>
                                <a
                                    href={
                                        "https://www.instagram.com/testhelper_ir"
                                    }
                                    aria-label="Instagram"  >
                                    <Image
                                        width={28}
                                        height={28}
                                        alt='TestHelper Telegram Channel'
                                        src={'/images/instagram-logo.svg.svg'}
                                        className=" text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer >
        </div >
    );
};

export default NewFooter;