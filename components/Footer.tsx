"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Behind EM", href: "/about" },
    { label: "Capabilities", href: "/services" },
    { label: "EM in Action", href: "/works" },
    { label: "Let's Create", href: "/contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/everywebmatters",
      icon: <FaFacebookF size={20} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/everywebmatters",
      icon: <FaInstagram size={20} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/everywebmatters/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/0000000000",
      icon: <FaWhatsapp size={22} />,
    },
  ];

  return (
    <footer className="bg-[#efefef] py-16">
      <div className="mx-auto w-[96vw] max-w-[1130px] border border-black bg-white">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[365px_1fr]">

          {/* =========================
              LEFT BRAND SECTION
          ========================== */}
          <div className="flex flex-col border-b border-black lg:border-b-0 lg:border-r">

            {/* Brand + Description */}
            <div className="flex-1 p-8">

              {/* Logo */}
              <Link
                href="/"
                className="inline-block transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center">

                  {/* M Logo */}
                  <div className="mr-2 text-[38px] font-black leading-none tracking-[-0.08em] text-[#3b2a25]">
                    M
                  </div>

                  {/* Brand Name */}
                  <div className="leading-none">
                    <div className="text-[38px] font-black tracking-[-0.055em] text-[#3b2a25]">
                      everyweb
                    </div>

                    <div className="mt-[3px] text-[8px] uppercase tracking-[0.38em] text-[#3b2a25]">
                      Matters
                    </div>
                  </div>

                </div>
              </Link>

              {/* Description */}
              <p className="mt-7 max-w-[300px] text-[16px] leading-[1.75] text-[#333333]">
                We help businesses build stronger brands through strategic
                branding, impactful graphic design, and modern website
                development.
              </p>
            </div>

            {/* =========================
                SOCIAL ICONS
            ========================== */}
            <div className="flex gap-4 border-t border-black p-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-black
                    text-black
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}
          <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3">

            {/* =========================
                QUICK LINKS
            ========================== */}
            <div>
              <h3 className="mb-5 text-[20px] font-black text-black underline decoration-2 underline-offset-4">
                Quick links
              </h3>

              <nav className="space-y-3 text-[18px] text-[#333333]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      block
                      transition-colors
                      duration-300
                      hover:text-[#5a4bff]
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* =========================
                SERVICES
            ========================== */}
            <div>
              <h3 className="mb-5 text-[20px] font-black text-black underline decoration-2 underline-offset-4">
                Services
              </h3>

              <div className="space-y-3 text-[18px] text-[#333333]">
                <p>Graphic Design</p>
                <p>Website Development</p>
                <p>Brand Awareness</p>
              </div>
            </div>

            {/* =========================
                GET IN TOUCH
            ========================== */}
            <div>
              <h3 className="mb-5 text-[20px] font-black text-black underline decoration-2 underline-offset-4">
                Get in Touch
              </h3>

              <div className="space-y-6 text-[#333333]">

                {/* Location */}
                <div>
                  <h4 className="mb-2 text-[20px] font-medium text-black">
                    Location
                  </h4>

                  <p className="max-w-[270px] text-[15px] leading-6 text-[#333333]">
                    F4 Shop, 13/40, DL Plaza, Kamarajar Road,
                    Melakalakandarkottai, Tiruchirappalli – 620011,
                    Tamil Nadu, India.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="mb-2 text-[20px] font-medium text-black">
                    Email
                  </h4>

                  <a
                    href="mailto:contact@everywebmatters.com"
                    className="
                      text-[15px]
                      text-[#333333]
                      transition-colors
                      duration-300
                      hover:text-[#5a4bff]
                    "
                  >
                    contact@everywebmatters.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="mb-2 text-[20px] font-medium text-black">
                    Phone
                  </h4>

                  <a
                    href="tel:+919698284661"
                    className="
                      text-[15px]
                      text-[#333333]
                      transition-colors
                      duration-300
                      hover:text-[#5a4bff]
                    "
                  >
                    +91 96982 84661
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div className="border-t border-black py-3 text-center">
          <p className="text-[14px] text-[#333333]">
            © Copyright 2025{" "}
            <span className="underline underline-offset-1">
              Everyweb Matters
            </span>{" "}
            – All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}