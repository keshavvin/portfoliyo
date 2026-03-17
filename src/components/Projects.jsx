import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: 'CoachingPro',
    url: 'https://www.coachingpro.in',
    desc: 'Online coaching platform for educators and students',
    tags: ['WordPress', 'PHP'],
    category: 'wordpress',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'IOC by Khare Sir',
    url: 'https://www.iocbykharesir.com',
    desc: 'Educational portal with interactive course content',
    tags: ['WordPress', 'Elementor'],
    category: 'wordpress',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Vansh Laptop',
    url: 'https://www.vanshlaptop.com',
    desc: 'E-commerce platform for laptop sales and services',
    tags: ['WooCommerce', 'JS'],
    category: 'ecommerce',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Citizenship Conclave',
    url: 'https://citizenshipconclave.com',
    desc: 'Event and conclave management web portal',
    tags: ['HTML', 'Bootstrap'],
    category: 'html',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Orion Montessori',
    url: 'https://www.orionmontessori.com',
    desc: 'School website with admissions and information portal',
    tags: ['WordPress', 'Avada'],
    category: 'wordpress',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Medilinkers',
    url: 'https://medilinkers.com',
    desc: 'Healthcare services and medical linking platform',
    tags: ['WordPress', 'PHP'],
    category: 'wordpress',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'SuperAIP',
    url: 'https://superaip.com/',
    desc: 'AI-powered platform for smart automation and productivity solutions',
    tags: ['React', 'Tailwind', 'AI'],
    category: 'react',
    gradient: 'from-fuchsia-500 to-violet-600',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'HTML/CSS', value: 'html' },
];

function getScreenshotUrl(siteUrl) {
  const clean = siteUrl.replace(/\/+$/, '');
  return `https://image.thum.io/get/width/600/crop/400/noanimate/${clean}`;
}

function ProjectImage({ project }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`h-56 relative overflow-hidden bg-linear-to-br ${project.gradient}`}>
      {/* Gradient fallback always visible behind */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Browser frame mockup */}
      <div className="absolute inset-3 rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col">
        {/* Browser top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200 shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 h-4 bg-white rounded-md flex items-center px-2 text-[9px] text-gray-400 font-medium truncate border border-gray-200">
            <svg className="w-2.5 h-2.5 mr-1 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {project.url.replace('https://', '').replace('http://', '')}
          </div>
        </div>

        {/* Screenshot area */}
        <div className="flex-1 relative bg-gray-50 overflow-hidden">
          {!error && (
            <img
              src={getScreenshotUrl(project.url)}
              alt={`${project.name} website screenshot`}
              className={`w-full h-full object-cover object-top transition-all duration-700 ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              loading="lazy"
            />
          )}

          {/* Loading skeleton (shows while image loads) */}
          {!loaded && !error && (
            <div className="absolute inset-0 p-3 space-y-2 animate-pulse">
              <div className="h-4 bg-gray-200 rounded-full w-2/3" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
              <div className="h-3 bg-gray-100 rounded-full w-4/5" />
              <div className="h-16 bg-gray-100 rounded-lg mt-2" />
              <div className="flex gap-2">
                <div className="h-8 bg-gray-100 rounded-lg flex-1" />
                <div className="h-8 bg-gray-100 rounded-lg flex-1" />
              </div>
            </div>
          )}

          {/* Error fallback */}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
              </svg>
              <span className="text-xs font-medium">{project.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center z-10">
        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            My Recent <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            I put your ideas and thus your wishes in the form of a unique web project that
            inspires you and your customers.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 transition-shadow duration-500"
              >
                {/* Screenshot in browser frame */}
                <ProjectImage project={project} />

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary-bg text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
