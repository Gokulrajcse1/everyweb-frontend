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
        <div className="mb-10 text-left sm:mb-12">
          <h2
            className="
              text-[38px]
              font-bold
              italic
              leading-[1.05]
              tracking-[-0.03em]
              text-black
              sm:text-[50px]
              md:text-[64px]
              lg:text-[72px]
              lg:leading-[0.98]
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
                min-h-32
                flex-col
                items-end
                justify-center
                border-black
                bg-[#f3f3f3]
                p-5
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
                  mt-3
                  text-[13px]
                  leading-tight
                  text-[#444444]
                  sm:mt-4
                  sm:text-[14px]
                  sm:leading-none
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
              LEFT IMAGE (SIZE INCREASED ON TAB)
          ========================== */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/chracter2.svg"
              alt="Flying superhero illustration"
              width={700}
              height={700}
              className="
                h-auto
                w-full
                max-w-85
                sm:max-w-125
                md:max-w-150
                lg:max-w-140
              "
            />
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}
          <div>
            {/* Heading - Centered on Mobile/Tablet, Left-aligned on Desktop */}
            <h3
              className="
                text-center
                text-[38px]
                font-bold
                leading-tight
                text-black
                sm:text-[52px]
                sm:leading-none
                lg:text-left
                lg:text-[64px]
              "
            >
              Who We Are
            </h3>

            {/* Paragraph Text */}
            <div
              className="
                mt-5
                space-y-4
                text-left
                text-[16px]
                leading-relaxed
                text-[#333333]
                wrap-break-word
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