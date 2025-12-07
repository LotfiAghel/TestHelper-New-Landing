"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { login, loginByActivatoinCode, loginByGmail, properPhoneNumber } from "@/utils/login";
import { convertPersianToEnglishNumbers } from "@/utils/consts";
import { getUserContext } from "@/context/userContext";

interface Props {
    onNext: (phone: string) => void;
    setStep: Dispatch<SetStateAction<number>>
}

export default function StepPhone({ onNext, setStep }: Props) {
    const { setUser } = getUserContext();
    const loginByGmailHandler = async (res) => {
        const data = await res.json();
        setUser(data.user);
        setStep(3)

    }


    return (
        <div className="flex flex-col items-center gap-6">
            <TestHelperLogoMinimal className="size-10" />

            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-display-xs font-semibold text-primary">به تست‌هلپر خوش اومدی!</h1>
                <p className="text-md text-tertiary">برای شروع، شماره موبایلت رو وارد کن.</p>
            </div>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    const result = await login(data.phone as string);
                    if (result.ok) {
                        const resultData = await result.json();
                        if (resultData.extraMsg)
                            alert(resultData.extraMsg);
                        if (resultData.done)
                            onNext(data.phone as string);
                    } else {
                        alert('خطایی رخ داده است.')
                    }
                }}
                className="flex flex-col gap-6"
            >
                <Input
                    isRequired
                    type="tel"
                    label="شماره تماس"
                    name="phone"
                    placeholder="91287654321"
                    tooltip="در حال حاضر ورود فقط با شماره ایرانی امکان‌پذیره."
                    size="md"
                    pattern="^[0-9]{9,11}$"
                    minLength={9}
                    maxLength={11}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = convertPersianToEnglishNumbers(target.value).replace(/\D+/g, ""); // remove non-digits
                    }}
                    onPaste={(e) => {
                        const data = e.clipboardData.getData("text");
                        if (!/^\d+$/.test(data)) e.preventDefault();
                    }}
                />
                <div className="flex flex-col gap-4">
                    <Button type="submit" size="lg">
                        ورود یا ثبت‌نام
                    </Button>

                    <ContentDivider type="single-line">
                        <span className="text-sm font-medium text-tertiary">یا</span>
                    </ContentDivider>

                    <p className="text-xs text-tertiary">اگه قبلاً اکانت گوگلت رو ثبت کردی، می‌تونی با همون حساب وارد بشی.</p>

                    <GoogleLogin

                        onSuccess={({ credential }) => {
                            loginByGmail(credential)
                                .then(loginByGmailHandler)
                                .catch((err) => {
                                    alert('اگر قبلا در پروفایل خود Gmail را ذخیره کرده اید میتوانید از این قابلیت استفاده کنید', 'error')
                                });
                        }}
                        onError={() => { }}
                    />
                </div>
            </Form>
        </div>
    );
}
