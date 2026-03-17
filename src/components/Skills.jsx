import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 95, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )},
  { name: 'React JS', level: 80, icon: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 8.5c3.866 0 7 1.343 7 3s-3.134 3-7 3-7-1.343-7-3 3.134-3 7-3z"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M8.464 6.964c1.933-3.35 4.567-5.35 5.536-4.464s-.134 4.134-2.067 7.485c-1.933 3.35-4.567 5.35-5.536 4.464s.134-4.134 2.067-7.485z"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M8.464 17.036c-1.933-3.35-3.036-6.6-2.067-7.485s3.603 1.114 5.536 4.464c1.933 3.35 3.036 6.6 2.067 7.485s-3.603-1.114-5.536-4.464z"/>
    </svg>
  )},
  { name: 'JavaScript', level: 85, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )},
  { name: 'Tailwind CSS', level: 78, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  )},
  { name: 'Bootstrap', level: 90, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )},
  { name: 'jQuery', level: 82, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )},
  { name: 'WordPress', level: 92, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )},
  { name: 'PHP', level: 88, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  )},
  { name: 'MySQL', level: 85, icon: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )},
];

const aiTools = [
  { name: 'ChatGPT', desc: 'AI-assisted code generation & debugging' },
  { name: 'Gemini', desc: 'Smart code reviews & error resolution' },
  { name: 'Claude AI', desc: 'Complex problem solving & optimization' },
  { name: 'GitHub Copilot', desc: 'AI pair programming & autocomplete' },
];

function CircleProgress({ level, inView, index }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg className="w-28 h-28 skill-circle" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#f3f0ff" strokeWidth="6" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={`url(#skillGradient-${index})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      />
      <defs>
        <linearGradient id={`skillGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AnimatedNumber({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span>{count}%</span>;
}

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            I put your ideas and thus your wishes in the form of a unique web project that
            inspires you and your customers.
          </p>
        </motion.div>

        {/* Circular skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl p-6 flex flex-col items-center border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="relative mb-4">
                <CircleProgress level={skill.level} inView={inView} index={i} />
                <div className="absolute inset-0 flex items-center justify-center rotate-90">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>
              </div>
              <div className="text-xl font-extrabold text-gray-900 mb-1">
                <AnimatedNumber value={skill.level} inView={inView} />
              </div>
              <p className="text-sm font-semibold text-gray-500 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            AI-Powered <span className="gradient-text">Development</span>
          </h3>
          <p className="text-gray-500 max-w-lg mx-auto">
            Leveraging cutting-edge AI tools to fix errors faster, write cleaner code, and deliver projects efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
              className="relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-primary/5 to-transparent rounded-bl-3xl" />

              <div className="relative z-10">
                {/* AI icon */}
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-purple-100 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-purple-200 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {tool.desc}
                </p>

                {/* Animated sparkle dots */}
                <div className="flex gap-1 mt-4">
                  {[...Array(4)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.15, type: 'spring', bounce: 0.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-primary/40"
                    />
                  ))}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '2rem' }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="h-1.5 rounded-full bg-linear-to-r from-primary/40 to-primary/10"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
