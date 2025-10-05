"use client";

import { Check, Copy01, Link01 } from "@untitledui/icons";
import Link from "next/link";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, Telegram, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";
import TableOfContents from "./table-of-contents";

export const BlogContent = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-8 sm:py-12 md:px-8 lg:py-16">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                        {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Published 20 Jan 2025</span> */}
                        <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">تفاوت آیلتس کامپیوتری، کاغذی و آنلاین</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">در این مقاله به شما کمک می‌کنیم...</p>
                    </div>
                    {/* <div className="mt-8 flex gap-2">
                        <Badge color="brand" size="md">
                            IELTS
                        </Badge>
                        <Badge color="indigo" size="md">
                            Center
                        </Badge>
                    </div> */}

                    {/* <div className="mt-8 flex items-center gap-4 md:hidden">
                        <img src="/images/avatars/szare.webp" className="size-14 rounded-full object-cover" alt="S Zare" />
                        <div>
                            <p className="text-lg font-semibold text-primary">سورنا زارع</p>
                            <p className="text-md text-tertiary">20 Jan 2025</p>
                        </div>
                    </div> */}
                </div>
                <img
                    className="mt-12 h-60 w-full object-cover md:mt-16 md:h-160"
                    src="https://testhelper.com/_next/image/?url=https%3A%2F%2Fstrapi-admin.testhelper.com%2Fuploads%2FFrame_26086400_57b0de43f6.jpg&w=3840&q=75"
                    alt="IELTS"
                />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-12">
                    <div className="sticky top-24 hidden h-full lg:flex">
                        <TableOfContents />
                    </div>
                    <div>
                        <article className="md:prose-md prose mb-12 max-w-container prose-h2:scroll-mt-24 prose-h3:scroll-mt-24 prose-h4:scroll-mt-24 prose-p:text-justify prose-li:text-justify">
                            <h2>مقدمه</h2>
                            <p>
                                آزمون آیلتس یکی از مهم‌ترین مدارک زبان انگلیسی برای مهاجرت، تحصیل و کار است. این آزمون به سه شکل مختلف برگزار می‌شود: کاغذی،
                                کامپیوتری و آنلاین. هر کدام ویژگی‌ها و شرایط خاص خود را دارند که دانستن آن‌ها به شما کمک می‌کند بهترین انتخاب را متناسب با شرایط
                                و توانایی‌تان داشته باشید. در این مقاله به تفاوت‌های این سه نوع آزمون آیلتس می‌پردازیم تا با دید بازتری برای ثبت‌نام اقدام کنید.
                            </p>

                            <figure>
                                <img
                                    className="h-60 md:h-120"
                                    src="https://strapi-admin.testhelper.ir/uploads/small_two_students_hold_notebooks_against_background_flag_england_learning_english_concept_151013_18193_jpg_uid_R63806068_and_ga_GA_1_1_1411269396_1753471703_and_semt_ais_hybrid_and_w_740_and_q_80_8b9a9ea0e6.png"
                                    alt="IELTS"
                                />
                            </figure>

                            <h2>تفاوت آیلتس کامپیوتری، کاغذی و آنلاین</h2>
                            <p>آزمون آیلتس در حال حاضر به سه روش مختلف برگزار می‌شود:</p>
                            <ul>
                                <li>کاغذی (Paper-based)</li>
                                <li>کامپیوتری (Computer-based)</li>
                                <li>آنلاین (IELTS Online)</li>
                            </ul>
                            <p>
                                هر سه نسخه از نظر ساختار، نوع سؤال‌ها، زمان‌بندی و نمره‌دهی یکسان هستند، اما تفاوت‌هایی در نحوه برگزاری و تجربه داوطلب دارند که
                                آگاهی از آن‌ها می‌تواند در انتخاب نوع آزمون بسیار کمک‌کننده باشد.
                            </p>

                            <figure>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>نوع آزمون</th>
                                            <th>شیوه برگزاری</th>
                                            <th>زمان اعلام نتایج</th>
                                            <th>ویژگی شاخص</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>آیلتس کاغذی (Paper-based)</td>
                                            <td>پاسخ‌دهی روی کاغذ + اسپیکینگ حضوری</td>
                                            <td>حدود ۱۳ روز کاری</td>
                                            <td>مناسب علاقه‌مندان به نوشتن دستی</td>
                                        </tr>
                                        <tr>
                                            <td>آیلتس کامپیوتری (Computer-based)</td>
                                            <td>پاسخ‌دهی با کامپیوتر + اسپیکینگ حضوری</td>
                                            <td>۳ تا ۵ روز کاری</td>
                                            <td>مناسب افراد با سرعت تایپ بالا و نیاز به نتیجه سریع</td>
                                        </tr>
                                        <tr>
                                            <td>آیلتس آنلاین (IELTS Online)</td>
                                            <td>کاملاً آنلاین از خانه + اسپیکینگ با ویدئوکنفرانس</td>
                                            <td>معمولاً مشابه آزمون کامپیوتری</td>
                                            <td>مناسب کسانی که امکان حضور در مراکز آزمون ندارند</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </figure>

                            <h3>آیلتس کاغذی (Paper-based IELTS)</h3>
                            <ul>
                                <li>بخش‌های Listening، Reading و Writing به‌صورت کاغذی و با قلم انجام می‌شود.</li>
                                <li>در بخش Listening، پس از پایان صدا، ۱۰ دقیقه زمان اضافه برای انتقال جواب‌ها به پاسخنامه داده می‌شود.</li>
                                <li>بخش Speaking به‌صورت حضوری و رودررو با ممتحن برگزار می‌شود که برای بعضی داوطلب‌ها تجربه طبیعی‌تر و راحت‌تری است.</li>
                                <li>مناسب کسانی است که به نوشتن دستی عادت دارند یا از صفحه نمایش طولانی خسته می‌شوند.</li>
                                <li>معمولاً زمان اعلام نتایج حدود ۱۳ روز کاری است.</li>
                            </ul>

                            <h3>آیلتس کامپیوتری (Computer-based IELTS)</h3>
                            <ul>
                                <li>پاسخ‌ها روی کامپیوتر و با صفحه‌کلید تایپ می‌شوند که برای افرادی با سرعت تایپ بالا و مهارت کار با کامپیوتر مناسب است.</li>
                                <li>بخش Listening بدون زمان اضافه برای انتقال جواب‌ها است، یعنی باید جواب‌ها را همزمان وارد کنید.</li>
                                <li>Speaking نیز به‌صورت حضوری برگزار می‌شود، مثل آزمون کاغذی.</li>
                                <li>یکی از مزیت‌های مهم، اعلام سریع‌تر نتیجه است که معمولاً بین ۳ تا ۵ روز کاری است.</li>
                                <li>محیط آزمون معمولاً مجهز و مدرن‌تر است و امکان استفاده از هدفون‌های شخصی وجود دارد.</li>
                            </ul>

                            <h3>آیلتس آنلاین (IELTS Online)</h3>
                            <ul>
                                <li>فقط برای آزمون آکادمیک ارائه شده و از خانه یا هر جای دیگر قابل انجام است.</li>
                                <li>تمام بخش‌ها از جمله Speaking به‌صورت آنلاین و از طریق ویدئوکنفرانس برگزار می‌شوند.</li>
                                <li>نیازمند اینترنت پایدار، وب‌کم و محیط آرام بدون مزاحمت است.</li>
                                <li>باید حتماً شرایط امنیتی خاص مثل شناسایی هویت، جلوگیری از تقلب و ضبط ویدئو رعایت شود.</li>
                                <li>در حال حاضر پذیرش این نوع آزمون در همه کشورها و مراکز آموزش عالی پذیرفته نیست، پس حتماً قبل از ثبت‌نام بررسی کنید.</li>
                                <li>مناسب کسانی است که به هر دلیلی نمی‌توانند به مراکز آزمون حضوری بروند و از فناوری دیجیتال استفاده راحتی دارند.</li>
                            </ul>

                            <div className="my-8 rounded-2xl bg-secondary p-8 text-tertiary [&>p+p]:mt-4.5">
                                <h2>نتیجه‌گیری</h2>
                                <p>
                                    اگر به نوشتن دستی عادت دارید و دوست دارید بخش Speaking را حضوری و رودررو تجربه کنید، آیلتس کاغذی انتخاب خوبی است. اما اگر
                                    تایپ کردن سریع بلد هستید و می‌خواهید نتیجه را سریع‌تر بگیرید، آیلتس کامپیوتری گزینه مناسب‌تری است. برای کسانی که شرایط
                                    رفت‌وآمد ندارند یا ترجیح می‌دهند در محیط خانه آزمون دهند، آیلتس آنلاین می‌تواند انتخاب راحت و امنی باشد؛ البته باید حواستان
                                    باشد که این نوع آزمون در همه جا پذیرفته نیست. پس قبل از ثبت‌نام، هدف و شرایط خود را خوب بسنجید تا بهترین نتیجه را بگیرید.
                                </p>
                            </div>
                        </article>
                        <div className="-mt-px flex flex-col items-start justify-between gap-y-8 border-t border-secondary pt-6 md:flex-row">
                            <div className="flex items-center gap-3 md:gap-4">
                                <img src="/images/avatars/szare.webp" className="size-12 rounded-full object-cover md:size-14" alt="S Zare" />
                                <div>
                                    <p className="text-md font-semibold text-primary md:text-lg">سورنا زارع</p>
                                    <p className="text-md text-tertiary">کارشناس آزمون</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    color="secondary"
                                    size="md"
                                    onClick={() => copy("https://www.untitledui.com/")}
                                    iconLeading={copied ? Check : Copy01}
                                ></Button>
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Telegram} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
