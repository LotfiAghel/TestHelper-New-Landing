import TextMorphAnimation from "./text-morph-animation";
import { WordRotate } from "./text-rotate-animation";

export const MainTitle = () => {
    return (
        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
            <span className="inline-flex items-center justify-center gap-3">
                آزمون
                {/* <WordRotate className="text-primary" words={["تافل", "آیلتس", "جی‌آرای", "پی‌تی‌ای"]} /> */}
                <TextMorphAnimation texts={["تافل", "آیلتس", "جی‌آرای", "پی‌تی‌ای"]} morphTime={5} cooldownTime={0.5} className="w-[110px] sm:w-[180px]" />
                رو
            </span>
            <br />
            <span>با تست‌هلپر بترکون</span>
        </h1>
    );
};
