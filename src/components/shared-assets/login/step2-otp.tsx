"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { OTPInput, REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { PinInput } from "@/components/base/pin-input/pin-input";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { convertPersianToEnglishNumbers, loginByActivatoinCode } from "@/utils/consts";
import { LoginUserResponse } from "@/types";
import { getUserContext } from "@/context/userContext";
import { setUserId } from "@/utils/ga";

interface Props {
    phone: string;
    onBack: () => void;
    onSuccess: () => void;
    onResend: (phone: string) => void;
}

export default function StepOtp({ phone, onBack, onResend, onSuccess }: Props) {
    const [timer, setTimer] = useState<number>(120);
    const [canResend, setCanResend] = useState(false);
    const { setUser } = getUserContext();
    const userOtps = useRef<string[]>([]);
    const otp = useRef('');
    const handleInput = (value) => {
        otp.current = convertPersianToEnglishNumbers(value);
    }
    useEffect(() => {
        if (timer === 0) {
            setCanResend(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        onResend(phone);
        setTimer(60);
        setCanResend(false);
    };
    const handleSubmit = async (code: string) => {
        if (userOtps.current.includes(code)) return

        if (code && phone) {
            userOtps.current.push(code);
            const result = await loginByActivatoinCode({
                PhoneNumber: phone,
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
                onSuccess();
            } else {
                alert(data.text);
            }
        }
    }
    return (
        <div className="flex flex-col items-center gap-6">
            <TestHelperLogoMinimal className="size-10" />
            <div className="flex w-full flex-col gap-2">
                <h1 className="text-center text-display-xs font-semibold text-primary">تأیید شماره موبایل</h1>
                <p className="text-sm text-tertiary">
                    کد پنج‌رقمی که به شماره <span className="font-semibold">{phone}</span> پیامک شده رو وارد کن.
                </p>
            </div>
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const code = otp.current;
                    handleSubmit(code)
                }}
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <div className="md:hidden">

                        <PinInput size="xs" inputMode="numeric">
                            <PinInput.Group onChange={handleInput} id="otp" maxLength={5} pattern={REGEXP_ONLY_DIGITS}>
                                <PinInput.Slot index={0} />
                                <PinInput.Slot index={1} />
                                <PinInput.Slot index={2} />
                                <PinInput.Slot index={3} />
                                <PinInput.Slot index={4} />
                            </PinInput.Group>
                        </PinInput>
                    </div>
                    <div className="max-md:hidden">
                        <PinInput size="sm">
                            <PinInput.Group onChange={handleInput} maxLength={5}>
                                <PinInput.Slot index={0} />
                                <PinInput.Slot index={1} />
                                <PinInput.Slot index={2} />
                                <PinInput.Slot index={3} />
                                <PinInput.Slot index={4} />
                            </PinInput.Group>
                        </PinInput>
                    </div>

                    <div className="w-full">
                        <Button type="submit" size="lg" className="w-full">
                            تأیید
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-8 px-1 text-center">
                    <p className="flex gap-1">
                        <span className="text-sm text-tertiary">کد رو دریافت نکردی؟</span>
                        <Button
                            color="link-color"
                            size="md"
                            disabled={!canResend}
                            onClick={handleResend}
                            className={`text-sm ${!canResend ? "cursor-not-allowed text-tertiary" : ""}`}
                        >
                            {canResend ? "ارسال دوباره کد" : `ارسال دوباره کد در ${timer} ثانیه`}
                        </Button>
                    </p>
                    <Button color="secondary" size="md" onClick={onBack} className="self-end">
                        بازگشت
                    </Button>
                </div>
            </Form>
        </div>
    );
}
