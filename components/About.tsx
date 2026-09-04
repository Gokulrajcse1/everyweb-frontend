"use client";

import Image from "next/image";

export default function AboutSection() {
  const stats = [
    ["100+", "CLIENTS", "Businesses we’ve worked with"],
    ["2,000+", "DESIGNS", "Creative assets delivered"],
    ["50+", "WEBSITES", "Web experiences developed"],
    ["03", "CORE SERVICES", "Creative work, real impact"],
  ];

  return (
    <section
      className="
        bg-white
        pt-12
        pb-4
        sm:pt-14
        sm:pb-6
        lg:pt-10
        lg:pb-2
      "
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-330 sm:w-[96vw]">

        {/* =========================
            CREATIVE SOLUTIONS
        ========================== */}
        <div className="mb-10 sm:mb-12">
          <h2
            className="
              text-[40px]
              font-bold
              italic
              leading-[0.98]
              tracking-[-0.03em]
              text-black
              sm:text-[50px]
              md:text-[64px]
              lg:text-[72px]
            "
          >
            Creative{" "}
            <span className="text-[#5a4bff]">solutions,</span>
            <br />
            delivered
          </h2>
        </div>

        {/* =========================
            STATS
        ========================== */}
        <div className="grid grid-cols-1 border-2 border-black md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, title, subtitle], index) => (
            <div
              key={title}
              className={`
                flex
                h-32
                flex-col
                items-end
                justify-center
                border-black
                bg-[#f3f3f3]
                px-5
                text-right

                ${
                  index !== stats.length - 1
                    ? "border-b-2 lg:border-b-0 lg:border-r-2"
                    : ""
                }

                ${
                  index === 0 || index === 2
                    ? "md:border-r-2"
                    : ""
                }

                lg:last:border-r-0
              `}
            >
              {/* Number */}
              <div
                className="
                  text-[28px]
                  font-bold
                  italic
                  leading-none
                  text-[#5a4bff]
                  sm:text-[30px]
                "
              >
                {value}
              </div>

              {/* Title */}
              <div
                className="
                  mt-1.5
                  text-[22px]
                  font-bold
                  italic
                  leading-none
                  text-black
                  sm:text-[24px]
                "
              >
                {title}
              </div>

              {/* Description */}
              <p
                className="
                  mt-4
                  whitespace-nowrap
                  text-[13px]
                  leading-none
                  text-[#444444]
                  sm:text-[14px]
                "
              >
                {subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* =========================
            WHO WE ARE
        ========================== */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-center
            gap-10
            lg:mt-10
            lg:grid-cols-2
            lg:gap-10
          "
        >

          {/* =========================
              LEFT IMAGE
          ========================== */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/chracter2.svg"
              alt="Flying superhero illustration"
              width={560}
              height={560}
              className="
                h-auto
                w-full
                max-w-140
              "
            />
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}
          <div>
            <h3
              className="
                text-[42px]
                font-bold
                leading-none
                text-black
                sm:text-[52px]
                lg:text-[64px]
              "
            >
              Who We Are
            </h3>

            <div
              className="
                mt-5
                space-y-2
                text-[17px]
                leading-8
                text-[#333333]
                sm:space-y-6
                sm:text-[20px]
                sm:leading-9
                lg:text-[18px]
                lg:leading-8
              "
            >
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
          </div>

        </div>

      </div>
    </section>
  );
}