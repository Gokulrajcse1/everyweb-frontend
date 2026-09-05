"use client";

import Image from "next/image";

export default function Hero() {
  const whatsappNumber = "919698284661";
  const whatsappMessage = encodeURIComponent(
    "Hi Everyweb Matters, I would like to enquire about your services."
  );

  return (
    <section
      id="hero"
      className="bg-white pt-12 md:pt-16 lg:pt-20"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-330 sm:w-[96vw]">
        <div className="grid grid-cols-1 items-start gap-8 pb-10 lg:min-h-155 lg:grid-cols-[0.95fr_1.25fr]">

          {/* Left Content */}
          <div className="lg:pt-4">
            <h1 className="font-(family-name:--font-urbanist) text-[40px] font-medium leading-[1.2] tracking-[0.2px] text-black md:text-[64px] lg:text-[68px]">
              Designing
            </h1>

            <h2 className="mt-2 font-(family-name:--font-urbanist) text-[40px] font-medium italic leading-[1.3] tracking-[0.2px] text-[#5a4bff] md:text-[64px] lg:text-[68px]">
              Brand Futures,
            </h2>

            <h1 className="mt-2 font-(family-name:--font-urbanist) text-[40px] font-medium leading-[1.2] tracking-[0.2px] text-black md:text-[64px] lg:text-[68px]">
              That Matter!
            </h1>

            <p className="relative z-10 mt-6 max-w-130 font-(family-name:--font-poppins) text-[16px] font-normal leading-8 tracking-normal text-[#333333] sm:mt-8 md:w-170 md:max-w-none">
              Everyweb Matters helps brands stand out with strategic packaging design, grow
              <br className="hidden md:block" />
              through powerful websites, and build lasting presence with creative brand content.
            </p>

            {/* Enquire Now */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                bg-black
                px-6
                py-4
                text-[18px]
                font-semibold
                text-white
                shadow-[4px_4px_0_0_#5a4bff]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:bg-[#5a4bff]
                hover:text-white
                hover:shadow-[5px_5px_0_0_#000]
                active:translate-y-0
              "
            >
              Enquire Now
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right Image */}
          <div className="hidden items-start justify-end lg:flex -mt-10 lg:-mt-14">
            <Image
              src="/hero-superman.svg"
              alt="3D Astronaut Rocket Illustration"
              width={1100}
              height={1100}
              className="
                h-auto
                w-full
                max-w-180
                animate-float
                lg:max-w-210
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}