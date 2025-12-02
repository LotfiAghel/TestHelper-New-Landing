"use client";

import { useRef, useState } from "react";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { CloseButton } from "@/components/base/buttons/close-button";
import StepPhone from "./step1-phone";
import StepOtp from "./step2-otp";
import StepSuccess from "./step3-success";
import { login } from "@/utils/login";

export const AuthModal = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [phone, setPhone] = useState<string>("");
    const isProcessing = useRef(false);
    return (
        <ModalOverlay style={{
            zIndex: '99999999'
        }} isDismissable>
            <Modal>
                <Dialog aria-label="Sign up / Log in">
                    <div className="relative min-h-[50vh] w-full min-w-96 rounded-2xl bg-primary p-8 shadow-xl sm:min-h-[70vh] sm:max-w-100">
                        <CloseButton slot="close" size="lg" className="absolute top-3 right-3" />
                        {step === 1 && (
                            <StepPhone
                                onNext={
                                    async (enteredPhone) => {
                                        setPhone(enteredPhone);
                                        setStep(2);
                                    }}
                            />
                        )}

                        {step === 2 && (
                            <StepOtp
                                phone={phone}
                                onBack={() => setStep(1)}
                                onResend={async (phone: string) => {
                                    if (isProcessing.current) return;
                                    isProcessing.current = true;
                                    const result = await login(phone);
                                    if (result.ok) {
                                        const data = await result.json();
                                        if (data.done)
                                            setStep(3);
                                    } else {
                                        alert('خطایی رخ داده است.')
                                    }
                                    isProcessing.current = false
                                }}
                                onSuccess={() => setStep(3)}
                            />
                        )}

                        {step === 3 && <StepSuccess />}
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
