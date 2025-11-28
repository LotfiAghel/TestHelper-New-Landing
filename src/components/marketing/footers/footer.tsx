import { Button } from "@/components/base/buttons/button";
import { footerNavList, footerSocials } from "./footer-items";

export const Footer = () => {
    return (
        <footer className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    {/* <TestHelperLogo className="h-8 w-min" /> */}
                    <p className="text-md text-quaternary">© 2027 تمامی حقوق برای تست‌هلپر محفوظ است.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
