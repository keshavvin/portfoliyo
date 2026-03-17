import { motion } from 'framer-motion';

const experience = [
  { year: '2020 — 2025', title: 'Full-Stack Developer', place: 'Vinnpro Web Solutions Pvt. Ltd.' },
  { year: '2019 — 2020', title: 'Web Developer', place: 'Tangence Solutions (I) Pvt. Ltd.' },
];

const education = [
  { year: '2014 — 2018', title: 'B.Tech (ME)', place: 'AKTU University' },
  { year: '2012 — 2014', title: 'Senior Secondary (12th)', place: 'CBSE Board' },
  { year: '2010 — 2012', title: 'Secondary (10th)', place: 'CBSE Board' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function TimelineCard({ item, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <span className="inline-block px-3 py-1 text-xs font-bold bg-linear-to-r from-primary to-purple-400 text-white rounded-full mb-3">
        {item.year}
      </span>
      <h4 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
        {item.title}
      </h4>
      <p className="text-sm text-gray-500">{item.place}</p>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-bg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                My <span className="gradient-text">Experience</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {experience.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-bg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                My <span className="gradient-text">Education</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
