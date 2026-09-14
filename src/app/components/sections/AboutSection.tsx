"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const problems = [
  {
    icon: Globe2,
    title: "Weak Digital Presence",
    description:
      "Many businesses struggle with outdated websites, poor user experience, low visibility, and websites that do not generate meaningful enquiries.",
    solution:
      "We build modern, responsive, SEO-friendly digital experiences designed around business goals.",
  },
  {
    icon: Layers3,
    title: "Disconnected Business Operations",
    description:
      "Businesses often manage customers, sales, invoices, projects, employees, and operations across different tools and spreadsheets.",
    solution:
      "We create centralized business platforms that bring important workflows together in one system.",
  },
  {
    icon: BrainCircuit,
    title: "Manual & Repetitive Work",
    description:
      "Repetitive tasks consume valuable time and make it difficult for teams to focus on customers and growth.",
    solution:
      "We integrate automation and AI where it can improve workflows, productivity, and decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Technology That Cannot Scale",
    description:
      "A solution may work initially but become difficult to maintain when customers, data, and business requirements grow.",
    solution:
      "We focus on modern architecture, secure development, maintainability, and scalable technology.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Business applications and custom software designed around specific workflows and requirements.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI-powered applications, automation, assistants, and intelligent business workflows.",
  },
  {
    icon: Layers3,
    title: "Digital Products",
    description:
      "SaaS platforms, dashboards, portals, CRM, ERP, e-commerce, and industry-focused products.",
  },
];

const founderHighlights = [
  "Full-stack web development",
  "Next.js & MERN applications",
  "AI-powered application development",
  "Custom software architecture",
  "Cloud deployment & modern web technologies",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================================
            SECTION INTRO
        ========================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-700 sm:text-sm">
            <BadgeCheck size={17} />
            ABOUT STACKRA TECHNOLOGIES
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building Technology
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              That Solves Real Problems.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            STACKRA TECHNOLOGIES is a modern software and artificial
            intelligence company focused on helping businesses transform
            ideas, challenges, and manual processes into powerful digital
            solutions.
          </p>

        </div>

        {/* =========================================================
            COMPANY STORY
        ========================================================== */}

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* Story */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Story
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From an idea to a technology company focused on business impact.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

              <p>
                STACKRA TECHNOLOGIES was created with a simple purpose:
                <strong className="text-slate-900">
                  {" "}
                  make modern technology more useful and accessible to
                  businesses.
                </strong>
              </p>

              <p>
                Instead of treating technology as only a website or software
                project, STACKRA focuses on understanding the actual business
                problem first and then designing the right digital solution
                around it.
              </p>

              <p>
                Today, our technology direction includes custom software,
                modern web applications, artificial intelligence, SaaS
                platforms, business management systems, CRM, ERP, education
                technology, e-commerce, and other digital products.
              </p>

            </div>

            {/* Establishment */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400">
                <Rocket size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Founded / Established
                </p>

                <p className="mt-1 font-bold text-slate-950">
                  2026 — Founded by Mohammed Khan
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Building software, AI solutions, and digital products from
                  Hyderabad, India.
                </p>
              </div>

            </div>

          </div>

          {/* Company Identity Card */}
    

        </div>

        {/* =========================================================
            FOUNDER
        ========================================================== */}

        <div className="mt-24">

          <div className="mb-10 max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Founder
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Meet the Founder Behind STACKRA
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              STACKRA TECHNOLOGIES is founded and led by
              <strong className="text-slate-950"> Mohammed Khan</strong>,
              a full-stack software engineer focused on modern web
              technologies, AI-powered applications, and digital products.
            </p>

          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]">

            {/* Founder Identity */}
            <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl">
                  <UserRound size={38} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Founder & Software Engineer
                </p>

                <h4 className="mt-2 text-3xl font-bold">
                  Mohammed Khan
                </h4>

                <p className="mt-4 leading-7 text-slate-400">
                  Founder of STACKRA TECHNOLOGIES with a focus on full-stack
                  development, modern web architecture, AI integration, and
                  business-focused software solutions.
                </p>

                <Link
                  href="https://www.mohammedkhan.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View Founder Portfolio

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>

            </div>

            {/* Founder Expertise */}
            <div className="p-8 sm:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Founder Portfolio
              </p>

              <h4 className="mt-3 text-2xl font-bold text-slate-950">
                Building technology from idea to production.
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                Mohammed's work covers full-stack application development,
                modern web architecture, AI-powered applications, databases,
                APIs, authentication, cloud deployment, and digital products.
              </p>

              <div className="mt-7 space-y-3">

                {founderHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            CUSTOMER PROBLEMS
        ========================================================== */}

        <div className="mt-24">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles size={15} />
              Problems We Solve
            </div>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your business problem comes first.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Technology should solve a real problem, not create another
              complicated system. We start by understanding what is slowing
              your business down.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <div
                  key={problem.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>

                      <h4 className="text-lg font-bold text-slate-950">
                        {problem.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {problem.description}
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl bg-blue-50 p-4">

                    <div className="flex items-start gap-2">

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          STACKRA Solution
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          {problem.solution}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* =========================================================
            WHAT WE BUILD
        ========================================================== */}

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Build
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Technology designed around your business.
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              We don't believe every business needs the same software.
              STACKRA develops solutions based on the customer's actual
              requirements, workflows, users, and growth plans.
            </p>

            <Link
              href="/#services"
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-blue-600"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-cyan-400">
                    <Icon size={23} />
                  </div>

                  <h4 className="mt-6 font-bold text-slate-950">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-center sm:p-12 lg:p-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Let's Build the Future
            </p>

            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Have a business problem?
              <span className="block text-blue-400">
                Let's turn it into a technology solution.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you need a website, custom software, business platform,
              SaaS product, or AI-powered solution, STACKRA TECHNOLOGIES can
              help transform your requirements into a scalable digital
              product.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="https://www.stackratechnologies.com/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="https://www.stackratechnologies.com/#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Solutions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}