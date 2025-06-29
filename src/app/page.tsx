'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* 🔳 Hero szekció */}
      <main className="relative flex items-center justify-center min-h-screen bg-zinc-950 overflow-hidden px-4">
        {/* Háttér logó */}
        <Image
          src="/statizer-logo.png"
          alt="Statizer Logo"
          width={400}
          height={400}
          className="absolute z-0 opacity-5 blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Hero doboz */}
        <motion.div
          className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Your Artist Stats, Redefined
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Statizer is currently under development.
            <br />
            Soon you'll be able to explore real-time <strong className="text-white">artist statistics</strong> from platforms like <strong className="text-white">Spotify</strong> — effortlessly and without sign-up.
          </motion.p>

          {/* Animált Coming Soon gomb */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="px-6 py-3 rounded-full bg-white/10 text-white font-medium border border-white/20 backdrop-blur-md shadow cursor-not-allowed"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Coming Soon
            </motion.button>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-6 w-full bg-white/10 h-3 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              className="bg-white h-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 3, duration: 1 }}
            />
          </motion.div>

          <motion.p
            className="text-sm text-zinc-400 italic mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            Development Progress: 60%
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-white/90 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl">🎧</span>
              <span className="mt-2">Spotify insights</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">📊</span>
              <span className="mt-2">Detailed stats</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">⚡</span>
              <span className="mt-2">Clean, fast, intuitive</span>
            </div>
          </motion.div>

          {/* Scroll to "Why Statizer" */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
          >
            <button
              onClick={() => {
                const section = document.getElementById("features")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <ChevronDown className="mx-auto animate-bounce text-white/40 cursor-pointer" size={24} />
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* 🔽 Why Statizer szekció - Animált */}
      <motion.section
        id="features"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-zinc-900 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Statizer?</h2>
          <p className="text-lg text-zinc-400">
            Statizer will soon offer instant access to essential artist statistics across platforms like Spotify. SoundCloud and YouTube Music are coming next — no sign-up required. Just search and explore.
          </p>
        </div>

        {/* Use Cases szekció */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            { icon: "🎤", title: "Artists", desc: "Track your Spotify reach and performance in real time." },
            { icon: "🧑‍💼", title: "Managers", desc: "Monitor and compare data across multiple artists quickly." },
            { icon: "🏷️", title: "Labels", desc: "Analyze engagement before signing new talent." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl p-6 text-left hover:border-white/20 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-zinc-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔽 Scroll to Footer gomb - Feltűnő helyen */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              const footerSection = document.getElementById("footer")
              if (footerSection) {
                footerSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-lg transition-all"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={32} className="animate-bounce" />
            </motion.div>
          </button>
        </motion.div>
      </motion.section>

      {/* 🔽 Footer szekció */}
      <motion.section
        id="footer"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-zinc-800 text-white text-center border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-zinc-400">
            Follow us on Instagram to stay up to date with the latest news from <strong className="text-white">Statizer</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="https://www.instagram.com/statizer" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md shadow transition-all duration-300"
          >
            Instagram
          </a>
        </div>

        <p className="text-sm text-zinc-400">
          © 2025 - Statizer | Powered by Euphonix & INVIBES
        </p>
      </motion.section>

      {/* 🔼 Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 shadow-lg transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
