"use client";
import React, { useEffect, useState, useRef, createRef } from "react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  // Share2,
  // RefreshCw,
  // Trophy,
  // BookOpen,
  // Award,
  Home,
  // Download,
  ArrowUpRight,
  CheckCircle,
  // Scale3D,
} from "lucide-react";
import Link from "next/link";

// import { questions } from "@/lib/questions";
// import { exmaLevel as levels } from "@/app/(homes)/rtl/consts";
import { QuestionOptions } from "@/Models/Models/Models/Exams/QuestionOptions";
// import { useContextElement } from ";

import { QuestionTrueFalseOptionResponse, Response } from "@/Models/Models/Models/Customer/Response";
import { QuestionTrueFalseOption } from "@/Models/Models/Models/Exams/Question";
import dynamic from "next/dynamic";
import { getUserContext } from "@/context/userContext";
import { exmaLevel as levels } from "@/utils/consts";
const Report = dynamic(() => import("../../../../components/ui/Report"), {
  ssr: false
});

export default function ResultPage() {

  const router = useRouter();
  const { examUser, setExamUser, englishResult, setEnglishResult, levelQuestions } = getUserContext();
  const [level, setLevel] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<string>("");
  const certificateRef = useRef<HTMLDivElement>(null);
  const [examData, setExamData] = useState({
    score: 0,
    questions: 0,
  });

  const calculateScore = () => {
    let score = 0;
    for (const [_, option] of englishResult) {
      score += (option as Response).score;
    }
    return {
      score,
      questions: Array.from((englishResult as Map<number, QuestionOptions>).keys()).length
    };
  };

  useEffect(() => {
    const result = calculateScore()
    setExamData(result);
    determineLevel(result.score);

    launchConfetti();
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const launchConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const determineLevel = (score: number) => {
    const level = levels.findLastIndex((item) => item.scoreRange <= score);
    setLevel(level);
  };

  const convertIndexToAlpha = (index: number, UpperCase?: boolean) => {
    if (UpperCase)
      return (index + 9).toString(36).toUpperCase();
    else
      return (index + 9).toString(36);
  }

  const checkAnswerFromResponses = (question: QuestionTrueFalseOption) => {
    const questionId = question.id;
    const currentResponse = (englishResult)
      .get(questionId);
    return currentResponse ? convertIndexToAlpha(question.questionOptions.findIndex(opt => opt.id == currentResponse.answer[0]) + 1, true) : '-'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-transparent flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="text-xl text-primary animate-pulse">
            در حال محاسبه نتیجه آزمون...
          </div>
          <p className="text-muted-foreground">لطفاً منتظر بمانید</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen py-8 !pt-2 px-[4px] flex justify-center">
        <div className="w-full ">
          <div className="w-full">
            <div className="flex text-left !justify-end mb-2">
              <Link
                href="/placement"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                <span className="hidden dark:text-white sm:inline">بازگشت به صفحه اصلی</span>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 !bg-transparent"
            >
              <Card style={{ background: 'transparent' }} className="backdrop-blur-sm dakr:!bg-transparent  border-primary/10 overflow-hidden">
                <CardHeader className="!pt-[0.2rem] !px-[0.2rem]">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 ">
                    <div className="text-center sm:text-right">
                      {userName && (
                        <CardDescription className="mt-2 text-base">
                          <span className="dark:text-white font-medium text-foreground">
                            {userName}
                          </span>{" "}
                          عزیز، نتیجه آزمون شما به شرح زیر است:
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Report examUser={{ ...examData, ...examUser }} level={levels[level]} score={examData.score} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 dark:bg-transparent !pt-[0]">
                  <motion.div

                    ref={certificateRef}
                    className="flex flex-col sm:flex-row px-[1rem] justify-between gap-8 rounded-xl border border-border/50 "
                  >
                    <div className="dark:text-white justify-center flex flex-col sm:text-right py-[0.2rem]"
                      style={{ height: 'auto' }}>
                      <div
                        className={`text-4xl sm:text-3xl font-bold ${levels[level].color}`}
                      >
                        {levels[level].cefrLevel}
                      </div>
                      <div className="text-lg sm:text-xl font-medium mb-2">
                        {levels[level].description}
                      </div>
                      <div className="text-sm dark:text-gray-400 sm:text-base text-muted-foreground mt-3 max-w-md leading-relaxed">
                        {levels[level].details}
                      </div>
                    </div>
                    <div className="flex justify-center px-[3px] md:text-nowrap text-wrap  items-center border-x-[1px] flex-auto border-[#DFDFDF]"
                      style={{ height: 'auto' }}>
                      <div className="flex md:flex-row flex-col h-fit w-fit">
                        <b className="text-[25px] dark:text-white ml-[4px]">
                          سطح {' '}
                          <span className="text-[#2FA79D]">
                            تافل
                          </span>
                          :
                          {' '}
                          <span className="text-[#2FA79D]">
                            {levels[level].toeflScore}
                          </span>
                        </b>
                        &nbsp;
                        <b className="text-[25px] dark:text-white mr-[4px]">
                          سطح{' '}
                          <span dir="rtl" className="text-[#BE123C]">
                            آیلتس
                          </span>

                          :
                          <span dir="rtl" className="text-[#BE123C]">
                            {levels[level].ieltsScore}
                          </span>
                        </b>
                        &nbsp;
                        <b dir="auto" className="text-[25px] dark:text-white mr-[4px]">
                          سطح
                          {' '}
                          <span className="text-[#2f31a7]">
                            پی تی ای
                          </span>
                          :
                          {' '}
                          <span className="text-[#2f31a7]">
                            {levels[level].pteScore}
                          </span>
                        </b>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center order-1 sm:order-2 ml-[2rem] py-[0.2rem]">
                      <div
                        className={`w-24 h-24 dark:text-white rounded-full flex items-center justify-center ${levels[level].bgColor} ${levels[level].borderColor} border-4 `}
                      >
                        <div className="text-5xl font-bold">
                          {examData.score}
                          <span className="text-2xl">/{levelQuestions.length || 35}</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Card
                        className={`h-full border ${levels[level].borderColor} dark:bg-transparent transition-all duration-300`}
                      >
                        <CardHeader
                          className={`pb-1  bg-opacity-30`}
                        >
                          <CardTitle className="flex items-center gap-2 text-lg justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_14103_963" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_14103_963)">
                                <path d="M7 21V19H11V15.9C10.1833 15.7167 9.45417 15.3708 8.8125 14.8625C8.17083 14.3542 7.7 13.7167 7.4 12.95C6.15 12.8 5.10417 12.2542 4.2625 11.3125C3.42083 10.3708 3 9.26667 3 8V7C3 6.45 3.19583 5.97917 3.5875 5.5875C3.97917 5.19583 4.45 5 5 5H7V3H17V5H19C19.55 5 20.0208 5.19583 20.4125 5.5875C20.8042 5.97917 21 6.45 21 7V8C21 9.26667 20.5792 10.3708 19.7375 11.3125C18.8958 12.2542 17.85 12.8 16.6 12.95C16.3 13.7167 15.8292 14.3542 15.1875 14.8625C14.5458 15.3708 13.8167 15.7167 13 15.9V19H17V21H7ZM7 10.8V7H5V8C5 8.63333 5.18333 9.20417 5.55 9.7125C5.91667 10.2208 6.4 10.5833 7 10.8ZM12 14C12.8333 14 13.5417 13.7083 14.125 13.125C14.7083 12.5417 15 11.8333 15 11V5H9V11C9 11.8333 9.29167 12.5417 9.875 13.125C10.4583 13.7083 11.1667 14 12 14ZM17 10.8C17.6 10.5833 18.0833 10.2208 18.45 9.7125C18.8167 9.20417 19 8.63333 19 8V7H17V10.8Z" fill="#1C1B1F" />
                              </g>
                            </svg>
                            <span className='dark:text-white'>توانایی ها و انتظارات</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-1">
                          <ul className="space-y-4">
                            {levels[level].achievements.map((achievement, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex items-center gap-3 green-gradient p-[0.4rem] rounded-lg border border-border/30"
                              >
                                <div className="mt-0.5 p-1 rounded-full bg-green-500/10 text-green-500">
                                  <CheckCircle className="h-4 w-4" />
                                </div>
                                <span className="dark:text-white font-medium">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <Card className="h-full dark:bg-transparent border border-primary/10 dark:border-white transition-all duration-300">
                        <CardHeader className="pb-1">
                          <CardTitle className="flex items-center gap-2 text-lg justify-center text-center">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_14103_1006" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.046875" width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_14103_1006)">
                                <path d="M12.0469 20C11.2469 19.3667 10.3802 18.875 9.44688 18.525C8.51354 18.175 7.54688 18 6.54688 18C5.84688 18 5.15938 18.0917 4.48438 18.275C3.80938 18.4583 3.16354 18.7167 2.54688 19.05C2.19687 19.2333 1.85938 19.225 1.53438 19.025C1.20937 18.825 1.04688 18.5333 1.04688 18.15V6.1C1.04688 5.91667 1.09271 5.74167 1.18438 5.575C1.27604 5.40833 1.41354 5.28333 1.59688 5.2C2.36354 4.8 3.16354 4.5 3.99688 4.3C4.83021 4.1 5.68021 4 6.54688 4C7.51354 4 8.45938 4.125 9.38438 4.375C10.3094 4.625 11.1969 5 12.0469 5.5V17.6C12.8969 17.0667 13.7885 16.6667 14.7219 16.4C15.6552 16.1333 16.5969 16 17.5469 16C18.1469 16 18.7344 16.05 19.3094 16.15C19.8844 16.25 20.4635 16.4 21.0469 16.6V4.6C21.2969 4.68333 21.5427 4.77083 21.7844 4.8625C22.026 4.95417 22.2635 5.06667 22.4969 5.2C22.6802 5.28333 22.8177 5.40833 22.9094 5.575C23.001 5.74167 23.0469 5.91667 23.0469 6.1V18.15C23.0469 18.5333 22.8844 18.825 22.5594 19.025C22.2344 19.225 21.8969 19.2333 21.5469 19.05C20.9302 18.7167 20.2844 18.4583 19.6094 18.275C18.9344 18.0917 18.2469 18 17.5469 18C16.5469 18 15.5802 18.175 14.6469 18.525C13.7135 18.875 12.8469 19.3667 12.0469 20ZM14.0469 15V5.5L19.0469 0.5V10.5L14.0469 15ZM10.0469 16.625V6.725C9.49687 6.49167 8.92604 6.3125 8.33437 6.1875C7.74271 6.0625 7.14687 6 6.54688 6C5.93021 6 5.33021 6.05833 4.74688 6.175C4.16354 6.29167 3.59687 6.46667 3.04688 6.7V16.625C3.63021 16.4083 4.20937 16.25 4.78437 16.15C5.35938 16.05 5.94688 16 6.54688 16C7.14687 16 7.73438 16.05 8.30938 16.15C8.88438 16.25 9.46354 16.4083 10.0469 16.625Z" fill="#1C1B1F" />
                              </g>
                            </svg>

                            <span className="dark:text-white">توصیه‌های یادگیری</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-1">
                          <ul className="space-y-4">
                            {levels[level].recommendations.map((recommendation, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-center gap-3 purple-gradient p-[0.4rem] rounded-lg border border-border/30"
                              >
                                <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary">
                                  <ArrowUpRight className="h-4 w-4" />
                                </div>
                                <span className="font-medium dark:text-white">
                                  {recommendation}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-0"
                  >
                    <Button
                      onClick={() => router.push("/placement")}
                      variant="outline"
                      className="gap-2 h-12 cursor-pointer border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <Home className="h-4 w-4 ml-1" />
                      <span >بازگشت به صفحه اصلی</span>
                    </Button>
                    <Button
                      onClick={() => router.push("/placement/exam")}
                      className="gap-2 h-12 dark:border-white text-black dark:hover:bg-white dark:border-1 cursor-pointer bg-primary/90 hover:bg-primary"
                    >
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_14103_1055" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                          <rect x="0.148438" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_14103_1055)">
                          <path d="M12.1484 22C10.7651 22 9.4651 21.7375 8.24844 21.2125C7.03177 20.6875 5.97344 19.9708 5.07344 19.0625C4.17344 18.1542 3.46094 17.0917 2.93594 15.875C2.41094 14.6583 2.14844 13.3667 2.14844 12C2.14844 9.38332 3.0151 7.13332 4.74844 5.24999C6.48177 3.36665 8.6151 2.29999 11.1484 2.04999V5.04999C9.43177 5.28332 8.0026 6.05415 6.86094 7.36249C5.71927 8.67082 5.14844 10.2167 5.14844 12C5.14844 13.9333 5.83177 15.5833 7.19844 16.95C8.5651 18.3167 10.2151 19 12.1484 19C13.2484 19 14.2776 18.7667 15.2359 18.3C16.1943 17.8333 16.9984 17.2 17.6484 16.4L20.2484 17.9C19.3484 19.15 18.1901 20.1458 16.7734 20.8875C15.3568 21.6292 13.8151 22 12.1484 22ZM11.1484 16V13H8.14844V11H11.1484V7.99999H13.1484V11H16.1484V13H13.1484V16H11.1484ZM21.2984 16.05L18.6984 14.55C18.8484 14.15 18.9609 13.7375 19.0359 13.3125C19.1109 12.8875 19.1484 12.45 19.1484 12C19.1484 10.2167 18.5776 8.67082 17.4359 7.36249C16.2943 6.05415 14.8651 5.28332 13.1484 5.04999V2.04999C15.6818 2.29999 17.8151 3.36665 19.5484 5.24999C21.2818 7.13332 22.1484 9.38332 22.1484 12C22.1484 12.7333 22.0818 13.4417 21.9484 14.125C21.8151 14.8083 21.5984 15.45 21.2984 16.05Z" fill="white" />
                        </g>
                      </svg>

                      <span className="dark:text-white ">آزمون مجدد</span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Card style={{background:'transparent'}} className="border-primary/10  bg-card/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="dark:text-white text-xl font-bold text-center sm:text-right">
                      آزمون‌های تخصصی دیگر
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300 text-center sm:text-right my-2">
                      برای تعیین سطح دقیق‌تر و آمادگی برای آزمون‌های بین‌المللی،
                      آزمون‌های تخصصی زیر را امتحان کنید
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Card className="border-blue-500/20 hover:border-blue-500/40 bg-blue-50/30 dark:bg-blue-900/10 transition-all duration-300 overflow-hidden group">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2 text-[#BE123C] dark:text-[#ef2a5b]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M12 20h9"></path>
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                            آزمون تعیین سطح آیلتس
                          </CardTitle>
                          <CardDescription className="text-[#BE123CB2] dark:text-[#ff2e63b2]">
                            سنجش مهارت‌های زبانی برای تحصیل و مهاجرت
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2 pb-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#BE123C]"></div>
                              <span className="dark:text-white">ارزیابی دقیق مهارت‌های چهارگانه</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#BE123C]"></div>
                              <span className="dark:text-white">آشنایی با فرمت آزمون آیلتس</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            onClick={() => window.location.href = 'https://testhelper.com/ielts/dashboard'}
                            href={'/ielts/dashboard'}
                            className="w-full text-white bg-[#BE123C] hover:bg-[#a12639] group-hover:translate-y-[-2px] transition-all">
                            شروع آزمون آیلتس
                            <ArrowUpRight className="h-4 w-4 mr-2" />
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="border-amber-500/20 hover:border-amber-500/40 bg-amber-50/30 dark:bg-amber-900/10 transition-all duration-300 overflow-hidden group">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2 text-[#004741]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            آزمون تعیین سطح تافل
                          </CardTitle>
                          <CardDescription className="text-black dark:text-[#2FA79D]">
                            استاندارد آمریکایی سنجش زبان انگلیسی
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2 pb-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2FA79D]"></div>
                              <span  className="dark:text-white">تمرکز بر مهارت‌های آکادمیک</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2FA79D]"></div>
                              <span  className="dark:text-white">آشنایی با سوالات چندگزینه‌ای تافل</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button

                            onClick={() => window.location.href = 'https://testhelper.com/toefl/dashboard'}
                            className="w-full  bg-[#2FA79D] hover:bg-[#237f77] group-hover:translate-y-[-2px] transition-all">
                            شروع آزمون تافل
                            <ArrowUpRight className="h-4 w-4 mr-2" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
