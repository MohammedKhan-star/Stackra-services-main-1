"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CreditCard,
  Database,
  Gauge,
  Layers3,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Workflow,
    badge: "BUSINESS AUTOMATION",
    title: "Automate Repetitive Operations",
    description:
      "Reduce manual work by connecting your business processes into intelligent, automated workflows.",
    problems: [
      "Manual data entry",
      "Disconnected business processes",
      "Repetitive administrative tasks",
    ],
    outcomes: [
      "Faster operations",
      "Less manual work",
      "Better process consistency",
    ],
    accent: "from-indigo-500 to-violet-500",
  },
  {
    number: "02",
    icon: UsersRound,
    badge: "CUSTOMER MANAGEMENT",
    title: "Manage Customers in One Place",
    description:
      "Bring leads, customers, communication, follow-ups and business relationships into one centralized system.",
    problems: [
      "Customer information scattered across tools",
      "Missed follow-ups",
      "Poor visibility into customer activity",
    ],
    outcomes: [
      "Centralized customer data",
      "Better follow-ups",
      "Stronger customer relationships",
    ],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    number: "03",
    icon: CreditCard,
    badge: "FINANCE & BILLING",
    title: "Simplify Billing & Financial Operations",
    description:
      "Modernize invoicing, payments, receipts and financial tracking with software built around your workflow.",
    problems: [
      "Manual invoice creation",
      "Payment tracking difficulties",
      "Scattered financial records",
    ],
    outcomes: [
      "Faster invoicing",
      "Better payment visibility",
      "Organized financial data",
    ],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: BrainCircuit,
    badge: "ARTIFICIAL INTELLIGENCE",
    title: "Turn Business Data Into Intelligence",
    description:
      "Use AI to analyze information, assist teams, automate decisions and create smarter business workflows.",
    problems: [
      "Too much business data",
      "Slow analysis",
      "Limited actionable insights",
    ],
    outcomes: [
      "AI-assisted decisions",
      "Faster analysis",
      "Smarter workflows",
    ],
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    number: "05",
    icon: BarChart3,
    badge: "ANALYTICS & REPORTING",
    title: "See What Is Really Happening",
    description:
      "Transform operational data into dashboards, reports and KPIs that help teams make informed decisions.",
    problems: [
      "Unclear business performance",
      "Manual reporting",
      "Data spread across systems",
    ],
    outcomes: [
      "Real-time visibility",
      "Centralized reporting",
      "Data-driven decisions",
    ],
    accent: "from-orange-500 to-amber-500",
  },
  {
    number: "06",
    icon: Building2,
    badge: "CUSTOM SOFTWARE",
    title: "Build Software Around Your Business",
    description:
      "When off-the-shelf software doesn't fit, STACKRA designs and develops custom platforms around your exact requirements.",
    problems: [
      "Generic software limitations",
      "Complex business requirements",
      "Multiple disconnected tools",
    ],
    outcomes: [
      "Purpose-built software",
      "Scalable architecture",
      "One connected platform",
    ],
    accent: "from-rose-500 to-pink-500",
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "AI-Powered",
    text: "Intelligent features that assist teams and automate workflows.",
  },
  {
    icon: Database,
    title: "Connected Data",
    text: "Bring important business information into one reliable system.",
  },
  {
    icon: ShieldCheck,
    title: "Security Focused",
    text: "Security-conscious architecture for modern digital products.",
  },
  {
    icon: Gauge,
    title: "Built to Scale",
    text: "Solutions designed to evolve as your business grows.",
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-3xl" />

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
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-indigo-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            BUSINESS SOLUTIONS
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn business problems into
            <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              intelligent solutions.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            STACKRA TECHNOLOGIES builds AI-powered software, automation
            systems and digital platforms that solve real operational
            challenges and help businesses work smarter.
          </p>
        </div>

        {/* Main statement */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Problem */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                    <Settings2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      THE PROBLEM
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      Disconnected operations
                    </h3>
                  </div>
                </div>

                <p className="leading-7 text-slate-400">
                  Manual processes, scattered data and disconnected tools can
                  slow teams down and make business decisions harder.
                </p>
              </div>

              {/* Connector */}
              <div className="hidden lg:flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      THE STACKRA APPROACH
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      Connected intelligent systems
                    </h3>
                  </div>
                </div>

                <p className="leading-7 text-slate-400">
                  We connect your people, processes and data through software
                  designed around the way your business actually operates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-7"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${solution.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Number + Icon */}
                <div className="relative flex items-start justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-slate-600">
                    {solution.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-indigo-300 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-indigo-300">
                    {solution.badge}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {solution.description}
                  </p>
                </div>

                {/* Problem */}
                <div className="relative mt-7 border-t border-white/10 pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Problems we solve
                  </p>

                  <ul className="space-y-2.5">
                    {solution.problems.map((problem) => (
                      <li
                        key={problem}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="relative mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Business outcomes
                  </p>

                  <ul className="space-y-2.5">
                    {solution.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-center gap-2 text-sm font-medium text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link */}
                <Link
                  href="/contact"
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300"
                >
                  Discuss your challenge
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Capabilities */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">
              BUILT FOR MODERN BUSINESS
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Technology that works for your business.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 font-semibold text-white">
                    {capability.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {capability.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-white/[0.03] to-violet-500/10 p-8 text-center sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_45%)]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-indigo-300">
              <Layers3 className="h-5 w-5" />
            </div>

            <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a business challenge?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Tell us what is slowing your business down. We can help turn the
              challenge into a practical digital solution.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Discuss Your Challenge
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08]"
              >
                Explore STACKRA Products
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
