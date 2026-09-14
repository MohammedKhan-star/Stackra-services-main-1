"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
ArrowRight,
ArrowUpRight,
Sparkles,
CheckCircle2,
Zap,
Cpu,
Cloud,
Database,
Layers3,
Code2,
BrainCircuit,
Globe2,
ShieldCheck,
} from "lucide-react";

/* =========================================================
TECHNOLOGIES
========================================================= */

const technologies = [
{
icon: Code2,
title: "Custom Software",
description:
"Business-focused applications designed around your unique workflows.",
},
{
icon: BrainCircuit,
title: "AI Solutions",
description:
"Intelligent systems that automate work and improve decision-making.",
},
{
icon: Globe2,
title: "Web Development",
description:
"Modern, responsive and scalable digital experiences for your business.",
},
];

/* =========================================================
FLOATING CARDS
========================================================= */

const floatingCards = [
{
icon: BrainCircuit,
label: "AI ENGINE",
text: "Intelligent Solutions",
position:
"left-[58%] top-[2%] sm:left-[62%] sm:top-[3%] lg:left-auto lg:right-[3%] lg:top-[8%]",
},
{
icon: Code2,
label: "SOFTWARE",
text: "Modern Architecture",
position:
"left-[2%] top-[46%] sm:left-[4%] sm:top-[45%] lg:left-auto lg:right-[-1%] lg:top-[43%]",
},
{
icon: ShieldCheck,
label: "SECURITY",
text: "Security-Conscious",
position:
"left-[48%] bottom-[8%] sm:left-[54%] sm:bottom-[7%] lg:left-auto lg:right-[7%] lg:bottom-[11%]",
},
];

/* =========================================================
ORBIT NODES
========================================================= */

const orbitNodes = [
{
icon: Cpu,
label: "AI",
position:
"left-[1%] top-[23%] sm:left-[4%] lg:left-[3%] lg:top-[22%]",
},
{
icon: Cloud,
label: "CLOUD",
position:
"right-[4%] top-[13%] sm:right-[7%] lg:right-[9%] lg:top-[15%]",
},
{
icon: Database,
label: "DATA",
position:
"left-[4%] bottom-[18%] sm:left-[8%] lg:left-[9%] lg:bottom-[17%]",
},
{
icon: Layers3,
label: "SYSTEMS",
position:
"right-[4%] bottom-[20%] sm:right-[9%] lg:right-[15%] lg:bottom-[20%]",
},
];

/* =========================================================
PARTICLES
========================================================= */

const particles = [
{
left: "10%",
top: "18%",
size: "h-1 w-1",
delay: 0,
},
{
left: "21%",
top: "67%",
size: "h-1.5 w-1.5",
delay: 0.7,
},
{
left: "37%",
top: "10%",
size: "h-1 w-1",
delay: 1.2,
},
{
left: "72%",
top: "14%",
size: "h-1.5 w-1.5",
delay: 0.4,
},
{
left: "84%",
top: "65%",
size: "h-1 w-1",
delay: 1.5,
},
{
left: "65%",
top: "83%",
size: "h-1 w-1",
delay: 0.9,
},
{
left: "46%",
top: "78%",
size: "h-1.5 w-1.5",
delay: 1.8,
},
];

/* =========================================================
HERO ANIMATION VARIANTS
========================================================= */

const contentVariants = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.12,
},
},
};

const fadeUpVariants = {
hidden: {
opacity: 0,
y: 25,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.7,
ease: "easeOut",
},
},
};

const titleVariants = {
hidden: {
opacity: 0,
y: 40,
filter: "blur(8px)",
},
visible: {
opacity: 1,
y: 0,
filter: "blur(0px)",
transition: {
duration: 1,
ease: "easeOut",
},
},
};

/* =========================================================
HERO SECTION
========================================================= */

