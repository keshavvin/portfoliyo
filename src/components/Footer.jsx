import { motion } from 'framer-motion';
import Logo from './Logo';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 8920865508',
    sub: '+91 7291937426',
    href: 'tel:8920865508',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'jhakeshav306@gmail.com',
    href: 'mailto:jhakeshav306@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Barola Sec-49, Noida',
    sub: 'Uttar Pradesh, India',
  },
];

function Footer() {
  return (
    <>
      {/* Contact section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Let's work <span className="gradient-text">together!</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              I design and code beautifully simple things and I love what I do. Just simple like that!
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, i) => {
              const Tag = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <Tag
                    {...(item.href ? { href: item.href } : {})}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block text-center group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-bg flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                    <p className="text-gray-900 font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                    {item.sub && <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>}
                  </Tag>
                </motion.div>
              );
            })}
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.a
              href="mailto:jhakeshav306@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Logo size={32} />
          </motion.a>

          <div className="flex gap-6">
            {['Home', 'Services', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Keshav Jha. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
