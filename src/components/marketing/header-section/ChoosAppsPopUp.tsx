'use client';
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/base/buttons/button';
import Image from 'next/image';
import { getAppUrlrops } from '../footers/NewFooter';
import { handleUrlAttach } from '@/utils/consts';
import { LearnBranch } from '@/types';

export default function ChoosAppsPopUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<filesType[]>([]);

    useEffect(() => {
        getAppUrlrops()
            .then(res => {
                setData(res)
            });
    }, []);
    const renderByPhase = () => {
        const toeflApp = data.find(item => item.learnBranch == LearnBranch.TOEFL)
        const ieltslApp = data.find(item => item.learnBranch == LearnBranch.IELTS)
        const greApp = data.find(item => item.learnBranch == LearnBranch.GRE)

        return (
            <div className="bg-white z-10 flex flex-col h-fit rounded-[16px]">
                <div className="flex flex-col h-full p-[15px]">
                    <Link
                        href={
                            handleUrlAttach(`${toeflApp?.file}`)
                        }

                        className="border-1 border-[#6E46FE] text-black text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        دریافت  App تافل
                    </Link>
                    <Link
                        href={
                            handleUrlAttach(`${ieltslApp?.file}`)
                        }
                        className="border-1 border-[#6E46FE] text-black text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        دریافت App آیتلس
                    </Link>
                    <Link
                        href={
                            handleUrlAttach(`${greApp?.file}`)
                        }
                        className="border-1 border-[#6E46FE] text-black text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        دریافت App جی‌آرای
                    </Link>

                </div>
            </div>
        );
    }
    return (
        <>{isOpen ?
            <div
                className="w-full h-full fixed items-center justify-center flex"
                style={{ zIndex: 99999999, top: 0, left: 0 }}>
                {renderByPhase()}
                <div className="w-full h-full blur-lg absolute"
                    onClick={() => setIsOpen(false)}
                    style={{ backdropFilter: 'blur(20px)' }} />
            </div> : null}
            <div

                onClick={() => setIsOpen(true)}
                dir='ltr'
                className="flex items-center cursor-pointer justify-end gap-2 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors w-[150px] md:w-[170px] border-2 border-[#343739] shadow-md"
                aria-label={`Download Application`}
            >
                <Image
                    src={'/images/android-logo.svg'}
                    width={15}
                    height={15}
                    alt='testHelper Android Application'
                    className="w-6 h-6 text-gray-300"
                />
                <div className="text-right text-nowrap justify-between w-full">
                    <p dir='rtl' className="text-[10px] text-white leading-none">دانلود مستقیم App</p>
                    <p className="text-lg font-semibold text-white leading-tight">Android</p>
                </div>
            </div>
        </>
    )
}
