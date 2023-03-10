export const dropdownVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
