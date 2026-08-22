"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Graphic Design",
      image: "/service-graphic.svg",
      desc: "We design creative visuals that support your brand identity across packaging, websites, & everywhere",
    },
    {
      title: "Website Design",
      image: "/service-website.svg",
      desc: "We build professional websites that strengthen your brand presence and help your business grow online.",
    },
    {
      title: "Brand Awareness",
      image: "/service-brand.svg",
      desc: "We support your brand with creative content, videos, and social media visuals to improve visibility.",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="mx-auto w-[96vw] max-w-[1320px]">
        
        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center lg:mb-12"
        >
          <h2 className="text-[52px] font-bold italic leading-none text-black lg:text-[64px]">
            What We Do
          </h2>
        </motion.div>

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                flex
                min-h-[560px]
                flex-col
                border-2
                border-black
                bg-white
                p-5
                shadow-[6px_6px_0_0_#000]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="flex h-[235px] items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={320}
                  height={320}
                  className="h-auto w-full max-w-[270px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="mt-5 text-center text-[34px] font-bold leading-tight text-black lg:text-[38px]">
                  {service.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[360px] text-center text-[16px] leading-7 text-[#444444]">
                  {service.desc}
                </p>

                {/* Button */}
                <div className="mt-auto flex justify-center pt-6">
                  <button
                    className="
                      bg-black
                      px-7
                      py-3
                      text-[19px]
                      font-semibold
                      text-white
                      shadow-[4px_4px_0_0_#5a4bff]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}