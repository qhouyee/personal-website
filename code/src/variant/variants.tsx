import { Variants } from "framer-motion";

type staggerVariantsFunction = (
  shouldStagger: boolean,
  delay?: number,
  delayChildren?: number
) => Variants;

type delayVariantsFunction = (
  delay?: number,
) => Variants;

type imageVariantsFunction = (
  delay: number,
  fromLeft?: boolean
) => Variants;

export const simpleVariants: staggerVariantsFunction = (shouldStagger, delay = 0, delayChildren = delay) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldStagger ? 0.15 : 0,
      delay: delay,
      delayChildren: delayChildren,
    }
  }
});

export const swipeRightVariants: Variants = {
  hidden: {
    clipPath: `inset(0 100% 0 0)`,
    opacity: 0,
  },
  visible: {
    clipPath: `inset(0 0 0 0)`,
    opacity: 1,
    transition: {
      duration: 1.5,
    }
  },
};

export const titleVariants: Variants = {
  hidden: {
    x: 10,
    y: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: .1,
    }
  },
};

export const subTitleVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 4,
      stiffness: 100,
      duration: 2,
    }
  },
};

export const paragraphVariants: delayVariantsFunction = (delay = 0) => ({
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
      ...(delay !== 0 && { delay }),
    }
  },
});

export const bounceLetterVariants: Variants = {
  hidden: {
    y: 0,
    opacity: 0
  },
  visible: {
    y: [60, 10, -100, 0],
    opacity: 1,
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

export const imageVariants: imageVariantsFunction = (delay, fromLeft = false) => ({
  hidden: {
    x: fromLeft ? -100 : 100,
    y: 0,
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ...(delay !== 0 && { delay }),
    }
  },
});

export const mobileImageVariants: Variants = {
  hidden: {
    x: 0,
    y: 50,
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 50,
    }
  },
};

export const lineVariants: delayVariantsFunction = (delay) => ({
  hidden: {
    clipPath: `inset(100% 0 0 0)`,
    opacity: 0,
  },
  visible: {
    clipPath: `inset(0 0 0 0)`,
    opacity: 1,
    transition: {
      duration: 0.5,
      ...(delay !== 0 && { delay }),
    }
  },
});

export const skillCardVariants: delayVariantsFunction = (delay) => ({
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: delay,
    }
  },
  hover: {
    scale: 1.2,
    rotate: Math.random() * (10 + 10) - 10,
    zIndex: 100,
  }
});

export const jobCardVariants: Variants = {
  hidden: {
    scale: 0.6,
    opacity: 0.6,
    y:-100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y:0,
    transition: {
      type: "spring",
      damping: 11,
      stiffness: 50,
      duration: 2,
    }
  },
};