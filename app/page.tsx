"use client"

import Hero from "@/components/Hero"
import { motion } from "framer-motion"
import { Cpu, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Пионер на компютърните технологии",
    description: "Създател на първия електронен цифров компютър ABC (Atanasoff-Berry Computer)",
  },
  {
    icon: Lightbulb,
    title: "Визионер и иноватор",
    description: "Революционни идеи, които промениха света на изчисленията завинаги",
  },
  {
    icon: Users,
    title: "Вдъхновение за поколения",
    description: "Неговото наследство продължава да вдъхновява млади учени и инженери",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наследството на <span className="text-primary">гения</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Джон Атанасов промени света с иновациите си в областта на компютърните технологии
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-primary/20 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-balance leading-relaxed">
              Компютърът е само инструмент. Истинската сила е в човешкия ум, който го създава и използва.
            </blockquote>
            <p className="text-muted-foreground">— Кирил Калъчев</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
