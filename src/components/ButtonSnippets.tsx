'use client';

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface UICardProps {
  title: string;
  description: string;
  content: JSX.Element;
}

export default function ButtonSnippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const snippets: UICardProps[] = [
    {
      title: "Primary Button",
      description: "A simple and modern primary button.",
      content: (
        <button className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition shadow-md">
          Click Me
        </button>
      )
    },
    {
      title: "Outline Button",
      description: "An elegant outline button.",
      content: (
        <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition shadow-md">
          Click Me
        </button>
      )
    },
    {
      title: "Inner Shadow Button",
      description: "A button with inner white shadow",
      content: (
        <button className="px-4 py-2 text-white shadow-inner shadow-white/40 bg-green-700 hover:bg-green-800 font-semibold rounded-lg transition drop-shadow-md">
          Click Me
        </button>
      )
    },
    {
      title: "Inner Shadow Button",
      description: "A button with inner black shadow",
      content: (
        <button className="px-4 py-2 text-white shadow-inner shadow-black/60 bg-purple-700 hover:bg-purple-800 font-semibold rounded-lg transition drop-shadow-md">
          Click Me
        </button>
      )
    },
    {
      title: "Loading Button",
      description: "A rotating SVG for loading.",
      content: (
        <button type="button" className="inline-flex items-center px-4 py-2 text-white font-semibold rounded-lg bg-slate-500 hover:bg-slate-600 transition ease-in-out duration-150 shadow-md" >
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </button>
      )
    },
    {
      title: "Hover Pulse",
      description: "A button with a hover pulse animation.",
      content: (
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition shadow-md">
          Hover Me
        </button>
      )
    },
    {
      title: "Shinny Button",
      description: "A button with a sweeping shine",
      content: (
        <button className="inline-flex justify-center whitespace-nowrap rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] shadow-md">
          Hover Me
        </button>
      )
    },
    {
      title: "Hover up Button",
      description: "Hover Up button with BG color change.",
      content: (
        <button className="px-4 py-2 bg-sky-600 font-semibold rounded-lg hover:bg-blue-700 relative block overflow-hidden text-white cursor-pointer group transition-colors duration-500 shadow-md">
          <span className="flex items-center justify-center h-full transition-transform duration-500 group-hover:-translate-y-[120%]">Main Text</span>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0">Hover Text</span>
        </button>
      )
    },
    {
      title: "Ping Animation Button",
      description: "Hover Up button with bg color change.",
      content: (
        <span className="relative inline-flex">
          <button type="button" className="inline-flex items-center px-4 py-2 font-semibold rounded-md text-white bg-slate-800 hover:bg-slate-700 transition ease-in-out duration-150 cursor-pointer ring-1 ring-slate-900/20 dark:ring-slate-200/30 shadow-md">
            Animated Button
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </span>
      )
    },
    {
      title: "Back To Top Button",
      description: "Used on this page.",
      content: (
        <button
          aria-label="Scroll To Top"
          type="button"
          className="-mt-1 group px-2.5 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md bg-white hover:bg-zinc-100 dark:bg-zinc-900 hover:dark:bg-zinc-800"
        >
          <svg className="h-5 w-5 fill-zinc-600 dark:fill-zinc-300" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )
    },
    {
      title: "Info Banner",
      description: "Used at the top of this page.",
      content: (
        <div className="shadow inline-flex rounded-full px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 bg-teal-500/10 ring-1 backdrop-blur ring-teal-400 hover:ring-teal-500 dark:ring-teal-900 dark:hover:ring-teal-800">
          Copy & Paste, Hassle-free!
        </div>
      )
    },
    {
      title: "3D Pop Button",
      description: "A button that lifts with a shadow pop effect.",
      content: (
        <button className="relative px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105">
          Press Me
        </button>
      )
    },
    {
      title: "Glassmorphism Button",
      description: "A sleek glassy UI button.",
      content: (
        <button className="px-4 py-2 bg-black/10 dark:bg-white/10 backdrop-blur-md text-black dark:text-white border border-black/20 dark:border-white/20 rounded-lg font-semibold hover:bg-black/20 dark:hover:bg-white/20 transition shadow-md">
          Glass Effect
        </button>
      )
    },
    {
      title: "Icon Circle Button",
      description: "A round button for icons.",
      content: (
        <button className="w-12 h-12 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 flex items-center justify-center">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      )
    },
    {
      title: "Neon Glow Button",
      description: "A button that glows with a neon effect.",
      content: (
        <button className="relative px-4 py-2 font-semibold text-white bg-purple-700 rounded-lg shadow-lg before:absolute before:inset-0 before:rounded-lg before:border-[2px] before:border-purple-400 before:animate-pulse hover:before:opacity-100">
          Neon Glow
        </button>
      )
    },
    {
      title: "Gradient Hover Swipe Button",
      description: "A gradient swipe effect on hover.",
      content: (
        <button className="relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-500 translate-x-full group-hover:translate-x-0"></span>
        </button>
      )
    },
    {
      title: "Floating Button",
      description: "A button that floats and wobbles slightly.",
      content: (
        <button className="px-4 py-2 bg-cyan-600 text-white font-bold rounded-lg shadow-md hover:animate-bounce">
          Float Away
        </button>
      )
    },
    {
      title: "Pill Button with Shadow Pulse",
      description: "A rounded button with a pulse effect.",
      content: (
        <button className="px-6 py-2 text-white bg-pink-600 rounded-full shadow-lg hover:shadow-pink-400/70 animate-pulse">
          Shadow Pulse
        </button>
      )
    },
    {
      title: "Shadow Outline Button",
      description: "A button with an outline and subtle shadow.",
      content: (
        <button className="px-4 py-2 border-2 border-slate-600 dark:border-slate-400 text-slate-600 dark:text-slate-400 font-semibold rounded-lg hover:bg-slate-50 hover:dark:bg-slate-700 hover:shadow-xl">
          Outline Button
        </button>
      )
    },
    {
      title: "Morphing Button",
      description: "A button that morphs its shape.",
      content: (
        <button className="relative w-40 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-lg text-white font-bold transition-all hover:rounded-full">
          Morph Me
        </button>
      )
    },
    {
      title: "Fire Animation Button",
      description: "A button that has a fiery effect.",
      content: (
        <button className="px-6 py-3 bg-red-700 text-white font-bold rounded-lg shadow-md relative overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative">🔥 Fire Up</span>
        </button>
      )
    },
    {
      title: "Tilt Button",
      description: "A button that tilts on hover.",
      content: (
        <button className="relative px-6 py-3 bg-gradient-to-r from-green-500 to-lime-600 text-white font-bold rounded-lg transition-transform hover:transform hover:rotate-2 hover:scale-105">
          Tilt Me
        </button>
      )
    },
    {
      title: "Underline Animation",
      description: "A button with an animated underline effect.",
      content: (
          <button className="relative inline-block cursor-pointer group font-bold">
            Hover Here
            <span className="absolute left-0 top-full w-full h-1 bg-white transform scale-x-0 transition-transform duration-400 ease-[cubic-bezier(.86,0,.07,1)] group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </button>
      )
    },
  ];

  const copyToClipboard = (content: JSX.Element, index: number) => {
    const htmlString = renderToStaticMarkup(content);
    navigator.clipboard.writeText(htmlString);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!", {
      description: "The HTML content has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          <div className="flex h-[160px] items-center justify-center p-6">
            {snippet.content}
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-4 py-3">
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{snippet.title}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 h-[16px]">{snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}