'use client';

import { useState, useRef, useEffect } from 'react';
import podcasts from '@/data/podcasts.json';
import Image from 'next/image';

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
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const [volume, setVolume] = useState(0.75);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleTracklist = (id: string) => {
    setExpandedPodcast(expandedPodcast === id ? null : id);
  };

  const handlePlay = (podcast: Podcast) => {
    if (currentPodcast?.id === podcast.id) {
      togglePlayPause();
    } else {
      setCurrentPodcast(podcast);
      setShowPlayer(true);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / width));
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  useEffect(() => {
    if (audioRef.current && currentPodcast?.audioUrl) {
      audioRef.current.src = currentPodcast.audioUrl;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentPodcast]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  return (
    <>
      <div className="noise"></div>
      
      <main className="min-h-screen px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
              P<span className="logo__secondary-color">o</span>dcast
            </h1>
            <p className="text-xs uppercase tracking-[0.2rem] md:tracking-[0.4rem] text-zinc-500">
              Sonic Transmissions
            </p>
          </div>

          {/* Podcast Grid */}
          <div className="space-y-32">
            {(podcasts as Podcast[]).length === 0 ? (
              <div className="text-center py-32">
                <div className="glass rounded-sm p-12 max-w-2xl mx-auto border border-white/5">
                  <p className="text-xs uppercase tracking-[0.5rem] text-zinc-600 mb-4">
                    No Mixes Available
                  </p>
                  <p className="text-sm text-zinc-700 tracking-widest">
                    The broadcast archive is currently empty. New mixes will appear here.
                  </p>
                </div>
              </div>
            ) : (
              (podcasts as Podcast[]).map((podcast) => (
                <div key={podcast.id} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Cover Art */}
                    <div className="relative group">
                      <div className="aspect-square glass rounded-sm overflow-hidden">
                        <Image
                          src={podcast.coverArt}
                          alt={podcast.title}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition duration-1000"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <h2 className="text-2xl md:text-3xl uppercase tracking-widest mb-2">
                          {podcast.title}
                        </h2>
                        <p className="text-sm text-zinc-500 tracking-[0.3rem] uppercase">
                          {podcast.date} • {podcast.duration}
                        </p>
                      </div>
                    </div>

                    {/* Info & Tracklist */}
                    <div className="space-y-6 md:pt-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xs uppercase tracking-[0.3rem] md:tracking-[1rem] text-zinc-500">
                          Mix Info
                        </h3>
                      </div>

                      {/* Play Button */}
                      <div
                        onClick={() => handlePlay(podcast)}
                        className={`border-b pb-4 flex justify-between items-end cursor-pointer group transition ${
                          currentPodcast?.id === podcast.id && isPlaying
                            ? 'border-green-500'
                            : 'border-white/10 hover:border-green-500'
                        }`}
                      >
                        <span className="text-lg uppercase tracking-widest">
                          {currentPodcast?.id === podcast.id && isPlaying ? '▶ Playing' : '▶ Play Mix'}
                        </span>
                        <span className="text-[10px] text-zinc-500 tracking-[0.3rem] uppercase group-hover:text-white">
                          {podcast.duration}
                        </span>
                      </div>

                      {/* Tracklist Toggle */}
                      <div
                        onClick={() => toggleTracklist(podcast.id)}
                        className="border-b border-white/10 pb-4 flex justify-between items-end cursor-pointer group hover:border-red-500 transition"
                      >
                        <span className="text-lg uppercase tracking-widest">
                          {expandedPodcast === podcast.id ? 'Hide Tracklist' : 'Show Tracklist'}
                        </span>
                        <span className="text-[10px] text-zinc-500 tracking-[0.3rem] uppercase group-hover:text-white">
                          {podcast.tracklist.length} Tracks
                        </span>
                      </div>

                      {/* Expanded Tracklist */}
                      {expandedPodcast === podcast.id && (
                        <div className="mt-8 space-y-3 pl-4 border-l border-zinc-800">
                          {podcast.tracklist.map((track, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-4 text-sm group hover:text-white transition-colors duration-300"
                            >
                              <span className="text-zinc-600 font-mono text-xs w-12 flex-shrink-0">
                                {track.timestamp}
                              </span>
                              <span className="text-zinc-400 group-hover:text-zinc-200 flex-grow">
                                {track.artist} — {track.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Master Audio Player */}
      <div
        id="master-player"
        className={`fixed bottom-0 left-0 w-full z-[100] glass border-t border-white/10 p-4 transition-transform duration-700 ${
          showPlayer ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Track Info & Progress */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] tracking-[0.3rem] uppercase text-white">
                {currentPodcast
                  ? `${currentPodcast.title}`
                  : 'Select a mix'}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Progress Bar */}
            <div
              onClick={handleProgressClick}
              className="relative w-full h-[2px] bg-white/10 cursor-pointer group"
            >
              <div
                className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-100"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
              <div className="absolute top-0 left-0 h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-3">
            <div 
              onClick={handleVolumeClick}
              className="w-20 h-[1px] bg-white/10 relative cursor-pointer group"
            >
              <div 
                className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-100"
                style={{ width: `${volume * 100}%` }}
              ></div>
              <div className="absolute top-0 left-0 h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
}
