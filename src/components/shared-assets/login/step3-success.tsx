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
        <div className="flex flex-col items-center gap-6">
            <TestHelperLogoMinimal className="size-10" />
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-display-xs font-semibold text-primary">همه چی مرتبه!</h1>
                <p className="text-md text-tertiary">چند لحظه صبر کن...</p>
            </div>
            <LoadingIndicator type="dot-circle" size="md" />
            {/* <Button size="lg" onClick={() => router.push("/dashboard")}>
                برو به داشبورد
            </Button> */}
        </div>
    );
}
