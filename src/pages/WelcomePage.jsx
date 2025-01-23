import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

const WelcomePage = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen bg-gradient-to-r text-white overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-blur'>
        {/* Starfall Animation */}
        <div className='starfall absolute inset-0 pointer-events-none'>
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className='starfall-star'
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}></div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        className='relative z-10 text-center p-8 bg-black/10 backdrop-blur-xl shadow-lg rounded-2xl border border-white/20'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <motion.div
          className='flex justify-center items-center mb-4'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
          <Sparkles size={48} className='text-yellow-300' />
        </motion.div>
        <h1 className='text-3xl font-extrabold mb-4'>
          Welcome to Vite + React template!
        </h1>
        <p className='text-lg mb-6'>
          A modern web application built with{" "}
          <span className='font-semibold'>React</span>,{" "}
          <span className='font-semibold'>Vite</span>, and{" "}
          <span className='font-semibold'>Tailwind CSS</span>.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-md hover:bg-indigo-700 transition'>
          <Rocket size={20} /> Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
