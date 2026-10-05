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

    icon: Globe2,

    title: "Weak Digital Presence",

    description:

      "Businesses need a professional digital presence that builds trust, communicates value, and creates opportunities.",

  },

  {

    icon: Layers3,

    title: "Disconnected Business Operations",

    description:

      "Separate tools and manual processes can make business operations difficult to manage and scale.",

  },

  {

    icon: BrainCircuit,

    title: "Manual & Repetitive Work",

    description:

      "Automation and intelligent software can reduce repetitive work and help teams focus on higher-value activities.",

  },

  {

    icon: Rocket,

    title: "Technology That Cannot Scale",

    description:

      "Modern businesses need technology foundations that can grow with customers, teams, products, and operations.",

  },

];



const capabilities = [

  {

    icon: Code2,

    title: "Custom Software",

    description:

      "Business-focused web applications and software designed around your actual workflows.",

    points: [

      "Custom business applications",

      "Admin dashboards",

      "CRM & ERP solutions",

      "Business automation",

    ],

  },

  {

    icon: BrainCircuit,

    title: "AI Solutions",

    description:

      "Practical AI-powered systems designed to improve productivity, automation, and decision-making.",

    points: [

      "AI assistants",

      "AI-powered automation",

      "Intelligent workflows",

      "Business AI solutions",

    ],

  },

  {

    icon: Layers3,

    title: "Digital Products",

    description:

      "Modern digital products built with scalable architecture, intuitive interfaces, and business goals in mind.",

    points: [

      "Web platforms",

      "SaaS products",

      "Customer portals",

      "E-commerce platforms",

    ],

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

    y: 30,

  },

  visible: {

    opacity: 1,

    y: 0,

    transition: {

      duration: 0.6,

      ease: "easeOut" as const,

    },

  },

};



