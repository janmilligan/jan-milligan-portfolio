import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Magnetic pull calculation
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={toggle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-50 w-16 h-16 flex items-center justify-center focus:outline-none pointer-events-auto group"
      aria-label="Toggle Menu"
    >
      {/* 
        Line Container
        Removed mix-blend-difference to ensure visibility on charcoal background.
      */}
      <div className="relative w-8 h-3">
        {/* Top Line */}
        <motion.span
          className="absolute left-0 top-0 w-full h-[2px] bg-white origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
        />
        {/* Bottom Line */}
        <motion.span
          className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -5 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
        />
      </div>
    </motion.button>
  );
};

export default MenuButton;