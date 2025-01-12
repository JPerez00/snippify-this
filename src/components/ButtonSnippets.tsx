'use client';

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function ButtonSnippets() {
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
        <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
          Click Me
        </button>
      )
    },
    {
      title: "Inner Shadow Button",
      description: "A button with inner white shadow",
      content: (
        <button className="px-4 py-2 text-white shadow-inner shadow-white/40 bg-teal-700 hover:bg-teal-800 font-semibold rounded-lg transition">
          Click Me
        </button>
      )
    },
    {
      title: "Inner Shadow Button",
      description: "A button with inner black shadow",
      content: (
        <button className="px-4 py-2 text-white shadow-inner shadow-black/60 bg-teal-700 hover:bg-teal-800 font-semibold rounded-lg transition drop-shadow">
          Click Me
        </button>
      )
    },
    {
      title: "Loading Button",
      description: "A rotating SVG for loading.",
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
      description: "A button with a sweeping shine",
      content: (
        <button className="inline-flex justify-center whitespace-nowrap rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]">
          Hover Me
        </button>
      )
    },
    {
      title: "Hover up Button",
      description: "Hover Up button with bg color change.",
      content: (
        <button className="px-4 py-2 bg-sky-600 font-semibold rounded-lg hover:bg-blue-700 relative block overflow-hidden text-white cursor-pointer group transition-colors duration-500">
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
          <button type="button" className="inline-flex items-center px-4 py-2 font-semibold shadow rounded-md text-white bg-slate-800 hover:bg-slate-700 transition ease-in-out duration-150 cursor-pointer ring-1 ring-slate-900/20 dark:ring-slate-200/30">
            Animated Button
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </span>
      )
    },
  ];

  const copyToClipboard = (content: JSX.Element, index: number) => {
    const htmlString = renderToStaticMarkup(content);
    navigator.clipboard.writeText(htmlString);
    setCopiedIndex(index);
    toast.success("Snippet Copied!", {
      description: "The content of this button has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="p-4 bg-white border-black/10 dark:bg-zinc-900 border dark:border-white/5 rounded-xl flex flex-col items-center text-center relative shadow hover:shadow-md transition-shadow"
        >
          {/* <h2 className="text-xl text-zinc-700 dark:text-zinc-100 font-bold mb-2">{snippet.title}</h2> */}
          <p className="text-zinc-500 dark:text-gray-400 mb-4">{snippet.description}</p>
          <div className="text-center bg-zinc-300/80 dark:bg-zinc-950 rounded-xl w-full h-32 flex items-center justify-center relative">
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
          <div className="border-t border-border/50 bg-muted/50 px-4 py-3">
          <p className="text-sm font-medium text-foreground/80">{snippet.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}