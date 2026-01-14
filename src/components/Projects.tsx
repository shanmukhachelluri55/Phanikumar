import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  driveId: string;
}

const projectsData: Project[] = [
  {
    title: 'Apartment',
    subtitle: 'Design Project',
    description:
      'An architectural exploration of residential space, focusing on spatial efficiency, materiality, and lived experience.',
    driveId: '1eLokpKS-FAwryh67Oh4SSVfpEDXrFj1f',
  },
];

export default function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [selectedDriveId, setSelectedDriveId] = useState<string | null>(null);

  const getEmbedUrl = (id: string) =>
    `https://drive.google.com/file/d/${id}/preview`;

  // Lock scroll when fullscreen is open
  useEffect(() => {
    document.body.style.overflow = selectedDriveId ? 'hidden' : '';
  }, [selectedDriveId]);

  return (
    <section
      id="projects"
      ref={ref}
      className={`w-full py-20 ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-6"
      >
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Featured Projects
        </h2>
        <div
          className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-amber-600' : 'bg-amber-700'
          }`}
        />
      </motion.div>

      {/* Project */}
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          {/* 70% WIDTH CONTAINER */}
          <div
            className={`w-full lg:w-[70%] flex flex-col ${
              darkMode ? 'bg-zinc-900' : 'bg-stone-50'
            } rounded-lg overflow-hidden`}
          >
            {/* Video */}
            <div
              className="relative cursor-pointer"
              onClick={() => setSelectedDriveId(project.driveId)}
            >
              <div className="w-full aspect-video">
                <iframe
                  src={getEmbedUrl(project.driveId)}
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full text-sm font-medium bg-amber-700 text-white pointer-events-none">
                {project.subtitle}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 px-6 py-14 md:px-10">
              <h3
                className={`text-3xl md:text-4xl font-bold ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`text-lg md:text-xl leading-relaxed ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Fullscreen Overlay */}
      {selectedDriveId && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={() => setSelectedDriveId(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedDriveId(null)}
            className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <X size={28} className="text-white" />
          </button>

          {/* Video */}
          <div
            className="w-full max-w-6xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video">
              <iframe
                src={getEmbedUrl(selectedDriveId)}
                allow="autoplay"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
