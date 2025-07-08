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
  const pathname = usePathname()

  return (
    <header className="mb-16 lg:mb-20">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-1">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                href={path}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
                  ${isActive 
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black shadow-lg' 
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                {name}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}