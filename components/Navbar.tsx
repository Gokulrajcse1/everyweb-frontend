"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
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
    <header className="w-full overflow-visible bg-white px-0 py-4">
      <div
        className="
          mx-auto
          w-[96vw]
          border-2
          border-black
          bg-[#efefef]
          shadow-[5px_5px_0_0_#000]
        "
      >
        {/* =========================
            TOP ROW
        ========================== */}
        <div className="flex min-h-20.5 items-center justify-between border-b-2 border-black">
          
          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              pl-6
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
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex h-full">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  flex
                  h-full
                  w-16
                  items-center
                  justify-center
                  border-l-2
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
            NAVIGATION
        ========================== */}
        <nav className="flex min-h-15.5 items-center justify-center px-6">
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
                className="
                  relative
                  py-2
                  transition-all
                  duration-300
                  hover:text-[#5a4bff]
                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-0.5
                  after:w-0
                  after:bg-[#5a4bff]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}