"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
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

const titleVariants: Variants = {
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
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          DESKTOP BACKGROUND
          
          Desktop:
          /public/bg/hero-back-3.png

          This image is shown from md and above.
      ===================================================== */}

      <div className="absolute inset-0 -z-50 hidden md:block">
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
          MOBILE BACKGROUND
          
          Mobile:
          /public/bg/hero-back-mobile.png

          This is a completely separate mobile image.
      ===================================================== */}

      <div className="absolute inset-0 -z-50 block md:hidden">
        <Image
          src="/bg/hero-back-mobile.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          NO BACKGROUND COLOR OVERLAY

          The actual background image remains visible.
      ===================================================== */}

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
            {/* =================================================
                TOP BADGE
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 shadow-xl backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-white/60" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <Sparkles
                size={14}
                className="text-white transition-transform duration-500 group-hover:rotate-12"
              />

              <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 sm:text-xs">
                SOFTWARE • AI • DIGITAL SOLUTIONS
              </span>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h1
              variants={titleVariants}
              className="max-w-5xl text-[3.15rem] font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.7rem]"
            >
              Building the

              <br />

              <span className="text-white">
                Future With
              </span>

              <br />

              <motion.span
                animate={{
                  opacity: [0.82, 1, 0.82],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                Technology.
              </motion.span>
            </motion.h1>

            {/* =================================================
                WHITE ACCENT
            ================================================= */}

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
              className="relative mt-7 h-[2px] overflow-hidden rounded-full bg-white/30"
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
                className="h-full w-1/2 bg-white"
              />
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              variants={fadeUpVariants}
              className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg"
            >
              STACKRA TECHNOLOGIES builds modern software, AI-powered
              solutions and digital platforms that help businesses innovate,
              simplify operations and grow in the digital world.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
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
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 py-4 text-sm font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/35"
              >
                Explore Our Services

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* =================================================
                TRUST
            ================================================= */}

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
                  className="flex items-center gap-2 text-xs font-medium text-white/75"
                >
                  <CheckCircle2
                    size={15}
                    className="text-white"
                  />

                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              PREMIUM TECHNOLOGY VISUAL

              Responsive on every device.
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
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:h-[410px] sm:w-[410px] lg:h-[500px] lg:w-[500px]"
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
                className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]"
              />

              <span className="absolute bottom-[11%] right-[10%] h-2 w-2 rounded-full bg-white/80" />

              <span className="absolute left-[9%] top-[31%] h-2 w-2 rounded-full bg-white/70" />
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
              className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 border-dashed sm:h-[315px] sm:w-[315px] lg:h-[375px] lg:w-[375px]"
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
              className="absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-[225px] sm:w-[225px] lg:h-[270px] lg:w-[270px]"
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
                className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-white/30 to-transparent"
              />

              <motion.div
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-1/2 left-0 h-px w-1/2 bg-gradient-to-r from-transparent to-white/30"
              />

              <motion.div
                animate={{
                  opacity: [0.08, 0.3, 0.08],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-1/2 h-px w-1/2 bg-gradient-to-r from-white/25 to-transparent"
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
              className="absolute left-1/2 top-1/2 z-30 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/25 bg-black/70 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:h-[195px] sm:w-[195px] sm:rounded-[2.5rem] lg:h-56 lg:w-56 lg:rounded-[3rem]"
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
                className="absolute inset-2.5 rounded-[1.6rem] border border-white/20 sm:inset-3 sm:rounded-[2rem] lg:rounded-[2.5rem]"
              />

              {/* Core */}

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
                  className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-[1rem] border border-white/30 bg-white/10 shadow-xl sm:h-[62px] sm:w-[62px] sm:rounded-[1.2rem] lg:h-[72px] lg:w-[72px] lg:rounded-[1.4rem]"
                >
                  <Zap
                    size={25}
                    className="text-white sm:size-[29px] lg:size-[32px]"
                  />
                </motion.div>

                <p className="mt-4 text-[7px] font-bold tracking-[0.42em] text-white/65 sm:mt-5 sm:text-[8px] lg:text-[9px]">
                  STACKRA
                </p>

                <p className="mt-1 text-sm font-black tracking-tight text-white sm:text-lg lg:text-xl">
                  TECHNOLOGIES
                </p>

                <p className="mt-1.5 text-[6px] uppercase tracking-[0.18em] text-white/40 sm:text-[7px] lg:text-[8px]">
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
                  className={`absolute ${node.position} z-40 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:gap-2 sm:px-3 sm:py-2`}
                >
                  <Icon
                    size={11}
                    className="text-white sm:size-[13px]"
                  />

                  <span className="text-[6px] font-bold tracking-[0.15em] text-white/75 sm:text-[8px] sm:tracking-[0.18em]">
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
                  className={`absolute ${card.position} z-50 w-[145px] overflow-hidden rounded-xl border border-white/20 bg-black/60 p-2.5 shadow-2xl backdrop-blur-xl sm:w-48 sm:rounded-2xl sm:p-3.5 lg:w-52 lg:p-4`}
                >
                  {/* White moving highlight */}

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
                    className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  />

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white sm:h-10 sm:w-10 sm:rounded-xl">
                      <Icon
                        size={15}
                        className="sm:size-[19px]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[6px] font-bold tracking-[0.18em] text-white/55 sm:text-[8px] sm:tracking-[0.22em]">
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
              className="absolute bottom-[0%] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/40 px-4 py-2 shadow-xl backdrop-blur-xl sm:px-5 sm:py-2.5 lg:px-6 lg:py-3"
            >
              <span className="text-[7px] font-bold tracking-[0.25em] text-white/55 sm:text-[8px] lg:text-[9px] lg:tracking-[0.35em]">
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
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-5 shadow-xl backdrop-blur-lg"
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
                  className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
                />

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-white">
                  {technology.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/55">
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

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/15 bg-black/35 backdrop-blur-xl">
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
              className="h-1.5 w-1.5 rounded-full bg-white"
            />

            <span className="text-xs font-bold tracking-[0.25em] text-white">
              STACKRA TECHNOLOGIES
            </span>
          </div>

          <div className="hidden items-center gap-5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:flex">
            <span>Software</span>
            <span>Artificial Intelligence</span>
            <span>Digital Solutions</span>
          </div>

          <div className="text-[9px] font-bold tracking-[0.3em] text-white/50">
            BUILD • AUTOMATE • GROW
          </div>
        </div>
      </div>

      {/* =========================================================
          SIDE LABEL
      ========================================================= */}

      <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <div className="flex items-center gap-3 [writing-mode:vertical-rl]">
          <span className="text-[8px] font-bold tracking-[0.4em] text-white/35">
            TECHNOLOGY FOR A SMARTER TOMORROW
          </span>

          <span className="h-16 w-px bg-white/30" />
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
            className="h-8 w-px bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}