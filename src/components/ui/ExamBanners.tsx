'use client'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Award, BookOpen, GraduationCap, Languages } from "lucide-react";

const bannerItems = [
  {
    url: "/ielts/",
    title: "آزمون آیلتس",
    description: "آمادگی برای آزمون IELTS با تست‌های استاندارد و تخصصی",
    icon: <Languages className="h-10 w-10 text-primary" />,
    color: "from-blue-500/20 to-blue-600/20",
    textColor: "text-blue-600 dark:text-blue-400",
    delay: 0.1,
  },
  {
    url: "/toefl/",
    title: "آزمون تافل",
    description: "تست‌های تخصصی TOEFL برای آمادگی کامل شما",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    color: "from-green-500/20 to-green-600/20",
    textColor: "text-green-600 dark:text-green-400",
    delay: 0.2,
  },
  {
    title: "تعیین سطح",
    description: "تعیین سطح دقیق زبان انگلیسی شما بر اساس استاندارد CEFR",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    color: "from-purple-500/20 to-purple-600/20",
    textColor: "text-purple-600 dark:text-purple-400",
    delay: 0.3,
  },
  {
    url: "/",
    title: "آزمون‌های بین المللی",
    description: "آمادگی برای انواع آزمون‌های بین‌المللی زبان انگلیسی",
    icon: <Award className="h-10 w-10 text-primary" />,
    color: "from-amber-500/20 to-amber-600/20",
    textColor: "text-amber-600 dark:text-amber-400",
    delay: 0.4,
  },
];

 function ExamBanners() {
  return (
    <section id="exams" className="py-3">
      <div className="!w-full px-[10px]">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">آزمون‌های ما</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مجموعه کاملی از آزمون‌های استاندارد زبان انگلیسی برای تمام سطوح و
            نیازها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bannerItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {item.url ? (
                <a href={item.url}>
                  <Card
                    className={`h-full overflow-hidden border-none shadow-md bg-gradient-to-br ${item.color}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">{item.icon}</div>
                      <h3
                        className={`text-xl font-bold mb-2 ${item.textColor}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card
                  className={`h-full overflow-hidden border-none shadow-md bg-gradient-to-br ${item.color}`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className={`text-xl font-bold mb-2 ${item.textColor}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ExamBanners