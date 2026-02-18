'use client';

export default function ContactPage() {
  return (
    <>
      <div className="noise"></div>
      
      <section className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
              C<span className="logo__secondary-color">o</span>ntact
            </h1>
            
            <p className="text-xs uppercase tracking-[0.4rem] text-zinc-500">
              Transmit Your Signal
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="border border-zinc-800 p-8 hover:border-zinc-700 transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.25rem] text-zinc-500 mb-4">
                Email
              </p>
              <a 
                href="mailto:info@frozenairmusic.com"
                className="text-lg text-zinc-300 hover:text-white transition-colors duration-300"
              >
                info@frozenairmusic.com
              </a>
            </div>

            <div className="border border-zinc-800 p-8 hover:border-zinc-700 transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.25rem] text-zinc-500 mb-4">
                YouTube
              </p>
              <a 
                href="https://www.youtube.com/@frozenairmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-zinc-300 hover:text-white transition-colors duration-300"
              >
                @frozenairmusic
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
