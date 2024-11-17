import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';

interface KnowledgeBaseArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function KnowledgeBaseArticle({ title, description, imageUrl, slug }: KnowledgeBaseArticleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video">
        <LazyImage
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={`/kennisbank/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Lees meer
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}