import SnippetsGrid from "../components/SnippetsGrid";

export default function HomePage() {
  return (
    <main className="py-16 mb-20">
      <header className="text-center mb-8 lg:mb-10">
        <h1 className="text-5xl lg:text-7xl leading-tight lg:leading-tight tracking-tight font-bold bg-gradient-to-br dark:from-white from-black from-40% dark:to-slate-500 to-slate-400 to-80% bg-clip-text text-transparent">
          Snippify This!
        </h1>
        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mt-2 lg:mt-4 lg:text-balance">
          A collection of cool UI components and animations, all made with Tailwind CSS. 
          Browse, copy, and paste your favorite snippets into your project—easy and hassle-free!
        </p>
      </header>
      <SnippetsGrid />
    </main>
  );
}