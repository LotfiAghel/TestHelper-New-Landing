"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChevronDown } from "@untitledui/icons";
import Link from "next/link";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { DialogTrigger } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { TestHelperLogo } from "@/components/foundations/logo/testhelper-logo";
import { TestHelperLogoMinimal } from "@/components/foundations/logo/testhelper-logo-minimal";
import { AuthModal } from "@/components/shared-assets/login/auth-modal";
import { getUserContext } from "@/context/userContext";
import { cx } from "@/utils/cx";
// import LoginModal from "./LoginModal";
import UserProfile from "./UserProfile";
import { DropdownMenuSimpleWithFooter } from "./dropdown-menu-simple-with-footer";
import { ThemeToggle } from "./theme-toggle";
import { DropdownAvatar } from "./user-profile";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
    { label: "آزمون‌ها", href: "/#tests" },
    { label: "تعرفه‌ها", href: "/pricing", menu: <DropdownMenuSimpleWithFooter /> },
    { label: "بلاگ", href: "/blog" },
    { label: "تعیین سطح", href: "/placement" },
    { label: "درباره ما", href: "/about-us" },
    { label: "تماس با ما", href: "/contact-us" },
];

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <Link href={props.href} className="flex items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover">
                    {props.label}
                </Link>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
            >
                {props.label}{" "}
                <ChevronDown
                    className={cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0")}
                />
            </button>
            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

const MobileFooter = () => {
    const { user } = getUserContext();
    if (user)
        return <div className="flex flex-col gap-8 border-t border-secondary px-4 py-6">
            <div className="flex flex-col gap-3">
                <DropdownAvatar user={user} showName />
            </div>
        </div>
    return (
        <div className="flex flex-col gap-8 border-t border-secondary px-4 py-6">
            <div className="flex flex-col gap-3">
                <DialogTrigger>
                    <Button color="primary" size="lg">
                        ورود/ثبت‌نام
                    </Button>
                    <AuthModal />
                </DialogTrigger>
            </div>
        </div>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
}

export const HeaderComponent = ({ items = headerNavItems, isFullWidth, isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const { user, setUser } = getUserContext();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* <LoginModal type={""} isOpen={isOpen} setIsOpen={setIsOpen} setUser={setUser} /> */}
            <header
                ref={headerRef}
                className={cx(
                    "sticky top-0 z-50 flex h-16 w-full items-center justify-center bg-primary/30 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-primary/40 md:h-18",
                    isFloating && "h-16 md:h-19 md:pt-3",
                    isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                    className,
                )}
            >
                <div className="flex size-full max-w-container flex-1 items-center ps-4 pe-3 md:px-8">
                    <div
                        className={cx(
                            "flex w-full justify-between gap-4",
                            isFloating && "ring-secondary_alt md:rounded-2xl md:bg-primary md:py-3 md:ps-4 md:pe-3 md:shadow-xs md:ring-1",
                        )}
                    >
                        <div className="flex flex-1 items-center gap-5">
                            <TestHelperLogo className="h-8" />
                            {/* <TestHelperLogoMinimal className="hidden h-8 md:inline-block lg:hidden" /> */}
                            {/* Desktop navigation */}
                            <nav className="max-md:hidden">
                                <ul className="flex items-center gap-0.5">
                                    {items.map((navItem) => (
                                        <li key={navItem.label}>
                                            {navItem.menu ? (
                                                <AriaDialogTrigger>
                                                    <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                                        <span className="px-0.5">{navItem.label}</span>

                                                        <ChevronDown className="size-4 rotate-0 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                                    </AriaButton>

                                                    <AriaPopover
                                                        className={({ isEntering, isExiting }) =>
                                                            cx(
                                                                "hidden origin-top will-change-transform md:block",
                                                                isFullWidth && "w-full",
                                                                isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                                isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1",
                                                            )
                                                        }
                                                        offset={isFloating || isFullWidth ? 0 : 8}
                                                        containerPadding={0}
                                                        triggerRef={(isFloating && isFullWidth) || isFullWidth ? headerRef : undefined}
                                                    >
                                                        {({ isEntering, isExiting }) => (
                                                            <AriaDialog
                                                                className={cx(
                                                                    "mx-auto origin-top outline-hidden",
                                                                    isFloating && "max-w-7xl px-8 pt-3",
                                                                    // Have to use the scale animation inside the popover to avoid
                                                                    // miscalculating the popover's position when opening.
                                                                    isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95",
                                                                    isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95",
                                                                )}
                                                            >
                                                                {navItem.menu}
                                                            </AriaDialog>
                                                        )}
                                                    </AriaPopover>
                                                </AriaDialogTrigger>
                                            ) : (
                                                <Link
                                                    href={navItem.href ?? "#"}
                                                    className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus:outline-offset-2 focus-visible:outline-2"
                                                >
                                                    <span className="px-0.5">{navItem.label}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="hidden items-center gap-3 md:flex">
                            {/* <Button color="secondary" size={isFloating ? "md" : "lg"}>
                            تعیین سطح
                        </Button> */}
                            <ThemeToggle />
                            {user ? (
                                <DropdownAvatar user={user} />
                            ) : (
                                <>
                                    <DialogTrigger>
                                        <Button color="primary" size={isFloating ? "md" : "lg"}>
                                            ورود/ثبت‌نام
                                        </Button>
                                        <AuthModal />
                                    </DialogTrigger>
                                </>
                            )}
                        </div>
                        <ThemeToggle className="md:hidden" />
                        <AriaDialogTrigger>
                            <AriaButton
                                aria-label="Toggle navigation menu"
                                className={({ isFocusVisible, isHovered }) =>
                                    cx(
                                        "group ms-auto cursor-pointer rounded-lg p-2 md:hidden",
                                        isHovered && "bg-primary_hover",
                                        isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                    )
                                }
                            >
                                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        className="hidden text-secondary group-aria-expanded:block"
                                        d="M18 6L6 18M6 6L18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        className="text-secondary group-aria-expanded:hidden"
                                        d="M3 12H21M3 6H21M3 18H21"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </AriaButton>
                            <AriaPopover
                                triggerRef={headerRef}
                                className="h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
                                offset={0}
                                crossOffset={20}
                                containerPadding={0}
                                placement="bottom left"
                                style={{ zIndex: 5 }}
                            >
                                <AriaDialog className="outline-hidden"
                                    style={{ zIndex: 5 }}>
                                    <nav className="w-full bg-primary shadow-lg">

                                        <ul className="flex flex-col gap-0.5 py-5">
                                            {items.map((navItem) =>
                                                navItem.menu ? (
                                                    <MobileNavItem key={navItem.label} label={navItem.label}>
                                                        {navItem.menu}
                                                    </MobileNavItem>
                                                ) : (
                                                    <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
                                                ),
                                            )}
                                        </ul>
                                        <MobileFooter />
                                    </nav>
                                </AriaDialog>
                            </AriaPopover>
                        </AriaDialogTrigger>
                    </div>
                </div>
            </header>
        </>
    );
};

export const Header = () => {
    return (
        <GoogleOAuthProvider clientId={"706367811187-qj0fme26bcctej0egr9ho9vdu3sga4ct.apps.googleusercontent.com"}>
            <HeaderComponent />
        </GoogleOAuthProvider>
    );
};
