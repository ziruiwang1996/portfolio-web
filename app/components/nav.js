"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/project': {
    name: 'project',
  },
  '/resume': {
    name: 'resume',
  },
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/60 border-b border-neutral-200 dark:border-neutral-800 mb-10 transition-all">
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-600 text-white px-4 py-2 rounded z-50">Skip to content</a>
      <nav className="flex items-center justify-between py-3 px-2 md:px-0">
        <div className="flex items-center space-x-1">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${isActive
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black shadow-lg'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
                tabIndex={0}
              >
                <span className="relative z-10">
                  {name}
                  <span
                    className={`block h-0.5 mt-1 rounded-full transition-all duration-300 ${isActive ? 'w-full bg-gradient-to-r from-blue-500 to-purple-500' : 'w-0 bg-transparent group-hover:w-full'}`}
                    aria-hidden="true"
                  />
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl -z-10" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}