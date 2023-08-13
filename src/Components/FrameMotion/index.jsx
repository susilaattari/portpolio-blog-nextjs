"use client";
import { motion} from "framer-motion";

export function FrameMotion({ children, animate }) {
  return (
    <motion.div
      animate={animate}
      transition={{
        duration: 5,
        delay: 0.3,
        ease: "easeOut",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
