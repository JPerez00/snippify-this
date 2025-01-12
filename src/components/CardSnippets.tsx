'use client'

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";

export default function CardSnippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const snippets = [
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
    },
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
          className="p-4 bg-white border-black/10 dark:bg-zinc-900 border dark:border-white/5 rounded-xl flex flex-col items-center text-center relative shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl text-zinc-700 dark:text-zinc-100 font-bold mb-2">{snippet.title}</h2>
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
        </div>
      ))}
    </div>
  );
}