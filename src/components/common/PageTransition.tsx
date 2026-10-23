import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
        transition={{
          duration: 0.38,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
