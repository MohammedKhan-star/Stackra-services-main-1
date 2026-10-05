"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  LayoutTemplate,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import services from "../../../../../data/services";
import servicePackages from "../../../../../data/servicePackages";
export default function TemplatePage() {
  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;

  const packageSlug = Array.isArray(params?.package)
    ? params.package[0]
    : params?.package;

  const service = services.find(
    (item) => item.slug === slug
  );

  const packages = servicePackages[slug] || {};

  const pkg = packages[packageSlug];

  /* =========================================================
      SERVICE NOT FOUND
  ========================================================== */

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
            <LayoutTemplate size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Service Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The service you are looking for does not exist.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
          >
            <ArrowLeft size={18} />
            View All Services
          </Link>

        </div>

      </main>
    );
  }

  /* =========================================================
      TEMPLATE NOT FOUND
  ========================================================== */

  if (!pkg) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
            <LayoutTemplate size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Template Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The selected package template does not exist.
          </p>

          <Link
            href={`/services/${slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
          >
            <ArrowLeft size={18} />
            Back to Service
          </Link>

        </div>

      </main>
    );
  }

  /* =========================================================
      PACKAGE NAME
  ========================================================== */

  const packageName =
    pkg.name ||
    packageSlug.charAt(0).toUpperCase() +
      packageSlug.slice(1);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          {/* BACK */}

          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
          >
            <ArrowLeft size={17} />
            Back to {service.title}
          </Link>

          {/* HEADER */}

          <div className="mx-auto mt-12 max-w-4xl text-center">

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">

              <LayoutTemplate size={16} />

              STACKRA TEMPLATE

            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

              <span className="rounded-full bg-blue-800 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white">
                {packageSlug}
              </span>

              <span className="text-lg font-semibold text-slate-600">
                {packageName}
              </span>

            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore the {packageName} template designed
              specifically for {service.title}.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          TEMPLATE PREVIEW
      ====================================================== */}

      <section className="py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Browser Frame */}

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">

            {/* Browser Header */}

            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-5 py-4">

              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-red-400" />

                <span className="h-3 w-3 rounded-full bg-yellow-400" />

                <span className="h-3 w-3 rounded-full bg-green-400" />

              </div>

              <div className="hidden rounded-lg border border-slate-200 bg-white px-6 py-2 text-xs text-slate-500 sm:block">
                STACKRA TECHNOLOGIES — {packageName} Template
              </div>

              <div className="w-16" />

            </div>

            {/* =================================================
                TEMPLATE WEBSITE
            ================================================== */}

            <div className="bg-white">

              {/* Template Navigation */}

              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 md:px-10">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-800 font-bold text-white">
                    ST
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      STACKRA
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Technologies
                    </p>
                  </div>

                </div>

                <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">

                  <span>Home</span>
                  <span>About</span>
                  <span>Services</span>
                  <span>Contact</span>

                </div>

                <button
                  type="button"
                  className="rounded-xl bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                </button>

              </div>

              {/* Template Hero */}

              <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-8 py-20 text-center md:px-16 md:py-28">

                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

                <div className="relative">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-amber-300">

                    <Sparkles size={30} />

                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                    {packageName} Template
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">
                    {service.shortTitle || service.title}
                  </h2>

                  <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
                    A professional digital solution created
                    for modern businesses and organizations.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 shadow-xl"
                    >
                      Explore Website
                      <ArrowRight size={18} />
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur"
                    >
                      Contact Us
                    </button>

                  </div>

                </div>

              </div>

              {/* Template Content */}

              <div className="px-6 py-16 md:px-12">

                <div className="mx-auto max-w-3xl text-center">

                  <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
                    Professional Solution
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-slate-950">
                    Everything Your Business Needs
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    This {packageName} template provides a
                    professional foundation for your {service.title}.
                  </p>

                </div>

                {/* Feature Cards */}

                <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">

                  {(pkg.features || []).slice(0, 6).map(
                    (feature, index) => (

                      <div
                        key={feature}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                      >

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">

                          <Check size={21} />

                        </div>

                        <div className="mt-5 text-xs font-bold uppercase tracking-wider text-amber-600">
                          0{index + 1}
                        </div>

                        <h4 className="mt-2 font-bold text-slate-900">
                          {feature}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                          Included in the {packageName} template.
                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* Template CTA */}

              <div className="bg-slate-50 px-6 py-16 text-center md:px-12">

                <p className="text-sm font-semibold text-blue-800">
                  Ready to use this design?
                </p>

                <h3 className="mt-3 text-3xl font-extrabold text-slate-950">
                  Build Your {packageName} Solution
                </h3>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                  Choose this template and let STACKRA
                  TECHNOLOGIES customize it for your business.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                  <Link
                    href={`/services/${slug}/${packageSlug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-800 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-900"
                  >
                    View Package
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/quotation"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Request Quotation
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PACKAGE INFORMATION
      ====================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">

            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">

                <LayoutTemplate size={25} />

              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-blue-800">
                Selected Template
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                {packageName}
              </h2>

              <p className="mt-4 text-slate-600">
                {pkg.description}
              </p>

              <div className="mt-6 text-4xl font-extrabold text-slate-950">
                ₹
                {Number(pkg.price || 0).toLocaleString(
                  "en-IN"
                )}
              </div>

            </div>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {(pkg.features || []).map((feature) => (

                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                >

                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">

                    <Check size={14} />

                  </span>

                  <span className="text-sm text-slate-700">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href={`/services/${slug}/${packageSlug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-800 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-900"
              >
                View Package
                <ArrowRight size={18} />
              </Link>

              <Link
                href={`/services/${slug}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
              >
                <ArrowLeft size={18} />
                Back to Service
              </Link>

              <Link
                href="/quotation"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
              >
                Request Quotation
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-8 py-14 text-center shadow-2xl md:px-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-400/10 blur-2xl" />

            <div className="relative">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300">

                <Sparkles size={26} />

              </div>

              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Like This Template?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                Let STACKRA TECHNOLOGIES customize this
                {packageName} template for your organization.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <Link
                  href={`/services/${slug}/${packageSlug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Choose This Package
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/quotation"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
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