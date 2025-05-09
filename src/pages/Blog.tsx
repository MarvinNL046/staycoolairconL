import React from 'react';
import { motion } from 'framer-motion';
import BlogList from '../components/BlogList';
import SchemaMarkup from '../components/SchemaMarkup';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Blog() {
  return (
    <>
      <MetaTags
        title="Blog | StayCool Airco Limburg"
        description="Tips, advies en nieuws over airconditioning voor uw huis of bedrijf. Lees onze blog voor handige artikelen over airco onderhoud, installatie en meer."
        keywords="airco blog, airconditioning tips, airco onderhoud, airco installatie, klimaatbeheersing blog, staycool airco blog"
        canonicalUrl="https://staycoolairco.nl/blog"
        type="website"
      />
      
      <SchemaMarkup
        type="CollectionPage"
        data={{
          name: "StayCool Airco Blog",
          description: "Tips, advies en nieuws over airconditioning voor uw huis of bedrijf",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                url: "https://staycoolairco.nl/blog/airco-onderhoud-limburg-belangrijk"
              },
              {
                "@type": "ListItem",
                position: 2,
                url: "https://staycoolairco.nl/blog/airco-installateur-limburg-kiezen"
              }
            ]
          }
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog' }
            ]}
          />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              StayCool Airco Blog
            </h1>
            <p className="text-xl text-gray-600">
              Tips, advies en nieuws over airconditioning voor uw huis of bedrijf
            </p>
          </div>
          
          <BlogList />
        </div>
      </motion.div>
    </>
  );
}
