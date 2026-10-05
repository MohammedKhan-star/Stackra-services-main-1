"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function QuotationButton() {
  return (
    <Link
      href="/quotation"
      className="group fixed bottom-6 left-6 z-50 hidden items-center gap-3 rounded-2xl border border-amber-300/30 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 py-3.5 font-black text-black shadow-2xl shadow-amber-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-amber-500/40 sm:flex"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/10">
        <FileText size={19} />
      </span>

      <span>
        <span className="block text-xs font-bold uppercase tracking-wider opacity-60">
          STACKRA
        </span>

        <span className="flex items-center gap-1 text-sm">
          Get Quotation
          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </span>
      </span>
    </Link>
  );
}