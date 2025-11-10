"use client";

import type { HTMLAttributes } from "react";
import Image from "next/image";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";
import Link from "next/link";

export const UntitledLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <Link href="/">
            <div {...props} className={cx("flex h-8 w-max items-center justify-start overflow-visible", props.className)}>
                <Image src="/images/testhelper.svg" alt="Logo" width={16} height={16} className="aspect-square h-full w-auto shrink-0" />
                <div className="aspect-[0.3] h-full" />
                <h1 className="text-xl font-bold text-primary md:max-lg:hidden">تست‌هلپر</h1>
            </div>
        </Link>
    );
};
