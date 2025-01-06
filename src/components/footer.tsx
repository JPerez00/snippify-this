import { AnchorHTMLAttributes, ClassAttributes, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Pin(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a
        {...props}
        target="_blank"
        className="mr-0.5 ml-0.5 inline-flex items-center rounded-md border p-1 text-sm leading-4 no-underline border-zinc-700 bg-zinc-800 text-zinc-100"
      />
    );
  }

export function Footer() {
  return (
    <footer className="w-full mx-auto max-w-7xl px-4 md:px-2">
      <div className="flex flex-col items-center border-t border-zinc-400/20 py-10">
        <p className="text-sm text-zinc-400 sm:mt-0">
          Developed by <Link href="https://www.jorge-perez.dev/" className=" hover:text-zinc-300 hover:underline">Jorge Perez</Link>
        </p>
      </div>
    </footer>
  )
}
