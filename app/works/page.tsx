"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const designs = [
  ["01.png", "K Seven Millet Malt"],
  ["02.png", "Packaging Design"],
  ["03.png", "Brand Identity"],
  ["04.png", "Product Packaging"],
  ["05.png", "Creative Campaign"],
  ["06.png", "Packaging Artwork"],
  ["07.png", "Brand Design"],
  ["08.png", "Product Design"],
  ["09.png", "Visual Design"],
  ["10.png", "Creative Packaging"],
  ["11.png", "Brand Communication"],
  ["12.png", "Marketing Design"],
  ["13.png", "Packaging & Branding"],
];

export default function WorkPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-slate-900">

      <div className="w-full px-5 py-6 sm:px-8 sm:py-8 md:px-12 lg:px-16">

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
            Selected Work
          </span>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="mb-10 border-b border-slate-200 pb-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
            13 Creative Projects
          </p>

          <h1 className="mt-2 text-4xl font-bold italic tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.95]">
            EM in <span className="text-[#5a4bff]">Action</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            A showcase of creative work designed by Everyweb Matters — from impactful
            packaging and branding to visuals that help businesses stand out.
          </p>
        </div>
      </div>

      {/* WORK SHOWCASE */}
      <section className="px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-350">

          {/* SECTION TITLE */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-2xl">
              Our Work
            </h2>

            <span className="text-sm text-[#666]">
              01 — 13
            </span>
          </div>

          {/* 4 CARDS PER ROW */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {designs.map(([image, title], i) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelected(i)}
                className="group block w-full text-left"
              >
                <div className="overflow-hidden border border-black bg-white">

                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">

                    <Image
                      src={`/${image}`}
                      alt={title}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw
                      "
                      className="
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* PROJECT NUMBER */}
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        border-2
                        border-black
                        bg-white
                        text-sm
                        font-bold
                      "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* VIEW BADGE */}
                    <span
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        items-center
                        gap-2
                        bg-[#5a4bff]
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      View
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* PROJECT INFO */}
                  <div className="flex items-center justify-between border-t-2 border-black px-4 py-4 sm:px-5">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a4bff]">
                        Project
                      </p>

                      <h3 className="text-[16px] font-bold sm:text-[18px]">
                        {title}
                      </h3>
                    </div>

                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* FULLSCREEN PREVIEW */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-5
            backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[85vh] w-full max-w-5xl"
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="
                absolute
                right-0
                top-0
                z-10
                flex
                h-11
                w-11
                items-center
                justify-center
                border-2
                border-white
                bg-black
                text-white
                hover:bg-white
                hover:text-black
              "
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* PREVIEW IMAGE */}
            <Image
              src={`/${designs[selected][0]}`}
              alt={designs[selected][1]}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* PROJECT TITLE */}
            <div className="absolute bottom-0 left-0 bg-black/75 px-5 py-3 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8b80ff]">
                Project {String(selected + 1).padStart(2, "0")}
              </p>

              <h2 className="text-xl font-bold">
                {designs[selected][1]}
              </h2>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}