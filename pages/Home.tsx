import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PORTFOLIO_IMAGES } from '../constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }
  }
};

const Home: React.FC = () => {
  return (
    <motion.div 
      className="w-full pt-40 md:pt-48 pb-20 px-6 md:px-24 lg:px-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-20">
        {PORTFOLIO_IMAGES.map((photo) => (
          <motion.div 
            key={photo.id} 
            variants={itemVariants}
            className="w-full aspect-[2/3] overflow-hidden relative cursor-pointer"
          >
            <div className="w-full h-full overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out hover:scale-[1.03]"
                />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;