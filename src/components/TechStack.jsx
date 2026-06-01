import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { 
  MonitorSmartphone, 
  Server, 
  Cloud, 
  Wrench
} from "lucide-react";

const categories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["ASP.NET Core 8", "Node.js", "Express", "Microservices"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: ["React", "Flutter", "Vite", "Tailwind CSS"],
    color: "text-brand-500",
    bg: "bg-brand-500/10"
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "AWS"],
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Tools & Design",
    icon: Wrench,
    skills: ["Git", "Postman", "Figma", "Cursor"],
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-zinc-900 dark:text-white">
            The Toolbox
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full mb-6" />
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-semibold">
            My go-to technologies for building scalable, high-performance applications from the ground up.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="glass-panel border-none bg-white/70 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-800/60 transition-colors h-full group shadow-md dark:shadow-none">
                <CardBody className="p-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${cat.bg}`}>
                    <cat.icon className={`w-7 h-7 ${cat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm border border-zinc-200 dark:border-white/5 font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
