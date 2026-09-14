"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Instagram,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
  Youtube,
} from "lucide-react";

/* =========================================================
   INSTAGRAM REELS
   ========================================================= */

const instagramVideos = [
  {
    id: "DclIHB0yFwZ",
    title: "STACKRA TECHNOLOGIES — Company Introduction",
    description:
      "Discover STACKRA TECHNOLOGIES, our vision, technology solutions and digital products.",
    url: "https://www.instagram.com/stackra_technologies/reel/DclIHB0yFwZ/",
  },
  {
    id: "DcqAP2ey-dN",
    title: "Technology & Innovation",
    description:
      "Explore how STACKRA uses modern technology to solve real business problems.",
    url: "https://www.instagram.com/stackra_technologies/reel/DcqAP2ey-dN/",
  },
  {
    id: "DcgDfXQSi7V",
    title: "STACKRA AI",
    description:
      "Discover intelligent business automation and AI-powered solutions from STACKRA.",
    url: "https://www.instagram.com/stackra_technologies/reel/DcgDfXQSi7V/",
  },
];

/* =========================================================
   YOUTUBE SHORTS
   ========================================================= */

const youtubeVideos = [
  {
    id: "QsGs5a9wV6Q",
    title: "STACKRA TECHNOLOGIES",
    description:
      "Official STACKRA TECHNOLOGIES video introducing our technology and digital solutions.",
    url: "https://www.youtube.com/shorts/QsGs5a9wV6Q",
  },
  {
    id: "ufMzEC_sJHw",
    title: "STACKRA TECHNOLOGIES",
    description:
      "Explore STACKRA TECHNOLOGIES, innovation, digital products and modern business solutions.",
    url: "https://www.youtube.com/shorts/ufMzEC_sJHw",
  },
  {
    id: "qX-6VOZ-nNY",
    title: "STACKRA TECHNOLOGIES",
    description:
      "Discover technology, AI innovation and digital solutions from STACKRA TECHNOLOGIES.",
    url: "https://www.youtube.com/shorts/qX-6VOZ-nNY",
  },
];

/* =========================================================
   YOUTUBE HELPERS
   ========================================================= */

function getYouTubeId(url) {
  if (!url) return null;

  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return null;
}

function getYouTubeThumbnail(url) {
  const videoId = getYouTubeId(url);

  if (!videoId) return "";

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/* =========================================================
   INSTAGRAM SCRIPT
   ========================================================= */

function loadInstagramScript() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.instgrm?.Embeds) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", resolve, {
        once: true,
      });

      return;
    }

    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      resolve();
    };

    document.body.appendChild(script);
  });
}

/* =========================================================
   INSTAGRAM CARD
   ========================================================= */

function InstagramCard({ video, mounted }) {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;

    async function initializeInstagram() {
      await loadInstagramScript();

      if (cancelled) return;

      if (
        window.instgrm?.Embeds &&
        embedContainerRef.current
      ) {
        window.instgrm.Embeds.process();
      }
    }

    initializeInstagram();

    return () => {
      cancelled = true;
    };
  }, [mounted]);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_25px_70px_rgba(236,72,153,0.12)]">
      <div
        ref={embedContainerRef}
        className="relative flex aspect-[9/16] items-center justify-center overflow-hidden bg-white"
      >
        {!mounted ? (
          <div className="flex h-full w-full items-center justify-center bg-slate-100">
            <div className="text-center">
              <Instagram
                size={34}
                className="mx-auto mb-4 text-pink-500"
              />

              <p className="text-sm font-bold text-slate-600">
                Loading Reel...
              </p>
            </div>
          </div>
        ) : (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={video.url}
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              borderRadius: "3px",
              boxShadow: "none",
              margin: 0,
              maxWidth: "100%",
              minWidth: "100%",
              padding: 0,
              width: "100%",
            }}
          >
            <div className="flex min-h-[500px] items-center justify-center px-6 text-center">
              <div>
                <Instagram
                  size={34}
                  className="mx-auto mb-4 text-pink-500"
                />

                <p className="text-sm font-bold text-slate-700">
                  Loading Instagram Reel...
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  STACKRA TECHNOLOGIES
                </p>
              </div>
            </div>
          </blockquote>
        )}

        <div className="pointer-events-none absolute left-4 top-4 z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl backdrop-blur-xl">
            <Instagram size={14} />
            Instagram Reel
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-slate-500">
          {video.description}
        </p>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition-colors hover:text-pink-600"
        >
          <Play size={15} fill="currentColor" />
          Watch Reel
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   YOUTUBE CARD
   ========================================================= */

