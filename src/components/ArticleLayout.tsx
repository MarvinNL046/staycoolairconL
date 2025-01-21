import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import MetaTags from './MetaTags';

interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
  tags: string[];
}

export default function ArticleLayout({ 
  children,
  title,
  description,
  publishDate,
  modifiedDate,
  author,
  tags 
}: ArticleLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <MetaTags
        title={title}
        description={description}
      />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-6">{description}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <time dateTime={publishDate}>
            Gepubliceerd: {new Date(publishDate).toLocaleDateString('nl-NL')}
          </time>
          {modifiedDate !== publishDate && (
            <time dateTime={modifiedDate}>
              Bijgewerkt: {new Date(modifiedDate).toLocaleDateString('nl-NL')}
            </time>
          )}
          <span>Door: {author}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8">
        {children}
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Hulp nodig?</h2>
            <p className="text-gray-600">
              Onze experts staan voor u klaar om te helpen met uw airconditioning.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact opnemen
          </a>
        </div>
      </footer>
    </motion.article>
  );
}
