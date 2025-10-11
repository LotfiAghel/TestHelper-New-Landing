import React, { useRef, useState } from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { login, loginByActivatoinCode, loginByGmail, properPhoneNumber } from "@/utils/login";
import frame from "@/../public/images/frame.svg";
import arrow from "@/../public/images/downArrow.svg";
import { LoginUserResponse, User } from '@/types';
import { setUserId } from '@/utils/ga';
// import { setUserId } from '@/lib/ga';
const ids = [1, 2, 3, 4, 5];

export default function LoginModal({ isOpen, setIsOpen, setUser, type }) {
    const mobileNumber = useRef('');
    const [isGoogleLoginOpen, setIsGoogleLoginOpen] = useState(false);
    const [isValidationPhase, setIsValidationPhase] = useState(false);
    const inputRefs = useRef([null, null, null, null, null]);
    const [extMessage, setExtMessage,] = useState('');

    const hanldeSubmit = (e?:any) => {
        if (e)
            e.preventDefault();
        const code = inputRefs.current.reduce((prevValue, element) => prevValue + element.value, '');
        checkCode(code)
    };

    function convertPersianToEnglishNumbers(persianNumberString) {
        if (typeof persianNumberString !== 'string')
            return String(persianNumberString);
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        let englishNumberString = '';
        persianNumberString = (persianNumberString[0] == 0 || persianNumberString[0] == '۰') ? persianNumberString.slice(1) : persianNumberString;

        for (let i = 0; i < persianNumberString.length; i++) {
            const char = persianNumberString[i];

            const persianIndex = persianDigits.indexOf(char);
            if (persianIndex !== -1) {
                englishNumberString += englishDigits[persianIndex];
                continue;
            }

            const englishIndex = englishDigits.indexOf(char);
            if (englishIndex !== -1) {
                englishNumberString += char;
                continue;
            }
        }
        mobileNumber.current = '0' + englishNumberString;

        return englishNumberString;
    }

    const navigate = () => {
        if (!type) {
            window.location.href = `/toefl/dashboard`;
            return;
        }
        window.location.href = `/${type}/dashboard`;
    }

    const checkCode = async (code) => {
        if (code) {
            const result = await loginByActivatoinCode({
                PhoneNumber: properPhoneNumber(mobileNumber) ?? "",
                OTP: code,
                Platform: 1,
                DeviceType: 0,
            });
            const data: LoginUserResponse = await result.json();
            if (data.done) {
                setUser(data.user);
                const userId = data.user.id;
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('config', 'G-6PK22LDCQY', {
                        'user_id': userId
                    });
                    setUserId(userId);
                }
                setIsOpen(false);
                navigate();
            } else {
                alert(data.text);
            }
        }
    };
    const handleInput = (index: number) => {
        if (!ids[index + 1]) {
            hanldeSubmit();
            return;
        }

        inputRefs.current[index + 1].focus();
    }
    const loginByGmailHandler = async (res) => {
        const data: { user: User } = await res.json();
        setUser(data.user);
        setIsOpen(false);
        navigate();
    }

    const handleLogin = async () => {
        try {
            const result = await login(mobileNumber);
            if (result.ok) {
                const data = await result.json();
                setExtMessage(data?.extraMsg)
                if (data.done)
                    setIsValidationPhase(true);
            } else {
                alert('خطایی رخ داده است.')

            }
        } catch {
            alert('خطایی رخ داده است.')
        }
    }

    if (!isOpen) return null
    const renderByPhase = () => {
        if (isValidationPhase) {
            return <div className="bg-white z-10 flex flex-col h-fit border-2 border-[#7000FF] rounded-[16px]">
                <div className="flex flex-col h-full p-[15px]">
                    <h1 className="font-bold text-center w-full my-[15px]">به تست هلپر خوش‌آمدید</h1>
                    <div className="flex flex-col pt-[10px] rounded-[9px]">
                        <div dir='ltr' className="w-full h-[41.5px] flex flex-row justify-between">
                            {
                                ids.map((item, index) =>
                                    <input
                                        className=" w-[13%] max-w-[35px] h-[41px] iransans top-0 bg-[#fcfcfc] focus:border-[#7000FF] px-[10px] rounded-lg border-[1px] border-solid border-[#979797] outline-none"
                                        ref={(e) => { inputRefs.current[index] = e }}
                                        key={item}
                                        maxLength={1}
                                        tabIndex={1}
                                        onBeforeInput={() => inputRefs.current[index].value = ""}
                                        onChange={() => handleInput(index)} />
                                )
                            }
                        </div>
                        <br />
                        <span className='text-red-600'>
                            {extMessage}
                        </span>
                    </div>
                    <button
                        onClick={isValidationPhase ? (e) => hanldeSubmit(e) : handleLogin}
                        className="cursor-pointer bg-[#6E46FE] text-white text-center rounded-[8px] py-[6px] mt-[4px] mb-[15px]">
                        ورود یا ثبت نام
                    </button>
                    <div className='flex flex-col'>
                        <button
                            dir='rtl' className='cursor-pointer my-[15px] flex flex-row justify-between pr-[3px] transition-all border-[1px] py-[3px] rounded-lg'
                            onClick={() => setIsGoogleLoginOpen(!isGoogleLoginOpen)}>
                            <b>
                                ورود
                            </b>
                            برای کاربرانی که از قبل اکانت گوگل خود را ثبت کرده اند.
                            <img src={arrow.src} className={`w-[20px] ${isGoogleLoginOpen ? 'i-close-arrow' : ''}`} alt="" />
                        </button>
                        {isGoogleLoginOpen && <div className='flex flex-col'>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    loginByGmail(credentialResponse.credential).then(loginByGmailHandler).catch((err) => {
                                        alert('اگر قبلا در پروفایل خود Gmail را ذخیره کرده اید میتوانید از این قابلیت استفاده کنید', 'error')
                                    });
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                useOneTap
                            />
                        </div>}
                    </div>
                </div>
            </div>
        }

        return (
            <div className="bg-white z-10 flex flex-col h-fit border-2 border-[#7000FF] rounded-[16px]">
                <div className="flex flex-col h-full p-[15px]">
                    <h1 className="font-bold text-center w-full my-[15px]">به تست هلپر خوش‌آمدید</h1>
                    <div className="flex flex-row border-1 border-gray-400 py-[10px] rounded-[9px]">
                        <label className="login-label flex-1">
                            <input
                                dir="ltr"
                                onChange={(e) => {
                                    e.target.value = convertPersianToEnglishNumbers(e.target.value);
                                }}
                                // type='number'
                                className="login-label outline-none p-0 w-full !font-sans"
                                placeholder=" ۹۱۲۸۴۵۶۴۳۲"
                                maxLength={11}
                            />
                        </label>
                        &nbsp;
                        <div className="flex flex-row-reverse gap-1">
                            <img className="w-[22px] h-[22px] top-0 left-[3px] relative login-page" alt="Frame" src={frame.src} />
                            <div className="inline-flex w-full items-center gap-[13px] top-0.5 ">
                                <div className="inline-flex items-start gap-[4.31px] flex-[0_0_auto]">
                                    <div dir="ltr" className="iransans w-fit mt-[1.2px] font-normal  text-inkbase text-[17.2px] tracking-[0] leading-[17.2px] whitespace-nowrap">
                                        +۹۸
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className='text-red-600'>
                        {extMessage}
                    </span>
                    <button
                        onClick={handleLogin}
                        className="cursor-pointer bg-[#6E46FE] text-white text-center rounded-[8px] py-[6px] mt-[4px] mb-[15px]">
                        ورود یا ثبت نام
                    </button>
                    <div className='flex flex-col'>
                        <button
                            dir='rtl' className='cursor-pointer my-[15px] flex flex-row justify-between transition-all pr-[3px] border-[1px] py-[3px] rounded-lg'
                            onClick={() => setIsGoogleLoginOpen(!isGoogleLoginOpen)}>
                            <b>
                                ورود
                            </b>
                            برای کاربرانی که از قبل اکانت گوگل خود را ثبت کرده اند.
                            <img src={arrow.src} className={`w-[20px] ${isGoogleLoginOpen ? 'i-close-arrow' : ''}`} alt="" />
                        </button>
                        {isGoogleLoginOpen && <div className='flex flex-col'>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    loginByGmail(credentialResponse.credential).then(loginByGmailHandler).catch((err) => {
                                        alert('اگر قبلا در پروفایل خود Gmail را ذخیره کرده اید میتوانید از این قابلیت استفاده کنید', 'error')
                                    });
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                useOneTap
                            />
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="w-full h-full fixed items-center justify-center flex"
            style={{ zIndex: 99999999 }}>
            {renderByPhase()}
            <div className="w-full h-full blur-lg absolute"
                onClick={() => setIsOpen(false)}
                style={{ backdropFilter: 'blur(20px)' }}></div>
        </div>
    )
}
