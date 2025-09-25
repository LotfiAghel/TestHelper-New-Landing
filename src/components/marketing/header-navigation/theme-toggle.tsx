"use client";

import * as React from "react";
import { Moon01, Sun } from "@untitledui/icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button className="size-9 rounded-full" aria-label="Toggle theme" color="secondary" size="md" onClick={toggleTheme}>
            <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <Moon01 className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
