import React, { useEffect, useState } from 'react';
import { Moon, Sun, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      setIsNight(hour >= 18 || hour < 6);
    };
    updateTheme();
    const id = setInterval(updateTheme, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className={`relative w-full border-t border-white/10 ${isNight ? 'bg-[#040814]' : 'bg-[#071020]'} text-white/80`}> 
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20">
                <span className="text-sky-300">🔥</span>
              </div>
              <span className="text-sm font-semibold tracking-wide">SMKN 5 Tebo</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Ignite Skills. Shape the Future.</p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs backdrop-blur">
            {isNight ? <Moon className="h-4 w-4 text-sky-300" /> : <Sun className="h-4 w-4 text-amber-300" />}
            <span>{isNight ? 'Night Mode' : 'Day Mode'} • Auto</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-sky-300" />
            <p>Jl. Education No. 5, Tebo, Jambi — Indonesia</p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 text-sky-300" />
            <p>contact@smkn5tebo.sch.id</p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} SMKN 5 Tebo. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
