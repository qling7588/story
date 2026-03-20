// Component for a password-protected secret area with a special message and video
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Play, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SecretPage: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1801') { // Simple password for demo
      setIsLocked(false);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb7c5', '#ffd1dc', '#ff4d6d']
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="glass-card p-12 max-w-md w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-romantic-pink-light flex items-center justify-center mx-auto mb-6 text-romantic-pink-dark">
              <Lock size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Trang Bí Mật</h2>
            <p className="text-gray-600 mb-8">Chỉ dành cho hai chúng mình. Hãy nhập mật mã tình yêu để mở khóa.</p>
            
            <form onSubmit={handleUnlock} className="space-y-4">
              <motion.input
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật mã là gì nhỉ? ❤️"
                className="w-full px-6 py-3 rounded-full border border-romantic-pink focus:outline-none focus:ring-2 focus:ring-romantic-pink-dark text-center text-lg"
              />
              <button
                type="submit"
                className="w-full py-3 bg-romantic-pink-dark text-white rounded-full font-bold hover:bg-opacity-90 transition-all"
              >
                Mở khóa trái tim
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl w-full"
          >
            <div className="glass-card p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-romantic-pink-light flex items-center justify-center mx-auto mb-8 text-romantic-pink-dark">
                <Unlock size={40} />
              </div>
              <h2 className="font-handwriting text-6xl text-romantic-pink-dark mb-8">Lời tỏ tình từ trái tim</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                <div className="space-y-6">
                  <p className="text-xl font-serif italic leading-relaxed text-gray-700">
                    "Gửi em, người con gái anh yêu nhất trên đời. Cảm ơn em đã đến và làm cho cuộc sống của anh trở nên rực rỡ hơn bao giờ hết. Mỗi ngày bên em đều là một món quà vô giá mà anh luôn trân trọng..."
                  </p>
                  <p className="text-lg text-gray-600">
                    Anh hứa sẽ luôn ở bên cạnh, chăm sóc và yêu thương em đến tận cùng của thời gian. Yêu em vô điều kiện! ❤️
                  </p>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://picsum.photos/seed/lovevideo/800/450" 
                    alt="Video kỷ niệm" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-romantic-pink-dark">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-romantic-pink">
                <div className="flex justify-center gap-4">
                  <Heart className="text-romantic-pink-dark animate-bounce" fill="currentColor" />
                  <Heart className="text-romantic-pink-dark animate-bounce delay-100" fill="currentColor" />
                  <Heart className="text-romantic-pink-dark animate-bounce delay-200" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
