import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Play, Clock, Eye, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: 'installatie' | 'onderhoud' | 'product' | 'tips';
  viewCount?: string;
  featured?: boolean;
}

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const videos: Video[] = [
    {
      id: '1',
      title: 'Airco Installatie Stap voor Stap',
      description: 'Bekijk hoe onze monteurs professioneel een airco installeren van A tot Z',
      thumbnailUrl: '/images/videos/installatie-thumbnail.webp',
      videoUrl: 'https://example.com/installatie-video.mp4',
      duration: 'PT8M30S',
      category: 'installatie',
      viewCount: '12.5K',
      featured: true
    },
    {
      id: '2', 
      title: 'Daikin Emura: Stijlvol en Efficient',
      description: 'Ontdek de unieke eigenschappen van de populaire Daikin Emura serie',
      thumbnailUrl: '/images/videos/daikin-emura-thumbnail.webp',
      videoUrl: 'https://example.com/daikin-emura.mp4',
      duration: 'PT5M15S',
      category: 'product',
      viewCount: '8.2K'
    },
    {
      id: '3',
      title: 'Airco Filters Reinigen - DIY Guide',
      description: 'Leer hoe u zelf uw airco filters kunt reinigen voor optimale prestaties',
      thumbnailUrl: '/images/videos/filter-onderhoud-thumbnail.webp',
      videoUrl: 'https://example.com/filter-cleaning.mp4',
      duration: 'PT3M45S',
      category: 'onderhoud',
      viewCount: '15.1K'
    },
    {
      id: '4',
      title: 'Verwarmen met Airco: Energiebesparing Tips',
      description: 'Maximaliseer uw energiebesparing met deze slimme verwarmingstips',
      thumbnailUrl: '/images/videos/verwarming-tips-thumbnail.webp',
      videoUrl: 'https://example.com/heating-tips.mp4',
      duration: 'PT6M20S',
      category: 'tips',
      viewCount: '9.7K'
    }
  ];

  const categories = [
    { key: 'all', label: 'Alle Video\'s', count: videos.length },
    { key: 'installatie', label: 'Installatie', count: videos.filter(v => v.category === 'installatie').length },
    { key: 'product', label: 'Producten', count: videos.filter(v => v.category === 'product').length },
    { key: 'onderhoud', label: 'Onderhoud', count: videos.filter(v => v.category === 'onderhoud').length },
    { key: 'tips', label: 'Tips', count: videos.filter(v => v.category === 'tips').length }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const featuredVideo = videos.find(video => video.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Video Kennisbank
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leer alles over airconditioning met onze uitgebreide videogidsen. 
            Van installatie tot onderhoud - onze experts leggen het stap voor stap uit.
          </p>
        </m.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Video */}
        {featuredVideo && activeCategory === 'all' && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900 mb-4">
                    ⭐ Uitgelicht
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{featuredVideo.title}</h3>
                  <p className="text-blue-100 mb-6">{featuredVideo.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-blue-200">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {featuredVideo.duration.replace('PT', '').replace('M', ':').replace('S', '')} min
                      </span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-sm">{featuredVideo.viewCount} weergaven</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(featuredVideo)}
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Video Bekijken
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                    <img
                      src={featuredVideo.thumbnailUrl}
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVideo(featuredVideo)}
                        className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                      >
                        <Play className="h-8 w-8 text-blue-600 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVideos.map((video, index) => (
            <m.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
                  >
                    <Play className="h-6 w-6 text-blue-600 ml-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                  {video.duration.replace('PT', '').replace('M', ':').replace('S', '')}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{video.viewCount}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Bekijk video
                  </button>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* More Videos CTA */}
        <div className="text-center">
          <Link
            to="/video-kennisbank"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Bekijk alle video's
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl max-h-full overflow-y-auto">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70"
            >
              ×
            </button>
            <VideoPlayer
              videoUrl={selectedVideo.videoUrl}
              title={selectedVideo.title}
              description={selectedVideo.description}
              thumbnailUrl={selectedVideo.thumbnailUrl}
              duration={selectedVideo.duration}
            />
          </div>
        </div>
      )}
    </section>
  );
}