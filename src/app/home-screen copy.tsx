"use client";

import { Fragment } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";

export const HomeScreen = () => {
    return (
        <Fragment>
            <Header className="bg-primary" />

            <section className="relative bg-primary py-16 lg:flex lg:max-h-screen lg:items-center lg:py-24">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pe-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="تست‌هلپر" iconTrailing={ArrowLeft} theme="light" color="success">
                                مسیر مهاجرت از اینجا می‌گذره...
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="تست‌هلپر" iconTrailing={ArrowLeft} theme="modern" color="brand">
                                مسیر مهاجرت از اینجا می‌گذره...
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            با تست‌هلپر نمره دلخواهتو بگیر
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:max-w-lg md:text-xl">
                            صدها نمونه سؤال واقعی تافل، آیلتس و جی‌آرای، در محیطی کاملاً مشابه آزمون اصلی، همراه با امکانات آموزشی جامع، برای آمادگی کامل و کسب
                            بهترین نمره در مسیر اپلای تحصیلی و مهاجرت
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="primary" size="xl">
                                شروع رایگان
                            </Button>
                            <Button color="secondary" size="xl">
                                آزمون تعیین سطح
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-16 h-60 w-full px-4 md:px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <video className="inset-0 size-full object-contain lg:absolute" src="girl+cat+laptop.mp4" autoPlay loop muted />
                </div>
            </section>
        </Fragment>
    );
};
