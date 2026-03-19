// Component to display the hero section with a countdown/count-up timer of the love duration
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { LOVE_START_DATE } from '../constants';
import { Heart } from 'lucide-react';

export const Hero: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date(LOVE_START_DATE);
    const timer = setInterval(() => {
      const now = new Date();
      setTimeElapsed({
        days: Math.abs(differenceInDays(now, startDate)),
        hours: Math.abs(differenceInHours(now, startDate) % 24),
        minutes: Math.abs(differenceInMinutes(now, startDate) % 60),
        seconds: Math.abs(differenceInSeconds(now, startDate) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="font-handwriting text-6xl md:text-8xl text-romantic-pink-dark mb-4">
          Qling <Heart className="inline-block fill-romantic-pink-dark" size={40} /> Ndiep
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-gray-600 mb-12">
          "Nơi tình yêu bắt đầu và kỷ niệm đong đầy..."
        </p>

        <div className="flex gap-4 md:gap-8 justify-center mb-12">
          {[
            { label: 'Ngày', value: timeElapsed.days },
            { label: 'Giờ', value: timeElapsed.hours },
            { label: 'Phút', value: timeElapsed.minutes },
            { label: 'Giây', value: timeElapsed.seconds }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="glass-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-4xl font-bold text-romantic-pink-dark mb-2">
                {item.value}
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="px-8 py-4 bg-romantic-pink-dark text-white rounded-full font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all"
        >
          Enter our memories
        </motion.button>
      </motion.div>
    </section>
  );
};
