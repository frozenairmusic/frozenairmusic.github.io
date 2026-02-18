'use client';

export default function ContactPage() {
  return (
    <>
      <div className="noise"></div>
      
      <main className="min-h-screen px-4 md:px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
              C<span className="logo__secondary-color">o</span>ntact
            </h1>
            <p className="text-xs uppercase tracking-[0.2rem] md:tracking-[0.4rem] text-zinc-500">
              Transmit Your Signal
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-b border-white/10 pb-6 hover:border-zinc-500 transition-all duration-300 cursor-pointer group">
              <p className="text-[10px] uppercase tracking-[0.25rem] text-zinc-500 mb-3">
                Email
              </p>
              <a 
                href="mailto:info@frozenairmusic.com"
                className="text-xl md:text-2xl text-zinc-300 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                info@frozenairmusic.com
              </a>
            </div>

            <div className="border-b border-white/10 pb-6 hover:border-zinc-500 transition-all duration-300 cursor-pointer group">
              <p className="text-[10px] uppercase tracking-[0.25rem] text-zinc-500 mb-3">
                YouTube
              </p>
              <a 
                href="https://www.youtube.com/@frozenairmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-zinc-300 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                @frozenairmusic
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
