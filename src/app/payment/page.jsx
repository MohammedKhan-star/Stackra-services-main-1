"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Loader2,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const service = searchParams.get("service") || "STACKRA Service";
  const serviceSlug = searchParams.get("serviceSlug") || "";
  const packageName = searchParams.get("package") || "Package";
  const packageSlug = searchParams.get("packageSlug") || "";
  const price = Number(searchParams.get("price") || 0);

  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  }, [price]);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      if (!price || price <= 0) {
        setError("Invalid payment amount.");
        setLoading(false);
        return;
      }

      const razorpayLoaded = await loadRazorpay();

      if (!razorpayLoaded) {
        setError("Unable to load Razorpay Checkout.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price,
          service,
          serviceSlug,
          packageName,
          packageSlug,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to create payment order.");
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "STACKRA TECHNOLOGIES",
        description: `${service} - ${packageName}`,
        order_id: data.orderId,

        theme: {
          color: "#1d4ed8",
        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        notes: {
          service: service,
          package: packageName,
        },

        handler: async function (paymentResponse) {
          try {
            setLoading(true);

            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,

                service,
                serviceSlug,
                packageName,
                packageSlug,
                amount: price,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(
                verifyData.message || "Payment verification failed."
              );
            }

            window.location.href =
              `/payment/success?paymentId=${encodeURIComponent(
                paymentResponse.razorpay_payment_id
              )}&orderId=${encodeURIComponent(
                paymentResponse.razorpay_order_id
              )}&service=${encodeURIComponent(
                service
              )}&package=${encodeURIComponent(packageName)}`;
          } catch (verificationError) {
            console.error(verificationError);

            setError(
              verificationError.message ||
                "Payment verification failed."
            );

            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.error("Razorpay payment failed:", response);

        setError(
          response.error?.description ||
            "Payment failed. Please try again."
        );

        setLoading(false);
      });

      razorpay.open();
    } catch (paymentError) {
      console.error("PAYMENT ERROR:", paymentError);

      setError(
        paymentError.message ||
          "Something went wrong while starting payment."
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href={`/quotation?service=${encodeURIComponent(
              service
            )}&serviceSlug=${encodeURIComponent(
              serviceSlug
            )}&package=${encodeURIComponent(
              packageName
            )}&packageSlug=${encodeURIComponent(
              packageSlug
            )}&price=${price}`}
            className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Quotation
          </Link>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <ShieldCheck
              size={20}
              className="text-blue-700"
            />
            Secure Checkout
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            <Lock size={16} />
            SECURE PAYMENT
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Complete Your Payment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Complete your STACKRA TECHNOLOGIES project payment
            securely through Razorpay.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          {/* Left */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Project
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  {service}
                </h2>

                <p className="mt-1 text-slate-500">
                  {packageName} Package
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Service
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {service}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Package
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {packageName}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">
                Payment Method
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Select your preferred payment method.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMethod("upi")}
                  className={`rounded-2xl border-2 p-5 text-left transition ${
                    method === "upi"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <Smartphone
                    size={26}
                    className="text-blue-700"
                  />

                  <p className="mt-3 font-bold text-slate-900">
                    UPI
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Google Pay, PhonePe, Paytm and more
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={`rounded-2xl border-2 p-5 text-left transition ${
                    method === "card"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <CreditCard
                    size={26}
                    className="text-blue-700"
                  />

                  <p className="mt-3 font-bold text-slate-900">
                    Cards
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Credit and debit cards
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Payment Summary
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  {service}
                </span>

                <span className="font-semibold text-slate-900">
                  {formattedPrice}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Package
                </span>

                <span className="font-semibold text-slate-900">
                  {packageName}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-end justify-between gap-4">
                  <span className="font-bold text-slate-700">
                    Amount Payable
                  </span>

                  <span className="text-3xl font-black text-blue-700">
                    {formattedPrice}
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-700 px-6 py-4 text-lg font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2
                    size={21}
                    className="animate-spin"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle2 size={21} />
                  Pay {formattedPrice}
                </>
              )}
            </button>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-green-600"
              />

              <p className="text-xs leading-5 text-slate-600">
                Your payment is securely processed by
                Razorpay. STACKRA TECHNOLOGIES does not
                store your card or UPI credentials.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}