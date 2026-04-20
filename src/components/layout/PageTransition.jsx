import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export default function PageTransition({ children, className }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn("pb-12", className)}
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
