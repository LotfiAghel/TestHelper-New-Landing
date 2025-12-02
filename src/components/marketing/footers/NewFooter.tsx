'use client';
import React, { useEffect, useState } from 'react';
import { Download, Apple, Send, Instagram, Linkedin, Menu } from 'lucide-react';
import { LinkedIn } from '@/components/foundations/social-icons';
import Image from 'next/image';
import { LearnBranch } from '@/types';
import { handleUrlAttach, sibAppLinks } from '@/utils/consts';
import ChoosAppsPopUp from '../header-section/ChoosAppsPopUp';

const NavLink = ({ children, link = '#' }) => (
    <a href={link} className="text-[#F8F9FA] hover:text-white transition-colors text-sm mb-2 block">
        {children}
    </a>
);

export type filesType = {
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
    const [downloadModal, setDownloadModal] = useState(false);
    const [data, setData] = useState<filesType[]>([]);

    useEffect(() => {
        getAppUrlrops()
            .then(res => {
                setData(res)
            });
    }, []);
    const properApp = data.find(item => item.learnBranch == type)

    return (
        <div className={`flex items-start justify-center ${bgColor} new-footer`}>
            <footer className={`w-full text-white ${bgColor}  py-4`}>
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
                            {type == LearnBranch.None ?
                                <>
                                    <ChoosAppsPopUp />
                                </>
                                : <AppStoreBadge
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
                                    } />}

                            <AppStoreBadge
                                store="SibApp"
                                link={
                                    sibAppLinks[type]
                                }
                                icon={
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
            </footer >
        </div >
    );
};

export default NewFooter;