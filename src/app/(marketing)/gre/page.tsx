// @ts-nocheck
import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features-scroll";
import { Footer } from "@/components/marketing/footers/footer-brand";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-section/hero";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";
import { LearnBranch } from "@/types";
import { FooterMain } from "@/components/marketing/footers/footer-main";

export const metadata = {
    title: "آزمون GRE | ماک GRE، بهترین منابع، نمره و تاریخ آزمون | تست‌هلپر",
    description:
        "آمادگی کامل آزمون GRE: ماک GRE رایگان، بهترین منابع و کتاب GRE، راهنمای نمره و امتیاز، تاریخ آزمون، GRE General و Subject، آموزش تضمینی و بهترین کلاس GRE.",
    keywords: [
        "gre",
        "آزمون gre",
        "آزمون جی آر ای",
        "gre آزمون چیست",
        "gre آموزش",
        "gre تضمینی",
        "gre مخفف چیست",
        "gre مدرک",
        "gre منابع",
        "gre نمره",
        "gre چيست",
        "gre چیه",
        "آزمون gmat یا gre",
        "آزمون gre general",
        "آزمون gre subject",
        "آزمون gre subject چیست",
        "آزمون gre آنلاین",
        "آزمون gre سازمان سنجش",
        "آزمون gre منابع",
        "آزمون gre چيست",
        "آزمون gre چیه",
        "آزمون greچیست",
        "آزمون ماک gre",
        "آزمونgre",
        "آموزش gre",
        "امتحان gre چيست",
        "امتحان جي ار اي چيست",
        "امتحان جی آر ای",
        "امتحان جی آر ای چیست",
        "امتیاز gre چیست",
        "بهترین منابع gre",
        "بهترین منابع آزمون gre",
        "بهترین کتاب برای gre",
        "بهترین کلاس gre",
        "تاریخ آزمون gre",
        "تاریخ آزمون gre 2022",
        "تاریخ امتحان gre",
        "تست gre چیست",
        "ماک gre",
        "کلاس gre",
        "دوره gre",
        "منابع آزمون gre",
        "نمره gre",
        "هزینه آزمون gre",
        "gmat یا gre",
    ],
    alternates: {
        canonical: "/gre",
    },
    openGraph: {
        title: "آزمون GRE | ماک GRE، بهترین منابع، نمره و تاریخ آزمون | تست‌هلپر",
        description: "آمادگی کامل GRE: ماک GRE رایگان، بهترین منابع و کتاب، نمره و امتیاز، تاریخ آزمون، GRE General و Subject، آموزش تضمینی و کلاس GRE.",
        url: "/gre",
        type: "website",
    },
};

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

const GrePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={<>پلتفرم تخصصی آزمون GRE شامل آزمون‌های TC, RC, Crown, Dalao و...</>}
                subtitle={<>کامل‌ترین منابع برای تمرین Verbal، Quant و Writing همراه با آزمون‌های Adaptive، سؤالات واقعی و فلش‌کارت‌های اختصاصی</>}
                href="/gre/dashboard"
            />
            <Testimonial />
            <Features
                heading="امکانات ویژه GRE در تست‌هلپر"
                description="هر چیزی که برای تمرین اصولی و رسیدن به نمره بهتر نیاز داری؛ از منابع معتبر تا تحلیل هوشمند و شبیه‌سازی واقعی آزمون"
                customFeatures={[
                    {
                        title: "منابع کامل، معتبر و به‌روز",
                        description: "دسترسی به مهم‌ترین منابع آمادگی GRE با جدیدترین نسخه‌ها؛ شامل مجموعه‌هایی منحصربفرد و کمیاب",
                        items: [
                            "آزمون‌های Dalao، Crown و Manhattan به‌صورت کامل",
                            "آزمون‌های پاورپرپ و PowerPrep Plus",
                            "مجموعه‌های TC1900 و RC420 (آخرین نسخه‌های TC و RC برای اولین بار در ایران)",
                        ],
                        imageLightSrc: "/images/features/gre-TC-light.png",
                        imageDarkSrc: "/images/features/gre-TC-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "تمرین حرفه‌ای Verbal، Quant و Writing",
                        description: "تمرین هر مهارت به‌صورت جداگانه یا کل آزمون در محیطی کاملاً مشابه آزمون واقعی",
                        items: ["حالت Practice و Test با کنترل کامل روی آزمون", "آزمون‌های PowerPrep با قابلیت Adaptive", "شبیه‌سازی دقیق آزمون اصلی GRE"],
                        imageLightSrc: "/images/features/gre-quant-light.png",
                        imageDarkSrc: "/images/features/gre-quant-light.png",
                        imagePosition: "left",
                    },
                    {
                        title: "تحلیل هوشمند Verbal (به زودی)",
                        description: "درک بهتر ساختار جمله‌ها، نوع سؤال‌ها و دلیل درست/غلط بودن گزینه‌ها با کمک هوش مصنوعی",
                        items: ["تحلیل سطح سختی هر متن و سؤال", "تشخیص نقاط ضعف در TC و RC", "توضیحات هوشمند و هدفمند برای بهبود"],
                        imageLightSrc: "/images/features/gre-verbal-AI-light.png",
                        imageDarkSrc: "/images/features/gre-verbal-AI-light.png",
                        imagePosition: "right",
                    },
                    {
                        title: "تصحیح هوش مصنوعی AWA Writing (به زودی)",
                        description: "تصحیح سریع و دقیق رایتینگ‌های GRE با پرامپت اختصاصی و منطبق بر معیارهای رسمی",
                        items: ["نمره‌دهی شبیه آزمون اصلی", "فیدبک ساختاری، واژگان و انسجام", "پیشنهادهای کاربردی برای بهبود نمره"],
                        imageLightSrc: "/images/features/gre-awa-light.png",
                        imageDarkSrc: "/images/features/gre-awa-light.png",
                        imagePosition: "left",
                    },
                    {
                        title: "ابزارهای کمکی برای مطالعه",
                        description: "ابزارها و امکانات کمک‌آموزشی برای افزایش بازدهی مطالعه",
                        items: [
                            "دسترس آنی به 5 دیکشنری معتبر انگلیسی و فارسی (Cambridge, Longman و…) در محیط تمرین",
                            "امکان گذاشتن Highlight و Note و تعریف تگ اختصاصی با دسترسی در یک لیست مجزا",
                            "جستجوی پیشرفته بین همه متن‌ها و سؤالات",
                        ],
                        imageLightSrc: "/images/features/gre-dictionary-light.png",
                        imageDarkSrc: "/images/features/gre-dictionary-light.png",
                        imagePosition: "right",
                    },
                    {
                        title: "فلش‌کارت‌های اختصاصی GRE و مرور با لایتنر و تیک8",
                        description: "مجموعه کامل لغات GRE از بهترین منابع معتبر جهانی",
                        items: [
                            "امکان اضافه کردن کلمات دلخواه و ساخت لایتنر شخصی",
                            "دسترسی به لیست و فایل کلمات لایتنر و تیک8",
                            "مجوعه لغات مگوش (Magoosh)، گرگمت (GregMat) و 2500 واژه چینی",
                        ],
                        imageLightSrc: "/images/features/gre-flash-cards-light.png",
                        imageDarkSrc: "/images/features/gre-flash-cards-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "اپلیکیشن اختصاصی GRE",
                        description: "تمرین آیلتس بدون محدودیت زمان و مکان، بدون نیاز به اینترنت (مترو، اتوبوس، سفر و...)",
                        items: [
                            "دسترسی به امکانات سایت به صورت آفلاین",
                            "هایلایت و نوت‌برداری داخل آزمون",
                            "همگام‌سازی خودکار اپلیکیشن و سایت بعد از اتصال اینترنت",
                        ],
                        imageLightSrc: "/images/features/application-light.png",
                        imageDarkSrc: "/images/features/application-dark.png",
                        imagePosition: "right",
                    },
                ]}
            />
            <Team />
            <SocialProof />
            <FAQ
                customFaqs={[
                    {
                        question: "آزمون GRE چیه و برای چه افرادی لازمه؟",
                        answer: "GRE یه آزمون استاندارد برای پذیرش دوره‌های فوق‌لیسانس و دکتریه. معمولاً کسایی که می‌خوان آمریکا، کانادا یا بعضی کشورهای دیگه ادامه تحصیل بدن، GRE می‌دن. آزمون شامل سه بخشه: Verbal، Quant و Analytical Writing.",
                    },
                    {
                        question: "تفاوت GRE General و GRE Subject چیه؟",
                        answer: "GRE General برای همه رشته‌هاست و مهارت‌های زبانی، ریاضی و نوشتاری رو می‌سنجه. اما GRE Subject مخصوص رشته‌های خاص مثل فیزیک، شیمی یا روان‌شناسیه و اطلاعات تخصصی رو بررسی می‌کنه.",
                    },
                    {
                        question: "ماک GRE رایگان دارید؟",
                        answer: "بله! تو تست‌هلپر می‌تونی کلی ماک GRE رایگان بزنی، نمره‌تو ببینی و عملکردت رو دقیق تحلیل کنی. تجربه‌اش خیلی شبیه آزمون واقعیه.",
                    },
                    {
                        question: "بهترین منابع GRE کدومان؟",
                        answer: "منابع معروف GRE مثل PowerPrep, Dalao, Crown, GregMat و Magoosh همشون اینجان! علاوه بر اون، جدیدترین نسخه‌های TC1900 و RC420 و چندتا منبع کم‌یاب دیگه هم داخل تست‌هلپر قرار دادیم.",
                    },
                    {
                        question: "نمره GRE چطوری حساب می‌شه؟",
                        answer: "Verbal و Quant هر کدوم بین 130 تا 170 نمره دارن. نمره Writing هم از 0 تا 6 حساب می‌شه.  نمره کل از 260 تا 340 متغیره و امتیاز Writing جداگانه گزارش می‌شه.",
                    },
                    {
                        question: "منظور از Adaptive یا تطبیقی بودن GRE چیه؟",
                        answer: "آزمون GRE هوشمنده و خودش رو با عملکردت تطبیق می‌ده. یعنی اینکه وقتی بخش اول Verbal یا Quant رو جواب می‌دی، میزان سختی بخش بعدی بر اساس عملکردت تنظیم می‌شه. اگه تو بخش اول خوب عمل کنی، بخش دوم سخت‌تر می‌شه اما شانس نمره بالاتر داری؛ و اگر عملکردت متوسط باشه، بخش بعدی آسون‌تر می‌شه ولی سقف نمره‌ات هم پایین‌تر میاد. این سیستم کمک می‌کنه نمره‌ای که می‌گیری خیلی دقیق‌تر سطح واقعیت رو نشون بده.",
                    },
                    {
                        question: "تاریخ آزمون GRE کیه و چطور باید ثبت‌نام کنم؟",
                        answer: "تقریباً همیشه می‌تونی آزمون GRE بدی. برای تاریخ‌ها و ثبت‌نام باید وارد سایت ETS بشی. در حال حاضر هزینه آزمون 220 دلاره.",
                    },
                    {
                        question: "تفاوت GRE و GMAT چیه؟",
                        answer: "GRE برای بیشتر رشته‌ها مناسبه، ولی GMAT مخصوص مدیریت و MBA هست. ریاضی GMAT سخت‌تره، ولی Verbal تو GRE چالش‌برانگیزتره. خیلی از دانشگاه‌ها هر دو رو قبول می‌کنن و انتخابش به هدف و توانایی‌هات برمی‌گرده.",
                    },
                    {
                        question: "آیا GRE سخت‌تر شده؟",
                        answer: "نسخه جدید GRE کوتاه‌تر شده و خیلی‌ها می‌گن تجربه آزمون بهتر شده. سختی آزمون بیشتر به سطح واژگان و قدرت تحلیل خودت بستگی داره، نه اینکه خود آزمون سخت‌تر شده باشه.",
                    },
                    {
                        question: "چند بار می‌تونم GRE بدم؟",
                        answer: "هر چند بار که بخوای! فقط بین هر آزمون باید حداقل ۲۱ روز فاصله باشه و در یک سال می‌تونی حداکثر ۵ بار آزمون بدی.",
                    },
                    {
                        question: "نمره GRE چند سال اعتبار داره؟",
                        answer: "نمره GRE تا ۵ سال معتبره. یعنی می‌تونی با خیال راحت برای چند سال از همون نمره استفاده کنی.",
                    },
                    {
                        question: "برای GRE باید حتماً کلاس برم؟",
                        answer: "لزومی نداره. خیلی‌ها با منابع درست، برنامه‌ریزی خوب و مطالعه مستمر کاملاً خودخوان نتیجه می‌گیرن. تست‌هلپر هم دقیقاً همین ابزارها رو برات آماده کرده.",
                    },
                    {
                        question: "برای GRE از کجا شروع کنم؟",
                        answer: "اول سطح واژگانت رو بسنج، بعد یکی دو تا ماک بزن تا بدونی کجای کاری. بعدش هم منابع اصلی رو از بخش Verbal، Quant و Writing شروع کن. تو تست‌هلپر همه اینا مرتب و آماده‌ست.",
                    },
                ]}
            />
            <CTA startHref="/gre/dashboard" heading="شاید GRE سخت باشه؛ ولی تو شروعش کن، مسیرش با ما…" description="آماده‌ای قدم اول رو برداری؟" />
            <Footer />
        </Fragment>
    );
};

export default GrePage;
