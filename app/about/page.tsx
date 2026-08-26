'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  const stats = [
    { number: '100+', title: 'CLIENTS', description: 'Businesses we’ve worked with' },
    { number: '2,000+', title: 'DESIGNS', description: 'Creative assets delivered' },
    { number: '50+', title: 'WEBSITES', description: 'Web experiences developed' },
    { number: '03', title: 'CORE SERVICES', description: 'Creative work, real impact' },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-slate-900">
      <div className="w-full px-6 py-10 md:px-16">

        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            ← Back
          </button>

          <span className="rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#5a4bff]">
            Behind Everyweb
          </span>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="mb-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5a4bff]">
            Who We Are
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Creative <span className="text-[#5a4bff]">solutions,</span> delivered.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            We are a dedicated design and digital studio focused on crafting memorable brand experiences and scalable platforms.
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="mb-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="group p-8 transition-all hover:bg-slate-50"
              >
                <div className="text-4xl font-bold tracking-tight text-[#5a4bff]">
                  {stat.number}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-900">
                  {stat.title}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT & BRAND LOGO SECTION */}
        <div className="mb-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          
          {/* LEFT: CLEAN LOGO DISPLAY BOX */}
          <div className="group relative flex min-h-80 items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 lg:col-span-5">
            <div className="transition-transform duration-300 ease-out group-hover:scale-105">
              <Image
                src="/EM logo.svg"
                alt="Everyweb Logo"
                width={300}
                height={120}
                className="h-auto w-56 md:w-64"
                priority
              />
            </div>
          </div>

          {/* RIGHT: ABOUT DETAILS */}
          <div className="flex flex-col justify-center space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-7 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building Stronger Brands
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              <p className="border-l-2 border-[#5a4bff] pl-4 font-medium text-slate-800">
                Everyweb Matters is a creative design agency focused on building strong brands through impactful packaging and visual design.
              </p>
              <p>
                We help businesses create eye-catching product packaging that stands out in the market and connects directly with customers.
              </p>
              <p>
                Beyond packaging, we support brands in growing their digital presence with professional website design, ensuring they have a bold, credible online identity.
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-block rounded-xl bg-indigo-50/70 px-5 py-3 text-sm font-semibold text-[#5a4bff]">
                &ldquo;Design with purpose. Build for growth.&rdquo;
              </div>
            </div>
          </div>

        </div>

        {/* CTA FOOTER BANNER */}
        <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-md sm:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8b80ff]">
                Ready to create?
              </span>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s make it matter.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#5a4bff] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4839eb] active:scale-[0.99]"
            >
              Let&apos;s Create →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}