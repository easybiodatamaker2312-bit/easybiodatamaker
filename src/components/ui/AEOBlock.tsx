'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QA {
  question: string;
  answer: string;
}

interface AEOBlockProps {
  faqs: QA[];
  title?: string;
  ctaHref?: string;
  ctaText?: string;
}

// ── AEO FAQ Accordion Block ────────────────────────────────────────────────────
// Used on every page for Answer Engine Optimization
// Targets: Google SGE, Perplexity, ChatGPT, Bing AI, Google AI Overviews
export function AEOBlock({ faqs, title = 'Frequently Asked Questions', ctaHref = '/create', ctaText = 'Create Free Biodata Now' }: AEOBlockProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 px-4 bg-amber-50/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-maroon-900 mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card overflow-hidden border border-amber-100"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50/50 transition-colors gap-3"
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-maroon-800 text-sm leading-snug"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-saffron-500">
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {open === i && (
                <div
                  className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-amber-50 pt-4"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {ctaHref && (
          <div className="text-center mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaText} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// ── AEO Definition Block ───────────────────────────────────────────────────────
// Targets AI answer boxes for "What is X" queries
interface DefinitionProps {
  term: string;
  definition: string;
  also?: string;
  examples?: string[];
}

export function AEODefinition({ term, definition, also, examples }: DefinitionProps) {
  return (
    <div
      className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-saffron-500 rounded-r-xl p-5 my-6"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-saffron-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">?</span>
        </div>
        <div>
          <h3 className="font-bold text-maroon-900 mb-2 text-base" itemProp="name">
            What is {term}?
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" itemProp="description">
            {definition}
          </p>
          {also && (
            <p className="text-gray-500 text-xs mt-2 italic">
              Also known as: {also}
            </p>
          )}
          {examples && examples.length > 0 && (
            <div className="mt-3">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Examples: </span>
              <span className="text-xs text-gray-600">{examples.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── AEO Quick Answer Box ───────────────────────────────────────────────────────
// Targets AI featured snippet "direct answer" format
interface QuickAnswerProps {
  question: string;
  answer: string;
  steps?: string[];
}

export function AEOQuickAnswer({ question, answer, steps }: QuickAnswerProps) {
  return (
    <div className="bg-white border-2 border-saffron-200 rounded-2xl p-5 my-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">A</span>
        </div>
        <span className="text-xs font-bold text-saffron-600 uppercase tracking-wide">Direct Answer</span>
      </div>
      <p className="text-xs text-gray-400 mb-2 font-medium">{question}</p>
      <p className="text-gray-800 text-sm leading-relaxed font-medium">{answer}</p>
      {steps && steps.length > 0 && (
        <ol className="mt-3 space-y-1">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

// ── AEO Speakable Section ──────────────────────────────────────────────────────
// Marks content as readable by Google Assistant, Alexa, Siri
export function AEOSpeakable({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div
      id={id}
      itemProp="speakable"
      itemScope
      itemType="https://schema.org/SpeakableSpecification"
    >
      {children}
    </div>
  );
}

// ── AEO Stats Bar ─────────────────────────────────────────────────────────────
// Provides machine-readable statistics for AI citations
interface Stat {
  value: string;
  label: string;
  note?: string;
}

export function AEOStats({ stats }: { stats: Stat[] }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 p-5 bg-maroon-900 rounded-2xl"
      itemScope
      itemType="https://schema.org/Dataset"
    >
      {stats.map(({ value, label, note }) => (
        <div key={label} className="text-center">
          <div className="font-display text-2xl font-bold text-saffron-400" itemProp="description">
            {value}
          </div>
          <div className="text-xs text-amber-200/70 mt-1">{label}</div>
          {note && <div className="text-[10px] text-amber-200/40 mt-0.5">{note}</div>}
        </div>
      ))}
    </div>
  );
}
