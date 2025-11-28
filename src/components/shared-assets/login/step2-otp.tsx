"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { PinInput } from "@/components/base/pin-input/pin-input";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";

interface Props {
    phone: string;
    onBack: () => void;
    onSuccess: () => void;
    onResend: (phone: string) => void;
}

export default function StepOtp({ phone, onBack, onResend, onSuccess }: Props) {
    const [timer, setTimer] = useState<number>(120); // 120 seconds countdown
    const [canResend, setCanResend] = useState(false);

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
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    const otp = data.otp;
                    console.log("OTP:", otp);
                    onSuccess();
                }}
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <div className="md:hidden">
                        <PinInput size="xs" inputMode="numeric">
                            <PinInput.Group maxLength={5} pattern={REGEXP_ONLY_DIGITS}>
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
                            <PinInput.Group maxLength={5}>
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
