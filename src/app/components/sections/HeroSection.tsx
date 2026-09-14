"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Globe2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020812]"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0">
        <Image
          src="/bg/hero-back.png"
          alt="STACKRA Technologies futuristic digital technology background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overall cinematic darkening */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Left side readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020812] via-[#020812]/85 to-transparent" />

        {/* Bottom cinematic fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#020812] via-[#020812]/60 to-transparent" />

        {/* Top cinematic fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020812]/70 to-transparent" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-20 lg:px-8">
        <div className="w-full">

          {/* =====================================================
              LEFT HERO CONTENT
          ===================================================== */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-[#020812]/60 px-4 py-2 backdrop-blur-md">
              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-[11px]">
                Innovation • Technology • AI
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">

              Building the

              <span className="block text-cyan-400">
                Future
              </span>

              <span className="block text-white">
                With Technology.
              </span>

            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              STACKRA TECHNOLOGIES builds modern software, AI-powered
              solutions and digital platforms that help businesses
              innovate, simplify operations and grow in the digital world.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* Primary */}
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.20)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_55px_rgba(34,211,238,0.35)]"
              >
                Start Your Project

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#020812]/40 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Explore Our Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

            {/* =================================================
                TECHNOLOGY CARDS
            ================================================= */}
            <div className="mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">

              {/* Custom Software */}
              <div className="group rounded-2xl border border-white/10 bg-[#020812]/55 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#020812]/70">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Code2
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      Custom Software
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Business Solutions
                    </p>
                  </div>

                </div>

              </div>

              {/* AI Solutions */}
              <div className="group rounded-2xl border border-white/10 bg-[#020812]/55 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#020812]/70">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <BrainCircuit
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      AI Solutions
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Intelligent Systems
                    </p>
                  </div>

                </div>

              </div>

              {/* Web Development */}
              <div className="group rounded-2xl border border-white/10 bg-[#020812]/55 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#020812]/70">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Globe2
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      Web Development
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Fast & Scalable
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                TRUST LINE
            ================================================= */}
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">

              <span>
                Modern Technology
              </span>

              <span className="text-cyan-400">
                •
              </span>

              <span>
                Secure Systems
              </span>

              <span className="text-cyan-400">
                •
              </span>

              <span>
                Scalable Solutions
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          RIGHT SIDE DECORATIVE LABEL
      ========================================================= */}
      <div className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 xl:block">

        <div className="flex flex-col items-center gap-5">

          <div className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />

          <p
            className="text-[9px] font-bold uppercase tracking-[0.45em] text-cyan-300/70"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Technology for a Smarter Tomorrow
          </p>

          <div className="h-16 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/20 to-transparent" />

        </div>

      </div>

      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================= */}
      <div className="absolute inset-x-0 bottom-0 z-20">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          {/* Brand */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
              STACKRA TECHNOLOGIES
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-slate-500">
              Technology for a Smarter Tomorrow
            </p>
          </div>

          {/* Center */}
          <div className="hidden items-center gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500 md:flex">

            <span>
              Software
            </span>

            <span className="text-cyan-400">
              •
            </span>

            <span>
              Artificial Intelligence
            </span>

            <span className="text-cyan-400">
              •
            </span>

            <span>
              Digital Solutions
            </span>

          </div>

          {/* Right */}
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Build • Automate • Grow
          </p>

        </div>

      </div>
    </section>
  );
}