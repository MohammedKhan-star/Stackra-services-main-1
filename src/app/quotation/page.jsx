"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Crown,
  Globe,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  Gem,
  Rocket,
  Zap,
} from "lucide-react";

import additionalServices from "../../data/additionalServices";

function QuotationContent() {
  const searchParams = useSearchParams();

  const serviceSlug = searchParams.get("serviceSlug") || "";
  const packageSlug = searchParams.get("packageSlug") || "";
  const service = searchParams.get("service") || "STACKRA Service";
  const packageName = searchParams.get("package") || "Package";
  const developmentFee = Number(searchParams.get("price") || 0);

  const requiredServices = {
    domain: true,
    hosting: true,
  };

  const [selectedServices, setSelectedServices] = useState({
    domain: true,
    hosting: true,
    email: false,
    maintenance: false,
  });

  function toggleService(key) {
    if (requiredServices[key]) return;

    setSelectedServices((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  const requiredServicesTotal = useMemo(
    () =>
      Object.entries(requiredServices).reduce((total, [key, required]) => {
        if (!required) return total;
        return total + Number(additionalServices[key]?.price || 0);
      }, 0),
    []
  );

  const optionalServicesTotal = useMemo(
    () =>
      ["email", "maintenance"].reduce((total, key) => {
        if (!selectedServices[key]) return total;
        return total + Number(additionalServices[key]?.price || 0);
      }, 0),
    [selectedServices]
  );

  const annualServicesTotal =
    requiredServicesTotal + optionalServicesTotal;
  const firstYearTotal = developmentFee + annualServicesTotal;
  const renewalTotal = annualServicesTotal;

  const paymentUrl = useMemo(
    () =>
      `/payment?service=${encodeURIComponent(service)}` +
      `&serviceSlug=${encodeURIComponent(serviceSlug)}` +
      `&package=${encodeURIComponent(packageName)}` +
      `&packageSlug=${encodeURIComponent(packageSlug)}` +
      `&price=${encodeURIComponent(firstYearTotal)}` +
      `&domain=1&hosting=1` +
      `&email=${selectedServices.email ? "1" : "0"}` +
      `&maintenance=${selectedServices.maintenance ? "1" : "0"}`,
    [
      service,
      serviceSlug,
      packageName,
      packageSlug,
      firstYearTotal,
      selectedServices,
    ]
  );

  const money = (value) => Number(value || 0).toLocaleString("en-IN");

  const serviceIcons = {
    domain: Globe,
    hosting: Server,
    email: Mail,
    maintenance: Wrench,
  };

  const serviceDescriptions = {
    domain: "Your professional website address, such as yourbusiness.com.",
    hosting:
      "Keeps your website online with secure hosting, SSL and deployment.",
    email:
      "Professional email using your domain, such as info@yourbusiness.com.",
    maintenance:
      "Ongoing website updates, fixes and technical support after launch.",
  };

  const serviceLabels = {
    domain: "Domain",
    hosting: "Hosting & Deployment",
    email: "Business Email",
    maintenance: "Maintenance & Support",
  };

  const backUrl =
    serviceSlug && packageSlug
      ? `/services/${serviceSlug}/${packageSlug}`
      : "/services";

  return (
    <main className="min-h-screen overflow-hidden bg-[#05050d] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[5%] top-[5%] h-[420px] w-[420px] rounded-full bg-purple-700/10 blur-[130px]" />
        <div className="absolute right-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[25%] h-[400px] w-[400px] rounded-full bg-indigo-700/10 blur-[130px]" />
      </div>

      <section className="relative z-10 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_30%),linear-gradient(135deg,#070817,#0b0a1d,#05050d)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:65px_65px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <Link
            href={backUrl}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-amber-300"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to Package
          </Link>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.07] px-5 py-2 text-sm font-bold text-amber-300 shadow-lg shadow-amber-500/5 backdrop-blur-xl">
              <Crown size={16} />
              PREMIUM PROJECT QUOTATION
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Your Project
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Quotation
              </span>
            </h1>

            <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
              Review your development package and select the additional
              services required for your project.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                Service
              </p>
              <p className="mt-2 font-bold text-white">{service}</p>
            </div>

            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-5 text-center backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                Selected Package
              </p>
              <p className="mt-2 font-bold text-amber-300">{packageName}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-purple-950 via-[#11102d] to-[#09091a] px-7 py-7 md:px-8">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.08] text-amber-300">
                      <Sparkles size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/70">
                        STACKRA TECHNOLOGIES
                      </p>
                      <h2 className="mt-1 text-xl font-black">
                        Project Details
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 p-7 sm:grid-cols-2 md:p-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                      Service
                    </p>
                    <p className="mt-2 text-lg font-black text-white">
                      {service}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                      Package
                    </p>
                    <p className="mt-2 text-lg font-black text-amber-300">
                      {packageName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/[0.07] text-purple-300">
                      <Gem size={21} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                        One-Time Cost
                      </p>
                      <h2 className="mt-1 text-2xl font-black">
                        Development Fee
                      </h2>
                      <p className="mt-2 text-sm text-white/40">
                        Professional development of your selected package.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">
                      ₹{money(developmentFee)}
                    </p>
                    <p className="text-xs text-white/30">One-time</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-sm font-bold text-amber-300">
                    <Crown size={15} />
                    Annual Services
                  </div>
                  <h2 className="mt-5 text-2xl font-black">
                    Complete Your Project
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Domain and hosting are required for your website.
                    Business email and maintenance are optional services.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                      Required Services
                    </span>
                    <span className="rounded-full border border-emerald-300/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                      Included
                    </span>
                  </div>

                  <div className="space-y-4">
                    {["domain", "hosting"].map((key) => {
                      const item = additionalServices[key];
                      const Icon = serviceIcons[key] || CheckCircle2;

                      return (
                        <div
                          key={key}
                          className="w-full rounded-2xl border border-amber-300/15 bg-gradient-to-r from-amber-300/[0.05] to-purple-500/[0.03] p-5 shadow-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-yellow-500 text-black">
                              <Check size={17} strokeWidth={3} />
                            </div>

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-amber-300">
                              <Icon size={20} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-black text-white">
                                  {serviceLabels[key]}
                                </h3>
                                <span className="rounded-full border border-emerald-300/10 bg-emerald-400/[0.06] px-2 py-0.5 text-[10px] font-black uppercase text-emerald-300">
                                  Required
                                </span>
                              </div>
                              <p className="mt-1 text-sm leading-5 text-white/40">
                                {serviceDescriptions[key]}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="font-black text-white">
                                ₹{money(item?.price)}
                              </p>
                              <p className="text-xs text-white/30">/ year</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                      Optional Services
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold text-white/40">
                      Choose if needed
                    </span>
                  </div>

                  <div className="space-y-4">
                    {["email", "maintenance"].map((key) => {
                      const item = additionalServices[key];
                      const Icon = serviceIcons[key] || CheckCircle2;
                      const selected = selectedServices[key];

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleService(key)}
                          className={`w-full rounded-2xl border p-5 text-left transition duration-300 ${
                            selected
                              ? "border-amber-300/30 bg-amber-300/[0.06] shadow-lg shadow-amber-500/5"
                              : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 ${
                                selected
                                  ? "border-amber-300 bg-gradient-to-br from-amber-300 to-yellow-500 text-black"
                                  : "border-white/20 bg-white/[0.03]"
                              }`}
                            >
                              {selected && (
                                <Check size={17} strokeWidth={3} />
                              )}
                            </div>

                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                                selected
                                  ? "border-amber-300/20 bg-amber-300/10 text-amber-300"
                                  : "border-white/10 bg-white/[0.04] text-white/35"
                              }`}
                            >
                              <Icon size={20} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-black text-white">
                                  {serviceLabels[key]}
                                </h3>
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-bold uppercase text-white/35">
                                  Optional
                                </span>
                              </div>
                              <p className="mt-1 text-sm leading-5 text-white/40">
                                {serviceDescriptions[key]}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="font-black text-white">
                                ₹{money(item?.price)}
                              </p>
                              <p className="text-xs text-white/30">/ year</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-purple-300/15 bg-purple-500/[0.05] p-5">
                    <p className="font-black text-white">Required Services</p>
                    <p className="mt-1 text-xs text-white/35">
                      Domain + Hosting
                    </p>
                    <p className="mt-2 text-xl font-black text-purple-300">
                      ₹{money(requiredServicesTotal)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="font-black text-white">Optional Services</p>
                    <p className="mt-1 text-xs text-white/35">
                      Email + Maintenance
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      ₹{money(optionalServicesTotal)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-300/[0.08] to-purple-500/[0.04] p-5">
                  <div>
                    <p className="font-black text-white">
                      Annual Services Total
                    </p>
                    <p className="mt-1 text-xs text-white/35">
                      Renewable every year
                    </p>
                  </div>
                  <p className="text-2xl font-black text-amber-300">
                    ₹{money(annualServicesTotal)}
                  </p>
                </div>
              </div>
            </div>

            <aside>
              <div className="sticky top-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-2xl">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-purple-950 via-[#11102d] to-[#080817] p-7">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.08] text-amber-300">
                      <Crown size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300/60">
                        STACKRA TECHNOLOGIES
                      </p>
                      <h2 className="text-xl font-black">Cost Summary</h2>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div className="space-y-5">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm text-white/45">Development</span>
                      <span className="font-black text-white">
                        ₹{money(developmentFee)}
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-white/45">
                          Required Services
                        </span>
                        <span className="font-black text-white">
                          ₹{money(requiredServicesTotal)}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/25">
                        Domain + Hosting
                      </p>
                    </div>

                    {optionalServicesTotal > 0 && (
                      <div>
                        <div className="flex justify-between gap-4">
                          <span className="text-sm text-white/45">
                            Optional Services
                          </span>
                          <span className="font-black text-white">
                            ₹{money(optionalServicesTotal)}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-white/25">
                          Selected by you
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.10] to-purple-500/[0.05] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                      First-Year Total
                    </p>
                    <p className="mt-2 text-4xl font-black text-white">
                      ₹{money(firstYearTotal)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/40">
                      Development + required + selected optional services
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-purple-300/15 bg-purple-500/[0.05] p-5">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="font-black text-white">
                          Year-2 Renewal
                        </p>
                        <p className="mt-1 text-xs text-white/35">
                          Annual services only
                        </p>
                      </div>
                      <p className="text-xl font-black text-purple-300">
                        ₹{money(renewalTotal)}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={paymentUrl}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-6 py-4 font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5"
                  >
                    Proceed to Payment
                    <ArrowRight size={18} />
                  </Link>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-300/10 bg-emerald-400/[0.035] p-4">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />
                    <p className="text-xs leading-5 text-white/40">
                      Domain and hosting are required for website deployment.
                      Email and maintenance can be added whenever required.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-white/[0.015] py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                Icon: Globe,
                title: "Domain",
                text: "Your website address, such as yourbusiness.com. Required for your website.",
                color: "text-amber-300",
              },
              {
                Icon: Server,
                title: "Hosting & Deployment",
                text: "Keeps your website online with hosting, SSL and deployment. Required for launch.",
                color: "text-purple-300",
              },
              {
                Icon: Mail,
                title: "Business Email",
                text: "Optional professional email using your business domain.",
                color: "text-blue-300",
              },
              {
                Icon: Wrench,
                title: "Maintenance",
                text: "Optional ongoing updates, fixes and technical support.",
                color: "text-emerald-300",
              },
            ].map(({ Icon, title, text: description, color }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1"
              >
                <Icon className={color} size={23} />
                <h3 className="mt-4 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-300/20 bg-gradient-to-br from-purple-950 via-[#11102d] to-[#070817] px-8 py-16 text-center shadow-2xl shadow-purple-950/40 md:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.08] text-amber-300">
                <Rocket size={27} />
              </div>

              <h2 className="mt-7 text-3xl font-black md:text-5xl">
                Build Your Digital
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Presence With STACKRA
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/45">
                Your development package includes the required domain and
                hosting services. Add professional email or ongoing
                maintenance whenever you need them.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  href={paymentUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 py-4 font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-1"
                >
                  Proceed to Payment
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={backUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:border-amber-300/20 hover:bg-white/10"
                >
                  <ArrowLeft size={18} />
                  Back to Package
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-white/30">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  Professional Development
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={14} />
                  Modern Technology
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles size={14} />
                  Premium Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function QuotationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#05050d] text-white">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-amber-300" />
            <p className="mt-4 font-semibold text-white/60">
              Loading quotation...
            </p>
          </div>
        </main>
      }
    >
      <QuotationContent />
    </Suspense>
  );
}
