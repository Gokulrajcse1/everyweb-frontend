"use client";

import Link from "next/link";
import { House } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full bg-[#efefef] overflow-visible py-4">
      <div className="mx-auto w-[96vw] border-2 border-black shadow-[4px_4px_0_0_#000]">
        {/* Top Row */}<div className="flex h-[74px] items-center justify-between border-b-2 border-black">
          {/* Logo */}<Link href="/" className="flex items-center pl-6">
            <div className="mr-2 text-[40px] font-black leading-none text-[#3b2a25]">
              M
            </div>

            <div className="leading-none">
              <div className="text-[44px] font-black tracking-[-0.04em] text-[#3b2a25]">
                everyweb
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#3b2a25]">
                Matters
              </div>
            </div>
          </Link>

          {/* Social Icons */}<div className="flex h-full">
            <a
              href="#"
              className="flex h-full w-[64px] items-center justify-center border-l-2 border-black text-black transition hover:bg-black hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="flex h-full w-[64px] items-center justify-center border-l-2 border-black text-black transition hover:bg-black hover:text-white"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="flex h-full w-[64px] items-center justify-center border-l-2 border-black text-black transition hover:bg-black hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="#"
              className="flex h-full w-[64px] items-center justify-center border-l-2 border-black text-black transition hover:bg-black hover:text-white"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Bottom Navigation */}<nav className="flex h-[62px] items-center">
          {/* Home Icon Box */}<div className="pl-4">
            <Link
              href="/"
              className="flex h-[42px] w-[42px] items-center justify-center border border-gray-300 bg-white text-black transition hover:bg-black hover:text-white"
            >
              <House size={22} />
            </Link>
          </div>

          {/* Navigation Links */}<div className="flex flex-1 items-center justify-around px-8 text-[18px] font-normal text-black">
            <Link href="/about" className="transition hover:text-[#5a4bff]">
              About Us
            </Link>

            <Link href="/services" className="transition hover:text-[#5a4bff]">
              Services
            </Link>

            <Link href="/works" className="transition hover:text-[#5a4bff]">
              Our Works
            </Link>

            <Link href="/contact" className="transition hover:text-[#5a4bff]">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}