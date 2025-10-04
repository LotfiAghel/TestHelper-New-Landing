"use client";

import { Mail01, MarkerPin02, MessageChatCircle, Phone } from "@untitledui/icons";
import { dir } from "console";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Telegram } from "@/components/foundations/social-icons";

export const Contact = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span> */}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">تماس با ما</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">هر وقت نیاز داشتی، با چند تا کلیک ساده می‌تونی با ما ارتباط بگیری.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "ایمیل",
                                subtitle: "برای ارسال پیشنهاد یا پرسش‌های مفصل، می‌تونی ایمیل بزنی.",
                                icon: Mail01,
                                cta: "info@testhelper.ir",
                                href: "mailto:info@testhelper.ir",
                                dir: "ltr",
                            },
                            {
                                title: "تلگرام",
                                subtitle: "از طریق تلگرام با پشتیبان تست‌هلپر در ارتباط باش.",
                                icon: Telegram,
                                cta: "@TestHelper_Support",
                                href: "https://t.me/TestHelper_Support",
                                dir: "ltr",
                            },
                            {
                                title: "گفتگوی آنلاین سایت",
                                subtitle: "مستقیم از داخل سایت با پشتیبان تست‌هلپر گفت‌وگو کن.",
                                icon: MessageChatCircle,
                                cta: "پایین سمت چپ، روی آیکون گفت‌وگو کلیک کن.",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center rounded-xl bg-secondary p-6 text-center">
                                <FeaturedIcon className="hidden md:flex" size="lg" icon={item.icon} color="brand" theme="light" />
                                <FeaturedIcon className="md:hidden" size="md" icon={item.icon} color="brand" theme="light" />
                                <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5">{item.title}</h3>
                                <p className="mt-1 text-sm text-tertiary">{item.subtitle}</p>
                                <Button dir={item.dir} color="link-color" size="lg" href={item.href} target="_blank" className="mt-4 whitespace-normal md:mt-5">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-2 text-sm text-tertiary md:mt-3">
                    <span className="me-1 font-semibold">توجه:</span>
                    ما تمام تلاش‌مون رو می‌کنیم تا به پرسش‌ها و درخواست‌های شما سریع پاسخ بدیم، اما ممکنه تا ۲۴ ساعت طول بکشه. لطفاً کمی صبور باش و مطمئن باش که
                    جواب شما حتماً داده می‌شه.
                </p>
                <div className="mx-auto mt-12 max-w-3xl text-justify sm:mt-14 md:mt-16 lg:mt-20">
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        اگه دوست داری با بقیه داوطلب‌ها در ارتباط باشی، تبادل نظر کنی، اشکالاتت رو برطرف کنی یا درباره سؤالات بیشتر بحث کنی، ما توی فضای مجازی
                        منتظرت هستیم. اونجا می‌تونی با ادمین‌های باتجربه، اساتید و بقیه اعضای گروه همراه بشی و مسیرت رو راحت‌تر پیش ببری. برای دسترسی به تمام
                        گروه‌ها و کانال‌های تخصصی ما، کافیه وارد لینک زیر بشی:
                    </p>
                    <p className="mt-6 text-center md:mt-8">
                        <Button
                            dir="ltr"
                            color="link-color"
                            size="lg"
                            href="https://t.me/TestHelperLinks"
                            target="_blank"
                            iconLeading={<Telegram />}
                            className="whitespace-nowrap"
                        >
                            TestHelper Links
                        </Button>
                    </p>
                </div>
            </div>
        </section>
    );
};
