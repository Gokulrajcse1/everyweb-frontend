'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    details: [
      {
        title: 'Logo Design',
        description: 'Memorable logos that define your brand identity.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        ),
      },
      {
        title: 'Packaging Design',
        description: 'We design impactful packaging that makes your product stand out and attract customers instantly.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
      },
      {
        title: 'Brochure Design',
        description: 'We design clean and professional brochures that present your brand and information clearly.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
      },
      {
        title: 'Poster Design',
        description: 'We create impactful posters that attract attention and deliver your message effectively.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'website-design',
    title: 'Website Design',
    details: [
      {
        title: 'E-Commerce Website',
        description: 'Building powerful and user-friendly e-commerce websites that drive sales and support business growth.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
      },
      {
        title: 'Business Website',
        description: 'Professional websites designed to showcase your brand and services clearly.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
          </svg>
        ),
      },
      {
        title: 'Landing Pages',
        description: 'High-converting landing pages designed for campaigns and product promotions.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: 'Website Redesign',
        description: 'Improving existing websites with modern design and better user experience.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
      },
      {
        title: 'Website Maintenance',
        description: 'Keeping your website updated, secure, and running smoothly.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'brand-awareness',
    title: 'Brand Awareness',
    details: [
      {
        title: 'Content Creation',
        description: 'Creative posts and visuals that reflect your brand identity.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        ),
      },
      {
        title: 'Social Media Handling',
        description: 'Managing your social presence with consistent and engaging content.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        ),
      },
      {
        title: 'Video Content',
        description: 'Simple and engaging videos to enhance your brand visibility.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: 'Profile Setup & Optimization',
        description: 'Setting up and improving your social media profiles professionally.',
        icon: (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
    ],
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentService = services[activeTab];

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
            Capabilities
          </span>
        </div>

        {/* TOP TEXT TABS */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 border-b border-slate-200 pb-6 sm:gap-16">
          {services.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`text-xl font-bold tracking-tight transition-all sm:text-2xl ${
                  isActive
                    ? 'text-[#5a4bff] underline underline-offset-8 decoration-2'
                    : 'text-slate-400 hover:text-slate-800'
                }`}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        {/* SERVICE ITEMS LIST LAYOUT */}
        <div className="w-full space-y-8">
          {currentService.details.map((detail) => (
            <div key={detail.title} className="group w-full">
              <div className="flex items-start gap-6 pb-6">
                
                {/* BLACK SQUARE ICON BOX */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 shadow-sm">
                  {detail.icon}
                </div>

                {/* CONTENT */}
                <div className="w-full pt-1">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-slate-600 sm:text-lg">
                    {detail.description}
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