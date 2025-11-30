import { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function HerVoice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    const section = document.getElementById('her-voice');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="her-voice" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 border border-red-500/30 rounded-full animate-pulse" />
        <div className="absolute w-80 h-80 border border-red-500/20 rounded-full animate-pulse delay-300" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-8 text-center">
            Your Voice
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Oooh!... This topic is a bit controversial
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Do you know that you dont have a voice, but a finely tuned musical intrument that is just too smooth and comforting.
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Your voice is something that i would be ready to hear 24/7. (mostly waiting to hear it as the goodmorning during wakeup).
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Unta paatu paadi annupu nu pala vaati ketuten but nee inum anupala epo thaan anupa poraaa???
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-500 rounded-full opacity-40 blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Volume2 className="text-red-400 w-20 h-20 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-red-400 rounded-full"
                style={{
                  height: `${20 + i * 8}px`,
                  animation: `sound-wave 1s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
