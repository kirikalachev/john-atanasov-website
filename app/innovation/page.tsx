"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Brain, Code } from "lucide-react"

const quotes = [
  {
    text: "Науката е начин на мислене много повече, отколкото е набор от знания.",
    author: "Карл Сейгън",
  },
  {
    text: "Най-добрият начин да предвидиш бъдещето е да го създадеш.",
    author: "Алън Кей",
  },
  {
    text: "Иновацията отличава лидера от последователя.",
    author: "Стив Джобс",
  },
]

const futureAreas = [
  {
    icon: Brain,
    title: "Изкуствен интелект",
    description: "Машинното обучение и AI революционизират начина, по който решаваме проблеми",
    color: "primary",
  },
  {
    icon: Code,
    title: "Квантови компютри",
    description: "Следващото поколение изчислителна мощ, която ще промени света",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Космически технологии",
    description: "Изследването на космоса отваря нови хоризонти за човечеството",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Зелени технологии",
    description: "Устойчиви иновации за опазване на планетата за бъдещите поколения",
    color: "secondary",
  },
]

export default function InnovationPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 border-glow-cyan">
                <Sparkles className="text-primary" size={40} />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Бъдещето на <span className="text-primary glow-cyan">технологиите</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
              От визията на Атанасов до иновациите на утрешния ден
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ролята на <span className="text-secondary">младите</span> в иновациите
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Джон Атанасов беше на 34 години, когато създаде първия електронен компютър. Неговата история ни учи,
                  че възрастта не е бариера пред иновациите - важни са любопитството, упоритостта и смелостта да мислим
                  различно.
                </p>
                <p>
                  Днес младите хора имат безпрецедентен достъп до знания и технологии. Интернетът, отворените
                  образователни ресурси и глобалната свързаност създават перфектната среда за следващото поколение
                  иноватори.
                </p>
                <p className="text-foreground font-semibold">
                  Бъдещето на технологиите се създава днес - от любопитни умове, които не се страхуват да
                  експериментират и да мечтаят смело.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Технологии на бъдещето</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Области, които ще дефинират следващите десетилетия
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {futureAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all h-full">
                  <div
                    className={`w-14 h-14 bg-${area.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <area.icon className={`text-${area.color}`} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Вдъхновяващи думи</h2>
            <p className="text-xl text-muted-foreground">Цитати за науката и иновациите</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="text-4xl text-primary/30 mb-4">"</div>
                <p className="text-lg mb-6 leading-relaxed text-balance">{quote.text}</p>
                <p className="text-sm text-muted-foreground font-semibold">— {quote.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Стани част от <span className="text-primary glow-cyan">бъдещето</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
              Всеки велик иноватор е започнал с любопитство и желание да учи. Какво ще създадеш ти?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all border-glow-cyan"
              >
                Започни да учиш
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary transition-all"
              >
                Създавай проекти
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
