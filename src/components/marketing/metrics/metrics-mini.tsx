export const MetricsMini = () => {
    return (
        <section className="w-full bg-primary pt-6 md:w-auto md:pt-8">
            <div className="mx-auto max-w-container">
                <div className="flex flex-col gap-2 rounded-2xl bg-secondary px-4 py-2 md:gap-4 md:rounded-none md:bg-transparent md:p-0">
                    {/* <div className="flex w-full flex-col self-center md:max-w-3xl">
                        <h2 className="text-sm font-semibold text-primary md:text-lg">افتخار 7 سال همراهی شما</h2>
                        <p className="mt-2 text-sm text-tertiary md:mt-3 md:text-base">از شروع یادگیری اولین کلمه تا کسب نمره دلخواهتان، در کنار شما هستیم.</p>
                    </div> */}

                    <dl className="flex flex-row justify-around gap-6 rounded-2xl bg-secondary md:px-6 md:py-4">
                        {[
                            {
                                title: "+50k",
                                subtitle: "دانشجو",
                            },
                            {
                                title: "98%",
                                subtitle: "رضایت شما",
                            },
                            {
                                title: "+500",
                                subtitle: "آزمون واقعی",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col-reverse gap-2 text-center">
                                <dt className="text-sm font-semibold text-primary">{item.subtitle}</dt>
                                <dd className="text-md font-semibold text-brand-tertiary_alt md:text-lg">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
