import { motion } from 'framer-motion';

interface FooterProps {
  darkMode?: boolean;
}

export default function Footer({ darkMode = true }: FooterProps) {
  return (
    <footer className="py-8 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg font-serif mb-2">Nalamati Phani Kumar</p>
          <p className="text-sm text-zinc-400">
            Architecture Student | Designer | Innovator
          </p>
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} Nalamati Phani Kumar. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
