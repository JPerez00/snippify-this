'use client'

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";

export default function SnippetsGrid() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const snippets = [
    {
      title: "Primary Button",
      description: "A simple and modern primary button.",
      content: (
        <button className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition">
          Click Me
        </button>
      )
    },
    {
      title: "Outline Button",
      description: "An elegant outline button.",
      content: (
        <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition">
          Outline Button
        </button>
      )
    },
    {
      title: "Inner Shadow Button",
      description: "A button with inner white shadow",
      content: (
        <button className="px-4 py-2 shadow-inner shadow-white/40 bg-teal-700 hover:bg-teal-800 font-semibold rounded-lg transition">
          shadow-inner
        </button>
      )
    },
    {
      title: "Loading Button",
      description: "A rotating SVG.",
      content: (
        <button type="button" className="inline-flex items-center px-4 py-2 text-white font-semibold rounded-lg shadow bg-slate-500 hover:bg-slate-600 transition ease-in-out duration-150" >
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
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition">
          Hover Me
        </button>
      )
    },
    {
      title: "Shinny Button",
      description: "A button with an icon.",
      content: (
        <button className="inline-flex justify-center whitespace-nowrap rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]">
          Shiny Button
        </button>
      )
    },
    {
      title: "Icon Button",
      description: "A button with an icon.",
      content: (
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6" />
          </svg>
        </button>
      )
    },
    {
      title: "Basic Card",
      description: "A clean and simple card layout.",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-gray-600 mt-2">This is a basic card.</p>
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
    }
  ];

  const copyToClipboard = (content: JSX.Element, index: number) => {
    const htmlString = renderToStaticMarkup(content); // Convert JSX to HTML string
    navigator.clipboard.writeText(htmlString); // Copy HTML string to clipboard
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="p-4 bg-white border-black/10 dark:bg-zinc-900 border dark:border-white/5 rounded-xl flex flex-col items-center text-center relative"
        >
          <h2 className="text-xl text-zinc-700 dark:text-zinc-100 font-bold mb-2">{snippet.title}</h2>
          <p className="text-zinc-500 dark:text-gray-400 mb-4">{snippet.description}</p>
          <div className="text-center bg-zinc-100 dark:bg-zinc-950 rounded-xl w-full h-32 flex items-center justify-center relative">
            {snippet.content}
            <button
              onClick={() => copyToClipboard(snippet.content, index)}
              className="absolute top-2 right-2 text-zinc-500 hover:text-white transition-colors"
              aria-label="Copy to clipboard"
            >
              {copiedIndex === index ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}