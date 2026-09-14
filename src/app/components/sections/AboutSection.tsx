"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  UserRound,
  Building2,
} from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Globe2,
    title: "Weak Digital Presence",
    description:
      "Businesses often struggle with outdated websites, disconnected digital experiences, and technology that does not represent their real value.",
    solution:
      "STACKRA creates modern digital platforms designed to improve visibility, usability, credibility, and customer experience.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Disconnected Business Operations",
    description:
      "Managing customers, sales, finance, projects, employees, and business information across different tools creates unnecessary complexity.",
    solution:
      "STACKRA designs connected software systems that bring important business operations into one structured environment.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Manual & Repetitive Work",
    description:
      "Repeated data entry, manual processes, paperwork, and routine tasks consume valuable time and increase the possibility of errors.",
    solution:
      "We use automation and AI where they can create meaningful improvements in everyday business workflows.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Technology That Cannot Scale",
    description:
      "A solution that works for a small operation may become difficult to maintain as customers, data, employees, and requirements increase.",
    solution:
      "STACKRA focuses on scalable architecture and flexible systems that can evolve alongside the organization.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Business applications and platforms designed around your specific workflows, requirements, and goals.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Practical AI-powered applications for automation, assistance, analysis, and smarter business operations.",
  },
  {
    icon: Layers3,
    title: "Digital Products",
    description:
      "Modern SaaS platforms, web applications, management systems, and digital products built for real-world use.",
  },
];

const founderHighlights = [
  "Full-stack web development",
  "Next.js & MERN applications",
  "AI-powered application development",
  "Custom software architecture",
  "Cloud deployment & modern web technologies",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-[-12rem] top-[15%] h-[28rem] w-[28rem] rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute bottom-[-15rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-indigo-100/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <motion.div
              variants={itemVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-bold tracking-[0.28em] text-blue-600">
                ABOUT STACKRA TECHNOLOGIES
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Building Technology
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                That Solves Real Problems.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={itemVariants}>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              STACKRA TECHNOLOGIES builds modern software, AI-powered
              solutions, and digital platforms that help businesses simplify
              operations, improve customer experiences, and move forward with
              technology.
            </p>
          </motion.div>
        </motion.div>

        {/* =======================================================
            STORY + ESTABLISHMENT
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="mt-20 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]"
        >
          {/* STORY */}

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100/50 sm:p-10"
          >
            <div className="absolute right-[-5rem] top-[-5rem] h-40 w-40 rounded-full bg-blue-100/50 blur-2xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Building2 size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Our Story
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950">
                    Technology With Purpose
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                <p>
                  STACKRA TECHNOLOGIES was created with a simple idea:
                  technology should not make business more complicated.
                  It should make businesses more capable.
                </p>

                <p>
                  We focus on understanding the problem first and then
                  selecting the right technology, architecture, automation,
                  and digital strategy to solve it.
                </p>

                <p>
                  Our direction includes custom software, web applications,
                  AI solutions, SaaS platforms, business management systems,
                  CRM, ERP, education technology, e-commerce, and other
                  digital solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ESTABLISHMENT CARD */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10"
          >
            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-5rem] top-[-5rem] h-52 w-52 rounded-full bg-blue-600/30 blur-3xl"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Rocket size={22} className="text-cyan-300" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Established
                </p>

                <p className="mt-4 text-6xl font-black tracking-[-0.05em]">
                  2026
                </p>

                <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
                  Founded in Hyderabad with a focus on building practical
                  software and intelligent digital solutions.
                </p>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Founded by
                </p>

                <p className="mt-2 text-lg font-bold">
                  Mohammed Khan
                </p>

                <p className="text-sm text-slate-400">
                  Founder & Software Engineer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            FOUNDER
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Leadership
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Meet the Founder Behind STACKRA
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              A technology-focused approach combining software engineering,
              product thinking, AI, and modern web technologies.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
          >
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

              {/* FOUNDER IDENTITY */}

              <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />

                  <div className="absolute bottom-[-5rem] left-[-5rem] h-56 w-56 rounded-full bg-blue-600/30 blur-3xl" />
                  <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
                    <UserRound size={34} className="text-cyan-300" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Founder
                  </p>

                  <h4 className="mt-3 text-3xl font-black tracking-[-0.03em]">
                    Mohammed Khan
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Founder & Software Engineer
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                    <BadgeCheck size={15} className="text-cyan-300" />
                    STACKRA TECHNOLOGIES
                  </div>
                </div>
              </div>

              {/* FOUNDER DETAILS */}

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <BrainCircuit size={22} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-950">
                      Engineering With a Business Perspective
                    </h4>

                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">
                      Mohammed Khan leads STACKRA TECHNOLOGIES with a focus on
                      building useful, scalable, and modern digital systems.
                      The approach combines software engineering with an
                      understanding of real business workflows and customer
                      needs.
                    </p>
                  </div>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {founderHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.45,
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-blue-600"
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9">
                  <a
                    href="https://www.mohammedkhan.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    View Founder Portfolio
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            PROBLEMS WE SOLVE
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-28"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Business Challenges
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              We Don't Just Build Software.
              <br />
              <span className="text-slate-400">
                We Solve Business Problems.
              </span>
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every project begins with understanding what is slowing the
              business down. Technology is then used as a tool to create a
              practical solution.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <motion.div
                  key={problem.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-200/70 sm:p-8"
                >
                  <div className="absolute right-[-3rem] top-[-3rem] h-28 w-28 rounded-full bg-blue-50 transition-transform duration-700 group-hover:scale-[2.5]" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-colors duration-300 group-hover:bg-blue-600">
                        <Icon size={21} />
                      </div>

                      <span className="text-4xl font-black tracking-[-0.06em] text-slate-100 transition-colors duration-300 group-hover:text-blue-100">
                        {problem.number}
                      </span>
                    </div>

                    <h4 className="mt-7 text-xl font-bold text-slate-950">
                      {problem.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {problem.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <div className="flex gap-3">
                        <div className="mt-1">
                          <CheckCircle2
                            size={17}
                            className="text-blue-600"
                          />
                        </div>

                        <p className="text-sm font-medium leading-7 text-slate-700">
                          {problem.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =======================================================
            WHAT WE BUILD
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* LEFT */}

            <motion.div variants={itemVariants}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                What We Build
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Technology Designed
                <br />
                <span className="text-slate-400">
                  Around Your Business.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                From a high-performance business website to an AI-powered
                business platform, STACKRA can design and develop technology
                around the way your organization actually works.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
              >
                Explore Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* RIGHT */}

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    variants={itemVariants}
                    whileHover={{ y: -7 }}
                    className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <h4 className="mt-6 text-lg font-bold text-slate-950">
                      {capability.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {capability.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            TECHNOLOGY PRINCIPLE STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-[1px] shadow-2xl shadow-blue-200/40"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-8 sm:px-10">
            <motion.div
              animate={{
                x: ["-20%", "120%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Our Technology Philosophy
                </p>

                <h4 className="mt-2 text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
                  Build. Automate. Grow.
                </h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Business First",
                  "Modern Engineering",
                  "Scalable Thinking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-cyan-300"
                    />

                    <span className="text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ShieldCheck size={25} />
            </div>

            <h3 className="mt-6 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              Have a Business Problem?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Let's turn your business challenge into a practical technology
              solution built around your goals.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-600/20"
              >
                Start Your Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}