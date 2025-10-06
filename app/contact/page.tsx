"use client"

import type React from "react"

import { motion } from "framer-motion"
import Timeline from "@/components/Timeline"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="pt-24 pb-16">
      {/* Timeline Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Времева <span className="text-primary glow-cyan">линия</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Проследете ключовите моменти от живота на Джон Атанасов
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                  <MessageSquare className="text-primary" size={32} />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">Свържи се с нас</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Имаш въпроси или искаш да споделиш своята история за иновации?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 md:p-12"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30 border-glow-cyan">
                    <Send className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Благодарим ти!</h3>
                  <p className="text-muted-foreground">
                    Твоето съобщение беше изпратено успешно. Ще се свържем с теб скоро!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Име
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Твоето име"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Имейл
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="твоят@имейл.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Напиши твоето съобщение тук..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all border-glow-cyan"
                  >
                    <Send size={20} />
                    Изпрати съобщение
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Имейл</h3>
                <p className="text-muted-foreground">info@atanasov-day.bg</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Социални мрежи</h3>
                <p className="text-muted-foreground">Последвай ни за новини и вдъхновение</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
