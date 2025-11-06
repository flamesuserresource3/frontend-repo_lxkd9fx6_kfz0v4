import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Settings, Wrench, Code, Database, Network, Camera, Cog } from 'lucide-react';

const majors = [
  { name: 'Software Engineering', icon: Code, color: 'from-sky-500 to-blue-500' },
  { name: 'Computer & Network Engineering', icon: Network, color: 'from-cyan-500 to-emerald-500' },
  { name: 'Multimedia & Creative', icon: Camera, color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Industrial Automation', icon: Settings, color: 'from-indigo-500 to-purple-500' },
  { name: 'Mechatronics', icon: Cog, color: 'from-teal-500 to-cyan-500' },
  { name: 'Electrical Engineering', icon: Cpu, color: 'from-amber-500 to-orange-500' },
  { name: 'Automotive Engineering', icon: Wrench, color: 'from-rose-500 to-red-500' },
  { name: 'Data & Cloud', icon: Database, color: 'from-blue-500 to-indigo-500' },
];

const Departments = () => {
  return (
    <section id="departments" className="relative w-full bg-[#050a17] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">Departments & Majors</h2>
            <p className="mt-2 max-w-2xl text-white/70">Explore industry-aligned programs with hands-on learning and real-world projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {majors.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl`} />
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{name}</h3>
                  <p className="text-xs text-white/70">Project-based learning • Industry mentors</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-white/70">Earn badges, build portfolios, and showcase your skills.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
