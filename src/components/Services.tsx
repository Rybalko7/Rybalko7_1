'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/lib/data';

export default function Services() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section id="services" className="py-20 bg-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Услуги</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Полный цикл производства спортивного контента: от съемки до финального монтажа
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card p-8 group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 md:p-12 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Нужно что-то особенное?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Обсудим ваш проект и подберем оптимальное решение для ваших задач
            </p>
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="btn-primary cursor-pointer"
            >
              {showPhone ? '8 928 448 26 47' : 'Связаться со мной'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
