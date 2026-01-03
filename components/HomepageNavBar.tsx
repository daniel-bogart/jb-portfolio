"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomepageNavBar() {
  return (
    <div className="absolute top-[-40px] lg:top-[-100px] left-0 right-0 z-[100] overflow-hidden">
      <nav className="bg-transparent flex justify-between items-center rotate-15 w-full">
        <div className="w-full px-3 py-4 lg:px-6 lg:py-6 flex flex-col items-center justify-between max-w-[80%] lg:max-w-[60%]">
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
                className="h-auto w-[90%] lg:w-full"
                priority
              />
            </Link>
          </div>
          <div className="w-[8px] lg:w-[32px] flex justify-center items-center gap-2 lg:gap-4 pb-2 lg:pb-5">
            <span className="w-[8px] lg:w-[32px] h-[150px] lg:h-[335px] bg-black ml-[-32px] lg:ml-[-48px]"></span>
          </div>
        </div>
        
        <div className="w-full flex justify-center items-center gap-2 lg:gap-4">
          <span className="w-full h-[8px] lg:h-[32px] bg-black ml-[-50px] lg:ml-[-100px]"></span>
          <span className="w-[20px] lg:w-[47px] h-[20px] lg:h-[47px] rounded-full bg-black"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 lg:gap-8 w-full justify-between max-w-[240px] lg:max-w-xl py-2">
          <Link
            href="/"
            className="text-base lg:text-3xl font-normal hover:opacity-70 transition-opacity underline"
          >
            film
          </Link>
          <Link
            href="/design"
            className="text-base lg:text-3xl font-normal hover:opacity-70 transition-opacity"
          >
            design
          </Link>
          <Link
            href="/about"
            className="text-base lg:text-3xl font-normal hover:opacity-70 transition-opacity"
          >
            about
          </Link>

          {/* Contact/Email Icon */}
          <Link
            href="mailto:jpacker3737@gmail.com"
            className="hover:opacity-70 transition-opacity"
            aria-label="Contact"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 lg:w-[60px] lg:h-[60px]"
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
      
        {/* Side text - scaled for mobile and desktop */}
        <div className="w-[20%] lg:w-[40%] mt-[-30px] lg:mt-[-210px]  flex-shrink-0">
          <div className="flex flex-col gap-4 lg:gap-10 rotate-270 px-4 lg:px-12 text-left w-[180px] lg:w-[500px] h-[250px] lg:h-[600px] pt-4 lg:pt-12">
            <p className="text-[10px] lg:text-2xl font-semibold font-[family-name:var(--font-days-one)]">
              [01] Production Designer & Director. Founding member of Raw Color
              Studios.
            </p>
            <p className="text-[10px] lg:text-2xl font-semibold font-[family-name:var(--font-days-one)]">
              [02] Born in HUMBOLDT COUNTY. Based in Los Angeles CA after
              graduation from Cal State University Los Angeles
            </p>
            <p className="text-[10px] lg:text-2xl font-semibold font-[family-name:var(--font-days-one)]">
              [03] His work emphasizes leaning into aesthetic based
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
