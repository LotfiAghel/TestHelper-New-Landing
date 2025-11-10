"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./Button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/Card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Label } from "@/components/ui/Label";
import { motion, AnimatePresence } from "framer-motion";

import {
    Clock,
    AlertTriangle,
    ChevronRight,
    ChevronLeft,
    Home,
    HelpCircle,
    CheckCircle2,
    Info,
} from "lucide-react";
import Link from "next/link";
import {
    QuestionTrueFalseOption,
} from "@/Models/Models/Models/Exams/Question";
// import { useContextElement } from "@/context/Context";
import {
    ExamMode,
    QuestionTrueFalseOptionResponse,
    Response,
} from "@/Models/Models/Models/Customer/Response";
import { QuestionOptions } from "@/Models/Models/Models/Exams/QuestionOptions";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./Form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
// import { saveEnglishLevelExams } from "@/app/(homes)/rtl/consts";
import { getUserContext } from "@/context/userContext";
import { saveEnglishLevelExams, sendResponse, startExamPartSession } from "@/utils/consts";
const formSchema = z.object({
    phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
    fullName: z.string(),
    email: z.string(),
});

export default function ExamClientPage({
    questoins: questions,
}: {
    questoins: QuestionTrueFalseOption[];
}) {

    const { user, } = getUserContext()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            fullName: user?.displayName || "",
            email: user?.email || "",
            phone: user?.phoneNumber || "",
        },
    });
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

    const {
        setEnglishResult,
        englishResult,
        setLevelQuestions,
        setExamUser
    } = getUserContext();

    const [timeLeft, setTimeLeft] = useState(1200);
    const [showWarning, setShowWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showHint, setShowHint] = useState(false);
    const [finishMode, setFinishMode] = useState({
        isActive: false,
        isTimeEnd: false
    });
    useEffect(() => {

        const questionIndex = parseInt(searchParams.get('question'))
        setCurrentQuestion(state =>
            questionIndex ?
                questions[questionIndex - 1] : state);


        let userData = localStorage.getItem("userData");
        if (!userData) {
            const defaultUserData = {
                fullName: "کاربر",
                email: "",
                examType: "تعیین سطح",
            };

            localStorage.setItem("userData", JSON.stringify(defaultUserData));
            userData = JSON.stringify(defaultUserData);
        }
        setLevelQuestions(questions)

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    finishExam(true);
                    return 0;
                }
                if (prev === 120) {
                    // 2 minutes warning
                    setShowWarning(true);
                    setTimeout(() => setShowWarning(false), 5000);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const questionIndex = questions.findIndex(item => currentQuestion.id == item.id);
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('question', `${questionIndex + 1}`);
        router.push(pathname + "?" + urlParams);
    }, [currentQuestion])

    const finishExam = (timeOut?: boolean) => {
        const score = calculateScore();
        localStorage.setItem(
            "examScore",
            JSON.stringify({
                score: score,
                questions: questions.length,
            }),
        );
        setFinishMode({
            isActive: true,
            isTimeEnd: timeOut,
        })
    };
    const seeResult = async () => {
        const values: z.infer<typeof formSchema> = form.getValues();
        saveEnglishLevelExams(values)
        setExamUser(values);
        if (user) {
            const partSession = await startExamPartSession({
                examId: 1921,
                ExamPartType: 1,
                Mode: ExamMode.Practice,
            });
            console.error(partSession)
            englishResult.values()
                .forEach(item => sendResponse(item, {
                    examPartSessionId: partSession.id
                }))

        }

        router.push("/placement/result");
    }

    const calculateScore = () => {
        let score = 0;
        for (const [_, option] of englishResult) {
            score = (option as Response).isCorrect ? score + 1 : score;
        }
        return score
    };

    const handleAnswer = (option: QuestionOptions, question: QuestionTrueFalseOption) => {
        const respones = new QuestionTrueFalseOptionResponse({
            answer: [parseInt(option.id)],
            questionId: question.id,
            id: option.id,
            score: option.isCorrect ? 1 : 0,
        });
        setEnglishResult((state) => {
            (state).set(question.id, respones)
            return new Map([...state])
        });
    };

    const goToNextQuestion = () => {
        const currentQuestionIndex = questions.findIndex(item => item.id == currentQuestion.id);

        if (currentQuestionIndex == questions.length - 1) {
            return finishExam();
        }

        setCurrentQuestion(questions[currentQuestionIndex + 1]);
        setShowHint(false);
    };

    const goToPreviousQuestion = () => {
        const currentQuestionIndex = questions.findIndex(item => item.id == currentQuestion.id);
        if (currentQuestionIndex == 0) return
        setCurrentQuestion(questions[currentQuestionIndex - 1]);
        setShowHint(false);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const getTimeColor = () => {
        if (timeLeft <= 120) return "text-red-500";
        if (timeLeft <= 300) return "text-yellow-500";
        return "text-primary";
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg">در حال بارگذاری آزمون...</p>
                </motion.div>
            </div>
        );
    }

    function findInMap(map, condition) {
        for (const [key, value] of map) {
            if (condition(key, value)) {
                return [key, value];
            }
        }
        return undefined;
    }
    const findIndexOfCurrent = () => questions.findIndex(item => item.id == currentQuestion.id);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.error(form)
    }
    const renderButtons = () => {
        if (finishMode.isActive) {
            return <>
                <Button
                    onClick={form.handleSubmit(seeResult)}
                    className={`flex items-center gap-1 px-4 py-2 h-11 transition-all duration-200 bg-green-600 hover:bg-green-700`}
                >
                    مشاهده نتیجه
                </Button>
                {!finishMode.isTimeEnd && <Button
                    variant="outline"
                    onClick={() => {
                        setFinishMode({
                            isActive: false,
                            isTimeEnd: false,
                        })
                    }}
                    className="flex items-center gap-1 px-4 py-2 h-11 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
                >
                    <span className="sm:inline">بازگشت</span>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                </Button>}
            </>
        }
        return <>
            <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={questions.findIndex(item => item.id == currentQuestion.id) === 0}
                className="flex items-center gap-1 px-4 py-2 h-11 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
            >
                <ChevronRight className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">سوال قبلی</span>
                <span className="inline sm:hidden">قبلی</span>
            </Button>
            <div className="text-sm text-muted-foreground hidden sm:block">    {findIndexOfCurrent() + 1} از {questions.length}</div>
            <Button
                onClick={goToNextQuestion}
                className={`flex items-center gap-1 px-4 py-2 h-11 transition-all duration-200 ${findIndexOfCurrent() === questions.length - 1
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-primary-2 hover:bg-primary/90"
                    }`}
            >
                {findIndexOfCurrent() === questions.length - 1 ? (
                    <>
                        <span className="hidden sm:inline">پایان آزمون</span>
                        <span className="inline sm:hidden">پایان</span>

                        <CheckCircle2 className="h-4 w-4 mr-1" />
                    </>
                ) : (
                    <>
                        <span className="hidden sm:inline">سوال بعدی</span>
                        <span className="inline sm:hidden">بعدی</span>
                        <ChevronLeft className="h-4 w-4 ml-1" />
                    </>
                )}
            </Button>
        </>
    }

    return (
        <>
            <div className="testhelper-placement min-h-screen bg-gradient-to-b from-background to-background/90 flex justify-center">
                <div className="w-full ">
                    <div className="container mx-auto px-4 pb-2 py-1 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                            <Link
                                href="/placement"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Home className="h-5 w-5 mr-2" />
                                <span className="hidden sm:inline">بازگشت به صفحه اصلی</span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex items-center ${getTimeColor()} px-3 py-1.5 rounded-full border border-border shadow-sm`}
                                >
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span className="font-mono font-medium">
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto flex flex-col h-full  w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="mb-1 border-primary/10 shadow-lg overflow-hidden bg-card/95 backdrop-blur-sm">
                                    <div className="bg-primary/5 h-2">
                                        <div
                                            className="h-full bg-primary transition-all duration-300"
                                            style={{
                                                width: `${finishMode.isActive ? '100' : ((findIndexOfCurrent() + 1) / questions.length) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <CardHeader className="pb-2 pt-2">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                            <CardTitle className="text-lg sm:text-2xl text-primary/90 font-bold">
                                                آزمون تعیین سطح زبان انگلیسی
                                            </CardTitle>
                                            <div
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${getTimeColor()} bg-background/80 border border-border/50`}
                                            >

                                                {finishMode.isActive ? '100' : Math.round((findIndexOfCurrent() / questions.length) * 100)}%
                                                تکمیل شده
                                            </div>
                                        </div>
                                        <CardDescription className="mt-2">
                                            {finishMode.isActive ? <></>
                                                : <div className="flex justify-between items-center text-sm">
                                                    <span className="font-medium">
                                                        سوال {findIndexOfCurrent() + 1} از {questions.length}
                                                    </span>
                                                </div>}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className=" flex flex-col flex-auto !bg-transparent"
                                    key={findIndexOfCurrent()}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="mb-2 border-primary/10 shadow-lg bg-card/95 h-fit backdrop-blur-sm">
                                        {finishMode.isActive ?
                                            <>
                                                <CardContent dir="ltr" className="pt-2 pb-2 h-full flex flex-col">
                                                    <div className="text-center mb-6">
                                                        <CardTitle className=" text-primary dark:text-primary/90 mb-2 font-bold !text-[24px] !text-black">
                                                            پر کردن اطلاعات
                                                        </CardTitle>
                                                        <CardDescription className="text-muted-foreground dark:text-muted-foreground/90 text-base">
                                                            لطفاً اطلاعات خود را وارد کنید تا نتیجه را مشاهده کنید
                                                        </CardDescription>
                                                    </div>

                                                    <Form {...form}>
                                                        <form
                                                            className="space-y-4"
                                                        >
                                                            <FormField
                                                                control={form.control}
                                                                name="fullName"
                                                                render={({ field }) => (
                                                                    <FormItem className="text-right">
                                                                        <FormLabel className="text-foreground/90 font-medium">
                                                                            نام و نام خانوادگی
                                                                        </FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                placeholder="مثال: علی محمدی"
                                                                                {...field}
                                                                                className="h-11 bg-background/50 dark:bg-background/30 border-muted/50 dark:border-muted/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-right"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage className="text-sm font-medium" />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="phone"
                                                                render={({ field }) => (
                                                                    <FormItem className="text-right">
                                                                        <FormLabel className="text-foreground/90 font-medium">
                                                                            شماره موبایل
                                                                        </FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                placeholder="09123456789"
                                                                                {...field}
                                                                                className="h-11 bg-background/50 dark:bg-background/30 border-muted/50 dark:border-muted/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-right"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage className="text-sm font-medium" />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="email"
                                                                render={({ field }) => (
                                                                    <FormItem className="text-right">
                                                                        <FormLabel className="text-foreground/90 font-medium">
                                                                            ایمیل
                                                                        </FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                placeholder="example@email.com"
                                                                                type="email"
                                                                                {...field}
                                                                                className="h-11 bg-background/50 dark:bg-background/30 border-muted/50 dark:border-muted/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-right"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage className="text-sm font-medium" />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <br />
                                                        </form>
                                                    </Form>
                                                </CardContent>
                                            </>
                                            : <CardContent dir="ltr" className="pt-2 pb-2 h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h2
                                                        dir="auto"
                                                        className="text-lg font-bold text-gray-800 leading-relaxed break-after-auto whitespace-break-spaces"
                                                    >
                                                        {currentQuestion.questionText}
                                                    </h2>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-white"
                                                        onClick={() => setShowHint(!showHint)}
                                                    >
                                                        <Info color="black" />
                                                    </Button>
                                                </div>

                                                <AnimatePresence>
                                                    {showHint && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="mb-2 bg-muted/50 p-1 rounded-lg text-sm text-muted-foreground border border-border/50"
                                                        >
                                                            <p className="flex items-start gap-2" dir="rtl">
                                                                <span className="text-primary mt-0.5">
                                                                    <HelpCircle className="h-4 w-4" />
                                                                </span>
                                                                <span>
                                                                    راهنمایی: به دقت به تمام گزینه‌ها توجه کنید و
                                                                    بهترین پاسخ را انتخاب کنید.
                                                                </span>
                                                            </p>
                                                            <br />
                                                            <span>
                                                                {currentQuestion.questionDirectionText}
                                                            </span>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                <RadioGroup
                                                    // value={englishResult.get(currentQuestion.id)}
                                                    className="space-y-4 justify-start sm:!justify-around flex lg:flex-col  flex-wrap"
                                                >
                                                    {currentQuestion.questionOptions.map(
                                                        (option, index) => {
                                                            const optionResult = findInMap(englishResult,
                                                                (questionId, item) =>
                                                                    questionId == currentQuestion.id &&
                                                                    item.id ==
                                                                    option.id,
                                                            )
                                                            return (
                                                                <motion.div
                                                                    key={index}
                                                                    value={index}
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        handleAnswer(option, currentQuestion);
                                                                    }}
                                                                    className={`flex items-center space-x-2 h-fit !m-0 space-x-reverse !cursor-pointer p-[0.2rem] rounded-lg border 
                                                        ${optionResult
                                                                            ? "border-primary bg-primary/10 shadow-md"
                                                                            : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
                                                                        } transition-all duration-200`}
                                                                    whileHover={{
                                                                        scale: 1.01,
                                                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                                                    }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    <RadioGroupItem
                                                                        value={index}
                                                                        id={`option-${index}`}
                                                                        className="text-primary"
                                                                        checked={optionResult}
                                                                    />
                                                                    <Label
                                                                        htmlFor={`option-${index}`}
                                                                        className="flex-1 cursor-pointer !mr-[3px] sm:!mr-[5px] py-[0.3rem] sm:!py-[0.7rem] pl-[0.2rem] sm:pl-[0.3rem] font-medium"
                                                                    >
                                                                        {option.content}
                                                                    </Label>

                                                                </motion.div>
                                                            )
                                                        },
                                                    )}
                                                </RadioGroup>
                                            </CardContent>
                                        }
                                    </Card>
                                </motion.div>
                            </AnimatePresence>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex justify-between items-center mt-[1rem]"
                            >
                                {renderButtons()}
                            </motion.div>

                            <AnimatePresence>
                                {showWarning && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-md mx-auto backdrop-blur-sm z-50"
                                    >
                                        <AlertTriangle className="h-5 w-5" />
                                        <span>تنها ۲ دقیقه از زمان آزمون باقی مانده است!</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
