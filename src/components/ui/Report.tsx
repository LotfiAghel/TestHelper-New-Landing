'use client'
// import { exmaLevel } from '@/app/(homes)/rtl/consts';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import html2PDF from 'jspdf-html2canvas';
import { createPortal } from 'react-dom';
import Loading from '@/components/ui/Loading';
import { exmaLevel } from '@/utils/consts';

const Report = ({ score = 10, examUser, level = exmaLevel[0] }: {
    score: number;
    examUser: {
        date: string,
        score: string,
        level: string,
        fullName: string,
        email: string,
        phone: string,
    };
    level: any;
}) => {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const refObj = useRef(null);
    const studentData: {
        date: string,
        score: string,
        level: string,
        fullName: string,
        email: string,
        phone: string,
    } = {
        date: new Date().toLocaleDateString(),
        score: score,
        level: level,
        ...examUser
    };

    const generatePDF = async () => {
        html2PDF(refObj.current, {
            autoResize: true,
            output:'TestHelper Report'
        })
    };

    return (
        <>
            {isGeneratingPdf && createPortal(<div className='fixed w-full h-full top-0'>
                <div className='relative w-full h-full'>
                    <div className='w-full h-full dark:bg-gray-900 bg-[#ffffff] top-0 flex items-center justify-center'>
                        <Loading />
                    </div>
                </div>
            </div>,
                document.body)}
            {isGeneratingPdf && <ReportComponent score={score} studentData={studentData} refObj={refObj} generatePDF={generatePDF} />}
            <Button
                variant="outline"
                size="sm"
                className="gap-1.5 h-10 px-4 border-primary/20 hover:border-primary/40 hover:bg-primary/5 bg-[#6b52f8] text-white"
                disabled={isGeneratingPdf}
                onClick={() => setIsGeneratingPdf(true)}
            >
                {isGeneratingPdf ? (
                    <>
                        <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-1"></div>
                        <span className="hidden sm:inline">
                            در حال ایجاد...
                        </span>
                        <span className="inline sm:hidden">ایجاد...</span>
                    </>
                ) : (
                    <>
                        <Download className="h-4 w-4" />
                        <span className="  hidden sm:inline">دانلود گواهی</span>
                        <span className=" inline sm:hidden">دانلود</span>
                    </>
                )}
            </Button>
        </>
    );
};

const ReportComponent = ({ refObj, generatePDF, studentData, score }: { score: number, refObj, generatePDF: () => void, studentData }) => {

    useEffect(() => {
        generatePDF();
    }, []);
    const percentage = (score / 35) * 100;
    const progressColor =
        percentage < 30 ? '#ef4444' :
            percentage < 60 ? '#f97316' : '#22c55e';

    console.error(percentage,progressColor)
    return (<div
        ref={refObj}
        dir="auto"
        className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white" >
        <div className="max-w-4xl mx-auto bg-white  rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-2">English Placement Test Result</h1>
                <p className="text-lg text-gray-600">TestHelper</p>
                <div className="w-24 h-1 bg-indigo-300 mx-auto mt-4 rounded-full"></div>
            </header>

            <section className="mb-8 p-6 bg-indigo-50 rounded-lg ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-indigo-200">Student Information</h2>
                <div dir='auto' className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <p><strong className="font-medium">Full Name:</strong> <span id="studentFullName">{studentData.fullName}</span></p>
                        <p><strong className="font-medium">Email:</strong> <span id="studentEmail">{studentData.email}</span></p>
                        <p><strong className="font-medium">Phone:</strong> <span id="studentPhone">{studentData.phone}</span></p>
                    </div>
                    <div>
                        <p><strong className="font-medium">Test Date:</strong> <span id="testDate">{studentData.date}</span></p>
                        <p><strong className="font-medium">Report Date:</strong> <span id="reportDate">{studentData.date}</span></p>
                    </div>
                </div>
            </section>

            <section className="mb-8 p-6 bg-white rounded-lg ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Test Results</h2>
                <div className="mb-4">
                    <p className="text-xl font-bold text-indigo-600 mb-2">
                        Overall Score: <span id="overallScore">{studentData.score}/35</span>
                    </p>
                    <div dir='ltr' className="progress-bar-container h-[15px] rounded-lg w-full bg-gray-300">
                        <div id="scoreProgressBar" className="h-full rounded-lg progress-bar-fill"
                            style={{
                                width: `${percentage}%`,
                                background: progressColor
                            }}>

                        </div>
                    </div>
                </div>
                <p className="text-lg text-gray-700"><strong className="font-medium">Level:</strong> <span id="englishLevel">{studentData.level.cefrLevel}</span></p>
            </section>

            <section className="mb-8 p-6 bg-white rounded-lg ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Recommendations</h2>
                <div className="overflow-x-auto">
                    <table dir='rtl' className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 border-b border-gray-200 text-right">#</th>
                                <th className="py-3 px-6 border-b border-gray-200 text-right">پیشنهاد ها</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {studentData.level.achievements.map((item, index) => <tr key={item} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                                <td className="py-3 px-6">{index + 1}</td>
                                <td className="py-3 px-6">{item}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="p-6 bg-white rounded-lg ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Achievements</h2>
                <div className="overflow-x-auto">
                    <table dir='rtl' className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 border-b border-gray-200 text-right">#</th>
                                <th className="py-3 px-6 border-b border-gray-200 text-right">دستاورد ها</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {studentData.level.recommendations.map((item, index) =>
                                <tr key={item} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                                    <td className="py-3 px-6">{index + 1}</td>
                                    <td className="py-3 px-6">{item}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div >)
}

export default Report;