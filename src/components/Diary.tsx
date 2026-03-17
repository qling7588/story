// Component to simulate a private chat or diary for the couple
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MESSAGES, Message } from '../constants';
import { Send, Heart } from 'lucide-react';

export const Diary: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(MESSAGES);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'partner1',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <section className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="font-handwriting text-5xl text-center text-romantic-pink-dark mb-12">Nhật ký lời nhắn</h2>
      
      <div className="glass-card h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-romantic-pink flex items-center justify-between bg-white/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-romantic-pink-dark flex items-center justify-center text-white">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-bold">Our Secret Chat</h3>
              <span className="text-xs text-green-500 font-medium">Đang trực tuyến</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, x: msg.sender === 'partner1' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={msg.id}
              className={`flex ${msg.sender === 'partner1' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                msg.sender === 'partner1' 
                  ? 'bg-romantic-pink-dark text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none'
              }`}>
                <p>{msg.text}</p>
                <span className={`text-[10px] block mt-1 ${
                  msg.sender === 'partner1' ? 'text-white/70' : 'text-gray-400'
                }`}>
                  {msg.timestamp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white/40 border-t border-romantic-pink flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Viết lời nhắn cho người ấy..."
            className="flex-1 px-4 py-2 rounded-full border border-romantic-pink focus:outline-none focus:ring-2 focus:ring-romantic-pink-dark bg-white/80"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-romantic-pink-dark text-white flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};
