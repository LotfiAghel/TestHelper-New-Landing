"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { CloseButton } from "@/components/base/buttons/close-button";
import { login } from "@/utils/login";
import StepPhone from "./step1-phone";
import StepOtp from "./step2-otp";
import StepSuccess from "./step3-success";
import StepPassword from "./step-password";
import { steps } from "@/types";

export const AuthModal = () => {
    const [step, setStep] = useState<steps>(steps.enter_phone);
    const [phone, setPhone] = useState<string>("");
    const isProcessing = useRef(false);

    const renderSteps = () => {
        if (step == steps.enter_phone)
            return (
                <StepPhone
                    onNext={async (enteredPhone: string) => {
                        setPhone(enteredPhone.startsWith("0") ? enteredPhone : "0" + enteredPhone);
                        setStep(2);
                    }}
                    setStep={setStep}
                />
            )

        if (step == steps.enter_otp) {
            return (
                <StepOtp
                    phone={phone}
                    onBack={() => setStep(1)}
                    onResend={async (phone: string) => {
                        if (isProcessing.current) return;
                        isProcessing.current = true;
                        const result = await login(phone as string);
                        if (result.ok) {
                            const resultData = await result.json();
                            if (resultData.extraMsg)
                                toast.warning(resultData.extraMsg, {
                                    toasterId: "login",
                                });
                            // if (resultData.extraMsg) alert(resultData.extraMsg);
                            if (resultData.done) setPhone(phone as string);
                        } else {
                            toast.warning("یه مشکل کوچیک پیش اومده! لطفاً برای پیگیری بیشتر با پشتیبانی تماس بگیر.", { toasterId: "login" });
                            // alert("خطایی رخ داده است.");
                        }
                        isProcessing.current = false;
                    }}
                    onSuccess={() => setStep(steps.success)}
                />
            )

        }
        if (step == steps.success)
            return (<StepSuccess />);
        if (step == steps.login_with_password)
            return <StepPassword onSuccess={() => { setStep(steps.success) }} />
    }
    return (
        <ModalOverlay isDismissable>
            <Modal>
                <Dialog aria-label="Sign up / Log in">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-100">
                        <CloseButton slot="close" size="lg" className="absolute top-3 right-3" />
                        {renderSteps()}
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
