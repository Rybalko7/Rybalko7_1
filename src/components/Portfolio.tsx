'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { photos } from '@/lib/data';

const categories = [
  { id: 'all', name: 'Все', icon: '📷' },
  { id: 'match', name: 'Матчи', icon: '⚽' },
  { id: 'process', name: 'Процесс', icon: '🎬' },
  { id: 'emotion', name: 'Эмоции', icon: '🔥' },
  { id: 'event', name: 'События', icon: '🏆' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Портфолио</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Коллекция лучших работ с футбольных матчей, турниров и спортивных событий
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-secondary'
                  : 'bg-accent-light text-gray-300 hover:text-primary'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer card"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{photo.caption}</p>
                    <p className="text-gray-400 text-xs mt-1">{photo.alt}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {categories.find(c => c.id === photo.category)?.icon}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={photos.find(p => p.id === selectedPhoto)?.src || ''}
                    alt={photos.find(p => p.id === selectedPhoto)?.alt || ''}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="mt-4 text-center">
                  <p className="text-white font-medium text-lg">
                    {photos.find(p => p.id === selectedPhoto)?.caption}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {photos.find(p => p.id === selectedPhoto)?.alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
