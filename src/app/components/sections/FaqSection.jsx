
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What services does STACKRA TECHNOLOGIES provide?",
    answer:
      "STACKRA TECHNOLOGIES provides custom software development, web application development, AI-powered solutions, business management systems, digital transformation solutions, and technology consulting.",
  },
  {
    question: "Can you build custom software for my business?",
    answer:
      "Yes. We analyze your business requirements and build customized software solutions designed around your workflows, operations, customers, and business goals.",
  },
  {
    question: "Do you develop AI-powered applications?",
    answer:
      "Yes. We build intelligent solutions that can use artificial intelligence for automation, data analysis, business assistance, workflow improvement, and smarter decision-making.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "The cost depends on the project requirements, features, complexity, technology, integrations, and development timeline. Contact us with your requirements for a customized project discussion.",
  },
  {
    question: "How long does it take to develop a software project?",
    answer:
      "The development timeline depends on the size and complexity of the project. Smaller applications can take weeks, while larger business platforms may require several months of development.",
  },
  {
    question: "Do you provide website development services?",
    answer:
      "Yes. We build modern, responsive, fast, and professional websites and web applications designed for businesses and organizations.",
  },
  {
    question: "Will I receive support after my software is launched?",
    answer:
      "Yes. We can provide ongoing technical support, maintenance, updates, improvements, and assistance depending on your project's support requirements.",
  },
  {
    question: "How can I start a project with STACKRA TECHNOLOGIES?",
    answer:
      "You can contact us through our website, contact form, email, or WhatsApp. Share your business requirements, and we can discuss the best technology solution for your needs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px]"
        />

        {/* Secondary glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-180px] left-[-120px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Moving light */}
        <motion.div
          animate={{
            x: ["-20%", "120%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-px w-80 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>

            FREQUENTLY ASKED QUESTIONS
          </motion.div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Questions?
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Everything you need to know about working with STACKRA
            TECHNOLOGIES and building your next digital solution.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FAQ AREA
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                >
                  <MessageCircle size={26} />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Still have questions?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Our team is ready to discuss your business requirements and
                  help you find the right technology solution.
                </p>

                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-cyan-300"
                >
                  Contact Our Team
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Mini Information */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["AI", "Intelligent Solutions"],
                ["SaaS", "Scalable Platforms"],
                ["WEB", "Digital Experiences"],
                ["ERP", "Business Systems"],
              ].map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-lg font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              FAQ ACCORDION
          ================================================== */}

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: isOpen ? 0 : -2 }}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-500/40 bg-blue-500/[0.06] shadow-xl shadow-blue-950/20"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.035]"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                      {/* Number */}
                      <span
                        className={`shrink-0 text-sm font-bold transition-colors ${
                          isOpen ? "text-blue-400" : "text-slate-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span className="text-sm font-semibold leading-6 text-white sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                          : "border-white/10 text-slate-400 group-hover:border-white/20"
                      }`}
                    >
                      {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                      >
                        <div className="border-t border-white/5 px-5 pb-6 pt-5 sm:px-6">
                          <div className="flex gap-4">
                            <div className="mt-1 h-5 w-px shrink-0 bg-gradient-to-b from-blue-500 to-cyan-400" />

                            <p className="text-sm leading-7 text-slate-400 sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-slate-900 to-cyan-500/10 p-8 text-center sm:p-12"
        >
          {/* CTA Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={16} />
              Ready to Get Started?
            </div>

            <h3 className="mx-auto max-w-3xl text-2xl font-bold text-white sm:text-4xl">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Powerful Together.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Tell us about your idea, business challenge, or software
              requirements. STACKRA TECHNOLOGIES is ready to help transform
              your vision into a digital solution.
            </p>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40"
            >
              Start Your Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
