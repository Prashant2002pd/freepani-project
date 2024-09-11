"use client";
import { animate, easeIn, motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ type: "easeIn", duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
