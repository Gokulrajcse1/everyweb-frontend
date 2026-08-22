"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-[96vw] max-w-[1320px]">
        <div className="grid min-h-[620px] grid-cols-1 items-start gap-8 pt-6 lg:grid-cols-[0.95fr_1.25fr]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-6"
          >
            <h1 className="text-[72px] font-extrabold leading-[0.9] text-black lg:text-[84px]">
              Designing
            </h1>

            <h2 className="mt-2 text-[64px] font-medium italic leading-none text-[#5a4bff] lg:text-[72px]">
              Brand Futures,
            </h2>

            <h1 className="mt-2 text-[72px] font-extrabold leading-[0.9] text-black lg:text-[84px]">
              That Matter!
            </h1>

            <p className="mt-8 max-w-[520px] text-[18px] leading-8 text-[#333333]">
              Everyweb Matters helps brands stand out with strategic packaging
              design, grow through powerful websites, and build lasting
              presence with creative brand content.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                bg-black
                px-8
                py-4
                text-[22px]
                font-semibold
                text-white
                shadow-[4px_4px_0_0_#5a4bff]
                transition-all
                duration-300
              "
            >
              Enquire Now
              <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden items-start justify-end lg:flex"
          >
            <Image
              src="/chracter2.svg"
              alt="Flying superhero illustration"
              width={760}
              height={760}
              priority
              className="h-auto w-full max-w-[760px] -translate-y-2"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}