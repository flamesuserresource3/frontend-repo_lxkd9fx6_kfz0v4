import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    title: 'Tech Innovation Week 2025',
    date: 'Jan 25, 2025',
    desc: 'Showcase of student-built robots, apps, and IoT projects with industry judges.',
  },
  {
    title: 'Dual System Internship Launch',
    date: 'Feb 10, 2025',
    desc: 'Partnership with 10 companies for real-world work placements.',
  },
  {
    title: 'National Skills Championship',
    date: 'Mar 02, 2025',
    desc: 'SMKN 5 Tebo team advances to finals in Mechatronics and Software Engineering.',
  },
];

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const item = items[index];

  return (
    <section id="news" className="relative w-full bg-[#050a17] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,132,199,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <h2 className="mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">News & Events</h2>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex items-center gap-2 text-sky-300">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">{item.date}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-xs text-white/60">{index + 1} / {items.length}</div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
