import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import twinedImage from "../assets/twined.JPG";
import applysyncImage from "../assets/applysync_marquee.png";
import communityImage from "../assets/community.JPG";

const projects = [
  {
    id: "applysync",
    title: "ApplySync",
    subtitle: "AI Job Auto-Fill Extension",
    description: "Automating the repetitive nature of job applications. ApplySync extracts your resume data and auto-fills complex job portals (Greenhouse, Lever, Workday) in under 10 minutes with AI-powered precision.",
    tech: ["React", "Plasmo", "Supabase", "OpenAI", "Tailwind"],
    github: "https://github.com/Vaibhav1505", // Main github for now
    liveUrl: "https://applysync.online",
    image: applysyncImage, // Placeholder
    color: "from-brand-500 to-indigo-500"
  },
  {
    id: "twined",
    title: "Twined",
    subtitle: "Dating App Platform",
    description: "A highly interactive dating platform scaling to thousands of concurrent users, focusing on complex matching algorithms and real-time chat functionality.",
    tech: ["Flutter", "ASP.NET Core", "SQL Server", "SignalR"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.vkvtech.twined&hl=en_IN",
    image: twinedImage, // Placeholder
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "community",
    title: "commUnity",
    subtitle: "Team Collaboration Platform",
    description: "A powerful, real-time team collaboration platform designed for seamless communication, resource sharing, and productivity tracking for organizations and developer communities.",
    tech: ["Next.js", "Node.js", "WebSockets", "MongoDB"],
    github: "https://github.com/Vaibhav1505/commUnity",
    liveUrl: "https://github.com/Vaibhav1505/commUnity",
    image: communityImage, // Placeholder
    color: "from-blue-500 to-cyan-500"
  }
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-32`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group perspective-1000">
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
        <div className="relative rounded-2xl overflow-hidden glass-panel border-white/5 transform transition-transform duration-500 ease-out group-hover:rotate-x-2 group-hover:-rotate-y-2 group-hover:scale-[1.02]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto aspect-[16/10] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            {project.liveUrl && (
              <Button 
                as="a" 
                href={project.liveUrl} 
                target="_blank"
                className="bg-white/10 text-white border border-white/20 hover:bg-white flex items-center gap-2"
                radius="full"
              >
                View Live Idea <ExternalLink size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <span className={`text-sm font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
          {project.subtitle}
        </span>
        <h3 className="text-4xl lg:text-5xl font-heading font-black text-zinc-900 dark:text-white mb-6">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 font-semibold">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-full text-zinc-700 dark:text-zinc-300 font-bold">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              className={`bg-gradient-to-r ${project.color} text-zinc-50 font-bold`}
              endContent={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              as="a"
              href={project.github}
              target="_blank"
              variant="bordered"
              className="border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold"
              startContent={<FaGithub size={16} />}
            >
              Source Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-white dark:bg-transparent transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.05),transparent_70%)]" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:w-2/3"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-zinc-900 dark:text-white">
            Featured <span className="text-zinc-400 dark:text-zinc-600">Work.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed font-semibold">
            I don't just write code; I build complete products. Picked out a few powerhouses that showcase my ability to handle complex problems and deliver polished user experiences.
          </p>
        </motion.div>

        <div className="flex flex-col mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
