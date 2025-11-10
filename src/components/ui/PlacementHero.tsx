'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
// import StartImg from '../public/lassets/images/placement-start.png'
import {
    Sparkles,
    CheckCircle,
    Globe,
    Award,
    BookOpen,
    Clock,
} from "lucide-react";
import Image from 'next/image';
import { Badge } from './Badge';
import { Button } from '../base/buttons/button';
import Link from 'next/link';

export default function PlacementHero() {

    const [isVisible, setIsVisible] = useState(false);

    // const { setExamUser, user } = useContextElement();

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center py-16 !pb-3 overflow-hidden"
            dir="rtl"
        >
            {/* Enhanced Background Elements with better dark/light mode support */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Gradient Background with improved colors */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>

                {/* Animated Gradient Orbs with better colors for dark/light modes */}
                <motion.div
                    className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 dark:from-primary/10 dark:to-secondary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute -bottom-[20%] -right-[10%] w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-secondary/15 to-primary/15 dark:from-secondary/10 dark:to-primary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1,
                    }}
                />

                {/* Enhanced Particles with better colors */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full ${i % 3 === 0
                                ? "bg-primary/30 dark:bg-primary/40"
                                : i % 3 === 1
                                    ? "bg-secondary/30 dark:bg-secondary/40"
                                    : "bg-accent/30 dark:bg-accent/40"
                                }`}
                            style={{
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 10 - 5, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, Math.random() * 0.5 + 1, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                {/* Grid Pattern with better opacity for dark mode */}
                <div
                    className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23000000'/%3E%3C/svg%3E\")",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left Content - Hero Text and Image with improved typography */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-right"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="space-y-6 mt-[2em] mb-[1rem]">
                            <div className="inline-block">
                                <Badge
                                    variant="outline"
                                    className="px-4 py-1.5 border-primary/30 bg-primary/5 dark:bg-primary/10 text-primary rounded-full font-medium"
                                >
                                    <span className="flex items-center gap-1.5">
                                        <Globe className="h-3.5 w-3.5 ml-1" />
                                        <span>استاندارد CEFR</span>
                                    </span>
                                </Badge>
                            </div>

                            <h1 className="text-[2.25rem] text-right sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-extrabold leading-tight tracking-tight">
                                <span className="block text-[50px] bg-gradient-to-l from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/60 bg-clip-text text-transparent">
                                    آزمون تعیین سطح
                                </span>
                                <span className="block text-[50px] mt-1 text-secondary-foreground !text-[#6E46FE] font-bold dark:text-secondary-foreground">
                                    زبان انگلیسی
                                    <img data-line-image="underline-vector-purple" className="!visible" alt="" />
                                </span>
                            </h1>

                            <p className=" text-lg md:text-xl text-right text-muted-foreground dark:text-muted-foreground/90 max-w-xl mx-auto lg:mr-0 lg:ml-auto font-normal leading-relaxed">
                                با شرکت در این آزمون استاندارد، سطح زبان انگلیسی خود را بر اساس
                                چارچوب CEFR مشخص کنید و مسیر یادگیری خود را هدفمند کنید.
                            </p>
                        </div>
                        <Link href={'/placement/exam'} className="mt-[10px]">
                            <Button
                                className="self-end !bg-[#6E46FE] w-full h-12 from-primary to-primary/80 hover:from-primary/90 hover:to-primary dark:from-primary/90 dark:to-primary/70 dark:hover:from-primary dark:hover:to-primary/80 group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                                style={{ alignSelf: 'flex-end' }}
                            >
                                <span className=" relative z-10 flex items-center justify-center gap-2 text-base font-medium">
                                    شروع آزمون
                                    <Sparkles className="h-5 w-5 mr-1" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20 dark:bg-white/10"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </Button>
                        </Link>
                        <motion.div
                            className="mt-10 hidden lg:block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: <Clock className="h-5 w-5 text-primary" />,
                                        text: "زمان آزمون: ۲۰ دقیقه",
                                    },
                                    {
                                        icon: <CheckCircle className="h-5 w-5 text-primary" />,
                                        text: "نتایج آنی و دقیق",
                                    },
                                    {
                                        icon: <BookOpen className="h-5 w-5 text-primary" />,
                                        text: "توصیه‌های یادگیری",
                                    },
                                    {
                                        icon: <Award className="h-5 w-5 text-primary" />,
                                        text: "گواهی سطح زبان",
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2.5 text-sm bg-background/50 dark:bg-background/20 p-2 rounded-lg border border-border/10"
                                    >
                                        <div className="p-1.5 rounded-full bg-primary/10 dark:bg-primary/20 ml-1">
                                            {feature.icon}
                                        </div>
                                        <span className="font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 overflow-visible relative self-end flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="p-[10px] absolute top-[-20px] left-[30%]  shadow-lg rotate-45 rounded-[10px] card-icon-wrapper bg-[#FFFFFF] w-fit flex h-fit items-center">
                            <img className={'world-icon w-[40px] h-[40px] !visible object-scale-down -rotate-90'} alt="" />
                        </div>
                        <div className='absolute max-w-[300px] flex my-[15px] top-[150px] right-[-20px] flex-row w-[110%] border-[1px] border-[#EFF2F7] p-[16px] pr-0 gap-[10px] rounded-[10px]'
                            style={{ backdropFilter: 'blur(50px)' }}
                        >

                            <div className="flex flex-col items-end flex-1 gap-[10px] justify-between">
                                <div className="w-[80%] bg-[#DBE5FA] h-[10px] rounded-[70px]"></div>
                                <div className="w-[50%] bg-[#DBE5FA] h-[5px] rounded-[70px] relative"></div>
                                <div className="w-[40%] bg-[#DBE5FA] h-[10px] rounded-[70px] relative">
                                    <div className="w-[50%] bg-[#6E46FE] absolute left-0 h-full rounded-[70px]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center box-shadow px-[19px] py-[16px] justify-center text-white max-w-[250px] w-fit rounded-[11px] bg-[#6E46FE] white-shadow">
                                <img className="dictionary-icon object-scale-down w-[40px] h-[33px]" alt="" />
                            </div>
                        </div>
                        <div className='absolute max-w-[400px] flex my-[15px] bottom-[20px] left-0 flex-row w-[110%] border-[1px] border-[#EFF2F7] bg-white p-[16px] pr-0 gap-[10px] rounded-[10px] '
                        >

                            <div className="flex flex-col items-end flex-1 gap-[10px] justify-between">
                                <div className="w-[80%] bg-[#DBE5FA] h-[10px] rounded-[70px]"></div>
                                <div className="w-[50%] bg-[#DBE5FA] h-[5px] rounded-[70px] relative"></div>
                                <div className="w-[40%] bg-[#DBE5FA] h-[10px] rounded-[70px] relative">
                                    <div className="w-[50%] bg-[#6E46FE] absolute left-0 h-full rounded-[70px]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col shadow-lg items-center box-shadow px-[19px] py-[16px] justify-center text-white max-w-[250px] w-fit rounded-[11px] bg-white white-shadow">
                                <img className="globe_book-icon object-scale-down w-[40px] h-[33px]" alt="" />
                            </div>
                        </div>
                        <Image
                            alt="hi"
                            src={'/images/placement-start.png'}
                            width={400}
                            height={700}
                        />
                    </motion.div>
                </div>
            </div>
        </section>

    )
}
