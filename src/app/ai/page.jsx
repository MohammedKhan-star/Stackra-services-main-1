
"use client";

import Link from "next/link";
import {
  BrainCircuit,
  Sparkles,
  Bot,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  BarChart3,
  FileText,
  Users,
  Search,
  Lightbulb,
  Headphones,
} from "lucide-react";

export default function AIPage() {
  const features = [
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description:
        "Ask STACKRA AI questions in simple language and get clear and useful answers.",
    },
    {
      icon: FileText,
      title: "Service Information",
      description:
        "Explore STACKRA TECHNOLOGIES services, solutions and available packages.",
    },
    {
      icon: BarChart3,
      title: "Pricing Assistance",
      description:
        "Ask about service pricing and package options before starting your project.",
    },
    {
      icon: FileText,
      title: "Quotation Assistance",
      description:
        "Get guidance when you are ready to start a project quotation.",
    },
    {
      icon: Search,
      title: "Smart Information",
      description:
        "Find relevant STACKRA solutions based on your business requirements.",
    },
    {
      icon: Lightbulb,
      title: "Business Guidance",
      description:
        "Describe your requirement and discover suitable technology solutions.",
    },
  ];

  const capabilities = [
    "Services and solutions",
    "Package information",
    "Pricing assistance",
    "Project quotations",
    "CRM and ERP solutions",
    "Website development",
    "E-commerce solutions",
    "LMS and education solutions",
    "Business technology guidance",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060b] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.22),transparent_48%)]" />

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-200">
              <Sparkles size={16} />
              STACKRA AI Virtual Assistant
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              Your Intelligent
              <br />

              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Business Assistant
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">
              Meet STACKRA AI Virtual Assistant — your intelligent assistant
              for STACKRA TECHNOLOGIES services, packages, pricing,
              quotations and business enquiries.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new Event("open-stackra-ai")
                  );
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-900/50"
              >
                <Bot size={19} />

                Try STACKRA AI

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <Link
                href="/quotation"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition hover:border-purple-400/30 hover:bg-white/[0.08]"
              >
                <FileText size={17} />
                Get a Quotation
              </Link>
            </div>
          </div>

          {/* =====================================================
              AI VISUAL
          ===================================================== */}
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-2 shadow-2xl shadow-purple-950/30">
              <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-[#15132b] via-[#0b0b17] to-[#05060b] p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                  {/* User */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                        <Users
                          size={20}
                          className="text-cyan-300"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Your Question
                        </p>

                        <p className="text-xs text-white/35">
                          Ask STACKRA AI
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm leading-6 text-white/55">
                        "What website solution is suitable for my
                        business?"
                      </p>
                    </div>
                  </div>

                  {/* AI */}
                  <div className="relative mx-auto">
                    <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl" />

                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-purple-300/20 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-cyan-500/10 shadow-2xl shadow-purple-900/40">
                      <BrainCircuit
                        size={58}
                        className="text-purple-300"
                      />
                    </div>
                  </div>

                  {/* Response */}
                  <div className="rounded-2xl border border-purple-400/10 bg-purple-500/[0.04] p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">
                        <Bot
                          size={20}
                          className="text-purple-300"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          STACKRA AI
                        </p>

                        <p className="text-xs text-white/35">
                          Intelligent response
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="h-3 rounded-full bg-purple-300/10" />
                      <div className="h-3 w-5/6 rounded-full bg-purple-300/10" />
                      <div className="h-3 w-2/3 rounded-full bg-purple-300/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-300">
                Meet Your AI Assistant
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                AI assistance for your STACKRA journey.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-white/50 sm:text-lg">
                STACKRA AI Virtual Assistant helps visitors and customers
                understand STACKRA TECHNOLOGIES services, packages, pricing
                and project options through a simple conversational
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section id="features">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-300">
              What STACKRA AI Can Do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Intelligent assistance, made simple.
            </h2>

            <p className="mt-5 text-white/45">
              Ask questions naturally and get information about STACKRA
              TECHNOLOGIES solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-purple-500/[0.04]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                <Zap size={26} />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Built for STACKRA
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Your gateway to STACKRA solutions.
              </h2>

              <p className="mt-6 leading-8 text-white/50">
                Whether you need a website, CRM, ERP, e-commerce solution,
                LMS or another technology service, STACKRA AI can help guide
                you toward the right starting point.
              </p>

              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new Event("open-stackra-ai")
                  );
                }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-cyan-300 transition hover:text-cyan-200"
              >
                Ask STACKRA AI
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm font-semibold text-white/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/30 via-white/[0.025] to-cyan-950/20 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-300">
                  Why Use STACKRA AI?
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Get answers faster.
                </h2>

                <p className="mt-6 leading-8 text-white/50">
                  Instead of searching through multiple pages, ask STACKRA AI
                  what you need and start your journey from one intelligent
                  interface.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                    <Zap size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Fast assistance
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Get quick answers about STACKRA services and
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Business-focused
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Designed around STACKRA TECHNOLOGIES services and
                      customer enquiries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300">
                    <Headphones size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Easy to use
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Simply type your question and interact with the
                      assistant naturally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-8 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
            <BrainCircuit size={31} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Talk to STACKRA AI
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Have a question about STACKRA TECHNOLOGIES? Start a conversation
            with your virtual assistant.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new Event("open-stackra-ai")
                );
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-4 text-sm font-black shadow-xl shadow-purple-900/30 transition hover:-translate-y-1"
            >
              <Bot size={18} />

              Open STACKRA AI

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <Link
              href="/quotation"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold transition hover:bg-white/[0.08]"
            >
              <FileText size={17} />
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/25">
          STACKRA AI Virtual Assistant
        </p>

        <p className="mt-2 text-xs text-white/20">
          Intelligent technology by STACKRA TECHNOLOGIES
        </p>
      </footer>
    </main>
  );
}
