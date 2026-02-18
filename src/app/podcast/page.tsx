'use client';

import { useState } from 'react';
import podcasts from '@/data/podcasts.json';

interface Track {
  timestamp: string;
  artist: string;
  title: string;
}

interface Podcast {
  id: string;
  title: string;
  coverArt: string;
  audioUrl: string;
  date: string;
  duration: string;
  tracklist: Track[];
}

export default function PodcastPage() {
  const [expandedPodcast, setExpandedPodcast] = useState<string | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const toggleTracklist = (id: string) => {
    setExpandedPodcast(expandedPodcast === id ? null : id);
  };

  const handlePlay = (audioUrl: string, id: string) => {
    // This would integrate with an audio player
    setCurrentlyPlaying(id);
    window.open(audioUrl, '_blank');
  };

  return (
    <>
      <div className="noise"></div>
      
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
              P<span className="logo__secondary-color">o</span>dcast
            </h1>
            
            <p className="text-xs uppercase tracking-[0.4rem] text-zinc-500">
              Sonic Transmissions
            </p>
          </div>

          <div className="space-y-6">
            {podcasts.map((podcast: Podcast) => (
              <div 
                key={podcast.id}
                className="border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  {/* Cover Art */}
                  <div className="flex-shrink-0">
                    <div className="w-full md:w-48 h-48 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <span className="text-xs text-zinc-600 uppercase tracking-widest">
                        Cover Art
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <h2 className="text-xl md:text-2xl text-zinc-200 mb-3">
                      {podcast.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-4">
                      <span className="uppercase tracking-wider">{podcast.date}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider">{podcast.duration}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider">
                        {podcast.tracklist.length} tracks
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handlePlay(podcast.audioUrl, podcast.id)}
                        className="px-6 py-2 text-xs uppercase tracking-[0.2rem] text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
                      >
                        {currentlyPlaying === podcast.id ? '▶ Playing' : '▶ Play'}
                      </button>
                      
                      <button
                        onClick={() => toggleTracklist(podcast.id)}
                        className="px-6 py-2 text-xs uppercase tracking-[0.2rem] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                      >
                        {expandedPodcast === podcast.id ? 'Hide Tracklist' : 'Show Tracklist'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tracklist */}
                {expandedPodcast === podcast.id && (
                  <div className="border-t border-zinc-800 p-6">
                    <h3 className="text-[10px] uppercase tracking-[0.25rem] text-zinc-500 mb-4">
                      Tracklist
                    </h3>
                    <div className="space-y-2">
                      {podcast.tracklist.map((track, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-4 py-2 text-sm hover:text-white transition-colors duration-300"
                        >
                          <span className="text-zinc-600 font-mono text-xs w-12 flex-shrink-0">
                            {track.timestamp}
                          </span>
                          <span className="text-zinc-400 flex-grow">
                            {track.artist} - {track.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
