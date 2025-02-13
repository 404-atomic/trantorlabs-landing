import type { Variants } from 'framer-motion';

export const particleVariants: Variants = {
  float: {
    y: [0, -1000],
    opacity: [0, 0.3, 0],
    scale: [1, 1.1],
    transition: {
      duration: 15 + Math.random() * 15,
      repeat: Infinity
    }
  }
};
