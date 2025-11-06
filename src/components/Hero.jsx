import React from 'react';
import Spline from '@splinetool/react-spline';
import { Flame, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#060b18]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Flame className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-medium tracking-wide text-white/90">SMKN 5 Tebo • Ignite Skills. Shape the Future.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          The Future of Vocational Education
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg"
        >
          A modern, smart, and inspiring hub for students, teachers, and parents — powered by innovation and designed with a blue‑flame aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#departments"
            className="group inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition hover:bg-sky-500/20 hover:text-white"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> Explore Majors
          </a>
          <a
            href="#news"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4" /> What’s New
          </a>
        </motion.div>

        {/* Floating glass stats */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Departments', value: '8+' },
            { label: 'Active Students', value: '1,000+' },
            { label: 'Industry Partners', value: '25+' },
            { label: 'Achievements', value: '120+' },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
            >
              <div className="text-2xl font-extrabold text-white">{item.value}</div>
              <div className="text-xs uppercase tracking-wider text-white/70">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
