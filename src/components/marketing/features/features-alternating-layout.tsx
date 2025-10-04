"use client";

import type { FC, HTMLAttributes } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { FlowPattern } from "@/components/shared-assets/background-patterns/flow-pattern";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={cx("relative -ml-4 w-full bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100", props.className)}>
            <div className="relative flex h-full w-full">{props.children}</div>
        </div>
    );
};

export const Features = () => {
    return (
        <section className="flex flex-col gap-8 overflow-hidden py-8 shadow-xs sm:gap-8 sm:py-12 md:gap-12 md:py-16 lg:gap-16 lg:py-16">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span> */}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">امکانات ویژه تست‌هلپر</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">تست‌هلپر مثل یه جعبه‌ابزار کامله؛ هرچی لازم داری اینجاست.</p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        {/* <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">پلتفرم جامع آزمون‌ها</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            محیط ویژه برای تمرین آزمون‌ها، پاسخ‌های تشریحی، تصحیح رایتینگ و اسپیکینگ، و مرور کامل مهارت‌ها.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {[
                                "تمرین در محیط مشابه آزمون اصلی",
                                "دسترسی به پاسخ‌های تشریحی و نکات کلیدی",
                                "پوشش کامل مهارت‌های شنیداری، گفتاری، خواندن و نوشتن",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/tests-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/tests-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        {/* <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">منابع معتبر و به‌روز</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            بیش از ۵۰۰ آزمون واقعی و اصلی در محیط کاملاً مشابه آزمون اصلی برای تمرین دقیق.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["بانک سؤال‌های واقعی و استاندارد", "به‌روزرسانی مستمر بر اساس تغییرات آزمون‌ها", "کیفیت و سطح دشواری نزدیک به آزمون واقعی"].map(
                                (feat) => (
                                    <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/exams-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/exams-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute right-0 bottom-0 hidden translate-x-1/3 translate-y-1/4 md:block">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        {/* <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">سیستم‌های یادگیری لغات</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            مرور زمان‌بندی شده با روش‌های لایتنر و تیک8 برای انتقال کلمات به حافظه بلندمدت.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["مرور هوشمند با فاصله‌های زمانی", "لیست لغات اختصاصی هر آزمون", "پیگیری پیشرفت و نرخ یادگیری"].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/vocab-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/vocab-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        {/* <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">دسته‌بندی موضوعی</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            امکان تمرین بر اساس موضوع و مهارت خاص، مثل متن‌ها یا فایل‌های صوتی مرتبط با «تاریخ هنر».
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["فیلتر بر اساس موضوع و مهارت", "تمرین هدفمند روی نقاط ضعف", "یافتن سریع محتوای مرتبط"].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/subject-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/subject-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute right-0 bottom-0 hidden translate-x-1/3 translate-y-1/4 md:block">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        {/* <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">تصحیح هوش مصنوعی</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">تصحیح سریع و دقیق رایتینگ و اسپیکینگ.</p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["فیدبک فوری با پرامپت اختصاصی (ChatGPT-Pro)", "نمره‌دهی منطبق با معیارهای رسمی", "پیشنهاد بهبود واژگان و گرامر"].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/AI-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/AI-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        {/* <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">نمودارهای تحلیلی</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            داشبورد و نمودارهای تحلیلی برای بررسی پیشرفت، نقاط ضعف و بهینه‌سازی یادگیری.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["پیگیری روند نمرات در طول زمان", "تحلیل عملکرد در مهارت‌ها و موضوعات", "گزارش‌های آماده برای برنامه‌ریزی مطالعه"].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/charts-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/charts-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute right-0 bottom-0 hidden translate-x-1/3 translate-y-1/4 md:block">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        {/* <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" /> */}
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">فلش‌کارت‌های ضروری</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">مجموعه لغات مهم هر آزمون و امکان یادگیری با روش‌های لایتنر و تیک8.</p>
                        <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                            {["فلش‌کارت‌های از پیش آماده", "هماهنگ با سیستم‌های لایتنر و تیک8", "مرور سریع روی موبایل و دسکتاپ"].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-112">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/flash-cards-light.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/images/features/flash-cards-dark.png"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </AlternateImageMockup>
                        <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                            <FlowPattern className="text-fg-brand-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
