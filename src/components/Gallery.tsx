// Component to display a filterable image gallery of memories
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MEMORIES, Memory } from '../constants';
import { X, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<Memory['category'] | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredMemories = filter === 'all' 
    ? MEMORIES 
    : MEMORIES.filter(m => m.category === filter);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="font-handwriting text-5xl text-center text-romantic-pink-dark mb-12">Khoảnh khắc đáng nhớ</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { id: 'all', label: 'Tất cả' },
          { id: 'first-meet', label: 'Lần đầu gặp' },
          { id: 'travel', label: 'Đi chơi' },
          { id: 'special', label: 'Kỷ niệm đặc biệt' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id as any)}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === btn.id 
                ? 'bg-romantic-pink-dark text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-romantic-pink-light'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredMemories.map((memory) => (
            <motion.div
              layout
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden cursor-pointer group relative"
              onClick={() => setSelectedImage(memory.image)}
            >
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-romantic-pink-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-romantic-pink-dark transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
