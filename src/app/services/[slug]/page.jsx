"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Crown,
  Layers3,
  LayoutTemplate,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import services from "../../../data/services";
import servicePackages from "../../../data/servicePackages";

export default function ServiceDetailsPage() {
  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;

  const service = services.find(
    (item) => item.slug === slug
  );

  /* =========================================================
      SERVICE NOT FOUND
  ========================================================== */

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070817] px-6 py-24">

        <div className="relative max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-12 text-center shadow-2xl backdrop-blur-xl">

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-amber-500/10" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
              <Crown size={28} />
            </div>

            <h1 className="mt-7 text-3xl font-extrabold text-white">
              Service Not Found
            </h1>

            <p className="mt-4 text-slate-400">
              The service you are looking for does not exist.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /* =========================================================
      PACKAGES
  ========================================================== */

  const packages = servicePackages[slug] || {};

  const packageEntries = Object.entries(packages);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070817] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">

        {/* Luxury Background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.20),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(245,158,11,0.16),transparent_28%),linear-gradient(135deg,#070817,#0d1025_45%,#11142c)]" />

        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          {/* Breadcrumb */}

          <div className="mb-10 flex items-center gap-2 text-sm text-slate-400">

            <Link
              href="/services"
              className="transition hover:text-amber-300"
            >
              Services
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-amber-300">
              {service.shortTitle || service.title}
            </span>

          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* =================================================
                LEFT
            ================================================== */}

            <div>

              {/* Premium Badge */}

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-300 shadow-lg shadow-amber-500/5 backdrop-blur-xl">

                <Crown size={16} />

                PREMIUM STACKRA SOLUTION

              </div>

              {/* Title */}

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">

                {service.title}

              </h1>

              <div className="mt-7 flex items-center gap-3">

                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-amber-400" />

                <Sparkles
                  size={16}
                  className="text-amber-300"
                />

                <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-400 to-transparent" />

              </div>

              {/* Description */}

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                {service.desc}
              </p>

              {/* Technologies */}

              {service.technologies?.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">

                  {service.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300 shadow-sm backdrop-blur-xl"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>
              )}

              {/* CTA */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#packages"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:shadow-amber-500/30"
                >
                  Explore Packages

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </a>

                <Link
                  href="/quotation"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
                >
                  Request Quotation
                </Link>

              </div>

            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-amber-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">

                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-900">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050612] via-[#050612]/20 to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">

                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">

                      <Sparkles size={16} />

                      STACKRA TECHNOLOGIES

                    </div>

                    <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                      {service.shortTitle || service.title}
                    </h2>

                  </div>

                </div>

              </div>

              {/* Floating Gold Element */}

              <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-[#111326]/90 text-amber-300 shadow-2xl backdrop-blur-xl">

                <Crown size={25} />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="relative bg-[#090b1c] py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.10),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300">

              <Layers3 size={16} />

              WHAT WE PROVIDE

            </div>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              Everything You Need
            </h2>

            <p className="mt-5 text-slate-400">
              Professional technology solutions designed around
              your organization's requirements.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {service.points?.map(
              (point, index) => (

                <div
                  key={point}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-400/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-950/30"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition group-hover:bg-amber-400 group-hover:text-slate-950">

                      <Check size={20} />

                    </div>

                    <div>

                      <div className="mb-2 text-xs font-bold tracking-widest text-amber-400">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <h3 className="font-semibold leading-6 text-white">
                        {point}
                      </h3>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          PREMIUM PACKAGES
      ====================================================== */}

      <section
        id="packages"
        className="relative overflow-hidden bg-[#070817] py-28"
      >

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-bold text-amber-300">

              <Crown size={16} />

              PREMIUM COLLECTION

            </div>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Choose Your Package
            </h2>

            <p className="mt-5 text-slate-400">
              Select the level that matches your business
              requirements and explore its dedicated template.
            </p>

          </div>

          {/* Package Grid */}

          <div className="mt-16 grid gap-7 lg:grid-cols-3">

            {packageEntries.map(
              ([packageSlug, pkg]) => {

                const normalizedPackageSlug =
                  packageSlug.toLowerCase();

                const isPopular =
                  pkg.popular ||
                  normalizedPackageSlug ===
                    "intermediate" ||
                  normalizedPackageSlug ===
                    "standard";

                const packageName =
                  pkg.name ||
                  packageSlug.charAt(0).toUpperCase() +
                    packageSlug.slice(1);

                return (

                  <div
                    key={packageSlug}
                    className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-3 ${
                      isPopular
                        ? "border border-amber-400/60 bg-gradient-to-b from-amber-400/[0.10] via-white/[0.055] to-white/[0.025] shadow-2xl shadow-amber-950/30"
                        : "border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20"
                    }`}
                  >

                    {/* Top Glow */}

                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b blur-2xl ${
                        isPopular
                          ? "from-amber-400/15"
                          : "from-purple-500/10"
                      }`}
                    />

                    {/* Popular */}

                    {isPopular && (
                      <div className="absolute right-6 top-6">

                        <div className="flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/15 px-4 py-2 text-xs font-bold text-amber-300 backdrop-blur-xl">

                          <Star
                            size={13}
                            fill="currentColor"
                          />

                          MOST POPULAR

                        </div>

                      </div>
                    )}

                    <div className="relative">

                      {/* Package Header */}

                      <div className="mb-7 flex items-center justify-between">

                        <div>

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                            {packageSlug}
                          </p>

                          <h3 className="mt-3 text-2xl font-black text-white">
                            {packageName}
                          </h3>

                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-amber-300">

                          <Code2 size={22} />

                        </div>

                      </div>

                      {/* Price */}

                      <div className="mb-6">

                        <span className="text-5xl font-black tracking-tight text-white">
                          ₹
                          {Number(
                            pkg.price || 0
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </span>

                        <span className="ml-2 text-sm text-slate-500">
                          starting
                        </span>

                      </div>

                      {/* Description */}

                      <p className="min-h-[72px] text-sm leading-7 text-slate-400">
                        {pkg.description}
                      </p>

                      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {/* Features */}

                      <ul className="flex-1 space-y-4">

                        {pkg.features?.map(
                          (feature) => (

                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm text-slate-300"
                            >

                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">

                                <Check size={13} />

                              </span>

                              <span>
                                {feature}
                              </span>

                            </li>

                          )
                        )}

                      </ul>

                      {/* Template */}

                      <Link
                        href={`/services/${slug}/${packageSlug}/template`}
                        className="group/template mt-9 flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-6 py-3.5 font-bold text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-xl hover:shadow-amber-500/20"
                      >

                        <LayoutTemplate
                          size={18}
                          className="transition-transform group-hover/template:scale-110"
                        />

                        View {packageName} Template

                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover/template:translate-x-1"
                        />

                      </Link>

                      {/* Package */}

                      <Link
                        href={`/services/${slug}/${packageSlug}`}
                        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-1 ${
                          isPopular
                            ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-xl"
                            : "border border-white/10 bg-white/[0.06] text-white hover:border-purple-400/40 hover:bg-purple-500/10"
                        }`}
                      >

                        View Package

                        <ArrowRight size={18} />

                      </Link>

                    </div>

                  </div>

                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section className="relative bg-[#090b1c] py-24">

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300">

                <Zap size={16} />

                MODERN TECHNOLOGY

              </div>

              <h2 className="text-3xl font-black text-white md:text-5xl">
                Built With Modern Technologies
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                We use modern, scalable and reliable
                technologies to build professional digital
                solutions for businesses and organizations.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {service.technologies?.map(
                (technology) => (

                  <div
                    key={technology}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center font-semibold text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/5 hover:text-amber-300"
                  >
                    {technology}
                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#070817] py-24">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">

              <Sparkles size={16} />

              OUR PROCESS

            </div>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              From Idea to Launch
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Understand",
                text: "We understand your requirements and business goals.",
              },
              {
                number: "02",
                title: "Design",
                text: "We create a professional and user-focused solution.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Our team develops and tests the complete solution.",
              },
              {
                number: "04",
                title: "Launch",
                text: "We deploy your project and provide support.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/30"
              >

                <div className="text-sm font-black tracking-widest text-amber-400">
                  {step.number}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#050612] py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl px-6">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-400/20 bg-gradient-to-br from-[#16182e] via-[#0e1023] to-[#090a18] px-8 py-16 text-center shadow-2xl shadow-black/50 md:px-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-600/15 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[90px]" />

            <div className="relative">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-300">

                <Crown size={28} />

              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                STACKRA TECHNOLOGIES
              </p>

              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Ready to Build Your Digital Future?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
                Choose a premium package or contact STACKRA
                TECHNOLOGIES for a customized solution built
                around your organization.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:shadow-amber-500/30"
                >
                  View Packages
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/quotation"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/40 hover:text-amber-300"
                >
                  Get Quotation
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}