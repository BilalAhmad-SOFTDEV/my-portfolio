import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, Check } from 'lucide-react';

// Custom Typewriter Component for a lightweight, customizable typing effect
const Typewriter = ({ phrases, typingSpeed = 70, deletingSpeed = 40, delayBetween = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center min-h-[1.5em] select-none">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:bg-none dark:text-purple-400 font-bold transition-all duration-200">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-[1.15em] ml-1.5 bg-pink-500 dark:bg-purple-400 animate-blink"></span>
    </span>
  );
};

const Hero = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 4000);
  };

  // Framer Motion variants for stagger entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Animated Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[5%] -left-10 w-80 h-80 md:w-[450px] md:h-[450px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full filter blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] -right-10 w-80 h-80 md:w-[450px] md:h-[450px] bg-pink-500/10 dark:bg-pink-500/15 rounded-full filter blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] w-80 h-80 md:w-[400px] md:h-[400px] bg-purple-400/10 dark:bg-purple-400/10 rounded-full filter blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs md:text-sm font-semibold mb-6 max-w-max backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-2"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                Bilal Ahmad
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2"
            >
              Full Stack .NET Developer
            </motion.h2>

            {/* Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl mb-6 min-h-[2rem] md:min-h-[2.25rem] flex items-center"
            >
              <Typewriter
                phrases={[
                  ".NET Core Developer",
                  "C# Backend Engineer",
                  "SQL Server Specialist",
                  "Real-Time Systems (SignalR)",
                  "Financial Automation Engineer",
                  "REST API Developer",
                  "Query Optimization Expert",
                  "ERP Solutions Developer",
                  "Problem Solver",
                  "Clean Code Advocate"
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                delayBetween={2000}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              Backend developer with 2.5+ years building financial automation systems, ERP solutions, and high-performance APIs using .NET Core, C#, and SQL Server — with a track record of improving system performance by 8-10x.
            </motion.p>

            {/* Actions & Socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center"
            >
              <a href="#projects" className="btn-premium-primary inline-flex items-center gap-2 group">
                View Projects
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a 
                href="/Bilal_Ahmad_Resume.pdf" 
                download="Bilal_Ahmad_Resume.pdf"
                onClick={handleDownloadCV}
                className={`btn-premium-secondary inline-flex items-center gap-2 group transition-all duration-300 ${
                  isDownloaded ? 'border-emerald-500/50 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : ''
                }`}
              >
                {isDownloaded ? (
                  <>
                    CV Downloaded
                    <Check size={18} className="text-emerald-500 animate-pulse" />
                  </>
                ) : (
                  <>
                    Download CV
                    <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  </>
                )}
              </a>

              {/* Social Icons Container */}
              <div className="flex space-x-4 ml-2">
                <motion.a
                  href="https://www.linkedin.com/in/bilal-ahmad482"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-center text-slate-700 dark:text-white text-xl w-11 h-11"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </motion.a>
                <motion.a
                  href="https://github.com/BilalAhmad-SOFTDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-center text-slate-700 dark:text-white text-xl w-11 h-11"
                >
                  <i className="fa-brands fa-github"></i>
                </motion.a>
                <motion.a
                  href="mailto:bilalahmad040802@gmail.com"
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-center text-slate-700 dark:text-white text-xl w-11 h-11"
                >
                  <i className="fa-solid fa-envelope"></i>
                </motion.a>

                <motion.a
                  href="tel:+923084157793"
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-center text-slate-700 dark:text-white text-xl w-11 h-11"
                >
                  <i className="fa-solid fa-phone"></i>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image & Floating Elements */}
          <div className="lg:col-span-5 relative w-full flex justify-center mt-12 lg:mt-0 select-none">

            {/* Entrance wrapper for Right Column */}
            <motion.div
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-[340px]"
            >
              {/* Infinite vertical float */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Premium Gradient Border Frame & Glassmorphism Container */}
                <div className="relative p-[3px] rounded-[2.5rem] overflow-hidden shadow-2xl group transition-all duration-500">
                  {/* Soft Gradient Border Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-border-glow bg-[size:200%_auto] z-0"></div>

                  {/* Glassmorphic Inner Frame */}
                  <div className="relative rounded-[2.4rem] bg-white/70 dark:bg-slate-900/60 p-3 backdrop-blur-xl z-10 flex items-center justify-center">
                    <img
                      src="/Bilalprofileimage.jpeg"
                      alt="Bilal Ahmad"
                      className="w-full aspect-square object-cover object-[center_10%] rounded-[2rem]"                    />
                  </div>
                </div>

                {/* --- FLOATING DEVELOPER-THEMED GLASS CARDS --- */}

                {/* Card 1: React */}
                <motion.div
                  custom={0}
                  variants={cardVariants}
                  className="absolute top-[6%] -left-[12%] sm:-left-[15%] lg:-left-[18%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/50 dark:border-purple-500/25 shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-slate-900/90 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <i className="fa-brands fa-react text-sky-400 text-base animate-[spin_10s_linear_infinite]"></i>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">React</span>
                  </motion.div>
                </motion.div>

                {/* Card 2: Angular */}
                <motion.div
                  custom={6}
                  variants={cardVariants}
                  className="absolute top-[-5%] left-[30%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-red-500/20 shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <i className="fa-brands fa-angular text-red-600 text-base"></i>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">
                      Angular
                    </span>
                  </motion.div>
                </motion.div>

                {/* Card 3: .NET */}
                <motion.div
                  custom={1}
                  variants={cardVariants}
                  className="absolute top-[18%] -right-[10%] sm:-right-[12%] lg:-right-[15%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/50 dark:border-purple-500/25 shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-slate-900/90 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[9px] font-black text-white">.N</div>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">.NET</span>
                  </motion.div>
                </motion.div>

                {/* Card 4: SQL */}
                <motion.div
                  custom={2}
                  variants={cardVariants}
                  className="absolute bottom-[15%] -right-[12%] sm:-right-[15%] lg:-right-[18%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0], x: [0, -5, 0] }}
                    transition={{
                      duration: 4.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/50 dark:border-purple-500/25 shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-slate-900/90 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Database size={16} className="text-blue-500" />
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">SQL</span>
                  </motion.div>
                </motion.div>

                {/* Card 5: API */}
                <motion.div
                  custom={3}
                  variants={cardVariants}
                  className="absolute bottom-[40%] -left-[14%] sm:-left-[18%] lg:-left-[22%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, 9, 0], x: [0, 5, 0] }}
                    transition={{
                      duration: 5.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/50 dark:border-purple-500/25 shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-slate-900/90 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <i className="fa-solid fa-gears text-amber-500 text-sm"></i>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">REST API</span>
                  </motion.div>
                </motion.div>

                {/* Card 6: Git */}
                <motion.div
                  custom={4}
                  variants={cardVariants}
                  className="absolute bottom-[5%] -left-[8%] sm:-left-[10%] lg:-left-[12%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/50 dark:border-purple-500/25 shadow-lg hover:scale-105 hover:bg-white dark:hover:bg-slate-900/90 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <i className="fa-brands fa-git-alt text-orange-600 text-base"></i>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">Git</span>
                  </motion.div>
                </motion.div>

                {/* Card 7: Microservices */}
                <motion.div
                  custom={8}
                  variants={cardVariants}
                  className="absolute bottom-[50%] -right-[12%] sm:-right-[15%] lg:-right-[18%] z-20 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-900/75 backdrop-blur-md border border-violet-500/20 shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <i className="fa-solid fa-diagram-project text-violet-500"></i>
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white">
                      Microservices
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
