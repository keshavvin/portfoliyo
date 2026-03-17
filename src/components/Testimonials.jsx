import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, CoachingPro',
    text: 'Keshav is a professional developer. He really helps my business grow with an outstanding coaching website. Highly recommended for any web project!',
    color: 'from-violet-500 to-purple-600',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Orion Montessori',
    text: 'Amazing work on our school website! Keshav understood our needs perfectly and delivered a beautiful, responsive site that parents and staff love using.',
    color: 'from-blue-500 to-indigo-600',
    initials: 'PS',
  },
  {
    name: 'Amit Khare',
    role: 'Founder, IOC Platform',
    text: 'Keshav is a professional designer. He really helps my educational platform reach more students with his excellent development and attention to detail.',
    color: 'from-emerald-500 to-teal-600',
    initials: 'AK',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Client's <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Empowering people to step into a digital journey with my super services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex gap-3 mb-6 justify-center lg:justify-start">
                {testimonials.map((t, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ${
                      current === i ? 'ring-4 ring-primary/30 scale-110' : 'opacity-60 hover:opacity-80'
                    }`}
                  >
                    {t.initials}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Testimonial card */}
            <div className="lg:col-span-3 relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative"
                >
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-primary/15 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg italic">
                    "{testimonials[current].text}"
                  </p>

                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                    <p className="text-sm text-primary">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
