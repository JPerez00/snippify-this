import ButtonSnippets from "@/components/ButtonSnippets";
import CardSnippets from "@/components/CardSnippets";

export default function HomePage() {
  return (
    <main className="py-16 mb-20">
      <header className="text-center">
        <h1 className="text-5xl lg:text-7xl leading-tight lg:leading-tight tracking-tight font-bold bg-gradient-to-br dark:from-white from-black from-40% dark:to-slate-500 to-slate-400 to-80% bg-clip-text text-transparent select-text:text-white">
          Snippify This!
        </h1>
        <p className="font-semibold text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mt-2 lg:mt-4 lg:text-balance">
          A collection of simple (and cool) Tailwind CSS UI components and animations I often use in my open-source projects.
          Feel free to browse, copy, and reuse anything you like, hassle-free!
        </p>
      </header>
      <div className="my-10">
        <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
        <h2 className="mb-5 text-4xl text-center font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Button Snippets Section:
        </h2>
        <ButtonSnippets />
      </div>
      <div className="my-10">
        <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
        <h2 className="mb-5 text-4xl text-center font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Card Snippets Section:
        </h2>
        <CardSnippets />
      </div>
    </main>
  );
}