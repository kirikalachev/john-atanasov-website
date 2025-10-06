"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const timelineEvents = [
  {
    year: "1903",
    date: "4 Октомври",
    title: "Раждане",
    description: "Джон Винсент Атанасов се ражда в Хамилтън, Ню Йорк",
    color: "primary",
  },
  {
    year: "1925",
    date: "Юни",
    title: "Бакалавърска степен",
    description: "Завършва електроинженерство във Флоридския университет",
    color: "secondary",
  },
  {
    year: "1930",
    date: "Юли",
    title: "Докторска степен",
    description: "Получава PhD по теоретична физика от Университета на Уисконсин",
    color: "primary",
  },
  {
    year: "1937",
    date: "Зима",
    title: "Идеята за ABC",
    description: "Зачева идеята за електронен цифров компютър",
    color: "secondary",
  },
  {
    year: "1939",
    date: "Есен",
    title: "Начало на ABC",
    description: "Започва работа по ABC компютъра с Клифърд Бери",
    color: "primary",
  },
  {
    year: "1942",
    date: "Май",
    title: "Завършване на ABC",
    description: "ABC компютърът е завършен и демонстриран",
    color: "secondary",
  },
  {
    year: "1973",
    date: "19 Октомври",
    title: "Съдебно признание",
    description: "Федерален съд признава Атанасов за изобретател на компютъра",
    color: "primary",
  },
  {
    year: "1990",
    date: "Ноември",
    title: "Национален медал",
    description: "Получава Националния медал за технологии и иновации",
    color: "secondary",
  },
  {
    year: "1995",
    date: "15 Юни",
    title: "Наследство",
    description: "Джон Атанасов почива, оставяйки незабравимо наследство",
    color: "primary",
  },
]

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
              <motion.div
                animate={{
                  scale: activeIndex === index ? 1.5 : 1,
                  boxShadow:
                    activeIndex === index
                      ? `0 0 20px ${event.color === "primary" ? "rgba(0, 217, 255, 0.6)" : "rgba(255, 107, 53, 0.6)"}`
                      : "none",
                }}
                transition={{ duration: 0.3 }}
                className={`w-4 h-4 rounded-full ${event.color === "primary" ? "bg-primary" : "bg-secondary"}`}
              />
            </div>

            {/* Content card */}
            <div
              className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <motion.div
                animate={{
                  scale: activeIndex === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`bg-card border rounded-xl p-6 hover:border-${event.color}/50 transition-all ${
                  activeIndex === index ? `border-${event.color}/50` : "border-border"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-2xl font-bold font-mono text-${event.color}`}>{event.year}</span>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
