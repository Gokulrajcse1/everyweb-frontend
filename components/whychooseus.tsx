'use client';

import { motion } from 'framer-motion';
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
    <section className="bg-white py-20">
      <div className="mx-auto w-[96vw] max-w-330">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-[56px] font-bold italic leading-none text-black lg:text-[64px]">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* Left - Reasons */}
          <div className="space-y-7">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-5"
                >
                  {/* Icon */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
                    <Icon size={38} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 border-2 border-black bg-white px-6 py-5">
                    <h3 className="text-[24px] font-semibold text-black lg:text-[28px]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[16px] text-[#555555] lg:text-[18px]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/why-choose-us.png"
              alt="Why choose us illustration"
              width={620}
              height={620}
              className="h-auto w-full max-w-155 object-contain"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}