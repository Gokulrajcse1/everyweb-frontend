'use client';

import Image from 'next/image';
import { Lightbulb, Puzzle, Target, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: 'Focused on What Matters',
      description: 'Purpose-driven creative solutions.',
    },
    {
      icon: Puzzle,
      title: 'Creative & Practical Design',
      description: 'Ideas that look good and work better.',
    },
    {
      icon: Target,
      title: 'End-to-End Solutions',
      description: 'Branding, design & web development under one roof.',
    },
    {
      icon: Headphones,
      title: 'Support That Stays.',
      description: "We're with you beyond delivery.",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-16 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-350 sm:w-[96vw]">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[40px] font-bold italic leading-none text-black sm:text-[52px] lg:text-[64px]">
            Why Choose Us?
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">

          {/* Left - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex items-stretch gap-0"
                >
                  {/* Icon Container matching text box height */}
                  <div className="flex w-16 shrink-0 items-center justify-center border-2 border-r-0 border-black bg-black text-white sm:w-20 lg:w-24">
                    <Icon className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.8} />
                  </div>

                  {/* Text Container */}
                  <div className="flex-1 border-2 border-black bg-white px-5 py-4 sm:px-6 sm:py-5">
                    <h3 className="text-[18px] font-semibold text-black sm:text-[22px] lg:text-[24px]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[14px] text-[#555555] sm:text-[16px]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Illustration (Enlarged) */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/chracter2.svg"
              alt="Why choose us illustration"
              width={750}
              height={750}
              priority
              className="h-auto w-full max-w-155 object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}