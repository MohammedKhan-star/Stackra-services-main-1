
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Gauge,
  LockKeyhole,
  MessageSquareText,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    number: "01",
    title: "Business-First Thinking",
    description:
      "We start with the business problem, understand the workflow, and then determine the technology required to solve it.",
    points: [
      "Understand your actual requirements",
      "Focus on measurable business needs",
      "Avoid unnecessary complexity",
    ],
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Where It Creates Value",
    description:
      "AI should solve a real problem—not simply be added because it is trending. We focus on practical AI applications.",
    points: [
      "AI-assisted workflows",
      "Intelligent business insights",
      "Automation opportunities",
    ],
  },
  {
    icon: Puzzle,
    number: "03",
    title: "Built Around Your Workflow",
    description:
      "Instead of forcing your business into generic software, we can design systems around your processes and requirements.",
    points: [
      "Custom workflows",
      "Modular architecture",
      "Flexible business logic",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Designed to Grow",
    description:
      "Our solutions are designed with scalability in mind so your technology can evolve alongside your organization.",
    points: [
      "Scalable architecture",
      "Modular systems",
      "Future-ready foundations",
    ],
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Security-Conscious Development",
    description:
      "Security is considered throughout development, from authentication and authorization to API and data protection.",
    points: [
      "Authentication & authorization",
      "Input validation",
      "Secure API practices",
    ],
  },
  {
    icon: UsersRound,
    number: "06",
    title: "Long-Term Technology Partner",
    description:
      "We aim to build relationships beyond project delivery by helping businesses improve and evolve their digital systems.",
    points: [
      "Ongoing improvements",
      "Technical support",
      "Product evolution",
    ],
  },
];

const principles = [
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Simple communication, transparent requirements, and clear project expectations.",
  },
  {
    icon: Code2,
    title: "Modern Engineering",
    description:
      "Modern web technologies and engineering practices chosen according to the solution.",
  },
  {
    icon: Gauge,
    title: "Performance Mindset",
    description:
      "Fast, responsive and maintainable experiences are part of the development process.",
  },
  {
    icon: LockKeyhole,
    title: "Responsible Technology",
    description:
      "Security, privacy and responsible handling of business information remain important considerations.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-stackra"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-8rem] h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#cbd5e1 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-indigo-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            WHY STACKRA
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Technology built around
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We combine business understanding, software engineering and
            practical AI to create digital solutions that are useful today and
            ready to evolve tomorrow.
          </p>
        </motion.div>

        {/* Core statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl"
        >
          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-indigo-300">
                    <BrainCircuit className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">
                    OUR APPROACH
                  </p>
                </div>

                <h3 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Don't start with technology.
                  <span className="block text-slate-400">
                    Start with the problem.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  The right solution is not always the biggest or most
                  complicated one. We focus on understanding your requirements
                  first, then selecting the right combination of software,
                  automation, data and AI.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Understand",
                    "Design",
                    "Build",
                    "Automate",
                    "Improve",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-slate-300"
                    >
                      <span className="text-indigo-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Side visual */}
              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-bold tracking-[0.16em] text-slate-500">
                        STACKRA METHOD
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Problem → Solution
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Business requirements",
                      "Digital architecture",
                      "Software development",
                      "AI & automation",
                      "Launch & improvement",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-xs font-bold text-indigo-300">
                          {index + 1}
                        </span>

                        <span className="text-sm text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reasons */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-bold tracking-[0.2em] text-slate-300">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <ul className="space-y-3">
                    {reason.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Principles */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-600">
              ENGINEERING PRINCIPLES
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Built with purpose, not just technology.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 font-bold text-slate-950">
                    {principle.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-indigo-600">
                <Sparkles className="h-4 w-4" />
                BUILD WITH STACKRA
              </div>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your business deserves technology that fits.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Tell us what you are trying to solve. We'll help you identify
                the right digital approach before development begins.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Talk to STACKRA
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
