"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { OTPInput, REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { PinInput } from "@/components/base/pin-input/pin-input";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { getUserContext } from "@/context/userContext";
import { LoginUserResponse } from "@/types";
import { convertPersianToEnglishNumbers, loginByActivatoinCode } from "@/utils/consts";
import { setUserId } from "@/utils/ga";

interface Props {
    phone: string;
    onBack: () => void;
    onSuccess: () => void;
    onResend: (phone: string) => void;
}

export default function StepOtp({ phone, onBack, onResend, onSuccess }: Props) {
    const [timer, setTimer] = useState<number>(300);
    const [canResend, setCanResend] = useState(false);
    const { setUser } = getUserContext();
    const userOtps = useRef<string[]>([]);
    const otp = useRef("");
    const handleInput = (value) => {
        otp.current = convertPersianToEnglishNumbers(value);
    };
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

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleResend = () => {
        onResend(phone);
        setTimer(300);
        setCanResend(false);
    };
    const handleSubmit = async (code: string) => {
        if (userOtps.current.includes(code)) return;

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
                if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("config", "G-6PK22LDCQY", {
                        user_id: userId,
                    });
                    setUserId(userId);
                }
                onSuccess();
            } else {
                // alert(data.text);
                toast.warning(data.text, { toasterId: "login" });
            }
        }
    };
    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                <TestHelperLogoMinimal className="size-10" />
                <div className="flex flex-col items-center justify-center gap-0.5">
                    <h2 className="text-md font-semibold text-primary">تأیید شماره موبایل</h2>
                    <p className="text-sm text-tertiary">
                        کد پنج‌رقمی که به شماره <span className="font-semibold">{phone}</span> پیامک شده رو وارد کن.
                    </p>
                </div>
            </div>
            <div className="h-5 w-full"></div>
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const code = otp.current;
                    handleSubmit(code);
                }}
                className="flex flex-col gap-4 px-4 sm:gap-5 sm:px-6"
            >
                <div className="relative z-10 flex flex-col gap-1.5">
                    <PinInput size="sm" inputMode="numeric">
                        {/* <PinInput.Label>کد تأیید</PinInput.Label> */}

                        <PinInput.Group onChange={handleInput} id="otp" maxLength={5} pattern={REGEXP_ONLY_DIGITS}>
                            <PinInput.Slot index={0} />
                            <PinInput.Slot index={1} />
                            <PinInput.Slot index={2} />
                            <PinInput.Slot index={3} />
                            <PinInput.Slot index={4} />
                        </PinInput.Group>
                        <PinInput.Description className="text-sm text-tertiary">
                            کد رو دریافت نکردی؟&nbsp;
                            <Button
                                color="link-color"
                                size="md"
                                isDisabled={!canResend}
                                onClick={handleResend}
                                className={`text-sm ${!canResend ? "cursor-not-allowed" : ""}`}
                            >
                                {canResend ? "ارسال دوباره" : `ارسال دوباره در ${formatTime(timer)}`}
                            </Button>
                        </PinInput.Description>
                    </PinInput>
                </div>
                <div className="z-10 flex flex-1 flex-col-reverse gap-3 pt-6 pb-4 *:grow sm:grid sm:grid-cols-2 sm:pt-8 sm:pb-6">
                    <Button type="submit" size="lg" className="w-full">
                        تأیید
                    </Button>
                    <Button color="secondary" size="md" onClick={onBack}>
                        بازگشت
                    </Button>
                </div>
            </Form>
        </Fragment>
    );
}
