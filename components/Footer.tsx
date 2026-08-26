"use client";

import Image from "next/image";
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
    { label: "Capabilities", href: "/service" },
    { label: "EM in Action", href: "/works" },
    { label: "Let's Create", href: "/contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/everywebmatters",
      icon: <FaFacebookF size={16} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/everywebmatters",
      icon: <FaInstagram size={16} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/everywebmatters/",
      icon: <FaLinkedinIn size={16} />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/9698284661",
      icon: <FaWhatsapp size={18} />,
    },
  ];

  return (
    <footer className="bg-white py-6 sm:py-8">
      {/* FOOTER CONTAINER */}
      <div className="mx-auto w-[calc(100%-1rem)] max-w-none border-2 border-black bg-white sm:w-[98vw] lg:w-[97vw]">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">

          {/* LEFT BRAND SECTION */}
          <div className="flex flex-col border-b-2 border-black lg:border-b-0 lg:border-r-2">

            {/* Brand + Description */}
            <div className="flex-1 p-5 sm:p-6">

              {/* Logo */}
              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <Image
                  src="/EM logo.svg"
                  alt="EveryWeb Matters"
                  width={180}
                  height={50}
                  priority
                  className="h-7 w-auto max-w-full object-contain sm:h-8"
                />
              </Link>

              {/* Description */}
              <p className="mt-4 max-w-72 text-[14px] leading-relaxed text-[#333333]">
                We help businesses build stronger brands through strategic
                branding, impactful graphic design, and modern website
                development.
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-2.5 border-t-2 border-black p-4 sm:p-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex
                    h-10
                    w-10
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

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-3">

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

            {/* SERVICES */}
            <div>
              <h3 className="mb-3 text-[16px] font-black text-black underline decoration-2 underline-offset-4">
                Services
              </h3>

              <div className="space-y-2 text-[14px] text-[#333333]">
                <p>Graphic Design</p>
                <p>Website Development</p>
                <p>Brand Awareness</p>
              </div>
            </div>

            {/* GET IN TOUCH */}
            <div>
              <h3 className="mb-3 text-[16px] font-black text-black underline decoration-2 underline-offset-4">
                Get in Touch
              </h3>

              <div className="space-y-3 text-[#333333]">

                {/* Location */}
                <div>
                  <h4 className="mb-1 text-[15px] font-semibold text-black">
                    Location
                  </h4>

                  <p className="w-full text-[13px] leading-relaxed text-[#333333]">
                    F4 Shop, 13/40, DL Plaza, Kamarajar Road,
                    Melakalakandarkottai, Tiruchirappalli – 620011,
                    Tamil Nadu, India.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="mb-1 text-[15px] font-semibold text-black">
                    Email
                  </h4>

                  <a
                    href="mailto:contact@everywebmatters.com"
                    className="
                      break-all
                      text-[13px]
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
                  <h4 className="mb-1 text-[15px] font-semibold text-black">
                    Phone
                  </h4>

                  <a
                    href="tel:+919698284661"
                    className="
                      text-[13px]
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

        {/* COPYRIGHT */}
        <div className="border-t-2 border-black py-2.5 text-center">
          <p className="text-[13px] text-[#333333]">
            © Copyright 2026{" "}
            <span className="underline underline-offset-2">
              Everyweb Matters
            </span>{" "}
            – All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}