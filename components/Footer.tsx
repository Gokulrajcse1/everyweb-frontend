'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#efefef] py-16'>
      <div className='mx-auto w-[96vw] max-w-330 border-2 border-black bg-[#efefef]'>
        {/* Main Footer */}
        <div className='grid grid-cols-1 lg:grid-cols-[360px_1fr]'>
          {/* Left Brand Section */}
          <div className='border-b-2 border-black p-8 lg:border-b-0 lg:border-r-2'>
            <div className='mb-6 flex items-center gap-3'>
              <div className='text-4xl font-black text-[#3b2a25]'>M</div>
              <div className='leading-none'>
                <div className='text-4xl font-black tracking-tight text-[#3b2a25]'>
                  everyweb
                </div>
                <div className='mt-1 text-[10px] uppercase tracking-[0.35em] text-[#3b2a25]'>
                  matters
                </div>
              </div>
            </div>

            <p className='max-w-65 text-[18px] leading-8 text-[#333333]'>
              We help businesses build stronger brands through strategic
              branding, impactful graphic design, and modern website
              development.
            </p>

            {/* Social Icons */}
            <div className='mt-8 flex gap-4 border-t-2 border-black pt-6'>
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaWhatsapp,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href='#'
                  className='flex h-14 w-14 items-center justify-center border-2 border-black text-black transition hover:bg-black hover:text-white'
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns */}
          <div className='grid grid-cols-1 gap-8 p-8 md:grid-cols-3'>
            {/* Quick Links */}
            <div>
              <h3 className='mb-5 text-[24px] font-bold underline'>
                Quick links
              </h3>
              <div className='space-y-4 text-[20px]'>
                <Link href='/' className='block hover:text-[#5a4bff]'>
                  Home
                </Link>
                <Link href='/about' className='block hover:text-[#5a4bff]'>
                  About Us
                </Link>
                <Link href='/services' className='block hover:text-[#5a4bff]'>
                  Services
                </Link>
                <Link href='/works' className='block hover:text-[#5a4bff]'>
                  Our Work
                </Link>
                <Link href='/contact' className='block hover:text-[#5a4bff]'>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className='mb-5 text-[24px] font-bold underline'>
                Services
              </h3>
              <div className='space-y-4 text-[20px]'>
                <p>Graphic Design</p>
                <p>Website Development</p>
                <p>Brand Awareness</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className='mb-5 text-[24px] font-bold underline'>
                Get in Touch
              </h3>

              <div className='space-y-6 text-[18px] text-[#333333]'>
                <div>
                  <h4 className='mb-2 text-[22px] font-semibold text-black'>
                    Location
                  </h4>
                  <p>
                    F4 Shop, 13/40, DL Plaza, Kamarajar Road,
                    Melakalakandarkottai, Tiruchirappalli – 620011,
                    Tamil Nadu, India.
                  </p>
                </div>

                <div>
                  <h4 className='mb-2 text-[22px] font-semibold text-black'>
                    Email
                  </h4>
                  <p>contact@everywebmatters.com</p>
                </div>

                <div>
                  <h4 className='mb-2 text-[22px] font-semibold text-black'>
                    Phone
                  </h4>
                  <p>+91 96982 84661</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t-2 border-black py-5 text-center text-[18px] text-[#333333]'>
          © Copyright 2025{' '}
          <span className='font-medium underline'>Everyweb Matters</span> –
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}