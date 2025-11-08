import Image from "next/image";

export const SocialProof = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto w-full px-2 md:px-8">
                <div className="flex flex-col gap-8 mask-x-from-80%">
                    {/* <p className="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p> */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 xl:gap-x-8">
                        {/* Light mode images (hidden in dark mode) */}
                        <Image alt="Duolingo" src="/images/logos/duolingo-logo.svg" width={96} height={48} className="h-9 md:h-12 dark:hidden w-auto" />
                        <Image alt="IELTS" src="/images/logos/ielts-logo.svg" width={96} height={40} className="h-7 md:h-10 dark:hidden w-auto" />
                        <Image alt="TOEFL" src="/images/logos/toefl-logo.svg" width={96} height={40} className="h-7 md:h-10 dark:hidden w-auto" />
                        <Image alt="GRE" src="/images/logos/gre-logo.svg" width={96} height={48} className="h-9 md:h-12 dark:hidden w-auto" />
                        <Image alt="PTE" src="/images/logos/pte-logo.svg" width={96} height={48} className="h-9 md:h-12 dark:hidden w-auto" />
                        <Image alt="ACT" src="/images/logos/act-logo.png" width={64} height={24} className="h-4 md:h-6 dark:hidden w-auto" />

                        {/* Dark mode images (hidden in light mode) */}
                        <Image alt="Duolingo" src="/images/logos/duolingo-logo.svg" width={96} height={48} className="h-9 opacity-85 not-dark:hidden md:h-12 w-auto" />
                        <Image alt="IELTS" src="/images/logos/ielts-logo.svg" width={96} height={40} className="h-7 opacity-85 not-dark:hidden md:h-10 w-auto" />
                        <Image alt="TOEFL" src="/images/logos/toefl-logo.svg" width={96} height={40} className="h-7 opacity-85 not-dark:hidden md:h-10 w-auto" />
                        <Image alt="GRE" src="/images/logos/gre-logo.svg" width={96} height={48} className="h-9 opacity-85 not-dark:hidden md:h-12 w-auto" />
                        <Image alt="PTE" src="/images/logos/pte-logo.svg" width={96} height={48} className="h-9 opacity-85 not-dark:hidden md:h-12 w-auto" />
                        <Image alt="ACT" src="/images/logos/act-logo.png" width={64} height={24} className="h-4 opacity-85 not-dark:hidden md:h-6 w-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};
