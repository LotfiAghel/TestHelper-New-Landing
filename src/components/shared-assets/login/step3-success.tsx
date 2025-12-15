"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";
import { Button } from "@/components/base/buttons/button";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";

export default function StepSuccess() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("toefl/dashboard");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
            <TestHelperLogoMinimal className="size-10" />
            <div className="flex flex-col items-center justify-center gap-0.5">
                <h2 className="text-md font-semibold text-primary">همه چی مرتبه!</h2>
                <p className="text-sm text-tertiary">چند لحظه صبر کن...</p>
            </div>
            <div className="flex flex-col gap-4 px-4 pb-4 sm:gap-5 sm:px-6 sm:pb-6">
                <LoadingIndicator type="dot-circle" size="md" />
                {/* <Button size="lg" onClick={() => router.push("/dashboard")}>
                برو به داشبورد
            </Button> */}
            </div>
        </div>
    );
}
