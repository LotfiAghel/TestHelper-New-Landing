"use client";

import { CurrencyDollar } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const items = [
    {
        title: "تافل",
        subtitle: "",
        href: "https://testhelper.com/toefl/Services",
        Icon: CurrencyDollar,
    },
    {
        title: "آیلتس",
        subtitle: "",
        href: "https://testhelper.com/ielts/Services",
        Icon: CurrencyDollar,
    },
    {
        title: "جی‌آرای",
        subtitle: "",
        href: "https://testhelper.com/gre/Services",
        Icon: CurrencyDollar,
    },
    {
        title: "پی‌تی‌ای",
        subtitle: "",
        href: "https://testhelper.com/pte/Services",
        Icon: CurrencyDollar,
    },
];

export const DropdownMenuSimpleWithFooter = () => {
    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <ul className="flex flex-col gap-0.5 rounded-xl bg-primary py-2 ring-1 ring-secondary md:rounded-t-2xl md:px-2">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title}>
                            <NavMenuItemLink className="sm:py-2" title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
