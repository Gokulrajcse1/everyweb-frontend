"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Pencil,
  Box,
  FileText,
  Image as ImageIcon,
  Monitor,
  Smartphone,
  Code2,
  Palette,
  Megaphone,
  Video,
  Share2,
} from "lucide-react";

type ServiceId =
  | "graphic-design"
  | "website-development"
  | "brand-awareness";

type Detail = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: Record<ServiceId, Detail[]> = {
  "graphic-design": [
    {
      title: "Logo Design",
      description: "Memorable logos that define your brand identity.",
      icon: Pencil,
    },
    {
      title: "Packaging Design",
      description:
        "We design impactful packaging that makes your product stand out and attract customers instantly.",
      icon: Box,
    },
    {
      title: "Brochure Design",
      description:
        "We design clean and professional brochures that present your brand and information clearly.",
      icon: FileText,
    },
    {
      title: "Poster Design",
      description:
        "We create impactful posters that attract attention and deliver your message effectively.",
      icon: ImageIcon,
    },
  ],

  "website-development": [
    {
      title: "E-Commerce Website",
      description:
        "Professional e-commerce websites designed to showcase your products and help your business grow online.",
      icon: Monitor,
    },
    {
      title: "Business Website",
      description:
        "Modern business websites that build credibility and create a strong online presence.",
      icon: Smartphone,
    },
    {
      title: "Landing Pages",
      description:
        "Focused landing pages designed to communicate your message clearly and drive conversions.",
      icon: Code2,
    },
    {
      title: "Website Redesign",
      description:
        "We redesign outdated websites with modern layouts, better usability, and responsive experiences.",
      icon: Palette,
    },
    {
      title: "Website Maintenance",
      description:
        "Reliable website updates, improvements, and maintenance to keep your website running smoothly.",
      icon: Monitor,
    },
  ],

  "brand-awareness": [
    {
      title: "Content Creation",
      description:
        "Creative content that communicates your brand message and keeps your audience engaged.",
      icon: Video,
    },
    {
      title: "Social Media Handling",
      description:
        "We create and manage engaging social media content that improves your brand visibility.",
      icon: Share2,
    },
    {
      title: "Video Content",
      description:
        "Creative video content that helps your brand communicate ideas effectively and attract attention.",
      icon: Video,
    },
    {
      title: "Profile Setup & Optimization",
      description:
        "Professional profile setup and optimization to create a strong and consistent digital presence.",
      icon: Megaphone,
    },
  ],
};

const tabs: { id: ServiceId; label: string }[] = [
  { id: "graphic-design", label: "Graphic Design" },
  { id: "website-development", label: "Website Design" },
  { id: "brand-awareness", label: "Brand Awareness" },
];

export default function ServicePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] =
    useState<ServiceId>("graphic-design");

  const readHashAndSetTab = () => { 
    const hash = window.location.hash.substring(1) as ServiceId;

    if (
      hash === "graphic-design" ||
      hash === "website-development"||
      hash === "brand-awareness"
      
    ) {
      setActiveTab(hash);

      setTimeout(() => {
        document.getElementById("service-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  useEffect(() => {
    readHashAndSetTab();
    window.addEventListener("hashchange", readHashAndSetTab);

    return () => {
      window.removeEventListener("hashchange", readHashAndSetTab);
    };
  }, []);

  const handleTabChange = (id: ServiceId) => {
    window.location.hash = id;
  };

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-[#10203b]">
      <div className="w-full px-6 py-10 md:px-16">

        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            ← Back
          </button>

          <span className="rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#5a4bff]">
            Capabilities
          </span>
        </div>

        {/* TABS */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 border-b border-slate-200 pb-6 sm:gap-16">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`relative pb-1 text-[18px] font-bold transition-colors duration-200 sm:text-[24px] ${
                  isActive
                    ? "text-[#5a4bff]"
                    : "text-[#8da0bb] hover:text-[#5a4bff]"
                }`}
              >
                {tab.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#5a4bff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* SERVICE CONTENT */}
        <div id="service-content" className="scroll-mt-24">
          {services[activeTab].map((detail, index) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.title}
                className={`flex items-center gap-5 border-b border-indigo-100 py-7 sm:gap-6 sm:py-8 ${
                  index === 0 ? "border-t border-indigo-100" : ""
                }`}
              >
                {/* ICON */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#111a30] text-white sm:h-14.5 sm:w-14.5">
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-[21px] font-bold leading-tight sm:text-[24px]">
                    {detail.title}
                  </h2>

                  <p className="mt-2 text-[16px] leading-7 text-[#36506f] sm:text-[18px]">
                    {detail.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}