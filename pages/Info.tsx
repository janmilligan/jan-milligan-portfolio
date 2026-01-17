import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <motion.div 
      className="w-full min-h-screen pt-40 md:pt-48 px-6 md:px-24 lg:px-40 flex flex-col md:flex-row gap-12 md:gap-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Text Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <motion.h1 
            className="text-4xl md:text-6xl font-light mb-12 leading-[1.1] tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          >
            Observing the quiet moments in a loud world.
          </motion.h1>
          
          <motion.div 
            className="space-y-8 text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <p>
              Based in Los Angeles, specializing in portraiture and landscape photography. My practice is rooted in the belief that the most powerful images are often the quietest.
            </p>
            <p>
              Available for commissions worldwide.
            </p>
          </motion.div>
        </div>

        {/* Sub Navigation Links */}
        <motion.div 
          className="mt-16 flex flex-col gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <Link to="/journal" className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-white transition-colors duration-500">
            <span className="text-xl md:text-2xl font-light">Journal</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <ArrowRight size={20} strokeWidth={1} />
            </span>
          </Link>
          
          <Link to="/weddings" className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-white transition-colors duration-500">
            <span className="text-xl md:text-2xl font-light">Weddings & Ceremonies</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <ArrowRight size={20} strokeWidth={1} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Image Column */}
      <motion.div 
        className="w-full md:w-1/2 md:h-[80vh] flex items-start justify-center md:justify-end"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <div className="relative w-full h-[60vh] md:h-full overflow-hidden bg-white/5">
           {/* Placeholder for Artist Portrait - Place 'portrait.jpg' in public/images/ */}
           <img 
            src="/images/portrait.jpg" 
            alt="Jan Milligan Portrait" 
            className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;