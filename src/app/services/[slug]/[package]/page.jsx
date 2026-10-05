"use client";

import { use } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Crown,
  ExternalLink,
  FileText,
  Layers3,
  Sparkles,
  Star,
  ShieldCheck,
  Gem,
  Zap,
  Globe2,
  Rocket,
} from "lucide-react";

import services from "../../../../data/services";
import servicePackages from "../../../../data/servicePackages";

export default function PackagePage({ params }) {
  const { slug, package: packageSlug } = use(params);

  /* =========================================================
     FIND SERVICE
  ========================================================== */

  const service =
    services.find((item) => {
      const itemSlug =
        item.slug ||
        item.id ||
        item.title
          ?.toLowerCase()
          .trim()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

      return itemSlug === slug;
    }) || null;

  /* =========================================================
     GET PACKAGES
  ========================================================== */

  const servicePackageData = servicePackages[slug] || {};

  /* =========================================================
     SELECTED PACKAGE
  ========================================================== */

  const selectedPackage = servicePackageData[packageSlug] || null;

  /* =========================================================
     SERVICE NOT FOUND
  ========================================================== */

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05050d] px-4 text-white sm:px-6">
        <div className="relative w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 text-center shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-amber-500/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 sm:h-16 sm:w-16">
              <Layers3 size={28} />
            </div>

            <h1 className="mt-5 text-2xl font-black sm:mt-6 sm:text-3xl">
              Service Not Found
            </h1>

            <p className="mt-4 leading-7 text-white/60">
              The requested service could not be found.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-3.5 font-bold text-black shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 sm:mt-8 sm:w-auto"
            >
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     PACKAGE NOT FOUND
  ========================================================== */

  if (!selectedPackage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05050d] px-4 text-white sm:px-6">
        <div className="relative w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 text-center shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-10">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300 sm:h-16 sm:w-16">
              <FileText size={28} />
            </div>

            <h1 className="mt-5 text-2xl font-black sm:mt-6 sm:text-3xl">
              Package Not Found
            </h1>

            <p className="mt-4 leading-7 text-white/60">
              The selected package is not available for{" "}
              <span className="font-bold text-white">
                {service.title}
              </span>
              .
            </p>

            <p className="mt-3 break-all text-sm text-white/40">
              Package: {packageSlug}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
              <Link
                href={`/services/${slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-3.5 font-bold text-black shadow-lg shadow-amber-500/20"
              >
                <ArrowLeft size={18} />
                Back to Packages
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     PRICE
  ========================================================== */

  const price = Number(selectedPackage.price || 0);

  const formattedPrice = price.toLocaleString("en-IN");

  /* =========================================================
     QUOTATION URL
  ========================================================== */

  const quotationUrl =
    `/quotation?service=${encodeURIComponent(service.title)}` +
    `&serviceSlug=${encodeURIComponent(slug)}` +
    `&package=${encodeURIComponent(selectedPackage.name)}` +
    `&packageSlug=${encodeURIComponent(packageSlug)}` +
    `&price=${encodeURIComponent(price)}`;

  /* =========================================================
     PAYMENT URL
  ========================================================== */

  const paymentUrl =
    `/payment?service=${encodeURIComponent(service.title)}` +
    `&serviceSlug=${encodeURIComponent(slug)}` +
    `&package=${encodeURIComponent(selectedPackage.name)}` +
    `&packageSlug=${encodeURIComponent(packageSlug)}` +
    `&price=${encodeURIComponent(price)}`;

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#05050d] text-white">

      {/* =====================================================
          GLOBAL AMBIENT LIGHT
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-purple-700/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

        <div className="absolute right-[5%] top-[30%] h-64 w-64 rounded-full bg-amber-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

        <div className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-indigo-700/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_32%),linear-gradient(135deg,#070817,#0b0a1d,#05050d)]" />

        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">

          {/* Back */}

          <Link
            href={`/services/${slug}`}
            className="group inline-flex max-w-full items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-amber-300"
          >
            <ArrowLeft
              size={17}
              className="shrink-0 transition group-hover:-translate-x-1"
            />

            <span className="truncate">
              Back to {service.title}
            </span>
          </Link>

          <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_410px] lg:gap-14">

            {/* HERO CONTENT */}

            <div className="min-w-0">

              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.07] px-3 py-2 text-xs font-bold text-amber-300 shadow-lg shadow-amber-500/5 backdrop-blur-xl sm:px-4 sm:text-sm">
                <Crown size={15} />
                <span>PREMIUM STACKRA PACKAGE</span>
              </div>

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-3 py-2 text-xs font-semibold text-purple-200 sm:px-4 sm:text-sm">
                <Sparkles size={15} />
                <span className="truncate">{service.title}</span>
              </div>

              <h1 className="max-w-4xl break-words text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {selectedPackage.name}

                <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Package
                </span>
              </h1>

              <div className="mt-6 h-px w-24 bg-gradient-to-r from-amber-300 to-transparent sm:mt-7 sm:w-28" />

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {selectedPackage.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/70 backdrop-blur-xl sm:px-4 sm:text-sm">
                  Premium Solution
                </span>

                <span className="rounded-full border border-purple-400/20 bg-purple-500/[0.06] px-3 py-2 text-xs font-medium text-purple-200 sm:px-4 sm:text-sm">
                  Modern Technology
                </span>

                <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-2 text-xs font-medium text-amber-200 sm:px-4 sm:text-sm">
                  STACKRA TECHNOLOGIES
                </span>

              </div>

            </div>

            {/* PRICE CARD */}

            <div className="relative w-full min-w-0">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-purple-600/20 via-amber-400/10 to-purple-600/20 blur-3xl" />

              <div className="relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2rem] sm:p-7">

                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

                {selectedPackage.popular && (
                  <div className="mb-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-300/15 to-yellow-500/10 px-4 py-2 text-xs font-bold text-amber-200 shadow-lg shadow-amber-500/10 sm:px-5 sm:text-sm">
                      <Star size={15} fill="currentColor" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  Package Investment
                </p>

                <div className="mt-4 text-center">
                  <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    ₹{formattedPrice}
                  </span>
                </div>

                <p className="mt-3 text-center text-sm text-white/40">
                  One-time development fee
                </p>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-4 text-sm">

                  <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-white/40">
                      Service
                    </span>

                    <span className="break-words font-semibold text-white sm:text-right">
                      {service.title}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-white/40">
                      Package
                    </span>

                    <span className="break-words font-semibold text-white sm:text-right">
                      {selectedPackage.name}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-white/40">
                      Features
                    </span>

                    <span className="font-semibold text-amber-300 sm:text-right">
                      {selectedPackage.features?.length || 0}
                    </span>
                  </div>

                </div>

                <Link
                  href={quotationUrl}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 py-4 text-sm font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/30 sm:text-base"
                >
                  Get Complete Quotation
                  <ArrowRight size={18} />
                </Link>

                <p className="mt-4 text-center text-xs leading-5 text-white/35">
                  Domain, hosting, email and maintenance can be selected
                  separately in the quotation.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PACKAGE DETAILS
      ====================================================== */}

      <section className="relative z-10 py-14 sm:py-20">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-10">

            {/* MAIN */}

            <div className="min-w-0 lg:col-span-2">

              <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[2rem] sm:p-7 md:p-9">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">

                  <div className="min-w-0">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      Selected Package
                    </p>

                    <h2 className="mt-3 break-words text-2xl font-black sm:text-3xl">
                      {selectedPackage.name}
                    </h2>

                  </div>

                  {selectedPackage.popular && (
                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.07] px-3 py-2 text-xs font-bold uppercase tracking-wider text-amber-300 sm:px-4">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </span>
                  )}

                </div>

                <div className="my-7 h-px bg-white/10 sm:my-8" />

                <h3 className="mb-5 text-xl font-black">
                  What&apos;s Included
                </h3>

                <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">

                  {(selectedPackage.features || []).map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="group flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3.5 transition duration-300 hover:border-amber-300/20 hover:bg-amber-300/[0.04] sm:p-4"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-black shadow-lg shadow-amber-500/10">
                          <Check size={14} strokeWidth={3} />
                        </div>

                        <span className="min-w-0 break-words text-sm font-medium leading-6 text-white/65">
                          {feature}
                        </span>
                      </div>
                    )
                  )}

                </div>

                {/* DEMO */}

                {selectedPackage.sampleUrl && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.08] to-amber-400/[0.04] p-5 sm:mt-10 sm:p-6">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10 text-purple-300">
                        <ExternalLink size={20} />
                      </div>

                      <div className="min-w-0">

                        <h3 className="text-lg font-black">
                          Live Sample / Demo
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/50">
                          View a sample project before selecting this package.
                        </p>

                        <a
                          href={selectedPackage.sampleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.08] px-5 py-3 font-bold text-white transition hover:bg-amber-300 hover:text-black sm:w-auto"
                        >
                          View Live Demo
                          <ExternalLink size={17} />
                        </a>

                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* SIDE */}

            <aside className="min-w-0">

              <div className="space-y-6 lg:sticky lg:top-8">

                {/* PRICE */}

                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[2rem] sm:p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                    Development Fee
                  </p>

                  <p className="mt-3 text-3xl font-black text-white sm:text-4xl">
                    ₹{formattedPrice}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    One-time development price
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="space-y-4">

                    {[
                      "Professional development",
                      "Responsive design",
                      "Modern technology",
                      "Deployment support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-amber-300"
                        />

                        <span className="text-sm text-white/55">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Link
                    href={quotationUrl}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 px-5 py-4 font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5"
                  >
                    Get Quotation
                    <ArrowRight size={18} />
                  </Link>

                  

                </div>

                {/* TRUST */}

                <div className="rounded-[1.5rem] border border-emerald-400/10 bg-emerald-400/[0.035] p-5 sm:rounded-[2rem] sm:p-6">

                  <div className="flex items-start gap-4">

                    <ShieldCheck
                      size={24}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />

                    <div className="min-w-0">

                      <h3 className="font-black">
                        Professional Service
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/45">
                        Domain, hosting, business email and maintenance can
                        be added through your quotation.
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* =====================================================
          STACKRA ADVANTAGE
      ====================================================== */}

      <section className="relative z-10 border-y border-white/10 bg-white/[0.015] py-14 sm:py-20">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-sm font-bold text-amber-300">
              <Sparkles size={15} />
              STACKRA ADVANTAGE
            </div>

            <h2 className="mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
              Built For
              <span className="ml-2 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                Professional Results
              </span>
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              Your selected package is designed to provide a professional
              foundation for your digital presence.
            </p>

          </div>

          <div className="mt-10 grid min-w-0 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">

            {/* CARD 1 */}

            <div className="group min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-300/20 hover:bg-white/[0.055] sm:rounded-[2rem] sm:p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-300">
                <Gem size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black sm:text-xl">
                Premium Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Clean, modern and responsive interfaces designed for
                professional organizations.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="group min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-300/20 hover:bg-white/[0.055] sm:rounded-[2rem] sm:p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/[0.07] text-purple-300">
                <Layers3 size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black sm:text-xl">
                Scalable Solution
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Built with modern technologies so your solution can grow
                with your organization.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="group min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/20 hover:bg-white/[0.055] sm:rounded-[2rem] sm:p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.07] text-emerald-300">
                <ShieldCheck size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black sm:text-xl">
                Professional Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Optional hosting, domain, email and maintenance services
                are available through the quotation.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER PACKAGES
      ====================================================== */}

      <section className="relative z-10 py-14 sm:py-20">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 sm:mb-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-sm font-bold text-amber-300">
              <Crown size={15} />
              COMPARE PACKAGES
            </div>

            <h2 className="mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
              Other {service.title}

              <span className="ml-2 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>

            <p className="mt-3 text-white/45">
              Explore the other package options available for this service.
            </p>

          </div>

          <div className="grid min-w-0 gap-5 sm:gap-6 md:grid-cols-3">

            {Object.entries(servicePackageData).map(
              ([key, pkg]) => {

                const isSelected = key === packageSlug;
                const isPopular = pkg.popular;

                return (
                  <Link
                    key={key}
                    href={`/services/${slug}/${key}`}
                    className={`group relative min-w-0 overflow-hidden rounded-[1.5rem] border p-5 shadow-2xl transition duration-300 hover:-translate-y-2 sm:rounded-[2rem] sm:p-7 ${
                      isSelected
                        ? "border-amber-300/40 bg-gradient-to-br from-amber-300/[0.08] to-purple-500/[0.05] shadow-amber-500/5"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >

                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />

                    {isPopular && (
                      <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-300">
                          <Star size={12} fill="currentColor" />
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="relative min-w-0">

                      <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
                        {pkg.name}
                      </p>

                      <p className="mt-3 text-3xl font-black text-white">
                        ₹
                        {Number(pkg.price || 0).toLocaleString("en-IN")}
                      </p>

                      <p className="mt-4 line-clamp-3 break-words text-sm leading-6 text-white/45">
                        {pkg.description}
                      </p>

                      <div
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${
                          isSelected
                            ? "text-amber-300"
                            : "text-white/60 group-hover:text-amber-300"
                        }`}
                      >
                        {isSelected
                          ? "Currently Selected"
                          : "View Package"}

                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>

                    </div>
                  </Link>
                );
              }
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative z-10 px-4 pb-14 sm:px-6 sm:pb-20">

        <div className="mx-auto w-full max-w-5xl">

          <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-300/20 bg-gradient-to-br from-purple-950 via-[#11102d] to-[#070817] px-5 py-12 text-center shadow-2xl shadow-purple-950/40 sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:px-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:55px_55px]" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.08] text-amber-300 shadow-lg shadow-amber-500/10 sm:h-16 sm:w-16">
                <Rocket size={27} />
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:mt-7 sm:text-4xl md:text-5xl">
                Ready to Start

                <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Your Project?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
                Get a complete quotation including development, domain,
                hosting, email and maintenance options.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

                <Link
                  href={quotationUrl}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 py-4 font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/30 sm:w-auto sm:px-7"
                >
                  Get Complete Quotation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={`/services/${slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 font-bold text-white backdrop-blur-xl transition hover:border-amber-300/20 hover:bg-white/10 sm:w-auto sm:px-7"
                >
                  <ArrowLeft size={18} />
                  Back to Service
                </Link>

              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 text-xs text-white/35 sm:flex-row sm:flex-wrap sm:gap-5">

                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  Professional Development
                </span>

                <span className="flex items-center gap-2">
                  <Zap size={14} />
                  Modern Technology
                </span>

                <span className="flex items-center gap-2">
                  <Globe2 size={14} />
                  Digital Presence
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}