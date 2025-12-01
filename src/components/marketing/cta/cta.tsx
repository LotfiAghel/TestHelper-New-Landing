"use client";

import { DialogTrigger } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { TestsModal } from "../header-section/tests-modal";

interface CTAProps {
    startHref?: string;
    heading?: string;
    description?: string;
}

export const CTA = ({
    startHref,
    heading = "تست‌هلپر همه‌چیزو آماده کرده؛ فقط کافیه شروع کنی...",
    description = "آماده‌ای یه قدم بزرگ برداری؟",
}: CTAProps = {}) => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">{heading}</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">{description}</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button
                            onClick={() => {
                                window.Goftino && window.Goftino.open();
                            }}
                            color="secondary"
                            size="xl"
                        >
                            تماس با پشتیبانی
                        </Button>
                        {startHref ? (
                            <Button href={startHref} color="primary" size="xl">
                                شروع رایگان
                            </Button>
                        ) : (
                            <DialogTrigger>
                                <Button color="primary" size="xl">
                                    شروع رایگان
                                </Button>
                                <TestsModal />
                            </DialogTrigger>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
