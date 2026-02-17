"use client";

import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { getUserContext } from "@/context/userContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { loginWithUserNamePassword } from "@/utils/consts";
import { toast } from "sonner";
import { LoginUserResponse } from "@/types";
import { setUserId } from "@/utils/ga";
import { Eye, EyeOff } from "lucide-react";

export default function StepPassword({ onSuccess }: {
    onSuccess: () => void;
}) {
    const router = useRouter();
    const userNameRef = useRef('');
    const passwordRef = useRef('');
    const { setUser } = getUserContext();
    const [isPasswordOn, setIsPasswordOn,] = useState(true);

    const handleLoginWithUsernamePassword = async () => {
        try {
            const response = await loginWithUserNamePassword({
                userName: userNameRef.current.trim(),
                pass: passwordRef.current,
            });
            if (response.ok) {
                const data: LoginUserResponse = await response.json();
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
                    toast.warning(data.text, { toasterId: "login" });
                }
                onSuccess();
            } else {
                toast.warning("کاربری با این مشخصات یافت نشد", { toasterId: "login" });
            }
        } catch (e) {
        }
    }

    return (
        <>

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
                    onSubmit={handleLoginWithUsernamePassword}
                    className="flex flex-col gap-4"
                >
                    <Input
                        isRequired
                        type="tel"
                        label=" شماره تماس یا ایمیل "
                        name="phone"
                        placeholder="91287654321"
                        tooltip="ایمیل یا شماره همراه خود را وارد کنید."
                        size="md"
                        pattern="^[0-9]{9,11}$"
                        minLength={9}
                        maxLength={11}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            userNameRef.current = target.value
                        }}
                    />
                    <Input
                    
                        isRequired
                        type={isPasswordOn ? "password" : 'text'}
                        label="رمز عبور"
                        name="phone"
                        placeholder="******"
                        size="md"
                        onIconClick={() => setIsPasswordOn(state => !state)}
                        icon={isPasswordOn ? Eye : EyeOff}
                        pattern="^[0-9]{9,11}$"
                        minLength={9}
                        maxLength={11}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            passwordRef.current = target.value
                        }}
                    />
                    <Button onClick={handleLoginWithUsernamePassword} type="submit" size="lg">
                        ورود یا ثبت‌نام
                    </Button>
                </Form>
            </div>
        </>
    );
}
