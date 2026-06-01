import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "VKV Technologies Private Limited",
    timeline: "2024 - Present",
    impact: "Currently building scalable web solutions and participating in the complete software development lifecycle. Working on architecture and backend technologies to support real-time applications and robust APIs."
  },
  {
    role: "Freelance Web Developer / Consultant",
    company: "Independent",
    timeline: "2023 - 2024",
    impact: "Digitalized local business operations for a cafe, building a custom order management system that improved online visibility and streamlined daily operations. Provided end-to-end consulting from concept to deployment."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-zinc-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-zinc-200 dark:border-white/10 ml-4 md:ml-0 md:border-none">
          {/* Subtle line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-brand-500/50 items-center justify-center z-10 shadow-sm dark:shadow-none">
                  <Briefcase className="w-5 h-5 text-brand-500" />
                </div>
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-10 w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border border-brand-500/50 flex items-center justify-center z-10 shadow-sm dark:shadow-none">
                  <Briefcase className="w-3 h-3 text-brand-500" />
                </div>

                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-8 rounded-2xl glass-panel ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'} hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors`}>
                    <div className="flex items-center gap-2 text-brand-500 mb-2 font-bold">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.timeline}</span>
                    </div>
                    <h3 className="text-2xl font-black font-heading text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-zinc-600 dark:text-zinc-400 font-bold mb-4">{exp.company}</h4>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-semibold">
                      {exp.impact}
                    </p>
                  </div>
                </div>
                
                {/* Empty spacer for alignment on desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
