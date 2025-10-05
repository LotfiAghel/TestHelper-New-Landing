"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    // --- Step 1: Collect headings ---
    useEffect(() => {
        const article = document.querySelector("article");
        if (!article) return;

        const headingElements = Array.from(article.querySelectorAll("h2, h3")) as HTMLElement[];

        const newHeadings = headingElements.map((el) => {
            const id = el.id || el.textContent?.trim().toLowerCase().replace(/\s+/g, "-") || "";
            el.id = id;
            return {
                id,
                text: el.textContent || "",
                level: Number(el.tagName.replace("H", "")),
            };
        });

        setHeadings(newHeadings);
    }, []);

    // --- Step 2: Observe scroll position ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            {
                rootMargin: "0px 0px -70% 0px",
                threshold: 0,
            },
        );

        const elements = document.querySelectorAll("article h2, article h3");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    if (!headings.length) return null;

    return (
        <nav className="w-72 space-y-3 rounded-2xl border border-secondary bg-secondary p-5 text-sm shadow-sm">
            <h2 className="font-semibold text-secondary">فهرست مطالب</h2>

            <ul className="space-y-1">
                {headings.map((heading) => {
                    const isActive = heading.id === activeId;
                    const isSub = heading.level === 3;
                    return (
                        <li key={heading.id} className={`transition-colors ${isSub ? "ms-4" : ""} `}>
                            <Link
                                href={`#${heading.id}`}
                                className={`block truncate ${isActive ? "font-semibold text-secondary" : "text-secondary hover:text-brand-tertiary"}`}
                            >
                                {heading.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
