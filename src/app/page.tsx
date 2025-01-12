import ButtonSnippets from "@/components/ButtonSnippets";
import CardSnippets from "@/components/CardSnippets";

export default function HomePage() {
  return (
    <main className="py-16 mb-20">
      <header className="text-center">
        <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight tracking-tight font-bold bg-gradient-to-r dark:from-white from-black from-40% dark:to-slate-400 to-slate-400 to-80% bg-clip-text text-transparent">
          Snippify This!
        </h1>
        <p className="font-medium text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mt-2 lg:mt-4 lg:text-balance">
          A collection of simple (and cool) Tailwind CSS UI components and animations I often use in my open-source projects.
          Feel free to browse, copy, and reuse anything you like, hassle-free!
        </p>
      </header>
      <div className="my-12">
        <h2 className="mb-8 text-2xl font-bold text-center tracking-tight text-zinc-700 dark:text-zinc-300">
          Button Collection:
        </h2>
        <ButtonSnippets />
      </div>
      <div className="my-12">
        <h2 className="mb-8 text-2xl text-center font-bold tracking-tight text-zinc-700 dark:text-zinc-300">
          Card Collection:
        </h2>
        <CardSnippets />
      </div>
    </main>
  );
}