export default function AboutSection() {

  return (

    <section

      id="about"

      className="relative overflow-hidden bg-[#05050d] py-24 text-white sm:py-28 lg:py-36"

    >

      {/* Ambient Royal Glows */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[8%] top-[8%] h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute right-[5%] top-[28%] h-96 w-96 rounded-full bg-purple-700/10 blur-[150px]" />

        <div className="absolute bottom-[8%] left-[35%] h-80 w-80 rounded-full bg-indigo-700/10 blur-[140px]" />

      </div>



      {/* Luxury Grid */}

      <div

        className="pointer-events-none absolute inset-0 opacity-[0.035]"

        style={{

          backgroundImage:

            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",

          backgroundSize: "70px 70px",

        }}

      />



      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ========================================================= */}

        {/* HEADER */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, y: 25 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.2 }}

          transition={{ duration: 0.7 }}

          className="mx-auto mb-20 max-w-4xl text-center"

        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-amber-300" />



            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">

              About STACKRA Technologies

            </span>

          </div>



          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

            Building Technology

            <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              That Solves Real Problems.

            </span>

          </h2>



          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">

            STACKRA TECHNOLOGIES builds modern software, AI solutions, and

            digital products designed around real business needs.

          </p>

        </motion.div>



        {/* ========================================================= */}

        {/* STORY + ESTABLISHMENT */}

        {/* ========================================================= */}



        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Story */}

          <motion.div

            initial={{ opacity: 0, x: -35 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true, amount: 0.15 }}

            transition={{ duration: 0.7 }}

            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl sm:p-10"

          >

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl transition duration-500 group-hover:bg-amber-400/15" />



            <div className="relative">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-400/20 to-purple-500/10">

                  <Building2 className="h-6 w-6 text-amber-300" />

                </div>



                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/80">

                    Our Story

                  </p>



                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">

                    Technology With Purpose

                  </h3>

                </div>

              </div>



              <div className="space-y-5 text-sm leading-8 text-white/60 sm:text-base">

                <p>

                  STACKRA TECHNOLOGIES was created with a simple idea:

                  technology should make businesses more capable, efficient,

                  and ready for the future.

                </p>



                <p>

                  Instead of starting with technology, we start by

                  understanding the problem. From there, we design the right

                  architecture, automation, software, and digital strategy

                  around the business.

                </p>



                <p>

                  Our direction includes custom software, web applications,

                  artificial intelligence, SaaS platforms, business

                  management systems, CRM, ERP, education technology,

                  e-commerce, and other digital solutions.

                </p>

              </div>



              <div className="mt-8 flex flex-wrap gap-3">

                {[

                  "Software",

                  "AI",

                  "Automation",

                  "SaaS",

                  "Digital Products",

                ].map((item) => (

                  <span

                    key={item}

                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70"

                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

          </motion.div>



          {/* Establishment */}

          <motion.div

            initial={{ opacity: 0, x: 35 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true, amount: 0.15 }}

            transition={{ duration: 0.7, delay: 0.1 }}

            className="relative overflow-hidden rounded-[2rem] border border-amber-300/15 bg-gradient-to-br from-amber-400/[0.08] via-white/[0.03] to-purple-500/[0.08] p-7 backdrop-blur-2xl sm:p-9"

          >

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />



            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">

                Established

              </p>



              <div className="mt-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-6xl font-black text-transparent sm:text-7xl">

                2026

              </div>



              <div className="mt-8 space-y-5">

                <div className="border-b border-white/10 pb-5">

                  <p className="text-xs uppercase tracking-widest text-white/35">

                    Founded In

                  </p>

                  <p className="mt-2 text-lg font-bold text-white">

                    Hyderabad, India

                  </p>

                </div>



                <div className="border-b border-white/10 pb-5">

                  <p className="text-xs uppercase tracking-widest text-white/35">

                    Founder

                  </p>

                  <p className="mt-2 text-lg font-bold text-white">

                    Mohammed Khan

                  </p>

                </div>



                <div>

                  <p className="text-xs uppercase tracking-widest text-white/35">

                    Focus

                  </p>

                  <p className="mt-2 text-lg font-bold text-white">

                    Software • AI • Digital Solutions

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>



        {/* ========================================================= */}

        {/* FOUNDER */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, y: 35 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.15 }}

          transition={{ duration: 0.7 }}

          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.045] via-purple-500/[0.035] to-amber-500/[0.04] backdrop-blur-2xl"

        >

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Founder Identity */}

            <div className="relative overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r sm:p-10">

              <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />



              <div className="relative">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-400/20 to-purple-500/10">

                  <UserRound className="h-7 w-7 text-amber-300" />

                </div>



                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">

                  Meet the Founder

                </p>



                <h3 className="mt-3 text-3xl font-black sm:text-4xl">

                  Mohammed Khan

                </h3>



                <p className="mt-3 text-sm font-semibold text-white/50">

                  Founder & Software Engineer

                </p>



                <div className="mt-7 flex items-center gap-2 text-sm text-white/50">

                  <BadgeCheck className="h-4 w-4 text-amber-300" />

                  Engineering With a Business Perspective

                </div>



                <Link

                  href="https\://www\.mohammedkhan.dev/"

                  target="_blank"

                  rel="noreferrer"

                  className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-3 text-sm font-bold text-amber-200 transition hover:border-amber-300/40 hover:bg-amber-300/10"

                >

                  Visit Founder Profile

                  <ArrowUpRight

                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"

                    size={17}

                  />

                </Link>

              </div>

            </div>



            {/* Founder Highlights */}

            <div className="p-8 sm:p-10">

              <p className="text-sm leading-7 text-white/55">

                STACKRA combines software engineering with practical business

                thinking. The goal is not simply to build technology, but to

                create solutions that are useful, maintainable, scalable, and

                aligned with real-world business requirements.

              </p>



              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {founderHighlights.map((highlight) => (

                  <div

                    key={highlight}

                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/20 p-4"

                  >

                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />



                    <span className="text-sm font-medium leading-6 text-white/70">

                      {highlight}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>



        {/* ========================================================= */}

        {/* PROBLEMS */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.15 }}

          transition={{ duration: 0.7 }}

          className="mt-28"

        >

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex rounded-full border border-purple-300/15 bg-purple-400/[0.05] px-4 py-2">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-200">

                Business Challenges

              </span>

            </div>



            <h3 className="text-3xl font-black sm:text-4xl lg:text-5xl">

              We Don't Just Build Software.

              <span className="block text-white/45">

                We Solve Business Problems.

              </span>

            </h3>

          </div>



          <motion.div

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.1 }}

            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"

          >

            {problems.map((problem) => {

              const Icon = problem.icon;



              return (

                <motion.div

                  key={problem.title}

                  variants={itemVariants}

                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-300/25 hover:bg-white/[0.055]"

                >

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/0 blur-2xl transition duration-500 group-hover:bg-amber-400/10" />



                  <div className="relative">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/15 bg-amber-300/[0.07]">

                      <Icon className="h-5 w-5 text-amber-300" />

                    </div>



                    <h4 className="mt-6 text-lg font-black">

                      {problem.title}

                    </h4>



                    <p className="mt-3 text-sm leading-7 text-white/50">

                      {problem.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </motion.div>

        </motion.div>



        {/* ========================================================= */}

        {/* WHAT WE BUILD */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.15 }}

          transition={{ duration: 0.7 }}

          className="mt-28"

        >

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="mb-5 inline-flex rounded-full border border-amber-300/15 bg-amber-400/[0.05] px-4 py-2">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">

                  What We Build

                </span>

              </div>



              <h3 className="max-w-3xl text-3xl font-black sm:text-4xl lg:text-5xl">

                Technology Designed

                <span className="block bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">

                  Around Your Business.

                </span>

              </h3>

            </div>



            <Link

              href="/services"

              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/80 transition hover:border-amber-300/30 hover:text-amber-200"

            >

              Explore Solutions

              <ArrowRight

                size={17}

                className="transition group-hover:translate-x-1"

              />

            </Link>

          </div>



          <motion.div

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.1 }}

            className="mt-12 grid gap-6 lg:grid-cols-3"

          >

            {capabilities.map((capability) => {

              const Icon = capability.icon;



              return (

                <motion.div

                  key={capability.title}

                  variants={itemVariants}

                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-7 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-300/25"

                >

                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-600/0 blur-3xl transition duration-500 group-hover:bg-purple-600/10" />



                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/15 bg-gradient-to-br from-amber-300/15 to-purple-500/10">

                      <Icon className="h-6 w-6 text-amber-300" />

                    </div>



                    <h4 className="mt-7 text-2xl font-black">

                      {capability.title}

                    </h4>



                    <p className="mt-3 text-sm leading-7 text-white/50">

                      {capability.description}

                    </p>



                    <div className="mt-7 space-y-3">

                      {capability.points.map((point) => (

                        <div

                          key={point}

                          className="flex items-center gap-3 text-sm text-white/65"

                        >

                          <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-300" />

                          {point}

                        </div>

                      ))}

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </motion.div>

        </motion.div>



        {/* ========================================================= */}

        {/* TECHNOLOGY PHILOSOPHY */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, scale: 0.98 }}

          whileInView={{ opacity: 1, scale: 1 }}

          viewport={{ once: true, amount: 0.15 }}

          transition={{ duration: 0.7 }}

          className="relative mt-28 overflow-hidden rounded-[2.5rem] border border-amber-300/15 bg-gradient-to-br from-amber-400/[0.08] via-purple-500/[0.05] to-indigo-600/[0.08] p-8 sm:p-12 lg:p-16"

        >

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[120px]" />



          <div className="relative text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/20 bg-black/20">

              <ShieldCheck className="h-7 w-7 text-amber-300" />

            </div>



            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">

              Our Technology Philosophy

            </p>



            <h3 className="mt-4 text-4xl font-black sm:text-5xl">

              Build.

              <span className="text-amber-300"> Automate.</span>

              <span className="text-white/45"> Grow.</span>

            </h3>



            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">

              We focus on creating technology that is practical today,

              scalable tomorrow, and capable of supporting long-term business

              growth.

            </p>



            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">

              {[

                {

                  title: "Business First",

                  text: "Technology decisions start with business goals and real user requirements.",

                },

                {

                  title: "Modern Engineering",

                  text: "We use modern development practices and technologies to create reliable digital products.",

                },

                {

                  title: "Scalable Thinking",

                  text: "Solutions are designed with future growth, expansion, and maintainability in mind.",

                },

              ].map((item) => (

                <div

                  key={item.title}

                  className="rounded-2xl border border-white/10 bg-black/20 p-6 text-left"

                >

                  <h4 className="font-black text-white">{item.title}</h4>



                  <p className="mt-3 text-sm leading-7 text-white/45">

                    {item.text}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>



        {/* ========================================================= */}

        {/* FINAL CTA */}

        {/* ========================================================= */}



        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.2 }}

          transition={{ duration: 0.7 }}

          className="relative mt-28 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090916] p-8 sm:p-12 lg:p-16"

        >

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />



          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />



          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">

                Start Something Meaningful

              </p>



              <h3 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">

                Have a Business Problem?

              </h3>



              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">

                Let's turn your business challenge into a practical technology

                solution built around your goals.

              </p>

            </div>



            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <Link

                href="#contact"

                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-6 py-3.5 text-sm font-black text-black shadow-xl shadow-amber-500/10 transition hover:-translate-y-1 hover:shadow-amber-500/25"

              >

                Start Your Project

                <ArrowRight

                  size={17}

                  className="transition group-hover:translate-x-1"

                />

              </Link>



              <Link

                href="/services"

                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-amber-300/30 hover:text-amber-200"

              >

                Explore Solutions

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}