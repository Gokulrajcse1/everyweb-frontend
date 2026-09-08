"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Behind EM", href: "/about" },
    { label: "Capabilities", href: "/service" },
    { label: "EM in Action", href: "/works" },
    { label: "Let's Create", href: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "Graphic Design",
      href: "/service#graphic-design",
    },
    {
      label: "Website Development",
      href: "/service#website-development",
    },
    {
      label: "Brand Awareness",
      href: "/service#brand-awareness",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/everywebmatters",
      icon: <FaFacebookF size={18} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/everywebmatters",
      icon: <FaInstagram size={18} />,
    },
    {
      label: "Pinterest",
      href: "https://pin.it/1wy50ytGE",
      icon: <FaPinterestP size={16} />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/9698284661",
      icon: <FaWhatsapp size={19} />,
    },
  ];

  return (
    <footer className="w-full bg-white py-4 sm:py-6">
      <div className="mx-auto w-full px-2 sm:px-4 lg:w-[97vw]">
        <div className="border-2 border-black bg-white">

          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

            {/* LEFT BRAND SECTION */}
            <div className="flex flex-col border-b-2 border-black lg:border-b-0 lg:border-r-2">

              {/* BRAND */}
              <div className="flex-1 p-5 sm:p-6">
                <Link
                  href="/"
                  className="inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src="/EM logo.svg"
                    alt="EveryWeb Matters"
                    width={220}
                    height={60}
                    className="h-9 w-auto max-w-full object-contain sm:h-11"
                  />
                </Link>

                <p className="mt-3 text-[14px] leading-relaxed text-[#333333] sm:mt-4 sm:text-[15px]">
                  We help businesses build stronger brands through strategic
                  branding, impactful graphic design, and modern website
                  development.
                </p>
              </div>

              {/* SOCIAL MEDIA - EQUAL GRID */}
              <div className="border-t-2 border-black p-4 sm:p-5">
                <div className="grid grid-cols-4 gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="
                        flex
                        h-11
                        w-full
                        items-center
                        justify-center
                        border-2
                        border-black
                        bg-white
                        text-black
                        transition-all
                        duration-200
                        hover:bg-black
                        hover:text-white
                      "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - 2 COLS ON TABLET, 3 ON DESKTOP */}
            <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6 md:grid-cols-3">

              {/* QUICK LINKS */}
              <div>
                <h3 className="mb-3 text-[16px] font-black text-black underline decoration-2 underline-offset-4">
                  Quick links
                </h3>

                <nav className="space-y-2 text-[14px] text-[#333333]">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block transition-colors duration-300 hover:text-[#5a4bff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* SERVICES */}
              <div>
                <h3 className="mb-3 text-[16px] font-black text-black underline decoration-2 underline-offset-4">
                  Services
                </h3>

                <nav className="space-y-2 text-[14px] text-[#333333]">
                  {serviceLinks.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      className="block transition-colors duration-300 hover:text-[#5a4bff]"
                    >
                      {service.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* GET IN TOUCH */}
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className="mb-3 text-[16px] font-black text-black underline decoration-2 underline-offset-4">
                  Get in Touch
                </h3>

                <div className="space-y-3.5 text-[#333333]">

                  {/* LOCATION */}
                  <div>
                    <h4 className="mb-0.5 text-[15px] font-semibold text-black">
                      Location
                    </h4>

                    <p className="text-[13px] leading-relaxed text-[#333333]">
                      F4 Shop, 13/40, DL Plaza, Kamarajar Road,
                      Melakalakandarkottai, Tiruchirappalli – 620011,
                      Tamil Nadu, India.
                    </p>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <h4 className="mb-0.5 text-[15px] font-semibold text-black">
                      Email
                    </h4>

                    <a
                      href="mailto:contact@everywebmatters.com"
                      className="break-all text-[13px] text-[#333333] transition-colors duration-300 hover:text-[#5a4bff]"
                    >
                      contact@everywebmatters.com
                    </a>
                  </div>

                  {/* PHONE */}
                  <div>
                    <h4 className="mb-0.5 text-[15px] font-semibold text-black">
                      Phone
                    </h4>

                    <a
                      href="tel:+919698284661"
                      className="text-[13px] text-[#333333] transition-colors duration-300 hover:text-[#5a4bff]"
                    >
                      +91 96982 84661
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t-2 border-black py-3 text-center">
            <p className="text-[13px] text-[#333333]">
              © Copyright 2026{" "}
              <span className="underline underline-offset-2">
                Everyweb Matters
              </span>{" "}
              – All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}