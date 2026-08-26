'use client';

import { useRouter } from 'next/navigation';

const worksList = [
  {
    title: 'Brand Brochure & Marketing Kit',
    description: 'Explore the latest Everyweb Matters brochure and brand visual assets designed to showcase high-impact services clearly.',
    tag: 'Graphic Design',
    link: '#',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Platform Design',
    description: 'Modern, conversion-focused e-commerce UI built for seamless mobile user experience and quick product discovery.',
    tag: 'Web Design',
    link: '#',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Campaign Assets',
    description: 'High-engaging visual creative packages tailored for digital marketing campaigns and brand awareness growth.',
    tag: 'Brand Awareness',
    link: '#',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Corporate Identity & Packaging',
    description: 'Custom logo concepts and product packaging solutions crafted to elevate physical and digital product presence.',
    tag: 'Graphic Design',
    link: '#',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function WorksPage() {
  const router = useRouter();

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
            Portfolio Showcase
          </span>
        </div>

        {/* PAGE TITLE */}
        <div className="mb-12 border-b border-slate-200 pb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#5a4bff] underline underline-offset-8 decoration-2 sm:text-4xl">
            Our Work
          </h1>
        </div>

        {/* WORK ITEMS LIST LAYOUT */}
        <div className="w-full space-y-8">
          {worksList.map((work) => (
            <div key={work.title} className="group w-full">
              <div className="flex items-start gap-6 pb-6">
                
                {/* BLACK SQUARE ICON BOX */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 shadow-sm">
                  {work.icon}
                </div>

                {/* CONTENT */}
                <div className="w-full pt-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {work.title}
                    </h3>
                    <span className="rounded-md bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-[#5a4bff]">
                      {work.tag}
                    </span>
                  </div>

                  <p className="mt-2 text-base font-medium text-slate-600 sm:text-lg">
                    {work.description}
                  </p>
                </div>
              </div>

              {/* PURPLE DIVIDER LINE */}
              <div className="h-px w-full bg-[#5a4bff]/20" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}