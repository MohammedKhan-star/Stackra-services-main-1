
"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  Server,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const technologyGroups = [
  {
    icon: Globe2,
    title: "Frontend",
    description:
      "Modern interfaces designed for speed, usability, accessibility and responsive experiences.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Reliable server-side systems and APIs that power business logic and digital platforms.",
    technologies: [
      "Node.js",
      "REST APIs",
      "Next.js APIs",
      "Authentication",
    ],
  },
  {
    icon: Database,
    title: "Data & Database",
    description:
      "Structured data systems designed to support business applications and scalable workflows.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Cloud Database",
      "Data Models",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    description:
      "Practical AI capabilities for assistants, automation, analysis and intelligent business workflows.",
    technologies: [
      "Generative AI",
      "AI Assistants",
      "AI APIs",
      "Automation",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Cloud-based deployment and infrastructure for modern web applications and SaaS products.",
    technologies: [
      "Vercel",
      "Cloud Infrastructure",
      "Environment Variables",
      "Production Deployment",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Security",
    description:
      "Security-conscious engineering practices applied across application, API and data layers.",
    technologies: [
      "Authentication",
      "Authorization",
      "Input Validation",
      "Secure APIs",
    ],
  },
];

const stackHighlights = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Fast-loading and responsive experiences built with modern web architecture.",
  },
  {
    icon: Layers3,
    title: "Scalability",
    description:
      "Modular foundations that can evolve as products, users and business requirements grow.",
  },
  {
    icon: Workflow,
    title: "Integration",
    description:
      "APIs and services that connect business systems, payments, data and automation.",
  },
  {
    icon: Code2,
    title: "Maintainability",
    description:
      "Structured components and reusable systems that make future improvements easier.",
  },
];

export default function TechnologyStackSection() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold tracking-[0.2em] text-indigo-300 backdrop-blur">
            <Code2 className="h-4 w-4" />
            TECHNOLOGY STACK
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The technology behind
            <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              intelligent solutions.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            We choose technologies according to the requirements of each
            product, platform and business problem—not simply because a
            technology is popular.
          </p>
        </motion.div>

        {/* Technology philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <BrainCircuit className="h-5 w-5" />
                </div>

                <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">
                  OUR PHILOSOPHY
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Technology is the engine.
                <span className="block text-slate-500">
                  Business value is the destination.
                </span>
              </h3>
            </div>

            <div className="hidden h-16 w-px bg-white/10 lg:block" />

            <p className="leading-7 text-slate-400">
              From websites and SaaS platforms to AI-powered business systems,
              we combine frontend, backend, databases, APIs, cloud
              infrastructure and intelligent automation into practical
              technology solutions.
            </p>
          </div>
        </motion.div>

        {/* Technology groups */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-7"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-indigo-300 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.2em] text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering highlights */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">
              ENGINEERING PRIORITIES
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Built for more than launch day.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-7 sm:p-10"
        >
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">
              SOLUTION ARCHITECTURE
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              From interface to intelligence.
            </h3>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-3 lg:flex-row lg:justify-center">
            {[
              {
                icon: Globe2,
                label: "Experience",
              },
              {
                icon: Server,
                label: "Application",
              },
              {
                icon: Database,
                label: "Data",
              },
              {
                icon: BrainCircuit,
                label: "AI",
              },
              {
                icon: Cloud,
                label: "Cloud",
              },
            ].map((item, index, array) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex w-full items-center lg:w-auto"
                >
                  <div className="flex w-full min-w-[140px] flex-col items-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="mt-3 text-sm font-semibold text-slate-300">
                      {item.label}
                    </span>
                  </div>

                  {index < array.length - 1 && (
                    <div className="mx-2 hidden text-slate-700 lg:block">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center sm:p-9 lg:flex-row lg:text-left"
        >
          <div>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Sparkles className="h-4 w-4 text-indigo-300" />
              <p className="text-xs font-bold tracking-[0.18em] text-indigo-300">
                BUILD WITH THE RIGHT STACK
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Have a technology requirement?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Let's discuss the problem first and determine the right
              architecture for your product or business.
            </p>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Talk to STACKRA
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
