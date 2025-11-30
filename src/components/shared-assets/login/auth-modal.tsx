"use client";

import { useState } from "react";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { CloseButton } from "@/components/base/buttons/close-button";
import StepPhone from "./step1-phone";
import StepOtp from "./step2-otp";
import StepSuccess from "./step3-success";

export const AuthModal = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [phone, setPhone] = useState<string>("");

    return (
        <ModalOverlay isDismissable className="z-9999999">
            <Modal>
                <Dialog aria-label="Sign up / Log in">
                    <div className="relative min-h-[50vh] w-full min-w-96 rounded-2xl bg-primary p-8 shadow-xl sm:min-h-[70vh] sm:max-w-100">
                        <CloseButton slot="close" size="lg" className="absolute top-3 right-3" />
                        {step === 1 && (
                            <StepPhone
                                onNext={(enteredPhone) => {
                                    setPhone(enteredPhone);
                                    setStep(2);
                                }}
                            />
                        )}

                        {step === 2 && (
                            <StepOtp
                                phone={phone}
                                onBack={() => setStep(1)}
                                onResend={(phone) => {
                                    console.log("Resend OTP to", phone);
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
