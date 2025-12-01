import { uuidv4 } from "@/Models/base";
import { ExamMode, ExamPartSession, QuestionTrueFalseOptionResponse, Response, ResponseCreator } from "@/Models/Models/Models/Customer/Response";
import { ExamPartType } from "@/Models/Models/Models/Exams/ExamPartType";
import { QuestionTrueFalseOption } from "@/Models/Models/Models/Exams/Question";
import { LearnBranch } from "@/types";

export const strapiBaseUrl = "https://strapi-admin.testhelper.com";
export const serverBaseUrl = process.env.NEXT_PUBLIC_API_SERVER || "/toefl-api";
export const defaultMetadata = {
    metadataBase: new URL("https://testhelper.com"),
    title: {
        default: "تست هلپر | آزمون های بین المللی زبان انگلیسی - IELTS, TOEFL, GRE, PTE",
        template: "%s | تست هلپر",
    },
    description: "تست هلپر پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE با آزمون های آزمایشی کامل، منابع معتبر و به روز",
    keywords: [
        "آیلتس",
        "تافل",
        "PTE",
        "GRE",
        "آزمون بین المللی",
        "تست هلپر",
        "Test Helper",
        "آموزش زبان انگلیسی",
        "آزمون آزمایشی",
        "IELTS",
        "TOEFL",
        "English language test",
        "international language exam",
    ],

    authors: [{ name: "تست هلپر" }],
    creator: "تست هلپر",
    publisher: "تست هلپر",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        type: "website",
        locale: "fa_IR",
        url: "https://testhelper.com",
        siteName: "تست هلپر",
        title: "تست هلپر | آزمون های بین المللی زبان انگلیسی - IELTS, TOEFL, GRE, PTE",
        description: "پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE با آزمون های آزمایشی کامل، منابع معتبر و به روز",
        images: [
            {
                url: "/lassets/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "تست هلپر - همیار آزمون های بین المللی",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "تست هلپر | آزمون های بین المللی زبان انگلیسی",
        description: "پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE",
        images: ["/lassets/images/twitter-image.jpg"],
        creator: "@testhelper",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    verification: {
        google: "G-X12ABC3DEF4",
        yandex: "yandex-verification-code",
    },

    alternates: {
        canonical: "https://testhelper.com",
        languages: {
            "fa-IR": "https://testhelper.com",
            "en-US": "https://testhelper.com/en",
        },
    },

    icons: {
        icon: [{ url: "/favicon.ico" }],
        apple: [{ url: "/apple-touch-icon.png" }],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
            },
        ],
    },
    manifest: "/site.webmanifest",
};

export const USER_PUBLIC_FILE_BASE_URL = `${serverBaseUrl}/api/files2/DownloadUserPublicFile/`;

export const downlaoduserPublicFile = (userId: string, url: string,) => {
  return `${downloadPublicUserFile}${userId}/${url}`;
}

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

export interface PublicUserData {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  googleId: string | null;
  score?: number,
  time?: number,
}

