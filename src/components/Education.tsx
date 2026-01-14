import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const educationData = [
  {
    year: '2019',
    title: 'Board of Secondary Education',
    institution: 'Sri Vijnana Vihara English Medium High School',
  },
  {
    year: '2020',
    title: 'Board of Intermediate Education',
    institution: 'Sarada Educational Institutions – I Year',
  },
  {
    year: '2021',
    title: 'Board of Intermediate Education',
    institution: 'Sarada Educational Institutions – II Year',
  },
  {
    year: '2022–Present',
    title: 'Bachelor of Architecture',
    institution: 'Dr. MGR Educational & Research Institute, Madhuravoyal, Chennai',
  },
];

export default function Education({ darkMode }: EducationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 md:py-32 ${darkMode ? 'bg-zinc-900' : 'bg-stone-50'}`}
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
            Education
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          ></div>
        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-amber-700/30' : 'bg-amber-700/20'
            }`}
          ></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2"></div>
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                    darkMode ? 'bg-amber-600' : 'bg-amber-700'
                  } ring-4 ${darkMode ? 'ring-zinc-900' : 'ring-stone-50'}`}
                ></div>
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-8">
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-zinc-800' : 'bg-white'
                    } shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <div className="flex items-center mb-3">
                      <GraduationCap
                        className={darkMode ? 'text-amber-600' : 'text-amber-700'}
                        size={24}
                      />
                      <span
                        className={`ml-3 text-lg font-bold ${
                          darkMode ? 'text-amber-600' : 'text-amber-700'
                        }`}
                      >
                        {edu.year}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {edu.title}
                    </h3>
                    <p
                      className={`${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
