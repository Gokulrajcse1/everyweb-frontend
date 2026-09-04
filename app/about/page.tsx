"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      <div className="w-full px-5 py-6 sm:px-8 sm:py-8 md:px-12 lg:px-16">

        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between sm:mb-10">
          <button
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
              Who We Are
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-none tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[78px]">
              Creative{" "}
              <span className="text-[#5a4bff]">solutions,</span>
              <br />
              delivered.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We are a dedicated design and digital studio focused on crafting
              memorable brand experiences and scalable platforms.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="mb-14 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 overflow-hidden border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`
                  px-6 py-7
                  transition-all duration-300
                  hover:bg-[#f5f5ff]
                  sm:px-7 sm:py-8
                  lg:px-6 lg:py-7
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
              </div>
            ))}
          </div>
        </section>

        
       {/* =========================================
       FOUNDER NOTE
      ========================================= */}
<section className="mb-14 overflow-hidden border border-slate-200 bg-white sm:mb-16 lg:mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

    {/* FOUNDER NOTE - LEFT */}
    <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
        A Note from the Founder
      </p>

      <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]">
        Built with purpose.
        <br />
        Designed to matter.
      </h2>

      <div className="mt-7 max-w-3xl space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

        <p className="border-l-2 border-[#5a4bff] pl-4 font-medium text-slate-800">
          Everyweb Matters was built with a simple belief — great design has
          the power to shape how people see, remember, and connect with a brand.
        </p>

        <p>
          Our journey began with a passion for creating meaningful visual
          experiences that go beyond aesthetics. From impactful packaging to
          thoughtful digital design, we focus on helping businesses present
          themselves with confidence and clarity.
        </p>

        <p>
          We believe every brand has a story worth telling. Our role is to turn
          that story into design that connects, communicates, and creates lasting
          impact.
        </p>
      </div>

      {/* SIMPLE QUOTE */}
      <div className="mt-7 border-l-4 border-[#5a4bff] bg-[#f7f7ff] px-5 py-4">
        <p className="text-sm font-semibold text-slate-800 sm:text-base">
          “Good design gets attention. Great design builds connection.”
        </p>
      </div>

    </div>

 <div className="overflow-hidden bg-black">
  <Image
  src="/Founder&CreativeDirector.png"
  alt="Founder and Creative Director of Everyweb Matters"
  width={600}
  height={600}
  priority
  className="founder-photo h-full w-full object-cover"
/>
</div>
  </div>
</section>

        {/* =========================================
            BUILDING STRONGER BRANDS
        ========================================== */}
        <section className="mb-14 overflow-hidden border border-slate-200 bg-white sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT VISUAL */}
            <div className="flex min-h-72 items-center justify-center bg-[#f3f3f3] px-8 py-12 sm:min-h-80 lg:min-h-115">
              <Image
                src="/EM logo.svg"
                alt="Everyweb Matters Logo"
                width={420}
                height={160}
                className="
                  h-auto w-64 object-contain
                  transition-transform duration-500
                  hover:scale-105
                  sm:w-72
                  lg:w-80
                "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
                What We Believe
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[52px]">
                Building
                <br className="hidden sm:block" />
                Stronger Brands
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                <p className="border-l-2 border-[#5a4bff] pl-4 font-medium text-slate-800">
                  Everyweb Matters is a creative design agency focused on
                  building strong brands through impactful packaging and
                  visual design.
                </p>

                <p>
                  We help businesses create eye-catching product packaging
                  that stands out in the market and connects directly with
                  customers.
                </p>

                <p>
                  Beyond packaging, we support brands in growing their digital
                  presence with professional website design, ensuring they
                  have a bold, credible online identity.
                </p>

                <p>
                  We also provide brand awareness support through creative
                  content and visuals when needed — helping brands stay
                  visible and relevant.
                </p>
              </div>

              <div className="mt-7 inline-block w-fit bg-indigo-50 px-5 py-3 text-sm font-semibold text-[#5a4bff]">
                Design with purpose. Build for growth.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

            <div className="text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b80ff]">
                Ready to create?
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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