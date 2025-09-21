import { Button } from "@/components/base/buttons/button";

export const CTA = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold md:text-display-md">تست‌هلپر همه‌چیزو آماده کرده؛ فقط کافیه شروع کنی...</h2>
                    <p className="mt-4 text-lg md:mt-5 md:text-xl">آماده‌ای یه قدم بزرگ برداری؟</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            تماس با پشتیبانی
                        </Button>
                        <Button size="xl">شروع رایگان</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
