"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      image: "/why1.png",
      title: "Focused on What Matters",
      description: "Purpose-driven creative solutions.",
    },
    {
      image: "/why2.png",
      title: "Creative & Practical Design",
      description: "Ideas that look good and work better.",
    },
    {
      image: "/why3.png",
      title: "End-to-End Solutions",
      description:
        "Branding, design & web development under one roof.",
    },
    {
      image: "/why4.png",
      title: "Support That Stays.",
      description: "We're with you beyond delivery.",
    },
  ];

  return (
    <section
      className="
        bg-[#f3f3f3]
        py-6
        sm:py-8
        lg:pt-10
        lg:pb-0
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-2rem)]
          max-w-350
          sm:w-[96vw]
        "
      >
        {/* =========================
            HEADING
        ========================== */}
        <div className="mb-6 sm:mb-7 lg:mb-12 lg:pt-4">
          <h2
            className="
              text-[40px]
              font-bold
              italic
              leading-none
              text-black
              sm:text-[52px]
              lg:text-[64px]
            "
          >
            Why Choose Us?
          </h2>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[1fr_1.1fr]
            lg:items-start
            lg:gap-8
          "
        >
          {/* =========================
              LEFT - REASONS
          ========================== */}
          <div className="space-y-4 lg:pb-12">
            {reasons.map((reason) => {
              return (
                <div
                  key={reason.title}
                  className="
                    flex
                    items-stretch
                    gap-0
                  "
                >
                  {/* =========================
                      IMAGE
                  ========================== */}
                  <div
                    className="
                      flex
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      border-2
                      border-r-0
                      border-black
                      bg-black
                      sm:w-20
                      lg:w-24
                    "
                  >
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={80}
                      height={80}
                      className="
                        h-12
                        w-12
                        object-contain
                        sm:h-12
                        sm:w-12
                        lg:h-12
                        lg:w-12
                      "
                    />
                  </div>

                  {/* =========================
                      TEXT
                  ========================== */}
                  <div
                    className="
                      flex-1
                      border-2
                      border-black
                      bg-white
                      px-5
                      py-4
                      sm:px-6
                      sm:py-5
                    "
                  >
                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        text-black
                        sm:text-[22px]
                        lg:text-[24px]
                      "
                    >
                      {reason.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[14px]
                        text-[#555555]
                        sm:text-[16px]
                      "
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================
              RIGHT - ILLUSTRATION
          ========================== */}
 <div className="hidden items-start justify-center lg:flex lg:-mt-6 lg:translate-x-6">
             <Image
  src="/whychoose-usCharacter.svg"
  alt="Why choose us illustration"
  width={750}
  height={750}
  className="
    h-auto
    w-full
    max-w-130
    object-contain
    lg:w-110
    lg:max-w-none
  "
/>
          </div>
        </div>
      </div>
    </section>
  );
}