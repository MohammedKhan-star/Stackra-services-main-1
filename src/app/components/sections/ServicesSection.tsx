"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import services from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-indigo-700 shadow-sm">
            <Sparkles size={16} />
            WHAT WE DO
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Technology Solutions
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Built for Growth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            STACKRA TECHNOLOGIES builds modern digital products, business
            software, and AI-powered solutions that help organizations
            automate operations, improve efficiency, and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id || service.slug || service.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-slate-950/75 px-3 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                  <Sparkles size={13} />
                  FEATURED
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] text-white backdrop-blur-md">
                    {service.badge || service.category}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-900 shadow-lg backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-indigo-600 group-hover:text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Title */}
                <div className="mb-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                    {service.shortTitle || service.category}
                  </p>

                  <h3 className="text-xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {service.points?.slice(0, 6).map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-indigo-600"
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                {service.technologies?.length > 0 && (
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Technology
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stats */}
                {service.stats?.length > 0 && (
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
                    {service.stats.slice(0, 3).map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-slate-50 p-3 text-center transition-colors duration-300 group-hover:bg-indigo-50/60"
                      >
                        <div className="text-sm font-bold text-slate-900">
                          {stat.value}
                        </div>

                        <div className="mt-1 text-[9px] font-medium uppercase tracking-wide text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">
                    Explore Solution
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center lg:mt-20">
          <p className="mb-4 text-sm text-slate-500">
            Looking for a custom technology solution?
          </p>

          <a
            href="https://www.stackratechnologies.com/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl"
          >
            Talk to STACKRA TECHNOLOGIES
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
