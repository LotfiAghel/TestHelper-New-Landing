"use client";

import { memo, type FC, type HTMLAttributes } from "react";
import Image from "next/image";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { FlowPattern } from "@/components/shared-assets/background-patterns/flow-pattern";
import { cx } from "@/utils/cx";
import ParallaxSrolling from "./ParallaxScrolling";


const Features = () => {
    return <ParallaxSrolling />

};

export {
    Features
};