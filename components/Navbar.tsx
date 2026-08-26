"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
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
      href: "https://wa.me/9698284661",
      icon: <FaWhatsapp size={22} />,
    },
  ];

  return (
    <header className="w-full bg-white py-2">
      <div
        className="
          mx-auto
          w-[calc(100%-1.5rem)]
          sm:w-[96vw]
          border-2
          border-black
          bg-[#efefef]
          shadow-[5px_5px_0_0_#000]
        "
      >
        {/* =========================
            TOP ROW
        ========================== */}
        <div className="flex min-h-16 items-center justify-between lg:h-18 lg:min-h-0 lg:border-b-2 lg:border-black">
          
          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              min-w-0 pl-4 sm:pl-6
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            <Image
              src="/EM logo.svg"
              alt="EveryWeb Matters"
              width={220}
              height={60}
              priority
              className="h-8 w-auto max-w-full object-contain sm:h-10 lg:h-12"
            />
          </Link>

          {/* Social Icons */}
          <div className="mr-4 hidden shrink-0 items-center gap-2 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  flex
                  h-10.5
                  w-10.5
                  items-center
                  justify-center
                  border-2
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

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="mr-3 flex h-10 w-10 items-center justify-center border-2 border-black text-xl text-black transition-colors duration-200 hover:bg-black hover:text-white sm:mr-4 lg:hidden"
          >
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>

        {/* =========================
            NAVIGATION
        ========================== */}
        <nav className="hidden h-13 items-center justify-center px-6 lg:flex">
          <div
            className="
              flex
              w-full
              items-center
              justify-between
              gap-6
              text-[18px]
              font-normal
              text-black
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`relative py-1.5 transition-all duration-300 hover:text-[#5a4bff] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#5a4bff] after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === item.href
                    ? "text-[#5a4bff] after:w-full"
                    : "after:w-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t-2 border-black bg-[#efefef] px-4 py-4 lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col border-2 border-black bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`border-b-2 border-black px-4 py-3 text-[16px] font-medium last:border-b-0 hover:bg-[#f3f3f3] ${
                    pathname === item.href ? "bg-[#5a4bff] text-white" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-wrap gap-2" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-black transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
