import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const achievements = [
  {
    title: 'Volume Zero 2025',
    subtitle: 'Tiny Library',
    description:
      'Participated in the Volume Zero design competition, creating an innovative tiny library concept that explores the intersection of architecture and community knowledge sharing.',
    icon: Trophy,
  },
  {
    title: 'COA Student Awards 2025',
    subtitle: 'Documentation of Architectural Heritage',
    description:
      'Recognized for exceptional work in documenting and preserving architectural heritage through comprehensive research, detailed drawings, and contextual analysis.',
    icon: Award,
  },
];

export default function Achievements({ darkMode }: AchievementsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
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
            Achievements & Competitions
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group p-8 rounded-lg ${
                darkMode ? 'bg-zinc-900' : 'bg-stone-50'
              } hover:shadow-xl transition-all`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-amber-700/20' : 'bg-amber-700/10'
                  } group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon
                    size={32}
                    className={darkMode ? 'text-amber-600' : 'text-amber-700'}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    className={`text-lg font-medium mb-3 ${
                      darkMode ? 'text-amber-600' : 'text-amber-700'
                    }`}
                  >
                    {achievement.subtitle}
                  </p>
                  <p
                    className={`leading-relaxed ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
