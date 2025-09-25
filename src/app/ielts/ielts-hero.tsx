"use client";

import { Fragment } from "react";
import { Translate01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { MetricsMini } from "@/components/marketing/metrics/metrics-mini";

export const IeltsHeroSection = () => {
    return (
        <Fragment>
            <section className="relative py-16 shadow-xs lg:flex lg:h-screen lg:items-center lg:py-12">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pe-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="تست‌هلپر" iconTrailing={Translate01} theme="light" color="brand">
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="تست‌هلپر" iconTrailing={Translate01} theme="modern" color="brand">
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            با تست‌هلپر، <br />
                            آیلتس مثل آب خوردنه
                        </h1>
                        <p className="mt-4 text-md text-balance text-tertiary md:mt-6 md:max-w-lg md:text-md">
                            صدها نمونه سؤال واقعی تافل، آیلتس و جی‌آرای، در محیطی کاملاً مشابه آزمون اصلی، همراه با امکانات آموزشی جامع، برای آمادگی کامل و کسب
                            بهترین نمره در مسیر اپلای تحصیلی و مهاجرت
                        </p>

                        <div className="mt-6 flex w-full flex-col-reverse items-stretch gap-3 md:mt-8 md:flex-row md:items-start">
                            <Button color="primary" href="/ielts/dashboard" size="xl">
                                شروع رایگان
                            </Button>
                            <Button color="secondary" href="/placement" size="xl">
                                آزمون تعیین سطح
                            </Button>
                        </div>
                        <MetricsMini />
                    </div>
                </div>
                <div className="relative mt-12 h-48 w-full px-4 md:px-8 lg:absolute lg:inset-y-0 lg:left-4 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <video className="inset-0 size-full object-contain lg:absolute" src="/media/girl+cat+laptop-loop.mp4" autoPlay loop muted />
                </div>
            </section>
        </Fragment>
    );
};
