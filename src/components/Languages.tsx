import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';

interface LanguagesProps {
  darkMode: boolean;
}

const languages = [
  { name: 'Telugu', proficiency: 'Native' },
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Tamil', proficiency: 'Conversational' },
];

export default function Languages({ darkMode }: LanguagesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="languages"
      ref={ref}
      className={`py-20 md:py-32 ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Languages
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-lg text-center ${
                darkMode ? 'bg-zinc-900' : 'bg-stone-50'
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-amber-700/20' : 'bg-amber-700/10'
                }`}
              >
                <MessageCircle
                  size={28}
                  className={darkMode ? 'text-amber-600' : 'text-amber-700'}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {language.name}
              </h3>
              <p
                className={`text-sm uppercase tracking-wider ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                {language.proficiency}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
