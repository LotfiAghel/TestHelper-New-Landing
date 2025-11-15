'use client';
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/base/buttons/button';

export default function ChooseSitePopUp({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderByPhase = () => {
        return (
            <div className="bg-white z-10 flex flex-col h-fit border-2 border-[#7000FF] rounded-[16px]">
                <div className="flex flex-col h-full p-[15px]">
                    <Link
                        href={'/toefl'}
                        className="bg-[#6E46FE] text-white text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        ورود به تافل
                    </Link>
                    <Link
                        href={'/ielts'}
                        className="bg-[#6E46FE] text-white text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        ورود به آیتلس
                    </Link>
                    <Link
                        href={'/gre'}
                        className="bg-[#6E46FE] text-white text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        ورود به GRE
                    </Link>
                    <Link
                        href={'/pte'}
                        className="bg-[#6E46FE] text-white text-center rounded-[8px] px-[25px] py-[6px] mt-[15px]">
                        ورود به PTE
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
            <Button onClick={() => {
                setIsOpen(true)
            }} color="primary" size="xl">
                شروع رایگان
            </Button>
        </>
    )
}
