import { motion } from "framer-motion";
import { Dumbbell, Rocket } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-zinc-900 dark:text-white">
            Behind the Code
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-panel border-none bg-white/80 dark:bg-zinc-900/50 h-full">
              <CardBody className="p-8 gap-4">
                <Rocket className="text-brand-500 w-10 h-10 mb-2" />
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Philosophy</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-semibold">
                  I'm deeply interested in entrepreneurship, D2C models, and building SaaS products that solve real-world problems. I believe that writing code is just one piece of the puzzle—understanding the business, the user, and the go-to-market strategy is what truly transforms an idea into a powerhouse.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-panel border-none bg-white/80 dark:bg-zinc-900/50 h-full">
              <CardBody className="p-8 gap-4">
                <Dumbbell className="text-indigo-500 w-10 h-10 mb-2" />
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Discipline</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-semibold">
                  When I'm not deploying scalable infrastructure, I'm maintaining discipline through my fitness routine. Consistency in the gym translates directly to consistency in my code. It teaches me that the best results come from showing up every single day and putting in the reps, whether it's lifting weights or fixing bugs.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
