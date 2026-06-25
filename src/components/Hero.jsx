import { Button } from "@heroui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.02]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        style={{ y: y1, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-6xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-white mb-6 max-w-4xl leading-tight"
        >
          Building <span className="text-gradient">scalable</span> web & mobile solutions.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl font-semibold"
        >
          Hi, I'm <span className="text-zinc-900 dark:text-white font-black">Vaibhav Singh</span>. A Full-Stack Developer & SaaS Builder turning complex problems into elegant, high-performance applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg"
            className="bg-brand-500 text-zinc-50 font-black px-8 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] transition-all"
            endContent={<ArrowRight size={18} />}
            as="a"
            href="#projects"
          >
            See My Work
          </Button>
          <Button 
            size="lg"
            variant="bordered"
            className="border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-500 transition-all px-8 font-bold"
            startContent={<FileText size={18} />}
            as="a"
            href="https://drive.google.com/file/d/1mt4axQrzzWcY_ZNTqVxJql40TBkNTyxV/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
