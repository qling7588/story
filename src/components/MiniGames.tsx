// Component containing interactive elements like a relationship quiz and love letter generator
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUIZ_QUESTIONS = [
  {
    question: "Món ăn yêu thích của người ấy là gì?",
    options: ["Phở", "Bún đậu mắm tôm", "Pizza", "Lẩu Thái"],
    correct: 1
  },
  {
    question: "Chúng mình gặp nhau lần đầu ở đâu?",
    options: ["Rạp phim", "Công viên", "Quán cà phê", "Trường học"],
    correct: 2
  },
  {
    question: "Người ấy thích màu gì nhất?",
    options: ["Xanh lá", "Hồng pastel", "Đen", "Trắng"],
    correct: 1
  }
];

export const MiniGames: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'letter'>('quiz');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleAnswer = (index: number) => {
    if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      if (score + (index === QUIZ_QUESTIONS[currentQuestion].correct ? 1 : 0) === QUIZ_QUESTIONS.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const generateLetter = () => {
    const intros = ["Gửi người thương của anh,", "Chào em yêu,", "Công chúa nhỏ của anh ơi,"];
    const bodies = [
      "Anh ngồi đây và nghĩ về tất cả những kỷ niệm chúng mình đã có. Em là điều tuyệt vời nhất từng đến với anh.",
      "Mỗi ngày trôi qua, anh lại thấy mình yêu em nhiều hơn một chút. Cảm ơn em đã luôn ở bên cạnh anh.",
      "Nụ cười của em chính là liều thuốc chữa lành mọi mệt mỏi trong anh. Anh hứa sẽ luôn bảo vệ nụ cười ấy."
    ];
    const outros = ["Yêu em mãi mãi,", "Mãi bên nhau nhé,", "Hôn em thật nhiều,"];
    
    const letter = `${intros[Math.floor(Math.random() * intros.length)]}\n\n${bodies[Math.floor(Math.random() * bodies.length)]}\n\n${outros[Math.floor(Math.random() * outros.length)]}\nAnh của em.`;
    setGeneratedLetter(letter);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="font-handwriting text-5xl text-center text-romantic-pink-dark mb-12">Góc giải trí & Yêu thương</h2>
      
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-8 py-3 rounded-full font-bold transition-all ${
            activeTab === 'quiz' ? 'bg-romantic-pink-dark text-white' : 'bg-white text-gray-600'
          }`}
        >
          Quiz: Bạn hiểu tôi bao nhiêu?
        </button>
        <button
          onClick={() => setActiveTab('letter')}
          className={`px-8 py-3 rounded-full font-bold transition-all ${
            activeTab === 'letter' ? 'bg-romantic-pink-dark text-white' : 'bg-white text-gray-600'
          }`}
        >
          Love Letter Generator
        </button>
      </div>

      <div className="glass-card p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'quiz' ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-lg"
            >
              {!showResult ? (
                <div className="space-y-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-romantic-pink-dark font-bold">Câu hỏi {currentQuestion + 1}/{QUIZ_QUESTIONS.length}</span>
                    <div className="w-32 h-2 bg-romantic-pink rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-romantic-pink-dark transition-all duration-300" 
                        style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-8">{QUIZ_QUESTIONS[currentQuestion].question}</h3>
                  <div className="grid gap-4">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full py-4 px-6 rounded-2xl bg-white border-2 border-romantic-pink hover:border-romantic-pink-dark hover:bg-romantic-pink-light transition-all text-left font-medium"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-romantic-pink-light flex items-center justify-center mx-auto text-romantic-pink-dark">
                    <Sparkles size={48} />
                  </div>
                  <h3 className="text-3xl font-bold">Kết quả: {score}/{QUIZ_QUESTIONS.length}</h3>
                  <p className="text-gray-600 text-lg">
                    {score === QUIZ_QUESTIONS.length 
                      ? "Tuyệt vời! Bạn thực sự là tri kỷ của người ấy đấy! ❤️" 
                      : "Cũng khá đấy, nhưng hãy dành thêm thời gian để tìm hiểu nhau nhé! 🥰"}
                  </p>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setScore(0);
                      setShowResult(false);
                    }}
                    className="px-8 py-3 bg-romantic-pink-dark text-white rounded-full font-bold"
                  >
                    Chơi lại
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-lg text-center"
            >
              <div className="mb-8">
                <Heart className="mx-auto text-romantic-pink-dark mb-4" size={48} fill="currentColor" />
                <h3 className="text-2xl font-bold mb-2">Tạo thư tình tự động</h3>
                <p className="text-gray-600">Đôi khi lời nói khó cất thành lời, hãy để chúng mình giúp bạn.</p>
              </div>

              <AnimatePresence mode="wait">
                {generatedLetter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 p-6 rounded-2xl border border-romantic-pink mb-8 text-left font-serif italic text-lg whitespace-pre-line shadow-inner"
                  >
                    {generatedLetter}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={generateLetter}
                className="px-8 py-4 bg-romantic-pink-dark text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 flex items-center gap-2 mx-auto"
              >
                <Sparkles size={20} />
                {generatedLetter ? "Tạo bức thư khác" : "Tạo thư tình ngay"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
