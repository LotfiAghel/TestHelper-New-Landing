import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";

const tests = [
    {
        name: "TOEFL",
        title: "toefl",
        description: "",
        score: "0-120",
        exams: "نئو، تی‌پی‌او، ژنتی و ...",
        logo: "/images/logos/toefl-logo.svg",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-200",
        borderColor: "border-blue-300",
        url: "/toefl",
    },
    {
        name: "IELTS",
        title: "ielts",
        description: "",
        score: "0-9 Bands",
        exams: "کمبریج، ماکار، آیلتس واقعی و ...",
        logo: "/images/logos/ielts-logo.svg",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-200",
        borderColor: "border-red-300",
        url: "/ielts",
    },
    {
        name: "GRE",
        title: "gre",
        description: "",
        score: "260-340",
        exams: "تی‌سی، آرسی، کراون، دالائو، پاورپرپ و ...",
        logo: "/images/logos/gre-logo.svg",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-200",
        borderColor: "border-purple-300",
        url: "/gre",
    },
    {
        name: "PTE",
        title: "pte",
        description: "",
        score: "10-90",
        exams: "آفیشال گاید، پرکتیس پلاس، پی‌تی‌ای ادونتیج و ...",
        logo: "/images/logos/pte-logo.svg",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-200",
        borderColor: "border-green-300",
        url: "/pte",
    },
];

const TestsComponent = () => {
    return (
        <section id="tests" className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col items-center text-center">
                    {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Tests</span> */}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">هر آزمونی که فکرشو بکنی</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        از آیلتس و تافل گرفته تا جی‌آرای؛ همه آزمون‌های مهم رو می‌تونی اینجا تمرین کنی.
                    </p>
                </div>

                <div className="grid grid-cols-2 justify-center gap-2 sm:grid-cols-[repeat(auto-fit,220px)] md:gap-4">
                    {tests.map((test, index) => (
                        <div
                            key={index}
                            className={`relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border-1 p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:gap-y-12 sm:py-12 md:w-[220px] ${test.borderColor} ${test.bgColor}`}
                        >
                            <div
                                className="absolute top-0 right-0 size-24 rounded-bl-full bg-gradient-to-br from-primary-solid/20 to-white/10"
                                aria-hidden="true"
                            />
                            {/* Test Logo */}
                            <div className="mx-auto flex h-6 w-fit items-center justify-center sm:mb-2 sm:h-8 lg:h-10">
                                <Image src={test.logo} alt={test.name} width={96} height={48} className="h-8 w-auto sm:h-10" />
                            </div>

                            <div className="text-xs font-medium sm:text-sm">{test.exams}</div>
                            <Button color="primary" href={test.url} size="sm" className="mt-auto self-end">
                                شروع رایگان
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Tests = memo(TestsComponent);
