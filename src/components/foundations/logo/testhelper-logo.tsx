"use client";

import type { HTMLAttributes } from "react";
import Link from "next/link";
import { cx } from "@/utils/cx";
import { TestHelperLogoMinimal } from "./testhelper-logo-minimal";

export const TestHelperLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <Link href="/">
            <div {...props} className={cx("flex h-8 w-max items-center justify-start overflow-visible", props.className)}>
                {/* Minimal logo */}
                <TestHelperLogoMinimal />

                {/* Gap that adjusts to the height of the container */}
                <div className="aspect-[0.3] h-full" />

                {/* Logomark */}
                <h1 className="text-xl font-bold text-primary md:max-lg:hidden">تست‌هلپر</h1>
            </div>
        </Link>
    );
};