function YouTubeCard({
  video,
  isActive,
  onPlay,
}) {
  const [muted, setMuted] = useState(true);

  const videoId = getYouTubeId(video.url);

  const thumbnail = getYouTubeThumbnail(video.url);

  if (!videoId) return null;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_25px_70px_rgba(239,68,68,0.12)]">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        {isActive ? (
          <>
            <iframe
              key={`${videoId}-${muted}`}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />

            <div className="absolute left-4 top-4 z-30">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl backdrop-blur-xl">
                <Youtube size={14} />
                Playing
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMuted((value) => !value)}
              aria-label={
                muted
                  ? "Unmute video"
                  : "Mute video"
              }
              className="absolute bottom-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white shadow-xl backdrop-blur-xl transition-all hover:bg-white hover:text-slate-950"
            >
              {muted ? (
                <VolumeX size={18} />
              ) : (
                <Volume2 size={18} />
              )}
            </button>
          </>
        ) : (
          <>
            <img
              src={thumbnail}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/85" />

            <div className="absolute left-4 top-4 z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl backdrop-blur-xl">
                <Youtube size={14} />
                YouTube Short
              </div>
            </div>

            <button
              type="button"
              onClick={() => onPlay(video.id)}
              aria-label={`Play ${video.title}`}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/95 text-slate-950 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white">
                <Play
                  size={30}
                  fill="currentColor"
                  className="ml-1"
                />
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5">
              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.3em] text-red-300">
                STACKRA TECHNOLOGIES
              </p>

              <h3 className="text-lg font-black leading-tight text-white">
                {video.title}
              </h3>
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-slate-500">
          {video.description}
        </p>

        <button
          type="button"
          onClick={() => onPlay(video.id)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition-colors hover:text-red-600"
        >
          <Play
            size={15}
            fill="currentColor"
          />

          {isActive
            ? "Playing Video"
            : "Play Video"}
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function VideosSection() {
  const sectionRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  const [activeYouTube, setActiveYouTube] =
    useState(null);

  const [hasAutoPlayed, setHasAutoPlayed] =
    useState(false);

  /* -------------------------------------------------------
     CLIENT MOUNT
     ------------------------------------------------------- */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* -------------------------------------------------------
     AUTOPLAY FIRST VIDEO WHEN SECTION ENTERS VIEW
     ------------------------------------------------------- */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (
            entry.isIntersecting &&
            !hasAutoPlayed
          ) {
            setActiveYouTube(
              youtubeVideos[0]?.id || null
            );

            setHasAutoPlayed(true);
          }
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasAutoPlayed]);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-pink-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
            ================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles
              size={14}
              className="text-cyan-500"
            />

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-700">
              STACKRA MEDIA
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            See STACKRA
            <span className="block text-cyan-500">
              In Action.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Explore STACKRA TECHNOLOGIES through our
            latest videos, technology updates, product
            demonstrations, AI innovations and company stories.
          </p>
        </div>

        {/* =================================================
            YOUTUBE
            ================================================= */}

        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Youtube size={21} />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-950">
                  YouTube
                </h3>

                <p className="text-sm text-slate-500">
                  Watch directly on STACKRA
                </p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@STACKRATECHNOLOGIES"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm font-black text-slate-900 transition-colors hover:text-red-600 sm:flex"
            >
              Visit Channel
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video) => (
              <YouTubeCard
                key={video.id}
                video={video}
                isActive={
                  activeYouTube === video.id
                }
                onPlay={setActiveYouTube}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            INSTAGRAM
            ================================================= */}

        <div className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                <Instagram size={21} />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-950">
                  Instagram Reels
                </h3>

                <p className="text-sm text-slate-500">
                  Real STACKRA Instagram previews
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/stackra_technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm font-black text-slate-900 transition-colors hover:text-pink-600 sm:flex"
            >
              Visit Instagram
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instagramVideos.map((video) => (
              <InstagramCard
                key={video.id}
                video={video}
                mounted={mounted}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            SOCIAL CTA
            ================================================= */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:flex-row md:p-9">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
              FOLLOW STACKRA
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-950">
              Stay connected with our latest work.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Follow STACKRA TECHNOLOGIES for new
              products, projects, AI innovations,
              technology updates and business solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/stackra_technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition-all hover:bg-pink-500"
            >
              <Instagram size={17} />
              Instagram
              <ExternalLink size={14} />
            </a>

            <a
              href="https://www.youtube.com/@STACKRATECHNOLOGIES"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 transition-all hover:border-red-200 hover:text-red-600"
            >
              <Youtube size={17} />
              YouTube
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}