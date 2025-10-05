"use client";

import { Star01 } from "@untitledui/icons";
import Link from "next/link";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/base/marqee/marquee";
import { Telegram } from "@/components/foundations/social-icons";

const reviews = [
    {
        id: "mina",
        quote: "من از امکانات سایت و اپلیکیشن تست هلپر خیلی استفاده میکردم و هر ۳ اشتراک رو خریده بودم. واسه هر رایت و اسپیک چندبار تصحیح می‌گرفتم تا مطمئن بشم خوب یادش گرفتم. از ریدینگ و لیستنینگ موضوعات مختلف کلمه جدید مرتبط با موضوع رو توی تیک۸ و لایتنر میزدم و مرور میکردم که واقعا مفید بود واسم.",
        source: {
            platform: Telegram,
            username: "https://t.me/MinaTeimuri",
            url: "https://t.me/TestHelperTOEFLgr/137253",
        },
        author: {
            name: "مینا",
            test: "تافل",
            testScore: 105,
            stars: 5,
            avatarUrl: "/images/avatars/female-01.png",
        },
    },
    {
        id: "negin",
        quote: "سلام، از گروه تست هلپر تشکر ویژه دارم. من از دی ماه شروع کردم با سایت کار کردن اولش سطحم ۴۰ بود و تا تیر رسوندم به اینجا. با تمرین روزانه.",
        source: {
            platform: Telegram,
            username: "https://t.me/negin_gin",
            url: "https://t.me/TestHelperTOEFLgr/133711",
        },
        author: {
            name: "نگین",
            test: "تافل",
            testScore: 103,
            stars: 5,
            avatarUrl: "/images/avatars/female-02.png",
        },
    },
    {
        id: "yazdan",
        quote: "تنها منبع مطالعاتی من همین سایت تست هلپر بودش و هیچ کلاس یا معلم خصوصی نگرفتم و کلا خودخوان این مسر رو پیش بردم. یک نکته خیلی خیلی مهم این هستش که اصلا از مسیری که دارید دست نکشید و واقعا واسش تلاش کنید که حتما موفق میشید.",
        quoteLink: "",
        source: {
            platform: Telegram,
            username: "https://t.me/Yazdanmo",
            url: "https://t.me/TestHelperTOEFLgr/133706",
        },
        author: {
            name: "یزدان",
            test: "تافل",
            testScore: 100,
            stars: 5,
            avatarUrl: "/images/avatars/male-01.png",
        },
    },
    {
        id: "frnk",
        quote: "خیلی خیلی ممنونم از تیم تست‌هلپر.  جدا از سایت عالیشون تیم فوق‌العاده‌ای که فیدبک‌های خیلی خوبی میدن سوالی باشه حتما جواب میدن و پشتیبانی عالی👌🏻 خیلی خیلی ممنونم واقعا تو این مسیر کمک کردین و دیدم که چقدر به بچه‌های دیگه هم کمک میکنین. از طرف خودم و همگی تشکر میکنم ازتون🙏🏻❤️",
        source: {
            platform: Telegram,
            username: "https://t.me/frnkphk",
            url: "https://t.me/TestHelperTOEFLgr/145402",
        },
        author: {
            name: "فرانک",
            test: "تافل",
            testScore: 108,
            stars: 5,
            avatarUrl: "/images/avatars/female-03.png",
        },
    },
    {
        id: "mahgol",
        quote: "سایت واقعا جامع و کامل هست. و با پول ناچیز واقعا منابع ارزشمندی در اختیار زبان آموز قرار میده. به نظر من نیاز به کتاب خاصی به جز تمرین کردن تو سایت و خوندن samples نیست.",
        source: {
            platform: Telegram,
            username: "hhttps://t.me/MahgolHF",
            url: "https://t.me/TestHelperTOEFLgr/142504",
        },
        author: {
            name: "ماه گل",
            test: "تافل",
            testScore: 119,
            stars: 5,
            avatarUrl: "/images/avatars/female-04.png",
        },
    },
    {
        id: "diana",
        quote: "از تیم تست‌هلپر هم واقعا تشکر می‌کنم. جدی رابط کاربری اپ و سایت خیلی خوبه. امکاناتش عالیه و دستیار هوش مصنوعی هم پرامپت خوبی داره و فیدبکای مناسبی میده به آدم.",
        source: {
            platform: Telegram,
            username: "https://t.me/ItisDianaherself",
            url: "https://t.me/TestHelperTOEFLgr/140549",
        },
        author: {
            name: "دیانا",
            test: "تافل",
            testScore: 112,
            stars: 5,
            avatarUrl: "/images/avatars/female-05.png",
        },
    },
    // {
    //     id: "ghazal",
    //     quote: "خیلی ممنونم از تیم تست هلپر... واقعا وبسایت تست هلپر برای من خیلی کمک کننده بود بخصوص تو زمینه ی تمرین اسپیکینگ که برام‌مهمترین بخش بود و با تمرین از طریق سایت و خوندن نمونه های اسپیکینگ روی سایت تونستم‌ تسلط نسبی رو داشته باشم سر جلسه🙏🙏🌻🌻🌻",
    //     source: {
    //         platform: Telegram,
    //         username: "https://t.me/",
    //         url: "https://t.me/TestHelperTOEFLgr/136927",
    //     },
    //     author: {
    //         name: "غزل",
    //         test: "تافل",
    //         testScore: 102,
    //         stars: 5,
    //         avatarUrl: "/images/avatars/female-01.png",
    //     },
    // },
    {
        id: "nima",
        quote: "پلتفرم تست هلپر نه فقط از بابت تشابه محتوایی ازمون های نئو با امتحان اصلی، بلکه از باب مشابهت صد در صدی ظاهر و محیط فضای آزمون هاش با آزمون اصلی تافل، بهترین بستر برای تمرین ازمون تافله. این باعث میشه روز امتحان اصلی حداقل از بابت اینکه نسبت به محیط (گزینه ها، اسکرین و …) نا آشنا هستین، حس بد نگیرین و دستپاچه نشین چون محیط سایت تست هلپر هیچ تفاوتی با ازمون اصلی نداشت. ظاهر همه سوال ها، ظاهر شدن گزینه ها و تایم، رایتینگ و … تو ازمون اصلی، عین آزمون های نئو در حالت تست بود. البته تیم پشتیبانی این مجموعه با حوصله به کامنت های تمام اعضا گوش میدن که یکی دیگه از نقطه قوت های این مجموعه س.",
        source: {
            platform: Telegram,
            username: "https://t.me/n_nimam",
            url: "https://t.me/TestHelperTOEFLgr/100796",
        },
        author: {
            name: "نیما",
            test: "تافل",
            testScore: 100,
            stars: 5,
            avatarUrl: "/images/avatars/male-02.png",
        },
    },
    {
        id: "saeed",
        quote: "سلام دوستان، نمره من هم اومد و لازم دونستم که تشکر کنم از مجموعه تست هلپر به خاطر سایت فوق‌العاده‌ای که دارن، و علی‌الخصوص قسمت Revise در بخش‌های رایتینگ و اسپیکینگ که فیدبک‌های مفیدی فراهم میکرد.",
        source: {
            platform: Telegram,
            username: "https://t.me/Saeed47",
            url: "https://t.me/TestHelperTOEFLgr/111620",
        },
        author: {
            name: "سعید",
            test: "تافل",
            testScore: 108,
            stars: 5,
            avatarUrl: "/images/avatars/male-03.png",
        },
    },
    {
        id: "kaveh",
        quote: "از مجموعه تست هلپر هم شدیدا تشکر میکنم که با یه هزینه معقول سوالات رو به صورت خیلی مرتب جمع آوری کردن و باعث شدن کار من خیلی راحت بشه و استرس کمتری داشته باشم",
        source: {
            platform: Telegram,
            username: "https://t.me/Kavehhn174",
            url: "https://t.me/TestHelperTOEFLgr/99563",
        },
        author: {
            name: "کاوه",
            test: "تافل",
            testScore: 111,
            stars: 5,
            avatarUrl: "/images/avatars/male-04.png",
        },
    },
    {
        id: "sadegh",
        quote: "اول از همه از مجموعه تست‌هلپر تشکر می‌کنم به‌خاطر سایتی که درست کردن. واقعا اگه نبود این‌طور نمی‌شد تمرین کرد. سوالی که برای خودم موقع ماک دادن بود این بود که چه‌قدر آزمون از نظر ظاهری شبیه فرمت تست‌هلپره و  چه‌قدر شبیه ماک؛ که خب باید بگم که سایت تست‌هلپر از نظر شکل ظاهری قابل اطمینان‌ترین مرجع‌ه و من تفاوتی بین آزمون اصلی و تست‌هلپر ندیدم. ماک‌ها هر کدوم یه ساز می‌زنن.",
        source: {
            platform: Telegram,
            username: "https://t.me/Saadeq",
            url: "https://t.me/TestHelperTOEFLgr/87319",
        },
        author: {
            name: "صادق",
            test: "تافل",
            testScore: 110,
            stars: 5,
            avatarUrl: "/images/avatars/male-04.png",
        },
    },
];
const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);

