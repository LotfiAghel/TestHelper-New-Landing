"use client";

import { Fragment } from "react";
import { Globe02, Translate01 } from "@untitledui/icons";
import Link from "next/link";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { MetricsMini } from "@/components/marketing/metrics/metrics-mini";
import { MainTitle } from "./main-title";

export const HeroSection = (props: { title?: React.ReactNode }) => {
    return (
        <Fragment>
            <section className="relative py-16 shadow-xs lg:flex lg:h-screen lg:items-center lg:py-12">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-center md:max-w-3xl md:items-start lg:w-1/2 lg:pe-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup
                                className="hidden cursor-auto md:flex"
                                size="lg"
                                addonText="تست‌هلپر"
                                iconTrailing={Translate01}
                                theme="light"
                                color="brand"
                            >
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="تست‌هلپر" iconTrailing={Translate01} theme="modern" color="brand">
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                        </a>

                        {props.title ? (
                            <h1 className="mt-4 text-center text-display-md font-semibold text-primary md:text-start md:text-display-lg">{props.title}</h1>
                        ) : (
                            <MainTitle />
                        )}
                        <p className="mt-4 text-center text-balance text-tertiary md:mt-6 md:max-w-lg md:text-start md:text-md">
                            صدها نمونه سؤال واقعی تافل، آیلتس و جی‌آرای، در محیطی کاملاً مشابه آزمون اصلی، همراه با امکانات آموزشی جامع، برای آمادگی کامل و کسب
                            بهترین نمره در مسیر اپلای تحصیلی و مهاجرت
                        </p>

                        <div className="mt-6 flex w-full flex-col-reverse items-stretch gap-3 md:mt-8 md:flex-row md:items-start">
                            <Button color="primary" size="xl">
                                <Link href="/toefl">شروع رایگان</Link>
                            </Button>
                            <Button color="secondary" size="xl">
                                <Link href="/placement">آزمون تعیین سطح</Link>
                            </Button>
                        </div>
                        <MetricsMini />
                    </div>
                </div>
                <div className="relative mt-12 h-48 w-full px-4 md:px-8 lg:absolute lg:inset-y-0 lg:left-4 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <video className="inset-0 size-full object-contain lg:absolute dark:hidden" src="/media/girl+cat+laptop-loop.mp4" autoPlay loop muted />
                    <img className="inset-0 size-full object-contain not-dark:hidden lg:absolute" src="/images/girl+cat+laptop.webp" />
                </div>
            </section>
        </Fragment>
    );
};
