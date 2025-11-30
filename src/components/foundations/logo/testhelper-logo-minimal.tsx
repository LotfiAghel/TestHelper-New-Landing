"use client";

import Image from "next/image";
import { cx } from "@/utils/cx";

interface TestHelperLogoMinimalProps {
    className?: string;
    width?: number;
    height?: number;
}

export const TestHelperLogoMinimal = ({ className, width = 16, height = 16 }: TestHelperLogoMinimalProps) => {
    return <Image src="/images/testhelper.svg" alt="Logo" width={width} height={height} className={cx("aspect-square h-full w-auto shrink-0", className)} />;
};
