"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      title: "Graphic Design",
      image: "/service-graphic.png",
      desc: "We design creative visuals that support your brand identity across packaging, websites, & everywhere",
      href: "/service#graphic-design",
    },
    {
      title: "Brand Awareness",
      image: "/service-brand.png",
      desc: "We support your brand with creative content, videos, and social media visuals to improve visibility.",
      href: "/service#brand-awareness",
    },
    {
      title: "Website Design",
      image: "/service-website.png",
      desc: "We build professional websites that strengthen your brand presence and help your business grow online.",
      href: "/service#website-development",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-330 sm:w-[96vw]">

        {/* HEADING */}
        <div className="mb-12 text-center lg:mb-14">
          <h2 className="text-[40px] font-bold italic leading-none text-black sm:text-[52px] lg:text-[64px]">
            What We Do
          </h2>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const isHovered = hoveredCard === service.title;

            return (
              <div
                key={service.title}
                onMouseEnter={() =>
                  setHoveredCard(service.title)
                }
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  flex
                  min-h-125
                  cursor-pointer
                  flex-col
                  border-2
                  border-black
                  bg-white
                  px-5
                  pb-5
                  pt-6
                  transition-all
                  duration-300
                  ease-out
                  ${
                    isHovered
                      ? "-translate-y-3 border-[#5a4bff] shadow-[8px_8px_0_0_#5a4bff]"
                      : "shadow-[4px_4px_0_0_#000]"
                  }
                `}
              >
                {/* IMAGE */}
                <div
                  className="
                    flex
                    h-60
                    shrink-0
                    items-center
                    justify-center
                    px-2
                    sm:h-64
                    lg:h-65
                  "
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={320}
                    height={320}
                    className={`
                      h-full
                      w-full
                      max-w-65
                      object-contain
                      transition-transform
                      duration-300
                      ${
                        isHovered
                          ? "scale-105"
                          : "scale-100"
                      }
                    `}
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col">

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-center
                      text-[30px]
                      font-bold
                      leading-tight
                      text-black
                      sm:text-[34px]
                      lg:text-[36px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mx-auto
                      mt-3
                      w-full
                      max-w-102.5
                      text-center
                      text-[14px]
                      leading-6
                      text-[#444444]
                    "
                  >
                    {service.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-auto flex justify-center pt-7">
                    <Link
                      href={service.href}
                      className={`
                        relative
                        overflow-hidden
                        px-7
                        py-3
                        text-[19px]
                        font-semibold
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                          isHovered
                            ? "scale-105 -translate-y-1 bg-[#5a4bff] text-white shadow-[4px_4px_0_0_#000]"
                            : "bg-black text-white shadow-[4px_4px_0_0_#5a4bff]"
                        }
                      `}
                    >
                      Read More
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}