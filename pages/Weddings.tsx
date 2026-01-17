import React from 'react';
import { motion } from 'framer-motion';

// NOTE: Create 'public/images/weddings' and place these files there.
// Filenames should be: jan-milligan-wedding-1.jpg, jan-milligan-wedding-2.jpg, etc.
const weddingImages = [
  { id: 101, url: "/images/weddings/jan-milligan-wedding-1.jpg", alt: "Editorial Bride", span: "col-span-2" },
  { id: 102, url: "/images/weddings/jan-milligan-wedding-2.jpg", alt: "Detail Rings", span: "col-span-1" },
  { id: 103, url: "/images/weddings/jan-milligan-wedding-3.jpg", alt: "Candid Laughter", span: "col-span-1" },
  { id: 104, url: "/images/weddings/jan-milligan-wedding-4.jpg", alt: "Ceremony Wide", span: "col-span-2" },
];

const Weddings: React.FC = () => {
  return (
    <motion.div 
      className="w-full min-h-screen pt-40 md:pt-48 px-6 md:px-24 lg:px-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mb-24">
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          Love, documented honestly.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          I approach weddings with the same editorial eye I bring to my commercial work. 
          No forced poses, no checklists. Just the raw, fleeting energy of the day, 
          captured on digital and medium format film.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 mb-24">
        {weddingImages.map((img, idx) => (
          <motion.div 
            key={img.id}
            className={`relative overflow-hidden ${img.span === 'col-span-2' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[3/4]'}`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pb-20">
        <a 
          href="mailto:jan@janmilligan.com?subject=Wedding Inquiry"
          className="inline-block border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Inquire for 2026 Availability
        </a>
      </div>
    </motion.div>
  );
};

export default Weddings;