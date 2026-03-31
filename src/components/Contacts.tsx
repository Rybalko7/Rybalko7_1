'use client';

import { motion } from 'framer-motion';
import { contacts, socialButtons } from '@/lib/data';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 field-pattern opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Контакты</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Готовы обсудить проект? Свяжитесь со мной любым удобным способом
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target={contact.name === "Почта" ? undefined : "_blank"}
              rel={contact.name === "Почта" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="card p-8 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {contact.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {contact.name === "Почта" ? "rybalko7676@gmail.com" : "rybalko07"}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 md:p-12">
            <div className="text-6xl mb-6 animate-float">⚽</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              PULSE STREAM
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Ловлю моменты, которые хочется переживать снова и снова
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {socialButtons.map((button) => (
                <a
                  key={button.name}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={button.name === "Telegram канал" ? "btn-primary" : "btn-outline"}
                >
                  <span className="mr-2">{button.icon}</span>
                  {button.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>© 2026 Александр Рыбалко | PULSE STREAM</p>
          <p className="mt-2">Фотограф & Видеооператор</p>
        </motion.div>
      </div>
    </section>
  );
}
