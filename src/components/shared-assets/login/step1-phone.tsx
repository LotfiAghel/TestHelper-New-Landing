"use client";

import { useRef, useState } from "react";
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

interface Props {
    onNext: (phone: string) => void;
}

export default function StepPhone({ onNext }: Props) {
    // const phone = useRef("");
    // const [googleLoading, setGoogleLoading] = useState(false);
    // const navigate = () => {
    //     //
    // };
    // const checkCode = async (code) => {
    //     if (code) {
    //         const result = await loginByActivatoinCode({
    //             phone: properPhoneNumber(phone) ?? "",
    //             OTP: code,
    //             Platform: 1,
    //             DeviceType: 0,
    //         });
    //         const data: LoginUserResponse = await result.json();
    //         if (data.done) {
    //             setUser(data.user);
    //             const userId = data.user.id;
    //             if (typeof window !== "undefined" && window.gtag) {
    //                 window.gtag("config", "G-6PK22LDCQY", {
    //                     user_id: userId,
    //                 });
    //                 setUserId(userId);
    //             }
    //             navigate();
    //         } else {
    //             alert(data.text);
    //         }
    //     }
    // };
    return (
        <div className="flex flex-col items-center gap-6">
            <TestHelperLogoMinimal className="size-10" />

            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-display-xs font-semibold text-primary">به تست‌هلپر خوش اومدی!</h1>
                <p className="text-md text-tertiary">برای شروع، شماره موبایلت رو وارد کن.</p>
            </div>

            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    const phone = data.phone as string;
                    onNext(phone);
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
                        target.value = target.value.replace(/\D+/g, ""); // remove non-digits
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

                    <SocialButton social="google" theme="color">
                        Log in with Google
                    </SocialButton>

                    {/* <div className="flex flex-col">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                loginByGmail(credentialResponse.credential)
                                    .then(loginByGmailHandler)
                                    .catch((err) => {
                                        toast.error("Event has not been created");
                                        alert("اگر قبلا در پروفایل خود Gmail را ذخیره کرده اید میتوانید از این قابلیت استفاده کنید error");
                                    });
                            }}
                            onError={() => {
                                toast.error("Login Failed.");
                            }}
                            useOneTap
                        />
                    </div> */}
                </div>
            </Form>
        </div>
    );
}
