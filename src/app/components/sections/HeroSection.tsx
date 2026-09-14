"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Globe2,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  Cloud,
  Database,
  Layers3,
} from "lucide-react";

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

const floatingCards = [
  {
    icon: BrainCircuit,
    label: "AI ENGINE",
    text: "Intelligent Solutions",
    position: "top-[8%] right-[0%] lg:right-[3%]",
  },
  {
    icon: Code2,
    label: "SOFTWARE",
    text: "Modern Architecture",
    position: "top-[43%] right-[-3%] lg:right-[-1%]",
  },
  {
    icon: ShieldCheck,
    label: "SECURITY",
    text: "Security-Conscious",
    position: "bottom-[11%] right-[4%] lg:right-[7%]",
  },
];

const orbitNodes = [
  {
    icon: Cpu,
    label: "AI",
    position: "left-[3%] top-[22%]",
  },
  {
    icon: Cloud,
    label: "CLOUD",
    position: "right-[9%] top-[15%]",
  },
  {
    icon: Database,
    label: "DATA",
    position: "left-[9%] bottom-[17%]",
  },
  {
    icon: Layers3,
    label: "SYSTEMS",
    position: "right-[15%] bottom-[20%]",
  },
];

const particles = [
  {
    left: "12%",
    top: "22%",
    size: "h-1 w-1",
    delay: 0,
  },
  {
    left: "22%",
    top: "68%",
    size: "h-1.5 w-1.5",
    delay: 0.7,
  },
  {
    left: "37%",
    top: "12%",
    size: "h-1 w-1",
    delay: 1.2,
  },
  {
    left: "72%",
    top: "16%",
    size: "h-1.5 w-1.5",
    delay: 0.4,
  },
  {
    left: "82%",
    top: "66%",
    size: "h-1 w-1",
    delay: 1.5,
  },
  {
    left: "65%",
    top: "84%",
    size: "h-1 w-1",
    delay: 0.9,
  },
  {
    left: "47%",
    top: "78%",
    size: "h-1.5 w-1.5",
    delay: 1.8,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      {/* =========================================================
          ORIGINAL BACKGROUND IMAGE
      ========================================================= */}

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

      {/* =========================================================
          VERY LIGHT CINEMATIC IMAGE PROTECTION
          Keeps original image visible
      ========================================================= */}

      <div className="absolute inset-0 -z-30 bg-black/20" />

      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 top-0 -z-30 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 -z-30 h-64 bg-gradient-to-t from-[#020617] via-[#020617]/45 to-transparent" />

      {/* =========================================================
          NATURAL CINEMATIC LIGHT
          NOT A FULL COLOR WASH
      ========================================================= */}

      <motion.div
        animate={{
          opacity: [0.12, 0.24, 0.12],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[35%] top-[15%] -z-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[130px]"
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
        className="absolute right-[5%] top-[30%] -z-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      {/* =========================================================
          CINEMATIC LIGHT SWEEP
      ========================================================= */}

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
        className="pointer-events-none absolute top-[-20%] -z-10 h-[140%] w-[16%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

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

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-28 pt-32 sm:px-8 lg:px-10">
        <div className="grid w-full gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative z-20 max-w-4xl"
          >
            {/* ===================================================
                TOP BADGE
            =================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
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

            {/* ===================================================
                MAIN HEADING
            =================================================== */}

            <motion.h1
              variants={{
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
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.7rem]"
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

            {/* ===================================================
                PREMIUM ACCENT
            =================================================== */}

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

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                  },
                },
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg"
            >
              STACKRA TECHNOLOGIES builds modern software, AI-powered
              solutions and digital platforms that help businesses innovate,
              simplify operations and grow in the digital world.
            </motion.p>

            {/* ===================================================
                CTA BUTTONS
            =================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
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

            {/* ===================================================
                TRUST
            =================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
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

          {/* =====================================================
              RIGHT PREMIUM VISUAL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-h-[620px] lg:block"
          >
            {/* =================================================
                LARGE ATMOSPHERIC GLOW
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
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]"
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
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
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
              className="absolute left-1/2 top-1/2 h-[375px] w-[375px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.12] border-dashed"
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
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.12]"
            />

            {/* =================================================
                CONNECTION LINES
            ================================================= */}

            <div className="absolute left-1/2 top-1/2 z-10 h-[375px] w-[375px] -translate-x-1/2 -translate-y-1/2">
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
              className="absolute left-1/2 top-1/2 z-30 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3rem] border border-white/15 bg-[#030914]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
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
                className="absolute inset-3 rounded-[2.5rem] border border-blue-400/20"
              />

              {/* Core glow */}

              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle,rgba(37,99,235,0.15),transparent_65%)]" />

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
                  className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_45px_rgba(37,99,235,0.35)]"
                >
                  <Zap
                    size={32}
                    className="text-white"
                  />
                </motion.div>

                <p className="mt-5 text-[9px] font-bold tracking-[0.45em] text-cyan-300">
                  STACKRA
                </p>

                <p className="mt-1 text-xl font-black tracking-tight text-white">
                  TECHNOLOGIES
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-slate-500">
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
                  className={`absolute ${node.position} z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#030914]/75 px-3 py-2 shadow-xl backdrop-blur-xl`}
                >
                  <Icon
                    size={13}
                    className="text-cyan-300"
                  />

                  <span className="text-[8px] font-bold tracking-[0.18em] text-slate-300">
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
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [
                      0,
                      index % 2 === 0 ? -10 : 10,
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
                  className={`absolute ${card.position} z-50 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#030914]/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl`}
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

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-cyan-300">
                      <Icon size={19} />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold tracking-[0.22em] text-cyan-300">
                        {card.label}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
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
              className="absolute bottom-[1%] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/25 px-6 py-3 shadow-xl backdrop-blur-xl"
            >
              <span className="text-[9px] font-bold tracking-[0.35em] text-slate-400">
                BUILD • AUTOMATE • GROW
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          MOBILE TECHNOLOGY CARDS
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