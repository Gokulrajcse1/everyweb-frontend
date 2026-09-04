"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Category = {
  title: string;
  folder: string;
  images: string[];
};

const categories: Category[] = [
  { title: "Nutri Mix", folder: "Nutri Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Porridge Mix", folder: "Porridge Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Podi Mix", folder: "Podi Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Soup Mix", folder: "Soup Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Fragrance", folder: "Fragrance", images: ["1.png", "2.png", "3.png"] },
  { title: "Pickle", folder: "Pickle", images: ["1.png", "2.png", "3.png"] },
  { title: "Health Mix", folder: "Health Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Millets Mix", folder: "Millets Mix", images: ["1.png", "2.png", "3.png"] },
  { title: "Malt Designs", folder: "Malt Designs", images: ["1.png", "2.png", "3.png"] },
];

export default function WorkPage() {
  const router = useRouter();

  const [currentImages, setCurrentImages] = useState<Record<number, number>>({});
  const [preview, setPreview] = useState<[number, number] | null>(null);

  const getImage = (category: number) => currentImages[category] ?? 0;

  const changeCardImage = (category: number, direction: number) => {
    const total = categories[category].images.length;
    const current = getImage(category);

    setCurrentImages((prev) => ({
      ...prev,
      [category]: (current + direction + total) % total,
    }));
  };

  const openPreview = (category: number) => {
    setPreview([category, getImage(category)]);
  };

  const changePreview = (direction: number) => {
    if (!preview) return;

    const [category, image] = preview;
    const total = categories[category].images.length;

    setPreview([
      category,
      (image + direction + total) % total,
    ]);
  };

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-slate-900">

      {/* HEADER */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-350">

          <div className="mb-8 flex items-center justify-between sm:mb-10">
            <button
              type="button"
              onClick={() => router.back()}
              className="border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-black hover:bg-black hover:text-white"
            >
              ← Back
            </button>

            <span className="bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#5a4bff]">
              Selected Work
            </span>
          </div>

          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a4bff]">
              Creative Portfolio
            </p>

            <h1 className="mt-2 text-4xl font-bold italic tracking-tight sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.95]">
              EM in <span className="text-[#5a4bff]">Action</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              A showcase of creative work designed by Everyweb Matters —
              <br className="hidden sm:block" />
              from impactful packaging and branding to visuals that help
              businesses stand out.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-350">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5a4bff]">
                Our Portfolio
              </p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Creative Collections
              </h2>
            </div>

            <span className="text-sm text-[#666]">
              {categories.length} Categories
            </span>
          </div>

          {/* 3 COLUMNS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category, categoryIndex) => {
              const imageIndex = getImage(categoryIndex);

              return (
                <article
                  key={category.title}
                  className="overflow-hidden border-2 border-black bg-white"
                >

                  {/* IMAGE */}
                  <div className="relative">

                    {/* CLICK IMAGE FOR FULLSCREEN */}
                    <button
                      type="button"
                      onClick={() => openPreview(categoryIndex)}
                      className="group block w-full"
                    >
                      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">

                        <Image
                          src={`/${category.folder}/${category.images[imageIndex]}`}
                          alt={`${category.title} design ${imageIndex + 1}`}
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* CATEGORY NUMBER */}
                        <span className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-xs font-bold">
                          {String(categoryIndex + 1).padStart(2, "0")}
                        </span>

                        {/* IMAGE COUNT */}
                        <span className="absolute right-4 top-4 z-10 bg-black px-3 py-1.5 text-xs font-bold text-white">
                          {imageIndex + 1} / {category.images.length}
                        </span>

                      </div>
                    </button>

                    {/* CARD IMAGE SWITCHER
                        SMALL CONTROLS ONLY */}
                    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                      {category.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          type="button"
                          onClick={() =>
                            setCurrentImages((prev) => ({
                              ...prev,
                              [categoryIndex]: imageIndex,
                            }))
                          }
                          className={`h-1.5 transition-all ${
                            getImage(categoryIndex) === imageIndex
                              ? "w-8 bg-[#5a4bff]"
                              : "w-3 bg-black/20"
                          }`}
                          aria-label={`Show image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>

                  </div>

                  {/* INFO */}
                  <div className="border-t-2 border-black px-5 py-5">
                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a4bff]">
                          Collection
                        </p>

                        <h3 className="text-xl font-bold">
                          {category.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => openPreview(categoryIndex)}
                        className="border border-black px-3 py-2 text-xs font-bold transition hover:bg-black hover:text-white"
                      >
                        View
                      </button>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {category.title} creative collection featuring
                      three design directions.
                    </p>
                  </div>

                </article>
              );
            })}
            {/* =========================================
    PLAYLIST BANNER
========================================= */}
<div className="mt-10 overflow-hidden border-2 border-black bg-[#f5f5f5] lg:col-span-2">
  <div className="group relative aspect-620/353 overflow-hidden">
    <Image
      src="/playlist-banner.png"
      alt="Playlist Tickets or Passes"
      fill
      sizes="(max-width: 1024px) 100vw, 66vw"
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* FULLSCREEN PREVIEW */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute right-0 top-0 z-20 flex h-11 w-11 items-center justify-center border-2 border-white bg-black text-white transition hover:bg-white hover:text-black"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* FULLSCREEN IMAGE */}
            <Image
              src={`/${categories[preview[0]].folder}/${categories[preview[0]].images[preview[1]]}`}
              alt={categories[preview[0]].title}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* PREVIOUS - INSIDE FULLSCREEN */}
            <button
              type="button"
              onClick={() => changePreview(-1)}
              className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-2 border-white bg-black text-white transition hover:bg-white hover:text-black"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* NEXT - INSIDE FULLSCREEN */}
            <button
              type="button"
              onClick={() => changePreview(1)}
              className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-2 border-white bg-black text-white transition hover:bg-white hover:text-black"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* FULLSCREEN INFO */}
            <div className="absolute bottom-5 left-5 z-20 bg-black/80 px-5 py-3 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8b80ff]">
                {categories[preview[0]].title}
              </p>

              <p className="mt-1 text-sm font-semibold">
                Design {preview[1] + 1} /{" "}
                {categories[preview[0]].images.length}
              </p>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}