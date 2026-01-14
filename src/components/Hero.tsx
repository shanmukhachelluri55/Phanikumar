import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-zinc-900' : 'bg-stone-50'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={darkMode ? 'rgba(161, 98, 7, 0.1)' : 'rgba(120, 53, 15, 0.08)'}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto">
            <div
              className={`absolute inset-0 rounded-full ${
                darkMode ? 'bg-amber-700/20' : 'bg-amber-700/10'
              } animate-pulse`}
            ></div>
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Nalamati Phani Kumar"
              className="w-full h-full rounded-full object-cover border-4 border-amber-700/30 relative z-10"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Nalamati Phani Kumar
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`text-xl sm:text-2xl md:text-3xl mb-8 ${
            darkMode ? 'text-amber-600' : 'text-amber-700'
          }`}
        >
          Architecture Student
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p
            className={`text-lg sm:text-xl md:text-2xl font-serif italic leading-relaxed ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            "Architecture is not about form following function. It's about creating spaces that inspire,
            challenge, and transform the way we experience our world."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full transition-all hover:scale-105 ${
              darkMode
                ? 'bg-amber-700 text-white hover:bg-amber-600'
                : 'bg-amber-700 text-white hover:bg-amber-800'
            }`}
          >
            <span className="font-medium">Explore My Work</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={32}
            className={darkMode ? 'text-zinc-600' : 'text-zinc-400'}
          />
        </motion.div>
      </div>
    </section>
  );
}
