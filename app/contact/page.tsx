'use client';

import { useRouter } from 'next/navigation';

export default function ContactPage() {
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
            Get In Touch
          </span>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="mb-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5a4bff]">
            Contact Us
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Let&apos;s make something <span className="text-[#5a4bff]">matter.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Tell us about your project or vision, and let&apos;s build something exceptional together.
          </p>
        </div>

        {/* MAIN LAYOUT GRID (FULL EDGE TO EDGE) */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT: WHATSAPP DIRECT ACTION CARD */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-5 sm:p-12">
            <div>
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-1 text-xs font-semibold text-[#5a4bff]">
                Fast Response
              </span>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Reach out to us directly for quick discussions, quotes, or general inquiries. We are happy to help you get started.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/9698284661"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#5a4bff] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#4839eb] active:scale-[0.99]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* RIGHT: CLEAN CONTACT INFORMATION DETAILS */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* LOCATION CARD */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#5a4bff]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </h3>
                  <p className="mt-1 text-base font-medium leading-relaxed text-slate-800">
                    F4 Shop, 13/40, DL Plaza, Kamarajar Road, Melakalakandarkottai, <br />
                    Tiruchirappalli – 620011, Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL CARD */}
            <a
              href="mailto:contact@everywebmatters.com"
              className="group block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-[#5a4bff]/50 hover:shadow-md"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#5a4bff]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email Us
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-[#5a4bff] sm:text-xl">
                    contact@everywebmatters.com
                  </p>
                </div>
              </div>
            </a>

            {/* PHONE CARD */}
            <a
              href="tel:+919698284661"
              className="group block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-[#5a4bff]/50 hover:shadow-md"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#5a4bff]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Call Us
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-[#5a4bff] sm:text-xl">
                    +91 96982 84661
                  </p>
                </div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}