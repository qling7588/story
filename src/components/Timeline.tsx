// Component to display a vertical timeline of significant love milestones
import React from 'react';
import { motion } from 'motion/react';
import { MEMORIES } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="font-handwriting text-5xl text-center text-romantic-pink-dark mb-16">Dòng thời gian kỷ niệm</h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-romantic-pink/50 hidden md:block"></div>

        <div className="space-y-12">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 px-4">
                <div className="glass-card overflow-hidden group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-serif italic">{memory.date}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-romantic-pink-dark mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{memory.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{memory.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{memory.description}</p>
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-romantic-pink-dark rounded-full border-4 border-white z-10 hidden md:block"></div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