export default function HeroSection() {
return ( <section
   id="home"
   className="relative isolate min-h-screen overflow-hidden bg-[#020617] text-white"
 >
{/* =====================================================
ORIGINAL BACKGROUND IMAGE
===================================================== */}

```
  <div className="absolute inset-0 -z-40">
    <Image
      src="/bg/hero-back-3.png"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* =====================================================
      CINEMATIC IMAGE PROTECTION
  ===================================================== */}

  <div className="absolute inset-0 -z-30 bg-black/20" />

  <div className="absolute inset-0 -z-30 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

  <div className="absolute inset-x-0 top-0 -z-30 h-40 bg-gradient-to-b from-black/45 to-transparent" />

  <div className="absolute inset-x-0 bottom-0 -z-30 h-72 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent" />

  {/* =====================================================
      CINEMATIC LIGHT
  ===================================================== */}

  <motion.div
    animate={{
      opacity: [0.12, 0.25, 0.12],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[25%] top-[12%] -z-20 h-64 w-64 rounded-full bg-blue-500/15 blur-[110px] sm:h-80 sm:w-80"
  />

  <motion.div
    animate={{
      opacity: [0.08, 0.18, 0.08],
      scale: [1.05, 1, 1.05],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[-5%] top-[30%] -z-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px] sm:h-96 sm:w-96"
  />

  {/* =====================================================
      CINEMATIC LIGHT SWEEP
  ===================================================== */}

  <motion.div
    initial={{
      x: "-120%",
      opacity: 0,
    }}
    animate={{
      x: "140%",
      opacity: [0, 0.18, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
      delay: 2,
    }}
    className="pointer-events-none absolute top-[-20%] -z-10 h-[140%] w-[18%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
  />

  {/* =====================================================
      FLOATING PARTICLES
  ===================================================== */}

  {particles.map((particle, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.15, 0.8, 0.15],
        y: [0, -20, 0],
        x: [0, index % 2 === 0 ? 8 : -8, 0],
      }}
      transition={{
        duration: 3 + (index % 3),
        repeat: Infinity,
        delay: particle.delay,
        ease: "easeInOut",
      }}
      className={`absolute z-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)] ${particle.size}`}
      style={{
        left: particle.left,
        top: particle.top,
      }}
    />
  ))}

  {/* =====================================================
      MAIN CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-28 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-32">
    <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        className="relative z-20 max-w-4xl"
      >
        {/* TOP BADGE */}

        <motion.div
          variants={fadeUpVariants}
          className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 shadow-xl backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-300" />
          </span>

          <Sparkles
            size={14}
            className="text-cyan-300 transition-transform duration-500 group-hover:rotate-12"
          />

          <span className="text-[10px] font-bold tracking-[0.2em] text-white/85 sm:text-xs">
            SOFTWARE • AI • DIGITAL SOLUTIONS
          </span>
        </motion.div>

        {/* MAIN HEADING */}

        <motion.h1
          variants={titleVariants}
          className="max-w-5xl text-[3.15rem] font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.7rem]"
        >
          Building the
          <br />

          <span className="bg-gradient-to-r from-white via-white to-blue-100 bg-clip-text text-transparent">
            Future With
          </span>

          <br />

          <motion.span
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-[linear-gradient(90deg,#60a5fa,#818cf8,#22d3ee,#60a5fa)] bg-[length:250%_100%] bg-clip-text text-transparent"
          >
            Technology.
          </motion.span>
        </motion.h1>

        {/* PREMIUM ACCENT */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "130px",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
          }}
          className="relative mt-7 h-[3px] overflow-hidden rounded-full bg-blue-500/30"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
          />
        </motion.div>

        {/* DESCRIPTION */}

        <motion.p
          variants={fadeUpVariants}
          className="mt-7 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg"
        >
          STACKRA TECHNOLOGIES builds modern software, AI-powered
          solutions and digital platforms that help businesses innovate,
          simplify operations and grow in the digital world.
        </motion.p>

        {/* CTA BUTTONS */}

        <motion.div
          variants={fadeUpVariants}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">
              Start Your Project
            </span>

            <ArrowUpRight
              size={18}
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <Link
            href="/#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-7 py-4 text-sm font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
          >
            Explore Our Services

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* TRUST */}

        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
        >
          {[
            "Modern Technology",
            "Security-Conscious Systems",
            "Scalable Solutions",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs font-medium text-white/60"
            >
              <CheckCircle2
                size={15}
                className="text-cyan-300"
              />

              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* =================================================
          RESPONSIVE PREMIUM VISUAL
          
          IMPORTANT:
          This is NO LONGER hidden on mobile.
          Same visual is used across mobile/tablet/desktop.
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
          x: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.15,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="relative mx-auto flex h-[390px] w-full max-w-[430px] items-center justify-center sm:h-[500px] sm:max-w-[540px] lg:h-[620px] lg:max-w-none"
      >
        {/* =================================================
            ATMOSPHERIC GLOW
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[90px] sm:h-[360px] sm:w-[360px] sm:blur-[110px] lg:h-[420px] lg:w-[420px] lg:blur-[120px]"
        />

        {/* =================================================
            OUTER ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[410px] sm:w-[410px] lg:h-[500px] lg:w-[500px]"
        >
          <motion.span
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
          />

          <span className="absolute bottom-[11%] right-[10%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />

          <span className="absolute left-[9%] top-[31%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
        </motion.div>

        {/* =================================================
            SECOND ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.12] border-dashed sm:h-[315px] sm:w-[315px] lg:h-[375px] lg:w-[375px]"
        />

        {/* =================================================
            INNER ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.025, 1],
          }}
          transition={{
            rotate: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.12] sm:h-[225px] sm:w-[225px] lg:h-[270px] lg:w-[270px]"
        />

        {/* =================================================
            CONNECTION LINES
        ================================================= */}

        <div className="absolute left-1/2 top-1/2 z-10 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 sm:h-[315px] sm:w-[315px] lg:h-[375px] lg:w-[375px]">
          <motion.div
            animate={{
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -translate-x-1/2 bg-gradient-to-t from-blue-400/30 to-transparent"
          />

          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute bottom-1/2 left-0 h-px w-1/2 origin-right bg-gradient-to-r from-transparent to-cyan-400/30"
          />

          <motion.div
            animate={{
              opacity: [0.08, 0.3, 0.08],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-0 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-indigo-400/30 to-transparent"
          />
        </div>

        {/* =================================================
            CENTRAL CORE
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 z-30 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/15 bg-[#030914]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:h-[195px] sm:w-[195px] sm:rounded-[2.5rem] lg:h-56 lg:w-56 lg:rounded-[3rem]"
        >
          {/* Core border */}

          <motion.div
            animate={{
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-2.5 rounded-[1.6rem] border border-blue-400/20 sm:inset-3 sm:rounded-[2rem] lg:rounded-[2.5rem]"
          />

          {/* Core glow */}

          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(37,99,235,0.15),transparent_65%)] sm:rounded-[2.5rem] lg:rounded-[3rem]" />

          <div className="relative text-center">
            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-[1rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_45px_rgba(37,99,235,0.35)] sm:h-[62px] sm:w-[62px] sm:rounded-[1.2rem] lg:h-[72px] lg:w-[72px] lg:rounded-[1.4rem]"
            >
              <Zap
                size={25}
                className="text-white sm:size-[29px] lg:size-[32px]"
              />
            </motion.div>

            <p className="mt-4 text-[7px] font-bold tracking-[0.42em] text-cyan-300 sm:mt-5 sm:text-[8px] lg:text-[9px]">
              STACKRA
            </p>

            <p className="mt-1 text-sm font-black tracking-tight text-white sm:text-lg lg:text-xl">
              TECHNOLOGIES
            </p>

            <p className="mt-1.5 text-[6px] uppercase tracking-[0.18em] text-slate-500 sm:text-[7px] lg:text-[8px]">
              Intelligent Digital Systems
            </p>
          </div>
        </motion.div>

        {/* =================================================
            ORBIT NODES
        ================================================= */}

        {orbitNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.label}
              animate={{
                y: [0, index % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${node.position} z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#030914]/75 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:gap-2 sm:px-3 sm:py-2`}
            >
              <Icon
                size={11}
                className="text-cyan-300 sm:size-[13px]"
              />

              <span className="text-[6px] font-bold tracking-[0.15em] text-slate-300 sm:text-[8px] sm:tracking-[0.18em]">
                {node.label}
              </span>
            </motion.div>
          );
        })}

        {/* =================================================
            FLOATING INFORMATION CARDS
        ================================================= */}

        {floatingCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.label}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [
                  0,
                  index % 2 === 0 ? -8 : 8,
                  0,
                ],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.8 + index * 0.15,
                },
                x: {
                  duration: 0.8,
                  delay: 0.8 + index * 0.15,
                },
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={`absolute ${card.position} z-50 w-[145px] overflow-hidden rounded-xl border border-white/10 bg-[#030914]/80 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:w-48 sm:rounded-2xl sm:p-3.5 lg:w-52 lg:p-4`}
            >
              {/* Moving card highlight */}

              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
                className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
              />

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10 text-cyan-300 sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon
                    size={15}
                    className="sm:size-[19px]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[6px] font-bold tracking-[0.18em] text-cyan-300 sm:text-[8px] sm:tracking-[0.22em]">
                    {card.label}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold text-white sm:text-xs">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* =================================================
            VISUAL LABEL
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[0%] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/25 px-4 py-2 shadow-xl backdrop-blur-xl sm:px-5 sm:py-2.5 lg:px-6 lg:py-3"
        >
          <span className="text-[7px] font-bold tracking-[0.25em] text-slate-400 sm:text-[8px] lg:text-[9px] lg:tracking-[0.35em]">
            BUILD • AUTOMATE • GROW
          </span>
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* =========================================================
      MOBILE TECHNOLOGY CARDS
      
      These remain below the same animated visual.
  ========================================================= */}

  <div className="relative z-20 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:hidden">
    <div className="grid gap-4 sm:grid-cols-3">
      {technologies.map((technology, index) => {
        const Icon = technology.icon;

        return (
          <motion.div
            key={technology.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-5 shadow-xl backdrop-blur-lg"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
            />

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-cyan-300 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <Icon size={20} />
            </div>

            <h3 className="mt-4 text-sm font-bold text-white">
              {technology.title}
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              {technology.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>

  {/* =========================================================
      BOTTOM BRAND BAR
  ========================================================= */}

  <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.08] bg-black/35 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <motion.span
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
        />

        <span className="text-xs font-bold tracking-[0.25em] text-white">
          STACKRA TECHNOLOGIES
        </span>
      </div>

      <div className="hidden items-center gap-5 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:flex">
        <span>Software</span>
        <span>Artificial Intelligence</span>
        <span>Digital Solutions</span>
      </div>

      <div className="text-[9px] font-bold tracking-[0.3em] text-slate-400">
        BUILD • AUTOMATE • GROW
      </div>
    </div>
  </div>

  {/* =========================================================
      SIDE LABEL
  ========================================================= */}

  <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
    <div className="flex items-center gap-3 [writing-mode:vertical-rl]">
      <span className="text-[8px] font-bold tracking-[0.4em] text-white/30">
        TECHNOLOGY FOR A SMARTER TOMORROW
      </span>

      <span className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
    </div>
  </div>

  {/* =========================================================
      SCROLL INDICATOR
  ========================================================= */}

  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 2,
      duration: 1,
    }}
    className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 md:block"
  >
    <div className="flex flex-col items-center gap-2">
      <span className="text-[8px] font-bold tracking-[0.3em] text-white/35">
        SCROLL
      </span>

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-8 w-px bg-gradient-to-b from-cyan-300 to-transparent"
      />
    </div>
  </motion.div>
</section>
);
}
