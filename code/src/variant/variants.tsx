import { Variants } from "framer-motion";

export const simpleVariants: Variants = (shouldStagger: boolean, delay: number = 0) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldStagger ? 0.15 : 0,
      delay: delay,
      delayChildren: delay,
    }
  }
});

export const paragraphVariants: Variants = (delay: number) => ({
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
      delay: delay,
    }
  },
});

export const bounceLetterVariants: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: [60, 10, -100, 0],
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
    },
  },
};

export const iconVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
    }
  },
};