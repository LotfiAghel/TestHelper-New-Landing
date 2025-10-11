import { User } from "@/types";
import { downlaoduserPublicFile } from "@/utils/consts";
import person from "@/../public/images/person.svg";
import profile from '@/../public/images/profile-menu.svg';
import logout from '@/../public/images/LogoutIcon.svg';
import support from '@/../public/images/MenuIconSupport.svg';

import { logOutApi } from "@/utils/login";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";


export default function UserProfile({ profileUser }: {
    profileUser: User,
}) {
    const params = usePathname().split('/').filter(item => !!item);
    console.error(params)
    const type = params[0] ?? 'toefl';
    const user = profileUser;
    const imageUrl = user.avatar ? downlaoduserPublicFile(user.id, user.avatar) : person.src;
    const userName = user.displayName || user.phoneNumber;
    const useEmail = user.email || '';
    return (
        <div className='profile-menu-wrapper border-1 !hidden sm:!flex border-gray-500 px-[5px] rounded-[40px] user-profile-container flex-row items-center cursor-pointer mr-[5px]'>
            &nbsp;&nbsp;
            <div className='flex  items-center flex-row py-[5px]'>
                {userName}
                &nbsp;&nbsp;
                <img width={30} height={30} className='rounded-full h-[30px]' src={imageUrl} alt="TestHelper user profile image" />
            </div>
            &nbsp;&nbsp;
            <div className='profile-menu bg-white dark:bg-black '>
                <div style={{ zIndex: '2000' }}
                    className={`flex flex-col bg-[var(--examlist-bg)] border-[1px] border-[#E4E2E4] w-[312px] overflow-visible right-0 rounded-[11px] text-[var(--vertical-menu-text)] `}>
                    <div className='flex flex-row items-center border-b-[1px] border-[#E4E2E4] px-[5px] py-[10px]'>
                        <img width={45} height={45} className='rounded-full h-[45px] object-fill' src={imageUrl} alt="" />
                        &nbsp;&nbsp;
                        <div className='flex flex-col'>
                            <h1 className='font-[500] text-[14px]'>
                                {userName}
                            </h1>
                            <span className='font-[400] text-[12px] text-[#5A5D6C] dark:text-white'>
                                {useEmail}
                            </span>
                        </div>
                    </div>
                    <div className={'flex flex-col border-b-[1px] iransans text-[var(--vertical-menu-text)] px-[5px] py-[15px] border-b-[#E4E2E4]'}>
                        <Link
                            href={`${type}/profile`}
                            className='flex flex-row w-max items-center mb-[5px] dark:text-white'>
                            <Image width={20} height={20}
                                src={profile.src}
                                className="i-profile" alt="" />
                            &nbsp;&nbsp;
                            پروفایل
                        </Link>
                        <br />
                        <Link
                            href={`${type}/support`}
                            onClick={() => {
                            }} className='flex flex-row mt-[5px] w-max items-center dark:text-white'>

                            <Image width={20} height={20}
                                src={support.src}
                                className="i-profile" alt="" />
                            &nbsp;&nbsp;
                            پشتیبانی
                        </Link>
                    </div>

                    <div
                        className='flex flex-row px-[5px] py-[15px] iransans text-[var(--vertical-menu-text)] items-center justify-between pl-3'>
                        <Link
                            href={`#`}
                            onClick={async (e) => {
                                e.preventDefault();
                                await logOutApi();
                                window.location.reload();
                            }}
                            className='flex flex-row w-max gap-2 items-center dark:text-white'>
                            <Image width={20} height={20}
                                src={logout.src}
                                className="i-profile" alt="" />
                            خروج
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
