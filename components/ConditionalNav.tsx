'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNav() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  // Only render Navigation if NOT on homepage
  if (isHomepage) {
    return null;
  }

  return <Navigation />;
}

