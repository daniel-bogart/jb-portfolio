'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/film', label: 'film' },
    { href: '/design', label: 'design' },
    { href: '/about', label: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 justify-center items-center flex bg-transparent w-full z-[100]">
      <div className="max-w-7xl w-full px-6 py-6 flex items-center justify-between">
        {/* Logo/Name - using image */}
        <Link
          href="/"
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <Image
            src="/Home Button.png"
            alt="john 'JB' packer"
            width={354}
            height={55}
            className="h-auto"
            priority
          />
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-normal hover:opacity-70 transition-opacity ${
              pathname?.startsWith(link.href) ? "underline" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Contact/Email Icon - filled style */}
        <Link
          href="mailto:jpacker3737@gmail.com"
          className="hover:opacity-70 transition-opacity"
          aria-label="Contact"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
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
    </nav>
  );
}

