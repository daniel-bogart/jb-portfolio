"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomepageNavBar() {
  return (
    <nav className="absolute top-[-100px] left-0 right-0 z-50 bg-transparent flex justify-between items-center rotate-15">
      <div className="w-full px-6 py-6 flex flex-col items-center justify-between max-w-[60%]">
        {/* Logo/Name - using image */}
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col w-full justify-center items-center">
            <Link
              href="/"
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <Image
                src="/Home Button.png"
                alt="john 'JB' packer"
                width={506}
                height={79}
                className="h-auto"
                priority
              />
            </Link>
          </div>
          <div className="w-[32px] flex justify-center items-center gap-4 pb-5">
            <span className="w-[32px] h-[335px] bg-black ml-[-48px]"></span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <span className="w-full h-[32px] bg-black ml-[-100px]"></span>
          <span className="w-[47px] h-[47px] rounded-full bg-black"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 w-full justify-between max-w-xl">
          <Link
            href="/film"
            className="text-3xl font-normal hover:opacity-70 transition-opacity"
          >
            film
          </Link>
          <Link
            href="/design"
            className="text-3xl font-normal hover:opacity-70 transition-opacity"
          >
            design
          </Link>
          <Link
            href="/about"
            className="text-3xl font-normal hover:opacity-70 transition-opacity"
          >
            about
          </Link>

          {/* Contact/Email Icon */}
          <Link
            href="/contact"
            className="hover:opacity-70 transition-opacity"
            aria-label="Contact"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[60px] h-[60px]"
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                fill="currentColor"
              />
              <path
                d="M2 6l10 7 10-7"
                stroke="#E8E2D5"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="w-[40%] mt-[-260px]">
        <div className="flex flex-col gap-10 rotate-270 px-12 text-center w-[500px] h-[600px] pt-12">
          <p className="text-2xl font-semibold font-[family-name:var(--font-days-one)] ">
            [01] Production Designer & Director. Founding member of Raw Color
            Studios.
          </p>
          <p className="text-2xl font-semibold font-[family-name:var(--font-days-one)] ">
            [02] Born in HUMBOLDT COUNTY. Based in Los Angeles CA after
            graduation from Cal State University Los Angeles
          </p>
          <p className="text-2xl font-semibold font-[family-name:var(--font-days-one)] ">
            [03] His work emphasizes leaning into aesthetic based
          </p>
        </div>
      </div>
    </nav>
  );
}
