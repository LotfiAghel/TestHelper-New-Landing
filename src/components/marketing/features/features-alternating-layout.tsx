"use client";

import { type FC, type HTMLAttributes, memo } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import Image from "next/image";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { FlowPattern } from "@/components/shared-assets/background-patterns/flow-pattern";
import { cx } from "@/utils/cx";
import ParallaxSrolling from "./ParallaxScrolling";


const Features = () => {
    return <>
        <div className="mx-auto w-full max-w-container px-4 md:px-8">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">امکانات ویژه تست‌هلپر</h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">تست‌هلپر مثل یه جعبه‌ابزار کامله؛ هرچی لازم داری اینجاست.</p>
            </div>
        </div>
        <ParallaxSrolling />
    </>

};

export {
    Features
};
