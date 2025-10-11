export const About = () => {
    return (
        <section className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col items-center text-center">
                    {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span> */}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">درباره ما</h2>
                    {/* <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">درباره ما </p> */}
                </div>
                <div className="mx-auto mt-8 max-w-3xl text-justify sm:mt-10 md:mt-12 lg:mt-16">
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        از همون روز اول که تصمیم گرفتیم تست‌هلپر رو راه بندازیم، یه مأموریت مشخص داشتیم: کمک به داوطلبانِ آزمون‌های زبان. اسم پلتفرم هم دقیقاً
                        با همین ایده انتخاب شد.
                    </p>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        با تجربه چندین ساله در آموزش زبان انگلیسی، اولین قدممون ساخت یه پلتفرم شبیه‌ساز آزمون تافل بود؛ جایی که می‌تونی با نمونه سؤالات واقعی
                        تمرین کنی و از امکانات آموزشی متنوع استفاده کنی. بعدش آزمون آیلتس و جی‌آرای هم اضافه شد و حالا داریم آماده‌سازی بقیه آزمون‌ها رو هم
                        توسعه می‌دیم.
                    </p>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        راستی، تو تیم تست‌هلپر همیشه دنبال آدمای خلاق، باانرژی و پرانگیزه‌ایم، مثل خیلی از اعضای فعلی که یه روز کاربر بودن و حالا بخشی از تیم
                        شدن. اگه دوست داری همراه ما رشد کنی، خوشحال می‌شیم تو هم به جمعمون بپیوندی!
                    </p>
                </div>
            </div>
        </section>
    );
};
