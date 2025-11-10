"use client";

import { Fragment } from "react";
import { Globe02, PlayCircle, Rocket01, Rocket02, Translate01 } from "@untitledui/icons";
import Link from "next/link";
import Image from "next/image";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { MetricsMini } from "@/components/marketing/metrics/metrics-mini";
import { MainSubtitle, MainTitle } from "./main-title";
import { usePathname } from "next/navigation";

export const HeroSection = (props: { title?: React.ReactNode; subtitle?: React.ReactNode }) => {
    const pathname = usePathname().replace('/', '');
    console.error(pathname)
    return (
        <Fragment>
            <section className="py-16 shadow-xs lg:h-screen lg:items-center lg:py-12">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-8">
                    <div className="flex flex-col items-center md:max-w-4xl md:items-start lg:pe-8">
                        <div className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="تست‌هلپر" iconTrailing={Translate01} theme="light" color="brand">
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="تست‌هلپر" iconTrailing={Translate01} theme="modern" color="brand">
                                پلتفرم آزمون‌های بین‌المللی زبان
                            </BadgeGroup>
                        </div>

                        {props.title ? (
                            <h1 className="mt-4 text-center text-display-md font-semibold text-primary md:text-start md:text-display-lg">{props.title}</h1>
                        ) : (
                            <MainTitle />
                        )}
                        {props.subtitle ? (
                            <h2 className="mt-4 max-w-lg text-center text-balance text-tertiary md:mt-6 md:text-start md:text-lg">{props.subtitle}</h2>
                        ) : (
                            <MainSubtitle />
                        )}
                        <div className="mt-6 flex w-full flex-col-reverse items-stretch gap-3 md:mt-8 md:flex-row md:items-start">
                            <Button href={`${pathname ? pathname : 'toefl'}/dashboard`} color="primary" size="xl">
                                شروع رایگان
                            </Button>
                            <Button href="/placement" color="secondary" size="xl">
                                آزمون تعیین سطح
                            </Button>
                        </div>
                        <MetricsMini />
                    </div>
                    <div className="relative flex items-center justify-center lg:h-full lg:min-h-160">
                        <video
                            className="h-auto max-h-full w-auto max-w-full dark:hidden"
                            src="/media/girl+cat+laptop-loop.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            poster="/images/girl+cat+laptop.webp"
                            loading="lazy"
                        />
                        <Image
                            className="h-auto max-h-full w-auto max-w-full not-dark:hidden"
                            src="/images/girl+cat+laptop.webp"
                            alt="Test Helper Platform"
                            width={800}
                            height={600}
                            priority
                            quality={90}
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
