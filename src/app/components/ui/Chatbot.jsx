"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Bot,
  X,
  Send,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  FileText,
} from "lucide-react";

import services from "@/data/services";
import servicePackages from "@/data/servicePackages";
import additionalServices from "@/data/additionalServices";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! 👋 Welcome to STACKRA TECHNOLOGIES. I'm STACKRA AI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  /*
  ============================================================
  QUICK START OPTIONS
  ============================================================
  */

  const quickQuestions = [
    {
      label: "💰 Show Prices",
      question: "Show me your prices",
    },
    {
      label: "🛠️ Explore Services",
      question: "Show me your services",
    },
    {
      label: "📋 Get Quotation",
      question: "I need a quotation",
    },
    {
      label: "💬 Talk to STACKRA",
      question: "How can I contact STACKRA?",
    },
  ];

  /*
  ============================================================
  FORMAT PRICE
  ============================================================
  */

  function formatPrice(price) {
    return `₹${Number(price).toLocaleString("en-IN")}`;
  }

  /*
  ============================================================
  FIND SERVICE
  ============================================================
  */

  function findServiceBySlug(slug) {
    return services.find(
      (service) => service.slug === slug
    );
  }

  /*
  ============================================================
  FIND SERVICE FROM MESSAGE
  ============================================================
  */

  function findServiceFromMessage(message) {
    const text = message.toLowerCase();

    const serviceMap = [
      {
        keywords: [
          "school",
          "school website",
          "school solution",
          "education",
          "college",
          "admission",
          "student portal",
        ],
        slug: "education-technology",
      },

      {
        keywords: [
          "lms",
          "learning management",
          "online learning",
          "course platform",
        ],
        slug: "learning-management-system",
      },

      {
        keywords: [
          "restaurant",
          "restaurant website",
          "food",
          "cafe",
          "hotel",
          "food business",
        ],
        slug: "restaurant-food-solutions",
      },

      {
        keywords: [
          "ecommerce",
          "e-commerce",
          "online store",
          "online shop",
          "shopping website",
        ],
        slug: "ecommerce-solutions",
      },

      {
        keywords: [
          "crm",
          "customer management",
          "customer relationship",
        ],
        slug: "crm-solutions",
      },

      {
        keywords: [
          "erp",
          "business management",
          "business management system",
        ],
        slug: "erp-solutions",
      },

      {
        keywords: [
          "project management",
          "project software",
          "task management",
        ],
        slug: "project-management",
      },

      {
        keywords: [
          "portfolio",
          "portfolio website",
          "personal website",
        ],
        slug: "portfolio-websites",
      },

      {
        keywords: [
          "business website",
          "business website development",
          "corporate website",
          "corporate",
          "company website",
        ],
        slug: "business-corporate-websites",
      },

      {
        keywords: [
          "web development",
          "website development",
          "website",
          "web design",
        ],
        slug: "web-development",
      },
    ];

    for (const item of serviceMap) {
      if (
        item.keywords.some((keyword) =>
          text.includes(keyword)
        )
      ) {
        return findServiceBySlug(item.slug);
      }
    }

    return null;
  }

  /*
  ============================================================
  SERVICES RESPONSE
  ============================================================
  */

  function getServicesResponse() {
    const serviceNames = services
      .map((service) => `• ${service.title}`)
      .join("\n");

    return `STACKRA TECHNOLOGIES provides:

${serviceNames}

You can ask me about any service to see its packages and pricing.`;
  }

  /*
  ============================================================
  PACKAGE RESPONSE
  ============================================================
  */

  function getPackageResponse(service) {
    if (!service) {
      return "Please tell me which STACKRA service you are interested in.";
    }

    const packages = servicePackages[service.slug];

    if (!packages) {
      return `I don't currently have package pricing available for ${service.title}.

You can request a quotation for a customized solution.`;
    }

    const packageLines = Object.entries(packages)
      .map(([key, pkg]) => {
        const popular = pkg.popular
          ? " ⭐ Popular"
          : "";

        return `${pkg.name}${popular} — ${formatPrice(
          pkg.price
        )}`;
      })
      .join("\n");

    return `${service.title}

${service.desc}

Available packages:

${packageLines}

You can ask me:
"What's included in the Intermediate package?"`;
  }

  /*
  ============================================================
  PACKAGE FEATURES
  ============================================================
  */

  function getPackageFeatureResponse(
    service,
    message
  ) {
    if (!service) {
      return null;
    }

    const packages = servicePackages[service.slug];

    if (!packages) {
      return null;
    }

    const text = message.toLowerCase();

    let selectedPackage = null;

    if (
      text.includes("basic") ||
      text.includes("starter")
    ) {
      selectedPackage = packages.basic;
    }

    if (
      text.includes("intermediate") ||
      text.includes("standard")
    ) {
      selectedPackage = packages.intermediate;
    }

    if (
      text.includes("advanced") ||
      text.includes("premium")
    ) {
      selectedPackage = packages.advanced;
    }

    if (!selectedPackage) {
      return null;
    }

    const features = selectedPackage.features
      .map((feature) => `✓ ${feature}`)
      .join("\n");

    return `${service.title} — ${selectedPackage.name}

Price: ${formatPrice(selectedPackage.price)}

${selectedPackage.description}

Included features:

${features}`;
  }

  /*
  ============================================================
  ADDITIONAL SERVICES
  ============================================================
  */

  function getAdditionalServicesResponse() {
    return `Additional STACKRA services:

🌐 Domain
${formatPrice(
      additionalServices.domain.price
    )}/year

☁️ Hosting & Deployment
${formatPrice(
      additionalServices.hosting.price
    )}/year

📧 Business Email
${formatPrice(
      additionalServices.email.price
    )}/year

🛠️ Maintenance & Support
${formatPrice(
      additionalServices.maintenance.price
    )}/year`;
  }

  /*
  ============================================================
  GENERATE RESPONSE
  ============================================================
  */

  function generateResponse(message) {
    const text = message.toLowerCase();

    /*
    ----------------------------------------------------------
    GREETING
    ----------------------------------------------------------
    */

    if (
      text === "hi" ||
      text === "hello" ||
      text === "hey" ||
      text.includes("good morning") ||
      text.includes("good evening")
    ) {
      return "Hello! 👋 I'm STACKRA AI. I can help you with services, packages, pricing and project quotations.";
    }

    /*
    ----------------------------------------------------------
    SERVICES
    ----------------------------------------------------------
    */

    if (
      text.includes("show me your services") ||
      text.includes("what services") ||
      text.includes("what do you offer") ||
      text.includes("services available") ||
      text === "services"
    ) {
      return getServicesResponse();
    }

    /*
    ----------------------------------------------------------
    QUOTATION
    ----------------------------------------------------------
    */

    if (
      text.includes("quotation") ||
      text.includes("quote") ||
      text.includes("project enquiry") ||
      text.includes("project inquiry")
    ) {
      return "Absolutely! 📋 You can start your STACKRA project quotation now. Select your service and package, then tell us about your requirements.";
    }

    /*
    ----------------------------------------------------------
    CONTACT
    ----------------------------------------------------------
    */

    if (
      text.includes("contact") ||
      text.includes("talk to stackra") ||
      text.includes("phone") ||
      text.includes("whatsapp")
    ) {
      return "You can contact the STACKRA TECHNOLOGIES team through the Contact section or WhatsApp. You can also start a project quotation directly.";
    }

    /*
    ----------------------------------------------------------
    DOMAIN / HOSTING / EMAIL
    ----------------------------------------------------------
    */

    if (
      text.includes("domain") ||
      text.includes("hosting") ||
      text.includes("business email") ||
      text.includes("maintenance")
    ) {
      return getAdditionalServicesResponse();
    }

    /*
    ----------------------------------------------------------
    GENERAL PRICE REQUEST
    ----------------------------------------------------------
    */

    if (
      text.includes("show me your prices") ||
      text.includes("show prices") ||
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("how much")
    ) {
      const service =
        findServiceFromMessage(message);

      if (service) {
        return getPackageResponse(service);
      }

      return `STACKRA pricing depends on the service and package.

For example:

Web Development starts from ${formatPrice(
        servicePackages["web-development"]?.basic?.price
      )}

Portfolio Websites start from ${formatPrice(
        servicePackages["portfolio-websites"]?.basic?.price
      )}

Business Websites start from ${formatPrice(
        servicePackages[
          "business-corporate-websites"
        ]?.basic?.price
      )}

Ask me something like:

"School website price"
"CRM price"
"E-commerce price"`;
    }

    /*
    ----------------------------------------------------------
    PACKAGE FEATURES
    ----------------------------------------------------------
    */

    const service =
      findServiceFromMessage(message);

    if (service) {
      const featureResponse =
        getPackageFeatureResponse(
          service,
          message
        );

      if (featureResponse) {
        return featureResponse;
      }

      return getPackageResponse(service);
    }

    /*
    ----------------------------------------------------------
    AI
    ----------------------------------------------------------
    */

    if (
      text.includes("ai") ||
      text.includes("artificial intelligence")
    ) {
      return "STACKRA provides AI-powered and intelligent software solutions. Tell me what you want to automate, and I can help identify a suitable STACKRA solution.";
    }

    /*
    ----------------------------------------------------------
    DEFAULT
    ----------------------------------------------------------
    */

    return `I can help you with:

• STACKRA services
• Package prices
• Package features
• Website solutions
• CRM / ERP
• E-commerce
• LMS
• School solutions
• Restaurant solutions
• Domain & hosting
• Project quotation

What would you like to know?`;
  }

  /*
  ============================================================
  SEND MESSAGE
  ============================================================
  */

  function handleSend(customMessage = "") {
    const message = (
      customMessage || input
    ).trim();

    if (!message || typing) {
      return;
    }

    setShowSuggestions(false);

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response =
        generateResponse(message);

      setMessages((previous) => [
        ...previous,
        {
          role: "bot",
          text: response,
        },
      ]);

      setTyping(false);
    }, 450);
  }

  /*
  ============================================================
  QUICK QUESTION
  ============================================================
  */

  function handleQuickQuestion(question) {
    setShowSuggestions(false);
    handleSend(question);
  }

  /*
  ============================================================
  BACK TO SUGGESTIONS
  ============================================================
  */

  function handleBackToSuggestions() {
    setShowSuggestions(true);
  }

  /*
  ============================================================
  CHATBOT UI
  ============================================================
  */

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      {open && (
        <div
          className="
            fixed
            bottom-[5.5rem]
            right-3
            z-[100]
            flex
            w-[calc(100vw-1.5rem)]
            max-w-[410px]
            flex-col
            overflow-hidden
            rounded-[1.5rem]
            border
            border-amber-300/20
            bg-[#070817]
            text-white
            shadow-2xl
            shadow-black/60
            sm:right-5
            sm:bottom-24
            sm:w-[calc(100vw-2.5rem)]
            sm:rounded-[2rem]
          "
          style={{
            maxHeight: "calc(100dvh - 7rem)",
          }}
        >

          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              relative
              shrink-0
              overflow-hidden
              border-b
              border-white/10
              bg-gradient-to-br
              from-purple-950
              via-[#11102d]
              to-[#080817]
              px-4
              py-4
              sm:p-5
            "
          >

            <div
              className="
                absolute
                -right-10
                -top-10
                h-28
                w-28
                rounded-full
                bg-amber-400/10
                blur-3xl
                sm:h-32
                sm:w-32
              "
            />

            <div className="relative flex items-center justify-between">

              <div className="flex min-w-0 items-center gap-3">

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-amber-300/20
                    bg-amber-300/[0.08]
                    text-amber-300
                    sm:h-12
                    sm:w-12
                    sm:rounded-2xl
                  "
                >

                  <Bot size={22} />

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-400
                      text-[8px]
                      font-black
                      text-black
                    "
                  >
                    •
                  </span>

                </div>

                <div className="min-w-0">

                  <div className="flex items-center gap-2">

                    <p
                      className="
                        truncate
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-amber-300/70
                        sm:text-xs
                      "
                    >
                      STACKRA AI
                    </p>

                    <Sparkles
                      size={12}
                      className="shrink-0 text-amber-300"
                    />

                  </div>

                  <h3
                    className="
                      truncate
                      text-base
                      font-black
                      sm:text-lg
                    "
                  >
                    Virtual Assistant
                  </h3>

                  <p
                    className="
                      truncate
                      text-[9px]
                      text-white/35
                      sm:text-[10px]
                    "
                  >
                    Services • Packages • Pricing
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close STACKRA AI"
                className="
                  ml-2
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/[0.05]
                  text-white/50
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={19} />
              </button>

            </div>

          </div>

          {/* =================================================
              MESSAGES
          ================================================== */}

          <div
            className="
              min-h-0
              flex-1
              space-y-4
              overflow-y-auto
              overscroll-contain
              px-4
              py-4
              sm:p-5
            "
          >

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[88%]
                    whitespace-pre-line
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    leading-6
                    sm:max-w-[85%]
                    ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-amber-300 to-yellow-500 font-semibold text-black"
                        : "border border-white/10 bg-white/[0.05] text-white/75"
                    }
                  `}
                >
                  {message.text}
                </div>

              </div>
            ))}

            {/* =================================================
                TYPING INDICATOR
            ================================================== */}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300" />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300"
                    style={{ animationDelay: "120ms" }}
                  />

                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300"
                    style={{ animationDelay: "240ms" }}
                  />

                </div>
              </div>
            )}

            {/* =================================================
                QUICK START SUGGESTIONS
            ================================================== */}

            {showSuggestions && (
              <div className="space-y-2">

                {quickQuestions.map((item) => (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() =>
                      handleQuickQuestion(
                        item.question
                      )
                    }
                    className="
                      group
                      flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-white/75
                      transition
                      duration-200
                      hover:border-amber-300/30
                      hover:bg-amber-300/[0.08]
                      hover:text-amber-200
                      active:scale-[0.99]
                    "
                  >

                    <span>
                      {item.label}
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/[0.05]
                        text-white/40
                        transition
                        group-hover:bg-amber-300
                        group-hover:text-black
                      "
                    >
                      <ArrowRight size={14} />
                    </span>

                  </button>
                ))}

              </div>
            )}

            {/* =================================================
                BACK TO SUGGESTIONS
            ================================================== */}

            {!showSuggestions && messages.length > 1 && (
              <button
                type="button"
                onClick={handleBackToSuggestions}
                className="
                  flex
                  min-h-[42px]
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-white/50
                  transition
                  hover:border-amber-300/30
                  hover:bg-amber-300/[0.06]
                  hover:text-amber-200
                "
              >
                <ArrowLeft size={14} />
                Back to suggestions
              </button>
            )}

          </div>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div
            className="
              grid
              shrink-0
              grid-cols-2
              gap-2
              border-t
              border-white/10
              p-3
              sm:p-4
            "
          >

            <Link
              href="/quotation"
              onClick={() => setOpen(false)}
              className="
                flex
                min-h-[46px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-amber-300
                to-yellow-500
                px-2
                text-center
                text-[11px]
                font-black
                text-black
                transition
                hover:-translate-y-0.5
                sm:text-xs
              "
            >
              <FileText size={15} />
              <span>Get Quotation</span>
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                flex
                min-h-[46px]
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-2
                text-center
                text-[11px]
                font-bold
                text-white
                transition
                hover:bg-white/[0.08]
                sm:text-xs
              "
            >
              <MessageCircle size={15} />
              <span>Contact</span>
            </Link>

          </div>

          {/* =================================================
              INPUT
          ================================================== */}

          <div
            className="
              shrink-0
              border-t
              border-white/10
              p-3
              pb-[calc(0.75rem+env(safe-area-inset-bottom))]
              sm:p-4
            "
          >

            <div
              className="
                flex
                min-h-[52px]
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-1.5
                focus-within:border-amber-300/30
              "
            >

              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onFocus={() => {
                  setShowSuggestions(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask STACKRA AI..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-2
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                "
              />

              <button
                type="button"
                onClick={() => handleSend()}
                disabled={typing}
                aria-label="Send message"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-gradient-to-r
                  from-amber-300
                  to-yellow-500
                  text-black
                  transition
                  hover:scale-105
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <Send size={17} />
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          FLOATING AI BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={() =>
          setOpen((value) => !value)
        }
        aria-label="Open STACKRA AI chatbot"
        className="
          group
          fixed
          bottom-5
          right-4
          z-[100]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-amber-300/30
          bg-gradient-to-br
          from-purple-900
          via-purple-800
          to-[#080817]
          text-amber-300
          shadow-2xl
          shadow-purple-900/40
          transition
          duration-300
          hover:-translate-y-1
          hover:scale-105
          sm:bottom-6
          sm:right-5
          sm:h-16
          sm:w-16
        "
      >

        <span
          className="
            absolute
            inset-0
            rounded-2xl
            bg-amber-400/10
            opacity-0
            blur-xl
            transition
            group-hover:opacity-100
          "
        />

        <span className="relative">
          {open ? (
            <X size={24} />
          ) : (
            <Bot size={24} />
          )}
        </span>

        {!open && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-amber-300
              text-[9px]
              font-black
              text-black
            "
          >
            AI
          </span>
        )}

      </button>

      {/* =====================================================
          DESKTOP LABEL
      ====================================================== */}

      {!open && (
        <div
          className="
            pointer-events-none
            fixed
            bottom-[1.7rem]
            right-[5.5rem]
            z-[99]
            hidden
            rounded-lg
            border
            border-white/10
            bg-[#080817]
            px-3
            py-2
            text-xs
            font-bold
            text-white/70
            shadow-xl
            sm:block
          "
        >
          Ask STACKRA AI
        </div>
      )}
    </>
  );
}