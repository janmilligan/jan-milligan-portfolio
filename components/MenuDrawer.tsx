import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const menuVariants: Variants = {
  closed: { 
    x: "100%",
    transition: { type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }
  },
  open: { 
    x: "0%",
    transition: { type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }
  }
};

const linkContainerVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  closed: { y: 20, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
};

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 z-40 w-full md:w-1/2 h-full bg-charcoal border-l border-white/10 flex flex-col items-center justify-center"
          >
            <motion.nav 
              variants={linkContainerVariants}
              className="flex flex-col items-center gap-6 md:gap-10"
            >
              <motion.div variants={linkVariants}>
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className="text-6xl md:text-8xl font-light tracking-tight text-white hover:opacity-50 transition-opacity duration-300 block"
                >
                  Earth
                </Link>
              </motion.div>
              
              <motion.div variants={linkVariants}>
                <Link 
                  to="/info" 
                  onClick={closeMenu}
                  className="text-6xl md:text-8xl font-light tracking-tight text-white hover:opacity-50 transition-opacity duration-300 block"
                >
                  Info
                </Link>
              </motion.div>
            </motion.nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-16"
            >
               <a 
                href="https://instagram.com/janmilligan" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
               >
                 <Instagram size={24} strokeWidth={1.5} />
               </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;