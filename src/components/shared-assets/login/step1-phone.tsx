"use client";

import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { getUserContext } from "@/context/userContext";
import { convertPersianToEnglishNumbers } from "@/utils/consts";
import { login, loginByActivatoinCode, loginByGmail, properPhoneNumber } from "@/utils/login";
import { steps } from "@/types";

interface Props {
    onNext: (phone: string) => void;
    setStep: Dispatch<SetStateAction<number>>;
}

export default function StepPhone({ onNext, setStep }: Props) {
    const { setUser } = getUserContext();
    const loginByGmailHandler = async (res) => {
        const data = await res.json();
        setUser(data.user);
        setStep(3);
    };

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                <TestHelperLogoMinimal className="size-10" />

                <div className="flex flex-col items-center justify-center gap-0.5">
                    <h2 className="text-md font-semibold text-primary">به تست‌هلپر خوش اومدی!</h2>
                    <p className="text-sm text-tertiary">برای شروع، شماره موبایلت رو وارد کن.</p>
                </div>
            </div>
            <div className="h-5 w-full"></div>
            <div className="flex flex-col gap-4 px-4 pb-4 sm:gap-5 sm:px-6 sm:pb-6">
                <Form
                    id="login-form-modal"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        const result = await login(data.phone as string);
                        if (result.ok) {
                            const resultData = await result.json();
                            // if (resultData.extraMsg) alert(resultData.extraMsg);
                            if (resultData.extraMsg) toast.warning(resultData.extraMsg, { toasterId: "login" });
                            if (resultData.done) onNext(data.phone as string);
                        } else {
                            toast.warning("یه مشکل کوچیک پیش اومده! لطفاً برای پیگیری بیشتر با پشتیبانی تماس بگیر.", { toasterId: "login" });
                            // alert("خطایی رخ داده است.");
                        }
                    }}
                    className="flex flex-col gap-4"
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
                    <Button type="submit" size="lg">
                        ورود یا ثبت‌نام
                    </Button>
                </Form>
                <ContentDivider type="single-line">
                    <span className="text-sm font-medium text-tertiary">یا</span>
                </ContentDivider>
                <div className="flex flex-col gap-3">
                    <Button onClick={() => setStep(steps.login_with_password)} className="border-dashed bg-transparent border-2 dark:text-white text-black hover:opacity-60 hover:bg-transparent" size="lg">
                        ورود با رمز عبور
                    </Button>
                    <p className="text-xs text-tertiary">اگه قبلاً اکانت گوگلت رو ثبت کردی، می‌تونی با همون حساب وارد بشی.</p>
                    <GoogleLogin
                        shape="pill"
                        onSuccess={({ credential }) => {
                            loginByGmail(credential)
                                .then(loginByGmailHandler)
                                .catch((err) => {
                                    toast.error("اگه قبلاً حساب گوگلت رو توی پروفایل ذخیره کرده باشی، می‌تونی از این قابلیت استفاده کنی!", {
                                        toasterId: "login",
                                    });
                                    // alert("اگه قبلاً حساب گوگلت رو توی پروفایل ذخیره کرده باشی، می‌تونی از این قابلیت استفاده کنی!");
                                });
                        }}
                        onError={() => { }}
                    />
                </div>
            </div>
        </Fragment>
    );
}
