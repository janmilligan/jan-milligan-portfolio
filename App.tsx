import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MenuButton from './components/MenuButton';
import MenuDrawer from './components/MenuDrawer';
import Home from './pages/Home';
import Info from './pages/Info';
import Journal from './pages/Journal';
import Weddings from './pages/Weddings';
import Footer from './components/Footer';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const { scrollY } = useScroll();

  // Header scroll logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide if scrolling down (>50px to avoid jitter at top)
    // Show if scrolling up
    if (latest > previous && latest > 50) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsHeaderHidden(false); // Ensure header is visible when menu opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-white selection:text-charcoal relative">
      <ScrollToTop />
      
      {/* Header */}
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHeaderHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full px-6 md:px-12 lg:px-16 py-8 md:py-10 flex justify-between items-center z-50 bg-charcoal pointer-events-auto"
      >
        {/* Logo Image */}
        <a 
          href="/" 
          className="hover:opacity-80 transition-opacity block"
        >
          <img 
            src="/images/jan-m-logo-W.png" 
            alt="Jan Milligan" 
            className="w-[60px] h-auto object-contain"
          />
        </a>
        
        {/* Burger */}
        <MenuButton 
          isOpen={isMenuOpen} 
          toggle={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </motion.header>

      {/* Navigation Overlay */}
      <MenuDrawer 
        isOpen={isMenuOpen} 
        closeMenu={() => setIsMenuOpen(false)} 
      />

      {/* Main Content Area */}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/weddings" element={<Weddings />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;