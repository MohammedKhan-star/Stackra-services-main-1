
"use client";

import Link from "next/link";
import { BookOpen, ArrowLeft, FileText } from "lucide-react";

const modules = [
  "Introduction to Python",
  "Variables and Data Types",
  "Operators and Expressions",
  "Conditional Statements",
  "Loops",
  "Functions",
  "Lists, Tuples, Sets and Dictionaries",
  "File Handling",
  "Exception Handling",
  "Object-Oriented Programming",
  "Python Mini Project",
];

export default function SyllabusPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/academy/dashboard"
          className="inline-flex items-center gap-2 text-blue-400"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <header className="my-8">
          <BookOpen className="mb-4 text-cyan-400" size={36} />
          <h1 className="text-3xl font-bold">
            Python Programming
          </h1>
          <p className="mt-2 text-slate-400">
            STACKRA Academy — Course Syllabus
          </p>
        </header>

        <div className="space-y-3">
          {modules.map((module, index) => (
            <div
              key={module}
              className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <FileText className="shrink-0 text-blue-400" />
              <div>
                <p className="text-xs text-cyan-400">
                  Module {index + 1}
                </p>
                <h2 className="font-semibold">{module}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}