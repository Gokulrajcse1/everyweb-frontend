'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      title: 'Graphic Design',
      image: '/service-graphic.png',
      desc: 'We design creative visuals that support your brand identity across packaging, websites, & everywhere',
    },
    {
      title: 'Website Design',
      image: '/service-website.png',
      desc: 'We build professional websites that strengthen your brand presence and help your business grow online.',
    },
    {
      title: 'Brand Awareness',
      image: '/service-brand.png',
      desc: 'We support your brand with creative content, videos, and social media visuals to improve visibility.',
    },
  ];

  return (
    <section className='bg-[#efefef] py-16'>
      <div className='mx-auto w-[96vw] max-w-330'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mb-12 text-center'
        >
          <h2 className='text-[56px] font-bold italic text-black lg:text-[64px]'>
            What We Do
          </h2>
        </motion.div>

        {/* Cards */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className='border-2 border-black bg-[#efefef] p-6 shadow-[6px_6px_0_0_#000]'
            >
              <div className='flex h-75 items-center justify-center'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={320}
                  height={320}
                  className='h-auto w-full max-w-[320px]'
                />
              </div>

              <h3 className='mt-6 text-center text-[44px] font-bold text-black'>
                {service.title}
              </h3>

              <p className='mt-4 text-center text-[18px] leading-8 text-[#444444]'>
                {service.desc}
              </p>

              <div className='mt-8 flex justify-center'>
                <button className='bg-black px-8 py-4 text-[22px] font-semibold text-white shadow-[4px_4px_0_0_#5a4bff]'>
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className='mt-16 border-t-2 border-black' />
      </div>
    </section>
  );
}