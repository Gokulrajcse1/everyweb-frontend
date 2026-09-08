"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    title: "CLIENTS",
    description: "Businesses we’ve worked with",
  },
  {
    number: "2,000+",
    title: "DESIGNS",
    description: "Creative assets delivered",
  },
  {
    number: "50+",
    title: "WEBSITES",
    description: "Web experiences developed",
  },
  {
    number: "03",
    title: "CORE SERVICES",
    description: "Creative work, real impact",
  },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-slate-900">
      <div className="w-full px-4 py-6 sm:px-8 sm:py-8 md:px-12 lg:px-16">

        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between sm:mb-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="
              inline-flex items-center gap-2
              border border-slate-200
              bg-white px-4 py-2
              text-sm font-medium text-slate-700
              shadow-sm
              transition-all duration-300
              hover:border-black hover:bg-black hover:text-white
            "
          >
            ← Back
          </button>

          <span className="bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#5a4bff]">
            Behind Everyweb
          </span>
        </div>

        {/* WHO WE ARE */}
        <section className="mb-12 sm:mb-14 lg:mb-16">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4bff] sm:text-sm">
              Who We Are
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[78px] lg:leading-none">
              Creative{" "}
              <span className="text-[#5a4bff]">solutions,</span>
              <br className="hidden sm:inline" />{" "}
              delivered.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              We are a dedicated design and digital studio focused on crafting
              memorable brand experiences and scalable platforms.
            </p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="mb-12 sm:mb-14 lg:mb-16">
          <div className="grid grid-cols-1 overflow-hidden border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#fdf2f8",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  px-6 py-6 sm:px-7 sm:py-7 lg:px-6 lg:py-6
                  transition-colors duration-300
                  ${
                    index !== 3
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }
                  ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}
                `}
              >
                <div className="text-4xl font-bold italic leading-none tracking-tight text-[#5a4bff] sm:text-5xl">
                  {stat.number}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 sm:text-sm">
                  {stat.title}
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOUNDER NOTE - BOX 1 */}
        <section className="mb-10 overflow-hidden border border-slate-200 bg-white sm:mb-12 lg:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

            {/* FOUNDER NOTE - LEFT */}
            <div className="flex flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
                  A Note from the Founder
                </p>

                <h2 className="mt-2 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-tight">
                  Built with purpose.
                  <br />
                  Designed to matter.
                </h2>

                {/* GAP INCREASED HERE (space-y-5 sm:space-y-6) */}
                <div className="mt-6 max-w-3xl space-y-5 sm:space-y-6 text-sm leading-relaxed text-slate-600 sm:text-[17px] sm:leading-7">
                  <p className="border-l-2 border-[#5a4bff] pl-4 font-medium text-slate-800">
                    Everyweb Matters was built with a simple belief — great
                    design has the power to shape how people see, remember, and
                    connect with a brand.
                  </p>

                  <p>
                    Our journey began with a passion for creating meaningful
                    visual experiences that go beyond aesthetics. From impactful
                    packaging to thoughtful digital design, we focus on helping
                    businesses present themselves with confidence and clarity.
                  </p>

                  <p>
                    We believe every brand has a story worth telling. Our role is
                    to turn that story into design that connects, communicates,
                    and creates lasting impact.
                  </p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="mt-8 border-l-4 border-[#5a4bff] bg-[#f7f7ff] px-4 py-3">
                <p className="text-xs font-semibold leading-relaxed text-slate-800 sm:text-[15px]">
                  “Good design gets attention. Great design builds connection.”
                </p>
              </div>
            </div>

            {/* FOUNDER PHOTO */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-black lg:aspect-auto lg:min-h-full">
              <Image
                src="/Founder&CreativeDirector.png"
                alt="Founder and Creative Director of Everyweb Matters"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top lg:object-center"
              />
            </div>

          </div>
        </section>

        {/* BUILDING STRONGER BRANDS - BOX 2 */}
        <section className="mb-10 overflow-hidden border border-slate-200 bg-white sm:mb-12 lg:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
                  What We Believe
                </p>

                <h2 className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-tight">
                  Building Stronger Brands
                </h2>

                {/* GAP INCREASED HERE (space-y-5 sm:space-y-6) */}
                <div className="mt-6 max-w-3xl space-y-5 sm:space-y-6 text-sm leading-relaxed text-slate-600 sm:text-[17px] sm:leading-7">
                  <p className="border-l-2 border-[#5a4bff] pl-4 font-medium text-slate-800">
                    Everyweb Matters is a creative design agency focused on
                    building strong brands through impactful packaging and visual design.
                  </p>

                  <p>
                    We help businesses create eye-catching product packaging that stands out in the market and connects directly with customers.
                  </p>

                  <p>
                    Beyond packaging, we support brands in growing their digital presence with professional website design, ensuring they have a bold, credible online identity.
                  </p>

                  <p>
                    We also provide brand awareness support through creative content and visuals when needed — helping brands stay visible and relevant.
                  </p>
                </div>
              </div>

              <div className="mt-8 inline-block w-fit bg-indigo-50 px-4 py-2 text-xs font-semibold text-[#5a4bff] sm:text-sm">
                Design with purpose. Build for growth.
              </div>

            </div>

            {/* LEFT VISUAL */}
            <div className="order-last flex aspect-video items-center justify-center bg-[#f3f3f3] p-6 lg:order-first lg:aspect-auto lg:min-h-full lg:p-8">
              <Image
                src="/EM logo.svg"
                alt="Everyweb Matters Logo"
                width={420}
                height={160}
                className="h-auto w-44 object-contain sm:w-56 lg:w-64"
              />
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b80ff]">
                Ready to create?
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s make it matter.
              </h2>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                bg-[#5a4bff]
                px-7 py-3.5
                text-sm font-semibold text-white
                shadow-[4px_4px_0_0_#ffffff]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-black
                hover:shadow-[5px_5px_0_0_#5a4bff]
                active:translate-y-0
              "
            >
              Let&apos;s Create →
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}