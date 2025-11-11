'use client'
import { motion } from "framer-motion";
import { Clock, Award, BookOpen, BarChart, Brain, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "آزمون سریع",
    description: "تنها در ۱۰ دقیقه سطح زبان انگلیسی خود را مشخص کنید",
    delay: 0.1,
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "استاندارد جهانی",
    description: "طراحی شده بر اساس استاندارد CEFR برای تعیین دقیق سطح زبان",
    delay: 0.2,
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "پوشش کامل",
    description: "ارزیابی مهارت‌های گرامر، واژگان و درک مطلب در یک آزمون جامع",
    delay: 0.3,
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "نتایج دقیق",
    description: "دریافت نتیجه دقیق و تحلیل جزئیات عملکرد شما در هر بخش",
    delay: 0.4,
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "هوش مصنوعی",
    description: "استفاده از الگوریتم‌های پیشرفته برای ارزیابی دقیق‌تر سطح زبان",
    delay: 0.5,
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "توصیه‌های شخصی",
    description: "دریافت پیشنهادات شخصی‌سازی شده برای بهبود مهارت‌های زبانی",
    delay: 0.6,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/30 dark:!bg-transparent">
      <div className="!w-full px-[20px]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">ویژگی‌های آزمون ما</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            آزمون تعیین سطح زبان انگلیسی ما با ویژگی‌های منحصر به فرد، دقیق‌ترین ارزیابی را از سطح زبان شما ارائه می‌دهد
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="dark:bg-transparent bg-background rounded-lg p-6 shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl dark:text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 