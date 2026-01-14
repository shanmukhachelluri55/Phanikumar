import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, FileText, Eye, X } from 'lucide-react';

interface ResumeProps {
  darkMode: boolean;
}

export default function Resume({ darkMode }: ResumeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showViewer, setShowViewer] = useState(false);

  const resumePath = '/resume.pdf';

  return (
    <>
      <section
        id="resume"
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
              Resume
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
            className={`max-w-3xl mx-auto p-8 md:p-12 rounded-lg text-center ${
              darkMode ? 'bg-zinc-800' : 'bg-white'
            } shadow-lg`}
          >
            <div className="mb-8">
              <div
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-amber-700/20' : 'bg-amber-700/10'
                }`}
              >
                <FileText
                  size={48}
                  className={darkMode ? 'text-amber-600' : 'text-amber-700'}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                Download My Resume
              </h3>
              <p
                className={`text-lg ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                View my complete academic background, skills, and project experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowViewer(true)}
                className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-lg transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-zinc-700 text-white hover:bg-zinc-600'
                    : 'bg-stone-100 text-zinc-900 hover:bg-stone-200'
                }`}
              >
                <Eye size={20} />
                <span className="font-medium">View Resume</span>
              </button>
              <a
                href={resumePath}
                download="Nalamati_Phani_Kumar_Resume.pdf"
                className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-lg transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-amber-700 text-white hover:bg-amber-600'
                    : 'bg-amber-700 text-white hover:bg-amber-800'
                }`}
              >
                <Download size={20} />
                <span className="font-medium">Download PDF</span>
              </a>
            </div>

            <p
              className={`mt-8 text-sm italic ${
                darkMode ? 'text-zinc-500' : 'text-zinc-500'
              }`}
            >
              Place your resume PDF as "resume.pdf" in the public folder to enable viewing and downloading
            </p>
          </motion.div>
        </div>
      </section>

      <motion.a
        href={resumePath}
        download="Nalamati_Phani_Kumar_Resume.pdf"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className={`hidden lg:flex fixed bottom-8 right-8 items-center space-x-2 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-40 ${
          darkMode
            ? 'bg-amber-700 text-white hover:bg-amber-600'
            : 'bg-amber-700 text-white hover:bg-amber-800'
        }`}
      >
        <Download size={18} />
        <span className="font-medium">Resume</span>
      </motion.a>

      {showViewer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowViewer(false)}
        >
          <button
            onClick={() => setShowViewer(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <div
            className="max-w-5xl w-full h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={resumePath}
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </>
  );
}
