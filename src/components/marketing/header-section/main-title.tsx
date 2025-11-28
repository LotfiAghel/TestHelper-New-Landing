import TextMorphAnimation from "./text-morph-animation";
import { WordRotate } from "./text-rotate-animation";

export const MainTitle = () => {
    return (
        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
            <span className="inline-flex items-center justify-center gap-3">
                آزمون
                {/* <WordRotate className="text-brand-500" words={["تافل", "آیلتس", "جی‌آرای", "پی‌تی‌ای"]} /> */}
                <TextMorphAnimation
                    texts={["تافل", "آیلتس", "جی‌آرای", "پی‌تی‌ای"]}
                    morphTime={5}
                    cooldownTime={0.5}
                    className="w-[110px] text-brand-500 sm:w-[180px]"
                />
                رو
            </span>
            <br />
            <span>با تست‌هلپر بترکون</span>
        </h1>
    );
};

export const MainSubtitle = () => {
    return (
        <h2 className="mt-4 max-w-lg text-center text-balance text-tertiary md:mt-6 md:text-start md:text-lg">
            صدها نمونه سؤال واقعی تافل، آیلتس و جی‌آرای، در محیطی کاملاً مشابه آزمون اصلی، همراه با امکانات آموزشی جامع، برای آمادگی کامل و کسب بهترین نمره در
            مسیر اپلای تحصیلی و مهاجرت
        </h2>
    );
};
