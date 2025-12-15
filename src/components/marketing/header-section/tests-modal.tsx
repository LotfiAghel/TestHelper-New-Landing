"use client";

import { CheckCircle } from "@untitledui/icons";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { tests } from "@/data/tests";

export const TestsModal = () => {
    return (
        <ModalOverlay isDismissable>
            <Modal>
                <Dialog aria-label="Select a Test">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl max-sm:px-10 sm:max-w-100">
                        <CloseButton slot="close" size="lg" className="absolute top-3 right-3" />
                        <div className="flex flex-col gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                            <div className="relative w-max ltr:self-start rtl:self-end">
                                <FeaturedIcon color="brand" icon={CheckCircle} theme="gradient" size="xl" />
                                <BackgroundPattern
                                    pattern="circle"
                                    className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                                />
                                <BackgroundPattern
                                    pattern="circle"
                                    size="md"
                                    className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                                />
                            </div>
                            <div className="z-10 flex flex-col gap-0.5">
                                <h2 className="text-md font-semibold text-primary">انتخاب آزمون</h2>
                                <p className="text-sm text-tertiary max-sm:hidden">برای شروع کافیه یکی از آزمون‌های زیر رو انتخاب کنی.</p>
                            </div>
                        </div>
                        <div className="z-10 flex flex-1 flex-col items-center gap-2 p-4 pt-6 *:grow sm:grid sm:grid-cols-2 sm:gap-6 sm:px-6 sm:pt-8 sm:pb-6">
                            {tests.map((test) => (
                                <Button key={test.name} href={test.dashboardPath} color="primary" size="md" className="max-md:w-32">
                                    ورود به {test.faTitle}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
