"use client";

import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cx } from "@/utils/cx";

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => <div className={cx("relative w-full overflow-hidden", className)} {...props} />;

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({ loop = 0, autoFill = true, pauseOnHover = true, ...props }: MarqueeContentProps) => (
    <FastMarquee autoFill={autoFill} loop={loop} pauseOnHover={pauseOnHover} {...props} />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
    side: "left" | "right";
};

export const MarqueeFade = ({ className, side, ...props }: MarqueeFadeProps) => (
    <div
        className={cx(
            "absolute top-0 bottom-0 z-10 h-full w-24 from-white to-transparent dark:from-black",
            side === "left" ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
            className,
        )}
        {...props}
    />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => <div className={cx("mx-2 flex-shrink-0 object-contain", className)} {...props} />;
