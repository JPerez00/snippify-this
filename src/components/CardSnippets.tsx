'use client';

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function CardSnippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

const snippets = [
    {
      title: "Basic Card",
      description: "A clean and simple card layout.",
      content: (
        <div className="p-6 bg-slate-200 rounded-lg shadow w-full">
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
    },
    {
      title: "Basic Card 2",
      description: "A clean and simple card layout.",
      content: (
        <div className="p-6 bg-slate-200 rounded-lg shadow w-full">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-zinc-600 mt-2">This is a basic card.</p>
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
          <div className="absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={() => copyToClipboard(snippet.content, index)}
              className="rounded-full bg-white dark:bg-zinc-900 p-2 text-zinc-500 hover:text-black dark:hover:text-white backdrop-blur"
              aria-label="Copy to clipboard"
            >
              {copiedIndex === index ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="flex h-[200px] items-center justify-center p-6">
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
