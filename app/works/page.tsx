"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Category = {
  title: string;
  folder: string;
  description: string;
  tags: string[];
  images: string[];
};

const categories: Category[] = [
  {
    title: "Nutri Mix",
    folder: "Nutri Mix",
    description:
      "A bold packaging collection designed to give everyday nutrition products a memorable shelf presence.",
    tags: ["Packaging", "Brand Identity", "Visual Design"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Porridge Mix",
    folder: "Porridge Mix",
    description:
      "Clean and modern packaging directions created for nutritious porridge products.",
    tags: ["Packaging", "Product Design", "Branding"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Podi Mix",
    folder: "Podi Mix",
    description:
      "A distinctive product identity balancing traditional food cues with a contemporary visual language.",
    tags: ["Packaging", "Identity", "Art Direction"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Soup Mix",
    folder: "Soup Mix",
    description:
      "Warm and approachable packaging concepts designed to communicate flavour and trust.",
    tags: ["Packaging", "Product Design", "Creative"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Fragrance",
    folder: "Fragrance",
    description:
      "Refined visual directions created to give fragrance products a distinct identity.",
    tags: ["Packaging", "Luxury", "Visual Identity"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Pickle",
    folder: "Pickle",
    description:
      "Traditional product storytelling brought into a bold contemporary packaging system.",
    tags: ["Packaging", "Branding", "Retail"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Health Mix",
    folder: "Health Mix",
    description:
      "Clear and approachable packaging designed around health and everyday usability.",
    tags: ["Packaging", "Communication", "Branding"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Millets Mix",
    folder: "Millets Mix",
    description:
      "Natural product cues combined with a modern visual system for millet-based products.",
    tags: ["Packaging", "Natural", "Brand Identity"],
    images: ["1.png", "2.png", "3.png"],
  },
  {
    title: "Malt Designs",
    folder: "Malt Designs",
    description:
      "Strong packaging directions built around malt-based products and nutrition.",
    tags: ["Packaging", "Product Identity", "Creative"],
    images: ["1.png", "2.png", "3.png"],
  },
];

export default function WorkPage() {
  const router = useRouter();

  const [current, setCurrent] = useState<Record<number, number>>({});
  const [preview, setPreview] = useState<[number, number] | null>(null);

  const getImage = (index: number) => current[index] ?? 0;

  const changeImage = (index: number, direction: number) => {
    const total = categories[index].images.length;

    setCurrent((prev) => ({
      ...prev,
      [index]: (getImage(index) + direction + total) % total,
    }));
  };

  return (
    <main className="page-shell">
      {/* HERO */}
      <section className="page-intro">
        <div className="page-container">
          <div className="top-bar">
            <button
              type="button"
              onClick={() => router.back()}
              className="outline-button"
            >
              ← Back
            </button>

            <span className="page-pill">Selected Work</span>
          </div>

          <div className="hero-line">
            <div>
              <p className="eyebrow">Creative Portfolio</p>

              <h1 className="hero-title">
                EM in <span>Action</span>
              </h1>

              <p className="hero-description">
                A showcase of creative work designed by Everyweb Matters —
                <br className="hidden sm:block" />
                from impactful packaging and branding to visuals that help
                businesses stand out.
              </p>
            </div>

            <div className="collection-total">
              <strong>
                {String(categories.length).padStart(2, "0")}
              </strong>

              <span>
                Creative
                <br />
                Collections
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our Portfolio</p>
              <h2>Creative Collections</h2>
            </div>

            <span>
              {String(categories.length).padStart(2, "0")} Collections
            </span>
          </div>

          <div className="collection-list">
            {categories.map((category, index) => {
              const imageIndex = getImage(index);
              const reversed = index % 2 === 1;

              return (
                <article key={category.title} className="collection">
                  <div className="collection-meta">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div />
                    <span>COLLECTION</span>
                  </div>

                  <div
                    className={`collection-card ${
                      reversed ? "collection-card-reverse" : ""
                    }`}
                  >
                    {/* IMAGE */}
                    <div className="collection-visual">
                      <button
                        type="button"
                        onClick={() =>
                          setPreview([index, imageIndex])
                        }
                        className="collection-image-button"
                      >
                        <div className="collection-image">
                          <Image
                            src={`/${category.folder}/${category.images[imageIndex]}`}
                            alt={`${category.title} design ${imageIndex + 1}`}
                            fill
                            sizes="(max-width:1024px) 100vw, 60vw"
                            className="collection-image-img"
                          />

                          <span className="image-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="image-counter">
                            {imageIndex + 1} /{" "}
                            {category.images.length}
                          </span>

                          <span className="open-image">
                            <Maximize2 className="h-4 w-4" />
                            Open
                          </span>
                        </div>
                      </button>

                      <div className="image-controls">
                        <button
                          type="button"
                          onClick={() => changeImage(index, -1)}
                          className="square-button"
                          aria-label={`Previous ${category.title}`}
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => changeImage(index, 1)}
                          className="square-button"
                          aria-label={`Next ${category.title}`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="collection-content">
                      <div>
                        <p className="eyebrow">
                          {index === 0
                            ? "Featured Collection"
                            : "Creative Collection"}
                        </p>

                        <h3>{category.title}</h3>

                        <p className="collection-description">
                          {category.description}
                        </p>

                        <div className="tag-list">
                          {category.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="collection-bottom">
                        <div className="progress-row">
                          <span>DESIGNS</span>
                          <strong>
                            {String(imageIndex + 1).padStart(2, "0")} /{" "}
                            {String(category.images.length).padStart(2, "0")}
                          </strong>
                        </div>

                        <div className="progress-bar">
                          {category.images.map((_, image) => (
                            <button
                              key={image}
                              type="button"
                              onClick={() =>
                                setCurrent((prev) => ({
                                  ...prev,
                                  [index]: image,
                                }))
                              }
                              className={
                                imageIndex === image
                                  ? "progress-active"
                                  : ""
                              }
                              aria-label={`Show design ${image + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setPreview([index, imageIndex])
                          }
                          className="view-button"
                        >
                          View Collection
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULLSCREEN */}
      {preview && (
        <div
          className="preview-overlay"
          onClick={() => setPreview(null)}
        >
          <div
            className="preview-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="preview-close"
              aria-label="Close preview"
            >
              <X />
            </button>

            <Image
              src={`/${categories[preview[0]].folder}/${categories[preview[0]].images[preview[1]]}`}
              alt={categories[preview[0]].title}
              fill
              sizes="100vw"
              className="preview-image"
            />

            <button
              type="button"
              className="preview-arrow preview-prev"
              onClick={() => {
                const total =
                  categories[preview[0]].images.length;

                setPreview([
                  preview[0],
                  (preview[1] - 1 + total) % total,
                ]);
              }}
              aria-label="Previous preview"
            >
              <ArrowLeft />
            </button>

            <button
              type="button"
              className="preview-arrow preview-next"
              onClick={() => {
                const total =
                  categories[preview[0]].images.length;

                setPreview([
                  preview[0],
                  (preview[1] + 1) % total,
                ]);
              }}
              aria-label="Next preview"
            >
              <ArrowRight />
            </button>

            <div className="preview-info">
              <p>{categories[preview[0]].title}</p>

              <strong>
                Design {preview[1] + 1} /{" "}
                {categories[preview[0]].images.length}
              </strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}