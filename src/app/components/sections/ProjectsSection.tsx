"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  ReceiptText,
  ShoppingCart,
  Sparkles,
  UsersRound,
} from "lucide-react";

const projects = [
  {
    category: "STACKRA PRODUCT",
    type: "AI BUSINESS PLATFORM",
    title: "STACKRA AI",
    description:
      "An intelligent business management platform designed to connect customers, sales, finance, projects, operations, analytics, and AI-powered workflows in one ecosystem.",
    image: "/services/stackraai.png",
    icon: Bot,
    status: "In Development",
    technologies: ["AI", "Next.js", "MongoDB"],
    features: [
      "AI Business Assistant",
      "CRM & Customer Management",
      "Sales & Finance",
      "Business Analytics",
    ],
    href: "/#contact",
    featured: true,
  },
  {
    category: "STACKRA PRODUCT",
    type: "BILLING & FINANCE",
    title: "AI Invoice & Billing",
    description:
      "A modern invoicing and billing solution designed to simplify invoice creation, payment tracking, receipts, and financial operations.",
    image: "/services/ai-invoice-billing.png",
    icon: ReceiptText,
    status: "Product",
    technologies: ["Next.js", "MongoDB", "Razorpay"],
    features: [
      "Invoice Generation",
      "Payment Tracking",
      "Digital Receipts",
      "Financial Records",
    ],
    href: "/#contact",
  },
  {
    category: "DIGITAL SOLUTION",
    type: "EDUCATION TECHNOLOGY",
    title: "School Management Platform",
    description:
      "A centralized digital platform for schools to manage students, attendance, fees, academic information, communication, and daily operations.",
    image: "/services/erp.png",
    icon: GraduationCap,
    status: "Solution",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    features: [
      "Student Management",
      "Attendance",
      "Fee Management",
      "Academic Operations",
    ],
    href: "/#contact",
  },
  {
    category: "DIGITAL SOLUTION",
    type: "CUSTOM SOFTWARE",
    title: "Business Management Systems",
    description:
      "Custom software platforms built around the specific workflows, operational requirements, and growth objectives of businesses.",
    image: "/services/CRM.png",
    icon: Building2,
    status: "Custom",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Custom Workflows",
      "Centralized Data",
      "Dashboards",
      "Business Automation",
    ],
    href: "/#contact",
  },
  {
    category: "STACKRA ECOSYSTEM",
    type: "CUSTOMER MANAGEMENT",
    title: "STACKRA CRM",
    description:
      "A customer relationship platform designed to help businesses organize leads, customers, interactions, follow-ups, and sales activity.",
    image: "/services/CRM.png",
    icon: UsersRound,
    status: "Coming Soon",
    technologies: ["Next.js", "MongoDB", "AI"],
    features: [
      "Lead Management",
      "Customer Profiles",
      "Follow-ups",
      "Sales Pipeline",
    ],
    href: "/products",
  },
  
];

const stats = [
  {
    value: "AI",
    label: "Intelligent Solutions",
  },
  {
    value: "SaaS",
    label: "Product Ecosystem",
  },
  {
    value: "Web",
    label: "Digital Platforms",
  },
  {
    value: "Custom",
    label: "Business Software",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

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
            WHAT WE BUILD
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Products, platforms &
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              digital solutions.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Explore the technology ecosystem and digital solutions being
            created by STACKRA TECHNOLOGIES to solve practical business
            problems.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-6 text-center sm:px-8 ${
                index !== stats.length - 1
                  ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 1
                  ? "border-r border-slate-200"
                  : index === 2
                  ? "lg:border-r"
                  : ""
              }`}
            >
              <p className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`grid ${
                    project.featured
                      ? "lg:grid-cols-[1.05fr_0.95fr]"
                      : "lg:grid-cols-1"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-slate-900 ${
                      project.featured ? "min-h-[360px]" : "min-h-[250px]"
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-indigo-300">
                          <Icon className="h-10 w-10" />
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                          {project.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md sm:flex">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {project.status}
                      </span>

                      <span className="text-xs font-semibold text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mt-7">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Key capabilities
                      </p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-500"
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-8">
                      <Link
                        href={project.href}
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-indigo-600"
                      >
                        Explore solution
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-indigo-300">
                <Sparkles className="h-4 w-4" />
                HAVE AN IDEA?
              </div>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's turn your business idea into software.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Whether you need a website, SaaS platform, business
                management system, AI solution, or custom software, start with
                the problem and we'll help define the right technology
                solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
