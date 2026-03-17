import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = ['Full-Stack Developer', 'React JS Developer', 'WordPress Expert', 'AI-Powered Developer', 'PHP Developer'];

function Header() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text.length + 1 === currentRole.length) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text.length === 0) { setIsDeleting(false); setRoleIndex((p) => (p + 1) % roles.length); }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const stats = [
    { value: '5+', label: 'Years of', sub: 'Experience' },
    { value: '50+', label: 'Projects', sub: 'Completed' },
    { value: '30+', label: 'Happy', sub: 'Clients' },
    { value: '15+', label: 'Technologies', sub: 'Mastered' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-[100px] opacity-60 animate-blob" />
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-violet-100 rounded-full blur-[80px] opacity-50 animate-blob-delay" />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-float-delay opacity-50" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-delay2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bg rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">Available for work</span>
            </motion.div>

            <motion.p variants={item} className="text-gray-600 text-lg mb-2">Hello, I am</motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
              Keshav Jha
            </motion.h1>

            <motion.h2 variants={item} className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              <span className="gradient-text">Next-Level</span>{' '}
              <span className="text-gray-900">Web</span>
              <br />
              <span className="text-gray-900">Developer.</span>
            </motion.h2>

            <motion.div variants={item} className="text-lg text-gray-500 mb-2 h-8">
              <span className="text-primary font-semibold">{text}</span>
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
            </motion.div>

            <motion.p variants={item} className="text-gray-500 leading-relaxed mb-8 max-w-lg">
              I break down complex user experience problems to create integrity-focused solutions
              that connect with people. Powered by AI tools like ChatGPT & Gemini for faster, cleaner development.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
              <motion.a
                href="/Keshav-Jha-Resume.pdf"
                download="Keshav-Jha-Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </motion.a>

              {/* Social icons */}
              <div className="flex gap-3">
                {['github', 'linkedin', 'mail'].map((social, i) => (
                  <motion.a
                    key={social}
                    href={social === 'mail' ? 'mailto:jhakeshav306@gmail.com' : '#'}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary-bg transition-all duration-300"
                  >
                    {social === 'github' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    )}
                    {social === 'linkedin' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )}
                    {social === 'mail' && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Profile image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Animated decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-85 h-85 sm:w-100 sm:h-100 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
            </div>

            {/* Profile image container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-linear-to-br from-primary via-purple-400 to-violet-300 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* Avatar SVG illustration */}
                  <svg className="w-48 h-48 text-primary/80" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="70" r="40" fill="currentColor" opacity="0.2"/>
                    <circle cx="100" cy="70" r="35" fill="currentColor" opacity="0.3"/>
                    <ellipse cx="100" cy="165" rx="55" ry="45" fill="currentColor" opacity="0.2"/>
                    <circle cx="100" cy="65" r="28" fill="currentColor" opacity="0.15"/>
                    <path d="M72 60 C72 44 84 32 100 32 C116 32 128 44 128 60 C128 76 116 92 100 92 C84 92 72 76 72 60Z" fill="currentColor" opacity="0.25"/>
                    <path d="M55 155 C55 125 75 110 100 110 C125 110 145 125 145 155" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  </svg>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-12 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">5+ Years</p>
                  <p className="text-[10px] text-gray-500">Experience</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 bottom-20 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">50+ Projects</p>
                  <p className="text-[10px] text-gray-500">Completed</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 w-full pb-12"
      >
        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.4, delay: 1.2 + i * 0.15 }}
                className="text-3xl md:text-4xl font-extrabold gradient-text inline-block"
              >
                {stat.value}
              </motion.span>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Header;
