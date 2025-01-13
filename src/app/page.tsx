"use client"

import { motion } from "motion/react"
import ButtonSnippets from "@/components/ButtonSnippets";
import CardSnippets from "@/components/CardSnippets";

export default function HomePage() {
  return (
    <motion.main
      className="py-16 mb-20"
      // Fade + slide in the entire main section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <header className="text-center">
        {/* Hero Title Animation */}
        <motion.h1
          className="text-5xl lg:text-6xl leading-tight lg:leading-tight tracking-tight font-bold bg-gradient-to-r dark:from-white from-30% from-zinc-900 dark:to-teal-500 to-70% to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Snippify This!
        </motion.h1>

        {/* Subheading Animation */}
        <motion.p
          className="text-xl text-zinc-700 dark:text-zinc-300 mt-2 lg:mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          A collection of simple (and cool) Tailwind CSS UI components and
          animations I often use in my open-source projects.
          Feel free to browse, copy, and reuse anything you like, hassle-free!
        </motion.p>
      </header>

      {/* Button Collection */}
      <motion.div
        className="my-12"
        // Reveal the section when it's in view
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animate only once
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-8 text-2xl font-bold text-center tracking-tight text-zinc-700 dark:text-zinc-300">
          Button Collection:
        </h2>
        <ButtonSnippets />
      </motion.div>

      {/* Card Collection */}
      <motion.div
        className="my-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-8 text-2xl text-center font-bold tracking-tight text-zinc-700 dark:text-zinc-300">
          Card Collection:
        </h2>
        <CardSnippets />
      </motion.div>
    </motion.main>
  );
}
