import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  duration?: string;
  uploadDate?: string;
  transcript?: string;
  chapters?: Array<{
    startTime: string;
    title: string;
    description?: string;
  }>;
}

export default function VideoPlayer({
  videoUrl,
  title,
  description,
  thumbnailUrl,
  duration = "PT5M",
  uploadDate = new Date().toISOString(),
  transcript = "Volledige transcript beschikbaar op aanvraag. Neem contact op voor gedetailleerde tekstversie van deze video.",
  chapters = []
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeVideoId = getYouTubeVideoId(videoUrl);
  const isYouTube = !!youtubeVideoId;

  // Generate Video Schema
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": thumbnailUrl || (isYouTube ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg` : undefined),
    "uploadDate": uploadDate,
    "duration": duration,
    "contentUrl": videoUrl,
    "embedUrl": isYouTube ? `https://www.youtube.com/embed/${youtubeVideoId}` : videoUrl,
    "author": {
      "@type": "Organization",
      "name": "StayCool Airco",
      "url": "https://staycoolairco.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StayCool Airco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://staycoolairco.nl/images/logo.svg"
      }
    },
    ...(transcript && {
      "transcript": {
        "@type": "MediaObject",
        "contentUrl": `data:text/plain;charset=utf-8,${encodeURIComponent(transcript)}`
      }
    }),
    ...(chapters.length > 0 && {
      "hasPart": chapters.map((chapter, index) => ({
        "@type": "Clip",
        "name": chapter.title,
        "description": chapter.description,
        "startOffset": chapter.startTime,
        "url": `${videoUrl}#t=${chapter.startTime}`
      }))
    })
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      </Helmet>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Video Player */}
        <div className="relative">
          {isYouTube ? (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&enablejsapi=1&cc_load_policy=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto"
                poster={thumbnailUrl}
                preload="metadata"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={videoUrl} type="video/mp4" />
                <track
                  kind="captions"
                  src="/path/to/captions.vtt"
                  srcLang="nl"
                  label="Nederlandse ondertitels"
                />
                <p>
                  Uw browser ondersteunt geen video weergave.{' '}
                  <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Download de video
                  </a>
                </p>
              </video>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Video Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm text-gray-500">
              Duur: {duration.replace('PT', '').replace('M', ' minuten')}
            </span>
            {transcript && (
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showTranscript ? 'Verberg transcript' : 'Toon transcript'}
              </button>
            )}
          </div>

          {/* Chapters */}
          {chapters.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Video hoofdstukken</h4>
              <div className="space-y-2">
                {chapters.map((chapter, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {chapter.startTime}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{chapter.title}</p>
                      {chapter.description && (
                        <p className="text-xs text-gray-600">{chapter.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transcript */}
          {transcript && showTranscript && (
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Video transcript</h4>
              <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">{transcript}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}