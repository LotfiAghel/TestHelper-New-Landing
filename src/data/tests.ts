export type TestTitle = "toefl" | "ielts" | "gre" | "pte";

export interface TestItem {
    name: TestTitle;
    enTitle: string;
    faTitle: string;
    description: string;
    scoreRange: string;
    exams: string;
    logo: string;
    color: string;
    bgColor: string;
    borderColor: string;
    path: string;
    dashboardPath: string;
    link: string;
}

export const tests: TestItem[] = [
    {
        name: "toefl",
        enTitle: "TOEFL",
        faTitle: "تافل",
        description: "",
        scoreRange: "0-120",
        exams: "نئو، تی‌پی‌او، ژنتی و ...",
        logo: "/images/logos/toefl-logo.svg",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-200",
        borderColor: "border-blue-300",
        path: "/toefl",
        dashboardPath: "/toefl/dashboard",
        link: "https://www.ets.org/toefl",
    },
    {
        name: "ielts",
        enTitle: "IELTS",
        faTitle: "آیلتس",
        description: "",
        scoreRange: "0-9 Bands",
        exams: "کمبریج، ماکار، آیلتس واقعی و ...",
        logo: "/images/logos/ielts-logo.svg",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-200",
        borderColor: "border-red-300",
        path: "/ielts",
        dashboardPath: "/ielts/dashboard",
        link: "https://www.ets.org/gre",
    },
    {
        name: "gre",
        enTitle: "GRE",
        faTitle: "جی‌آرای",
        description: "",
        scoreRange: "260-340",
        exams: "تی‌سی، آرسی، کراون، دالائو، پاورپرپ و ...",
        logo: "/images/logos/gre-logo.svg",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-200",
        borderColor: "border-purple-300",
        path: "/gre",
        dashboardPath: "/gre/dashboard",
        link: "https://www.ets.org/gre",
    },
    {
        name: "pte",
        enTitle: "PTE",
        faTitle: "پی‌تی‌ای",
        description: "",
        scoreRange: "10-90",
        exams: "آفیشال گاید، پرکتیس پلاس، پی‌تی‌ای ادونتیج و ...",
        logo: "/images/logos/pte-logo.svg",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-200",
        borderColor: "border-green-300",
        path: "/pte",
        dashboardPath: "/pte/dashboard",
        link: "https://www.pearsonpte.com/",
    },
];
