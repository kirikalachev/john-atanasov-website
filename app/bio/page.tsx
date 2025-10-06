"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Award, Cpu, GraduationCap } from "lucide-react"

const milestones = [
  {
    icon: Calendar,
    year: "1903",
    title: "Раждане",
    description: "Роден на 4 октомври в Хамилтън, Ню Йорк, в семейство на български имигранти",
  },
  {
    icon: GraduationCap,
    year: "1925",
    title: "Образование",
    description: "Завършва бакалавърска степен по електроинженерство във Флоридския университет",
  },
  {
    icon: Cpu,
    year: "1939",
    title: "ABC Компютър",
    description: "Създава първия електронен цифров компютър заедно с Клифърд Бери",
  },
  {
    icon: Award,
    year: "1990",
    title: "Признание",
    description: "Получава Националния медал за технологии и иновации от президента на САЩ",
  },
]

export default function BioPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary glow-cyan">Джон Винсент Атанасов</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">Бащата на съвременните компютри</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border border-glow-cyan">
              <Image src="/john-atanasoff-working-on-early-computer-in-1940s-.jpg" alt="Джон Атанасов" fill className="object-cover" />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">Източник: Архив на Университета на Айова</p>
          </motion.div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Ранен живот и образование</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Джон Винсент Атанасов е роден на 4 октомври 1903 година в Хамилтън, Ню Йорк, в семейство на български
                  имигранти. Баща му, Иван Атанасов, е електроинженер, който вдъхновява младия Джон да се интересува от
                  математиката и науката.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  От ранна възраст Атанасов проявява изключителни способности в математиката. Той завършва бакалавърска
                  степен по електроинженерство във Флоридския университет през 1925 година, след което продължава
                  образованието си с магистърска степен по математика в Университета на Айова.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  ABC Компютър - <span className="text-primary">Революцията</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  През 1937 година, докато преподава в Университета на Айова, Атанасов започва работа по революционна
                  идея - създаването на електронна изчислителна машина. Заедно със своя асистент Клифърд Бери, той
                  разработва ABC (Atanasoff-Berry Computer) - първият електронен цифров компютър.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ABC компютърът използва бинарна система, електронни вакуумни лампи и регенеративна памет - концепции,
                  които са в основата на всички съвременни компютри. Машината е завършена през 1942 година и
                  представлява истински пробив в технологията.
                </p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6">
                  <p className="text-primary font-semibold mb-2">Ключови иновации на ABC:</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Използване на бинарна система вместо десетична</li>
                    <li>• Електронни вакуумни лампи за изчисления</li>
                    <li>• Регенеративна капацитивна памет</li>
                    <li>• Разделяне на паметта и изчислителните функции</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Наследство и признание</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Въпреки че приносът на Атанасов не е признат веднага, през 1973 година федерален съд официално
                  признава, че той е изобретателят на електронния цифров компютър. Това решение идва след дълъг патентен
                  спор и окончателно утвърждава мястото на Атанасов в историята на технологиите.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  През 1990 година президентът на САЩ Джордж Буш му връчва Националния медал за технологии и иновации -
                  най-високото признание за технологични постижения в Америка. Днес неговото име е синоним на иновация,
                  упоритост и гениалност.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ключови моменти</h2>
            <p className="text-xl text-muted-foreground">Пътят на един визионер</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/30">
                    <milestone.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1 bg-background border border-border rounded-lg p-6 group-hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary font-mono">{milestone.year}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
