import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 md:py-32 ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`relative p-8 md:p-12 rounded-lg ${
              darkMode ? 'bg-zinc-900/50' : 'bg-stone-50'
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-2 h-full ${
                darkMode ? 'bg-amber-700' : 'bg-amber-700'
              }`}
            ></div>
            <p
              className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-serif ${
                darkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              Hey, I'm Phani Kumar. I feel architecture may be seen everywhere and has always been
              a fascinating aspect of a city. To be a part of the creative process behind the
              structures we inhabit is why I took up architecture.
            </p>
            <p
              className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-serif mt-6 ${
                darkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              I believe in the ability of architecture as a medium of change in society. I'm highly
              open to new experiences and eager to take on new challenges to broaden my knowledge
              and skills.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div
            className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-zinc-900/50' : 'bg-stone-50'
            }`}
          >
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-amber-600' : 'text-amber-700'
              }`}
            >
              3+
            </div>
            <div
              className={`text-sm uppercase tracking-wider ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Years of Study
            </div>
          </div>
          <div
            className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-zinc-900/50' : 'bg-stone-50'
            }`}
          >
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-amber-600' : 'text-amber-700'
              }`}
            >
              10+
            </div>
            <div
              className={`text-sm uppercase tracking-wider ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Projects Completed
            </div>
          </div>
          <div
            className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-zinc-900/50' : 'bg-stone-50'
            }`}
          >
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-amber-600' : 'text-amber-700'
              }`}
            >
              2
            </div>
            <div
              className={`text-sm uppercase tracking-wider ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Awards & Competitions
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
