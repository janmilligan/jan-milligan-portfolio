import React from 'react';
import { motion, Variants } from 'framer-motion';

const journalEntries = [
  { year: '2025', title: 'Shadows & Dust', location: 'Solo Exhibition, Soho Gallery NY', date: 'Oct 12' },
  { year: '2025', title: 'The Modern Landscape', location: 'Feature in Aperture Magazine', date: 'Aug 04' },
  { year: '2024', title: 'Artist in Residence', location: 'Kyoto Art Center', date: 'Nov 20' },
  { year: '2024', title: 'Quiet Noise', location: 'Group Show, The Broad LA', date: 'Mar 15' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Journal: React.FC = () => {
  return (
    <motion.div 
      className="w-full min-h-screen pt-40 md:pt-48 px-6 md:px-24 lg:px-40"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl">
        <motion.h1 
          className="text-xs font-bold tracking-[0.2em] uppercase mb-16 text-gray-500"
          variants={itemVariants}
        >
          Journal & Press
        </motion.h1>

        <div className="space-y-0">
          {journalEntries.map((entry, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col md:flex-row md:items-baseline border-t border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 px-2 -mx-2"
            >
              <div className="w-24 text-sm text-gray-500 font-mono mb-2 md:mb-0">{entry.year}</div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl text-white font-light group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {entry.title}
                </h2>
                <p className="text-gray-400 mt-2 font-light">{entry.location}</p>
              </div>
              <div className="text-sm text-gray-600 font-mono mt-4 md:mt-0">{entry.date}</div>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="border-t border-white/10" />
        </div>
      </div>
    </motion.div>
  );
};

export default Journal;