// ContentDivider.tsx
import React from "react";
import { cx } from "@/utils/cx";

type DividerType = "single-line" | "dual-line" | "background-fill";

interface ContentDividerProps {
    type?: DividerType;
    className?: string;
    children?: React.ReactNode;
}

export const ContentDivider: React.FC<ContentDividerProps> = ({ type = "single-line", className, children }) => {
    const hasChildren = !!children;

    //
    // 1. BACKGROUND FILL
    //
    if (type === "background-fill") {
        return (
            <div className={cx("flex w-full items-center", className)}>
                <div className="h-px flex-1 bg-gray-200" />
                <div className="mx-3 rounded-md border border-gray-200 bg-gray-50 px-3 py-1">{children}</div>
                <div className="h-px flex-1 bg-gray-200" />
            </div>
        );
    }

    //
    // 2. DUAL-LINE
    //
    if (type === "dual-line") {
        return (
            <div className={cx("flex w-full items-center gap-2", className)}>
                <div className="flex-1 space-y-1">
                    <div className="h-px w-full bg-gray-200" />
                    <div className="h-px w-full bg-gray-200" />
                </div>

                {hasChildren && <div className="px-3">{children}</div>}

                <div className="flex-1 space-y-1">
                    <div className="h-px w-full bg-gray-200" />
                    <div className="h-px w-full bg-gray-200" />
                </div>
            </div>
        );
    }

    //
    // 3. SINGLE LINE (default)
    //
    if (hasChildren) {
        return (
            <div className={cx("flex w-full items-center", className)}>
                <div className="h-px flex-1 bg-gray-200" />
                <div className="mx-3">{children}</div>
                <div className="h-px flex-1 bg-gray-200" />
            </div>
        );
    }

    // simple divider
    return <div className={cx("h-px w-full bg-gray-200", className)} />;
};
