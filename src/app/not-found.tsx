"use client";

import { ArrowLeft } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { NotFoundIllustration02 } from "@/components/shared-assets/not-found/not-found-illustration-02";
import { NotFoundSimple03 } from "@/components/shared-assets/not-found/not-found-simple-03";
import { NotFoundSimple05 } from "@/components/shared-assets/not-found/not-found-simple-05";

export default function NotFound() {
    const router = useRouter();
    return <NotFoundSimple03 />;

    // return (
    //     <section className="flex min-h-screen items-start bg-primary py-16 md:items-center md:py-24">
    //         <div className="mx-auto max-w-container grow px-4 md:px-8">
    //             <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-12">
    //                 <div className="flex flex-col gap-4 md:gap-6">
    //                     <div className="flex flex-col gap-3">
    //                         <span className="text-md font-semibold text-brand-secondary">خطای 404</span>
    //                         <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">اوه... یه مشکلی پیش اومده.</h1>
    //                     </div>
    //                     <p className="text-lg text-tertiary md:text-xl">به نظر میاد این صفحه وجود نداره.</p>
    //                 </div>

    //                 <div className="flex flex-col-reverse gap-3 sm:flex-row">
    //                     <Button color="secondary" size="xl" iconTrailing={ArrowLeft} onClick={() => router.back()}>
    //                         برگشت
    //                     </Button>
    //                     <Button size="xl" href="/">
    //                         صفحه اصلی
    //                     </Button>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );
}
