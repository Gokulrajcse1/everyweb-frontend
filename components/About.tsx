"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    ["100+", "CLIENTS", "Businesses we’ve worked with"],
    ["2,000+", "DESIGNS", "Creative assets delivered"],
    ["50+", "WEBSITES", "Web experiences developed"],
    ["03", "CORE SERVICES", "Creative work, real impact"],
  ];

  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto w-[96vw] max-w-330">

        {/* =========================
            CREATIVE SOLUTIONS HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-[56px] font-bold italic leading-[0.98] tracking-[-0.03em] text-black md:text-[64px] lg:text-[72px]">
            Creative{" "}
            <span className="text-[#5a4bff]">solutions,</span>
            <br />
            delivered
          </h2>
        </motion.div>

        {/* =========================
            STATS
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 border-2 border-black md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(([value, title, subtitle], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                flex
                min-h-[230px]
                flex-col
                items-end
                justify-center
                border-b-2
                border-black
                bg-[#f3f3f3]
                px-8
                py-8
                text-right
                last:border-b-0
                md:border-b-0
                md:border-r-2
                last:md:border-r-0
              "
            >
              {/* Number */}
              <div className="text-[32px] font-bold italic leading-none text-[#5a4bff]">
                {value}
              </div>

              {/* Title */}
              <div className="mt-3 text-[30px] font-bold italic leading-none text-black">
                {title}
              </div>

              {/* Description */}
              <p className="mt-5 max-w-[220px] text-[16px] leading-6 text-[#444444]">
                {subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            WHO WE ARE
        ========================== */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src="/hero-superman.png"
              alt="Flying superhero illustration"
              width={560}
              height={560}
              className="h-auto w-full max-w-140"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[56px] font-bold leading-none text-black lg:text-[64px]">
              Who We Are
            </h3>

            <div className="mt-6 space-y-8 text-[20px] leading-9 text-[#333333]">
              <p>
                Everyweb Matters is a creative design agency focused on
                building strong brands through impactful packaging design.
              </p>

              <p>
                We help businesses create eye-catching product packaging that
                stands out in the market and connects with customers.
              </p>

              <p>
                Beyond packaging, we support brands in growing their presence
                with professional website design, ensuring they have a strong
                and credible online identity.
              </p>

              <p>
                We also provide brand awareness support through creative
                content and visuals when needed — helping brands stay visible
                and relevant.
              </p>

              <p>
                Our approach is simple: design with purpose, build for growth,
                and support your brand journey.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}