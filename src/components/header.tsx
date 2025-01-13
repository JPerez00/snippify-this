'use client'

import Link from 'next/link'
import { ThemeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="py-4 mx-auto px-4 md:px-2 border-b border-zinc-200 dark:border-zinc-900">
        <nav className="mt-2 relative flex justify-between">
          <div className="flex items-center">
            <Link href="/" aria-label="Home" className="flex items-center">
              {/* <h1 className='-mt-1 text-xl md:text-xl tracking-tighter font-extrabold text-zinc-900 dark:text-zinc-100'>UI Collection</h1> */}
              <div className="text-balance text-xl font-bold tracking-tight text-black dark:text-white">UI{' '}
                <span className="text-teal-500 dark:text-teal-400 inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.normal))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                      <li>Snippets</li>
                      <li>Components</li>
                      <li>Animations</li>
                      <li>Collection</li>
                      <li aria-hidden="true">Snippets</li>
                  </ul>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-x-4 md:gap-x-6">
            <Link href="#" target="_blank" className='-mt-0.5'>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3c-4.973 0-9 4.13-9 9.228 0 4.083 2.576 7.532 6.154 8.754.45.081.618-.196.618-.438 0-.22-.01-.946-.01-1.719-2.262.427-2.847-.565-3.027-1.084-.101-.265-.54-1.084-.923-1.303-.315-.173-.764-.6-.01-.612.708-.011 1.214.67 1.383.946.81 1.396 2.104 1.004 2.621.762.079-.6.315-1.004.574-1.235-2.003-.23-4.095-1.026-4.095-4.556 0-1.003.349-1.834.922-2.48-.09-.23-.404-1.176.09-2.445 0 0 .754-.242 2.475.946a8.159 8.159 0 012.25-.312c.765 0 1.53.104 2.25.312 1.722-1.2 2.475-.946 2.475-.946.495 1.269.18 2.215.09 2.445.574.646.923 1.465.923 2.48 0 3.541-2.104 4.326-4.106 4.556.326.289.607.842.607 1.707 0 1.235-.011 2.227-.011 2.538 0 .242.169.53.619.438a9.036 9.036 0 004.439-3.366A9.402 9.402 0 0021 12.228C21 7.129 16.973 3 12 3z"></path>
              </svg>
            </Link>
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </nav>
    </header>
  )
}
