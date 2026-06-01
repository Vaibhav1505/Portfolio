import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-12 md:p-20 rounded-3xl mb-16 relative overflow-hidden bg-zinc-50 dark:bg-transparent"
        >
          <div className="absolute inset-0 bg-brand-500/5" />
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-zinc-900 dark:text-white mb-6 relative z-10">
            Let's build something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 font-bold">
            Whether it's a scalable backend infrastructure or a sleek UI, I'm always open to discussing product design architecture or partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Button 
              size="lg"
              className="bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-950 font-black px-8 w-full sm:w-auto"
              endContent={<Mail size={18} />}
              as="a"
              href="mailto:vaibhavsingh15052002@gmail.com"
            >
              Say Hello
            </Button>
            <Button 
              size="lg"
              variant="bordered"
              className="border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 w-full sm:w-auto px-8 font-bold"
              endContent={<ArrowUpRight size={18} />}
              as="a"
              href="https://drive.google.com/file/d/1HjIdImPGNESNiQCOlqe0ZJpJY2czVOIx/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500">
          <p className="font-medium text-sm">
            © {new Date().getFullYear()} Vaibhav Singh. Built with React & Vite.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com/Vaibhav1505" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-s-a697581b5/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/Vaibhav08614031" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:vaibhavsingh15052002@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
