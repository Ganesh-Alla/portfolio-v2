import { AnimatePresence, motion } from "framer-motion";


export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.img
        src='images/Logo.png'
        alt="Logo"
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}
