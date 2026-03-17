/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Diary } from './components/Diary';
import { SecretPage } from './components/SecretPage';
import { MiniGames } from './components/MiniGames';
import { MusicPlayer } from './components/MusicPlayer';
import { HeartClickEffect, FloatingHearts } from './components/HeartEffects';
import { Heart, ChevronUp } from 'lucide-react';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <FloatingHearts />
      <HeartClickEffect />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Hero onEnter={() => setIsEntered(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pb-20"
          >
            {/* Navigation / Header */}
            <nav className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-romantic-pink/30 px-6 py-4">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="font-handwriting text-3xl text-romantic-pink-dark flex items-center gap-2">
                  <Heart fill="currentColor" size={24} />
                  Our Story
                </div>
                <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-600">
                  <a href="#timeline" className="hover:text-romantic-pink-dark transition-colors">Timeline</a>
                  <a href="#gallery" className="hover:text-romantic-pink-dark transition-colors">Gallery</a>
                  <a href="#diary" className="hover:text-romantic-pink-dark transition-colors">Diary</a>
                  <a href="#games" className="hover:text-romantic-pink-dark transition-colors">Fun</a>
                  <a href="#secret" className="hover:text-romantic-pink-dark transition-colors">Secret</a>
                </div>
              </div>
            </nav>

            <div id="timeline">
              <Timeline />
            </div>
            
            <div id="gallery" className="bg-white/30">
              <Gallery />
            </div>

            <div id="diary">
              <Diary />
            </div>

            <div id="games" className="bg-white/30">
              <MiniGames />
            </div>

            <div id="secret">
              <SecretPage />
            </div>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-romantic-pink/30">
              <div className="font-handwriting text-4xl text-romantic-pink-dark mb-4">
                Mãi yêu em...
              </div>
              <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">
                © 2026 Crafted with Love for Qling
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && isEntered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-romantic-pink-dark text-white shadow-xl flex items-center justify-center z-50 hover:bg-opacity-90 transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
