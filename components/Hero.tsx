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
      className="bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-330 sm:w-[96vw]">
        <div className="grid grid-cols-1 items-start gap-8 pb-10 lg:min-h-155 lg:grid-cols-[0.95fr_1.25fr]">

          {/* Left Content */}
          <div className="lg:pt-4">
            <h1 className="font-(family-name:--font-urbanist) text-[36px] font-medium leading-[1.15] tracking-[0.2px] text-black sm:text-[40px] md:text-[64px] lg:text-[68px]">
              Designing
            </h1>

            <h2 className="mt-1 font-(family-name:--font-urbanist) text-[36px] font-medium italic leading-[1.2] tracking-[0.2px] text-[#5a4bff] sm:mt-2 sm:text-[40px] md:text-[64px] lg:text-[68px]">
              Brand Futures,
            </h2>

            <h1 className="mt-1 font-(family-name:--font-urbanist) text-[36px] font-medium leading-[1.15] tracking-[0.2px] text-black sm:mt-2 sm:text-[40px] md:text-[64px] lg:text-[68px]">
              That Matter!
            </h1>

            <p className="relative z-10 mt-5 max-w-130 font-(family-name:--font-poppins) text-[15px] font-normal leading-7 tracking-normal text-[#333333] sm:mt-8 sm:text-[16px] sm:leading-8 md:w-170 md:max-w-none">
              Everyweb Matters helps brands stand out with strategic packaging design, grow{" "}
              <br className="hidden md:block" />
              through powerful websites, and build lasting presence with creative brand content.
            </p>

            {/* Enquire Now */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                gap-3
                bg-black
                px-6
                py-3.5
                text-[16px]
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
                sm:mt-8
                sm:py-4
                sm:text-[18px]
              "
            >
              Enquire Now
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                →
              </span>
            </a>
          </div>

          {/* Right Image - Mobile & Tablet */}
          <div className="mt-4 flex w-full items-center justify-center lg:hidden">
            <Image
              src="/hero-superman.svg"
              alt="3D Astronaut Rocket Illustration"
              width={1100}
              height={1100}
              priority
              sizes="(max-width: 640px) 90vw, 70vw"
              className="
                h-auto
                w-[88vw]
                max-w-95
                sm:w-[72vw]
                sm:max-w-120
                md:w-[68vw]
                md:max-w-145
              "
            />
          </div>

          {/* Right Image - DESKTOP — ORIGINAL, DON'T CHANGE */}
          <div className="hidden items-start justify-end lg:flex -mt-10 lg:-mt-14">
            <Image
              src="/hero-superman.svg"
              alt="3D Astronaut Rocket Illustration"
              width={1100}
              height={1100}
              priority
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