'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, Puzzle, Target, Headphones } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Focused on What Matters',
    desc: 'Purpose-driven creative solutions.',
  },
  {
    icon: Puzzle,
    title: 'Creative & Practical Design',
    desc: 'Ideas that look good and work better.',
  },
  {
    icon: Target,
    title: 'End-to-End Solutions',
    desc: 'Branding, design & web development under one roof.',
  },
  {
    icon: Headphones,
    title: 'Support That Stays.',
    desc: "We're with you beyond delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className='bg-[#efefef] py-16'>
      <div className='mx-auto w-[96vw] max-w-330'>
        <div className='grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]'>
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='mb-8 text-[56px] font-bold italic text-black lg:text-[64px]'>
              Why Choose Us?
            </h2>

            <div className='space-y-6'>
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-stretch'
                  >
                    {/* Icon box */}
                    <div className='flex w-24 items-center justify-center border-2 border-black bg-black'>
                      <Icon className='h-10 w-10 text-white' />
                    </div>

                    {/* Text box */}
                    <div className='flex-1 border-y-2 border-r-2 border-black bg-[#efefef] px-6 py-5'>
                      <h3 className='text-[36px] font-medium text-black'>
                        {item.title}
                      </h3>
                      <p className='mt-2 text-[18px] text-[#444444]'>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='flex items-center justify-end'
          >
            <Image
              src='/hero-superman.png'
              alt='Flying superhero illustration'
              width={620}
              height={620}
              className='h-auto w-full max-w-155'
            />
          </motion.div>
        </div>

        {/* Bottom border */}
        <div className='mt-12 border-t-2 border-black' />
      </div>
    </section>
  );
}