export const saveEnglishLevelExams = (rawData: Omit<PublicUserData, 'lastName' | 'googleId'>) => {
  const gid = getCookie('_ga');
  const data: PublicUserData = {
    ...rawData,
    lastName: null
  };
  return fetch(`${serverBaseUrl}/public/addPublicUserData `, {
    method: "POST",
    body: JSON.stringify({
      ...data,
      googleId: gid
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export async function sendResponse(body: QuestionTrueFalseOptionResponse,
  payload: {
    examPartSessionId: string;
  }
): Promise<boolean> {

  const response = (fetch(`${serverBaseUrl}/v1/Examing/saveResponse`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({
      data: {
        ...body.toJson(),
        id: uuidv4(),
        enterDate: new Date(),
        ...payload
      }
    }),
  }
  )).then(res => res.json());
  return true;
}

export async function handleSaveResult(englishResult: Map<number, QuestionTrueFalseOptionResponse>) {
  const partSession = await startExamPartSession({
    examId: 1921,
    ExamPartType: 1,
    Mode: ExamMode.Practice,
  });
  englishResult.values()
    .forEach(item => sendResponse(item, {
      examPartSessionId: partSession.id
    }))
}

export async function startExamPartSession(data: {
  examId: number;
  ExamPartType: ExamPartType;
  Mode: ExamMode;
}): Promise<ExamPartSession> {
  const formData = new FormData();
  formData.append('examId', `${data.examId}`);
  formData.append('ExamPartType', `${data.ExamPartType}`);
  formData.append('Mode', `${data.Mode}`);

  const apiResult = await fetch(`${serverBaseUrl}/v1/Examing/startExamPartSession`, {
    credentials: 'include',
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  }).then(res => res.json());
  // if (apiResult.status == 225)
  //   return undefined;
  return apiResult;
}


export const exmaLevel = [
  {
    scoreRange: 0,
    cefrLevel: "Below A1",
    recommendedPlacement: "Starter/Beginner",
    color: "text-brown-500",
    bgColor: "bg-brown-500/10",
    borderColor: "border-brown-500/20",
    details: "در این سطح، شما با مفاهیم اولیه زبان انگلیسی آشنا هستید.",
    "achievements": [
      "استفاده از عبارات ساده و روزمره برای نیازهای پایه",
      "معرفی خود و دیگران و پاسخ به سؤالات ابتدایی",
      "درک مکالمه ساده در صورت صحبت آرام و واضح",
      "برقراری ارتباط ابتدایی در موقعیت‌های آشن"
    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Basic,Basic English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Elementary,Oxford Word Skills: Basic"
    ],
    toeflScore: 'NA',
    ieltsScore: '2-2.5',
    pteScore: '23-29',
  },
  {
    scoreRange: 3,
    cefrLevel: "A1",
    description: "سطح مبتدی پایه",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    details:
      "در این سطح، شما با مفاهیم اولیه زبان انگلیسی آشنا هستید و می‌توانید جملات ساده را درک کنید.",
    recommendedPlacement: "Beginner",
    "achievements": [
      "استفاده از عبارات ساده و روزمره برای نیازهای پایه",
      "معرفی خود و دیگران و پاسخ به سؤالات ابتدایی",
      "درک مکالمه ساده در صورت صحبت آرام و واضح",
      "برقراری ارتباط ابتدایی در موقعیت‌های آشن"
    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Basic,Basic English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Elementary,Oxford Word Skills: Basic"
    ],
    toeflScore: 'NA',
    ieltsScore: '2-2.5',
    pteScore: '23-29',
  },
  {
    scoreRange: 6,
    cefrLevel: "A2",
    recommendedPlacement: "Elementary",
    description: "سطح مبتدی",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    details:
      "در این سطح، شما می‌توانید ارتباطات ساده روزمره را برقرار کنید و متون ساده را بخوانید.",
    "achievements": [
      "درک جملات و عبارات رایج در حوزه‌های روزمره (خانواده، خرید، شغل، جغرافیا)"
      , " شرکت در مکالمات ساده و روزمره"
      , " بیان اطلاعات ساده درباره خود و محیط اطراف"
      , " توصیف موضوعات ابتدایی به زبان ساده"
      ,],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Basic,Basic English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Elementary,Oxford Word Skills: Basic"
    ],

    toeflScore: 'NA',
    ieltsScore: '3-3.5',
    pteScore: '30-42',
  },
  {
    scoreRange: 12,
    cefrLevel: "B1",
    recommendedPlacement: "Pre-Intermediate",
    description: "سطح متوسط پایه",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    details:
      "در این سطح، شما می‌توانید در موقعیت‌های مختلف ارتباط برقرار کنید و متون با پیچیدگی متوسط را درک کنید.",
    "achievements": [
      " درک نکات اصلی متون درباره موضوعات آشنا (کار، مدرسه، تفریح)"
      , " برقراری ارتباط در سفرهای انگلیسی‌زبان"
      , " توصیف تجربیات، رویاها، اهداف و نظرات شخصی"
      , " تولید متون ساده و مرتبط با علایق فردی"

    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Intermediate,Fundamentals of English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Intermediate,Oxford Word Skills: Intermediate"
    ],
    toeflScore: '14-36',
    ieltsScore: '4-4.5',
    pteScore: '43-50',
  },
  {
    scoreRange: 18,
    cefrLevel: "B1+/B2",
    recommendedPlacement: "Intermediate",
    description: "سطح متوسط",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    details:
      "در این سطح، شما می‌توانید به راحتی با افراد انگلیسی زبان ارتباط برقرار کنید و متون تخصصی را بخوانید.",
    "achievements": [
      " درک نکات اصلی متون درباره موضوعات آشنا (کار، مدرسه، تفریح)"
      , " برقراری ارتباط در سفرهای انگلیسی‌زبان"
      , " توصیف تجربیات، رویاها، اهداف و نظرات شخصی"
      , " تولید متون ساده و مرتبط با علایق فردی"

    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Intermediate,Fundamentals of English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Intermediate,Oxford Word Skills: Intermediate"
    ],
    toeflScore: '37-66',
    ieltsScore: '5-5.5',
    pteScore: '51-64',

  },
  {
    scoreRange: 24,
    cefrLevel: "B2+",
    recommendedPlacement: "Upper Intermediate",
    color: "text-pink-500",
    description: "+سطح متوسط",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    details:
      "در این سطح، شما تسلط بالایی بر زبان انگلیسی دارید و می‌توانید در موقعیت‌های پیچیده ارتباط برقرار کنید.",
    "achievements": [
      " درک ایده‌های اصلی متون پیچیده (عینی و انتزاعی)",
      " شرکت در بحث‌های فنی در حوزه تخصصی",
      " تعامل روان با افراد بومی بدون فشار",
      " بیان دیدگاه‌ها با دلیل در طیف گسترده‌ای از موضوعات",
    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Intermediate,Fundamentals of English Grammar",
      "مطالعه‌ی کتاب‌های لغت English Vocabulary in Use: Intermediate,Oxford Word Skills: Intermediate"
    ],
    toeflScore: '81-90',
    ieltsScore: '6.5',
    pteScore: '65-72',
  },
  {
    scoreRange: 30,
    cefrLevel: "C1",
    recommendedPlacement: "Advanced",
    description: "سطح پیشرفته",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    details:
      "در این سطح، شما تسلط بالایی بر زبان انگلیسی دارید و می‌توانید در موقعیت‌های پیچیده ارتباط برقرار کنید.",
    "achievements": [" درک متون طولانی و پیچیده با مفاهیم ضمنی"
      , " صحبت روان بدون نیاز به جستجوی کلمات"
      , " استفاده انعطاف‌پذیر از زبان در محیط‌های حرفه‌ای، اجتماعی و دانشگاهی"
      , " تولید متن‌های دقیق و ساختارمند درباره موضوعات پیچیده"
    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Advanced,Understanding and Using English Grammar",
      "مطالعه‌ی کتاب‌های لغت Merriam-Webster’s Vocabulary Builder, English Vocabulary in Use: Advanced,Oxford Word Skills: Advanced"
    ],
    toeflScore: '91-114',
    ieltsScore: '7-8',
    pteScore: '73-82',
  },
  {
    scoreRange: 34,
    cefrLevel: "C2",
    recommendedPlacement: "Native",
    description: "سطح پیشرفته عالی",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    details:
      "در این سطح، شما تسلط کامل بر زبان انگلیسی دارید و می‌توانید مانند یک فرد بومی صحبت کنید.",
    "achievements": [
      "درک کامل تقریباً تمام متون شنیداری و نوشتاری",
      " خلاصه‌سازی اطلاعات از منابع مختلف به‌صورت منسجم",
      " بیان روان، دقیق و بدون تلاش",
      " تشخیص تفاوت‌های ظریف معنایی در موقعیت‌های پیچیده",
    ],
    "recommendations": [
      "تمرین مکالمه با انگلیسی زبانان",
      "مطالعه‌ی کتاب‌های گرامر English Grammar in Use Advanced,Understanding and Using English Grammar",
      "مطالعه‌ی کتاب‌های لغت Merriam-Webster’s Vocabulary Builder, English Vocabulary in Use: Advanced,Oxford Word Skills: Advanced"
    ],
    toeflScore: '115-120',
    ieltsScore: '4.5-9',
    pteScore: '83-90',

  },
];

export const handleUrlAttach = (...url: string[]) => {
  const baseurl = 'https://testhelper.com/toefl-api/api/files2/DownloadFile2/';
  return (baseurl + url.join('/')).replaceAll('//', '/');
}


export const sibAppLinks = {
  [LearnBranch.IELTS]: "https://sibapp.com/applications/TestHelperIELTS",
  [LearnBranch.GRE]: "https://sibapp.com/applications/testhelpergre",
  [LearnBranch.TOEFL]: "https://sibapp.com/applications/TestHelper-TOEFL",
  [LearnBranch.None]: 'https://sibapp.com/search/?query=%D8%AA%D8%B3%D8%AA%20%D9%87%D9%84%D9%BE%D8%B1',
}
export const getUserPublicFileUrl = (userId: string, fileName: string) => {
    return `${USER_PUBLIC_FILE_BASE_URL}${userId}/${fileName}`;
};
