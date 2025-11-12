"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "@untitledui/icons";

const defaultFaqs = [
    {
        question: "تست‌هلپر دقیقاً چیه؟",
        answer: "تست‌هلپر یه پلتفرمه برای تمرین و شبیه‌سازی آزمون‌های بین‌المللی زبان مثل آیلتس، تافل و جی‌آرای. اینجا می‌تونی با شرایط کاملا شبیه آزمون اصلی تمرین کنی و آمادگی واقعی به دست بیاری.",
    },
    {
        question: "تست‌هلپر فقط برای تافله؟",
        answer: "نه! علاوه بر تافل، بخش‌های آیلتس و جی‌آرای هم داریم و به مرور آزمون‌های دیگه هم به پلتفرم اضافه می‌شن تا کامل‌ترین ابزار تمرین آزمون‌های زبان باشه.",
    },
    {
        question: "تست‌هلپر چطوری به من کمک می‌کنه نمره دلخواهمو بگیرم؟",
        answer: "با کلی نمونه‌سؤال، آزمون شبیه‌سازی‌شده و ابزارهای آموزشی متنوع، بهت کمک می‌کنیم درست مثل شرایط واقعی تمرین کنی، نقاط ضعفتو پیدا کنی و مرحله به مرحله به نمره هدف نزدیک‌تر بشی.",
    },
    {
        question: "تست‌هلپر به مدیریت زمانم تو آزمون کمک می‌کنه؟",
        answer: "بله! چون آزمون‌ها زمان‌بندی‌شده هستن، می‌تونی دقیقا مثل شرایط واقعی تمرین کنی و مهارت مدیریت زمانت رو قوی‌تر کنی.",
    },
    {
        question: "تست‌هلپر رایگانه یا پولی؟",
        answer: "خیلی از تست‌ها و امکانات به صورت رایگان در دسترس هستن. اگه بخوای به تمام آزمون‌ها، تحلیل‌های پیشرفته و امکانات حرفه‌ای دسترسی داشته باشی، می‌تونی اشتراک تهیه کنی.",
    },
    {
        question: "می‌تونم روی موبایل هم استفاده کنم؟",
        answer: "بله! تست‌هلپر روی موبایل، تبلت و لپ‌تاپ به راحتی اجرا می‌شه. تازه اپلیکیشن موبایل در حالت آفلاین هم کار می‌کنه.",
    },
    {
        question: "برای استفاده باید سطح زبانم خیلی بالا باشه؟",
        answer: "اصلاً! تست‌هلپر برای همه‌ی سطح‌ها طراحی شده. آزمون‌ها دسته‌بندی سختی دارن، پس حتی اگه مبتدی باشی می‌تونی شروع کنی. البته هرچی سطحت بالاتر باشه، نتیجه و سرعت پیشرفتت هم بیشتر می‌شه.",
    },
    {
        question: "می‌تونم مطمئن باشم جوابام درسته؟",
        answer: "بله، همه‌ی تست‌ها کلید و پاسخنامه دارن. برای مهارت‌هایی مثل رایتینگ و اسپیکینگ هم نمونه‌جواب واقعی و حتی تصحیح خودکار با هوش مصنوعی داریم تا خیالت راحت باشه.",
    },
    {
        question: "اگه سؤال یا مشکلی داشتم چی؟",
        answer: "پشتیبانی همیشه در دسترسه. علاوه بر اون می‌تونی توی گروه‌های تلگرام مخصوص هر آزمون عضو بشی و سؤالاتو بپرسی تا اساتید و کاربرا راهنماییت کنن.",
    },
    {
        question: "آیا تست‌هلپر آموزش زبان هم داره؟",
        answer: "کلاس آموزشی مستقیم نداریم، ولی توی کانال‌ها و گروه‌های تلگرام منابع خیلی متنوعی مثل کتاب، مقاله و ویدیو جمع‌آوری کردیم که رایگان در دسترس همه هست.",
    },
];

interface FAQItemProps {
    faq: { question: string; answer: string };
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

export const FAQItem = ({ faq, isOpen, onToggle, index }: FAQItemProps) => {
    const contentId = `faq-content-${index}`;

    return (
        <div className={`${isOpen ? "bg-tertiary" : "bg-transparent"} rounded-2xl p-5 transition duration-300 ease-in-out md:p-6`}>
            <h3>
                <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={onToggle}
                    className="flex w-full cursor-pointer gap-2 rounded-md text-right outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:flex-row-reverse md:gap-4"
                >
                    <span className="flex-1 text-md font-semibold text-primary">{faq.question}</span>
                    {isOpen ? (
                        <MinusCircle className="flex size-6 items-center text-fg-quaternary" />
                    ) : (
                        <PlusCircle className="flex size-6 items-center text-fg-quaternary" />
                    )}
                </button>
            </h3>

            {isOpen && (
                <div id={contentId} className={`h-auto overflow-hidden opacity-100`}>
                    <div className="pt-1 pl-8 md:pr-10 md:pl-0">
                        <p className="text-md text-tertiary">{faq.answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

interface FAQListProps {
    faqs: Array<{ question: string; answer: string }>;
}

export const FAQList = ({ faqs }: FAQListProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-2">
            {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} isOpen={openIndex === idx} onToggle={() => setOpenIndex(openIndex === idx ? null : idx)} />
            ))}
        </div>
    );
};

interface FAQProps {
    customFaqs?: Array<{ question: string; answer: string }>;
}

export const FAQ = ({ customFaqs }: FAQProps = {}) => {
    const faqs = customFaqs || defaultFaqs;

    return (
        <section className="py-8 shadow-xs sm:py-12 md:py-24 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">سؤالی داری؟</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">کاربرا معمولاً این پرسش‌ها رو دارن. یه نگاهی بنداز.</p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <FAQList faqs={faqs} />
                </div>
            </div>
        </section>
    );
};
