'use client';

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function CardSnippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const snippets = [
    {
      title: "Basic Card",
      description: "A clean and simple card layout.",
      content: (
        <div className="p-6 bg-slate-200 rounded-lg shadow w-full">
          <h3 className="text-lg font-semibold text-black">Card Title</h3>
          <p className="text-zinc-600 mt-2">This is a basic card.</p>
        </div>
      )
    },
    {
      title: "Gradient Card",
      description: "A card with a gradient background.",
      content: (
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Gradient Card</h3>
          <p className="mt-2">This card uses a gradient background.</p>
        </div>
      )
    },
    {
      title: "Glassmorphism Card",
      description: "A card with a frosted glass effect and minimal design.",
      content: (
        <div className="p-6 bg-black/5 dark:bg-white/10 backdrop-blur-lg border border-black/20 dark:border-white/20 rounded-lg shadow-lg text-black dark:text-white max-w-sm">
          <h3 className="text-lg font-semibold">Glassmorphism Card</h3>
          <p className="mt-2">This card uses a frosted glass effect.</p>
        </div>
      )
    },
    {
      title: "Profile Card",
      description: "A card that displays profile information and social links.",
      content: (
        <div className="p-6 bg-zinc-100 rounded-lg shadow-lg flex flex-col items-center space-y-2">
          <h3 className="text-xl font-bold text-black">John Doe</h3>
          <p className="text-zinc-600 text-center">A passionate developer creating beautiful web experiences.</p>
          <div className="flex space-x-4">
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="#" className="font-semibold text-purple-600 hover:text-purple-800">LinkedIn</a>
          </div>
        </div>
      )
    },
    {
      title: "Gradient Shadow Card",
      description: "A card with a glowing gradient shadow effect.",
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg relative">
          <h3 className="text-lg font-semibold text-black">Gradient Shadow Card</h3>
          <p className="mt-2 text-zinc-600">This card has a glowing gradient shadow effect.</p>
          <div className="absolute inset-0 rounded-lg blur-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 group-hover:opacity-50 transition"></div>
        </div>
      )
    },
    {
      title: "Hover Animation Card",
      description: "A card that scales up slightly on hover.",
      content: (
        <div className="p-6 bg-yellow-200 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-lg font-semibold text-black">Hover Animation Card</h3>
          <p className="mt-2 text-zinc-800">This card zooms in when you hover over it!</p>
        </div>
      )
    },    
    {
      title: "Skeleton Card",
      description: "A clean and simple card layout.",
      content: (
        <div className="border border-slate-200 dark:border-zinc-700 shadow rounded-md p-4 max-w-sm w-full mx-auto bg-zinc-100 dark:bg-zinc-800">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Pricing Card",
      description: "A card designed for pricing tiers.",
      content: (
        <div className="p-4 bg-zinc-100 rounded-lg shadow-lg border border-zinc-200 text-center w-full">
          <h3 className="text-2xl font-bold text-black">The Pro Plan</h3>
          <p className="mt-2 text-zinc-600">Unlock all features and stuff...</p>
          <p className="mt-2 text-2xl font-bold text-slate-600">$1900/month</p>
          <button className="mt-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-blue-700 transition">Subscribe Now</button>
        </div>
      )
    },
    {
      title: "Testimonial Card",
      description: "A card for user testimonials.",
      content: (
        <div className="p-6 bg-orange-100 rounded-lg shadow-md text-center">
          <p className="italic text-zinc-700">&quot;These snippets changed my life! Highly recommend it to everyone.&quot;</p>
          <div className="mt-4 flex items-center justify-center">
            <Image
              src="https://placehold.co/10"
              alt="Jane Doe"
              className="w-8 h-8 rounded-full mr-2 shadow"
              width={8}
              height={8}
            />
            <h4 className="text-lg selection:font-semibold text-zinc-900">Jane Doe</h4>
          </div>
        </div>
      )
    },
    {
      title: "Card with Notification Badge",
      description: "A card with a small notification badge.",
      content: (
        <div className="relative p-6 bg-red-100 rounded-lg shadow-lg">
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">New</span>
          <h3 className="text-lg font-bold text-black">Notification Card</h3>
          <p className="mt-2 text-zinc-600">This card has a red badge to highlight new content.</p>
        </div>
      )
    },
    {
      title: "Twitter/X Card",
      description: "A Twitter card with Title, description, logo & date.",
      content: (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5">
          <header className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/10"
                alt="Profile picture of Naval Ravikant"
                className="w-10 h-10 rounded-full shadow transition-transform hover:scale-105"
                width={10}
                height={10}
              />
              <div>
                <div className="font-bold leading-tight text-slate-950">
                    Naval Ravikant
                </div>
                <div>
                    <a className="text-sm font-medium text-sky-500 transition hover:text-sky-600" href="https://x.com/naval">
                        @naval
                    </a>
                </div>
              </div>
            </div>
            <a className="mt-1 shrink-0 text-zinc-950 transition hover:text-sky-600" href="https://x.com/">
                <svg aria-hidden="true" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
                    <path fillRule="evenodd" d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"></path>
                </svg>
            </a>
          </header>
          <div className="grow text-sm text-slate-700">
            Arm yourself with specific knowledge, accountability, and leverage.
          </div>
          <footer className="mt-4 flex items-center gap-2.5 text-slate-500">
            <div className="text-xs">
              May 31, 2018
            </div>
          </footer>
        </div>
      )
    },  
  ];

  const copyToClipboard = (content: JSX.Element, index: number) => {
    const htmlString = renderToStaticMarkup(content);
    navigator.clipboard.writeText(htmlString);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!", {
      description: "The card layout has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {snippets.map((snippet, index) => (
        <div key={index} className="group relative overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md bg-white dark:bg-zinc-900 transition-transform hover:shadow-lg">
          <div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={() => copyToClipboard(snippet.content, index)}
              className="rounded-full bg-zinc-100 dark:bg-zinc-950 p-2 text-zinc-500 hover:text-black dark:hover:text-white backdrop-blur shadow"
              aria-label="Copy to clipboard"
            >
              {copiedIndex === index ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="flex h-[220px] items-center justify-center p-6">
            {snippet.content}
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-4 py-3">
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{snippet.title}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
