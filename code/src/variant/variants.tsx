import { Variants } from "framer-motion";

export const simpleVariants = (shouldStagger: boolean): Variants => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldStagger ? 0.15 : 0
    }
  }
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