export const Testimonial = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16" dir="ltr">
            <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col items-center text-center" dir="rtl">
                {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Tests</span> */}
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">کاربرامون چی می‌گن؟</h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">هر کاربر تجربه خودش رو داره؛ اما نقطه مشترک همه‌شون اعتماد به تست‌هلپر بوده.</p>
            </div>
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent direction="right" autoFill={true} speed={60}>
                    {shuffledReviews.map((review, index) => (
                        <MarqueeItem key={index}>
                            <div
                                dir="rtl"
                                className="flex w-[240px] flex-col items-start gap-2 rounded-xl bg-tertiary p-4 sm:w-[340px] lg:justify-between lg:p-6"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <img alt={`${review.author.name}`} className="size-12 rounded-full border-2" src={review.author.avatarUrl} />
                                        <div className="min-w-0 flex-1 text-xs sm:text-sm">
                                            <div className="flex flex-row items-center gap-2 text-primary">
                                                {review.author.name}
                                                <Link href={review.source.url} target="_blank">
                                                    {<review.source.platform size={14} className="text-utility-blue-500" />}
                                                </Link>
                                            </div>

                                            <div className="inline-block rounded-md bg-brand-secondary px-2 text-tertiary">
                                                {review.author.test} • {review.author.testScore}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Star Rating */}
                                    <div className="flex w-fit items-center justify-center gap-1">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star01
                                                key={starIndex}
                                                className={`size-4 ${starIndex < review.author.stars ? "fill-yellow-500 text-yellow-500" : "text-disabled"}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="line-clamp-3 text-xs leading-relaxed text-secondary">{review.quote}</p>
                            </div>
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </section>
    );
};
