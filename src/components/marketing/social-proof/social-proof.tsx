export const SocialProof = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto w-full px-2 md:px-8">
                <div className="flex flex-col gap-8 mask-x-from-80%">
                    {/* <p className="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p> */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 xl:gap-x-8">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Duolingo" src="/images/logos/duolingo-logo.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="IELTS" src="/images/logos/ielts-logo.svg" className="h-7 md:h-10 dark:hidden" />
                        <img alt="TOEFL" src="/images/logos/toefl-logo.svg" className="h-7 md:h-10 dark:hidden" />
                        <img alt="GRE" src="/images/logos/gre-logo.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="PTE" src="/images/logos/pte-logo.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="ACT" src="/images/logos/act-logo.png" className="h-4 md:h-6 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Odeaolabs"
                            src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Kintsugi"
                            src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Stackedlab"
                            src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Magnolia"
                            src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Warpspeed"
                            src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Sisyphus"
                            src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
