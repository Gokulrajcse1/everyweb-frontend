"use client";

import Image from "next/image";

const designs = [
  {
    id: 1,
    image: "/01.png",
    title: "K Seven Millet Malt",
  },
  {
    id: 2,
    image: "/02.png",
    title: "Packaging Design",
  },
  {
    id: 3,
    image: "/03.png",
    title: "Brand Identity",
  },
  {
    id: 4,
    image: "/04.png",
    title: "Product Packaging",
  },
  {
    id: 5,
    image: "/05.png",
    title: "Creative Campaign",
  },
  {
    id: 6,
    image: "/06.png",
    title: "Packaging Artwork",
  },
  {
    id: 7,
    image: "/07.png",
    title: "Brand Design",
  },
  {
    id: 8,
    image: "/08.png",
    title: "Product Design",
  },
  {
    id: 9,
    image: "/09.png",
    title: "Visual Design",
  },
  {
    id: 10,
    image: "/10.png",
    title: "Creative Packaging",
  },
  {
    id: 11,
    image: "/11.png",
    title: "Brand Communication",
  },
  {
    id: 12,
    image: "/12.png",
    title: "Marketing Design",
  },
  {
    id: 13,
    image: "/13.png",
    title: "Packaging & Branding",
  },
];

export default function WorkPage() {
  return (
    <main className="bg-white text-black">

      {/* =========================
          HERO / TITLE
      ========================== */}
      <section className="px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="mx-auto max-w-[1400px]">
          <h1
            className="
              text-[48px]
              font-bold
              italic
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-[64px]
              md:text-[76px]
              lg:text-[88px]
            "
          >
            EM in <span className="text-[#5a4bff]">Action</span>
          </h1>

          <p
            className="
              mt-5
              max-w-[720px]
              text-[17px]
              leading-7
              text-[#333333]
              sm:mt-6
              sm:text-[19px]
              sm:leading-8
              lg:text-[20px]
            "
          >
            A showcase of creative work designed by Everyweb Matters —
            from impactful packaging and branding to visuals that help
            businesses stand out.
          </p>
        </div>
      </section>

      {/* =========================
          DESIGN SHOWCASE
      ========================== */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1400px]">

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {designs.map((design) => (
              <div
                key={design.id}
                className="
                  group
                  overflow-hidden
                  border-2
                  border-black
                  bg-[#f5f5f5]
                "
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-contain
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Design Info */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t-2
                    border-black
                    px-4
                    py-4
                    sm:px-5
                    sm:py-5
                  "
                >
                  <h2
                    className="
                      text-[16px]
                      font-bold
                      leading-tight
                      sm:text-[18px]
                    "
                  >
                    {design.title}
                  </h2>

                  <span
                    className="
                      text-[13px]
                      font-bold
                      text-[#5a4bff]
                      sm:text-[14px]
                    "
                  >
                    {design.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}