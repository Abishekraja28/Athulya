import { useEffect, useState } from 'react';
import { Download, Gift, Heart } from 'lucide-react';

export default function GiftPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    const section = document.getElementById('gift-page');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'gift.apk';
    link.click();
  };

  return (
    <section id="gift-page" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-500 rounded-full blur-lg opacity-75 animate-pulse" />
              <Gift className="relative text-white w-24 h-24 p-6 bg-gradient-to-r from-red-600 to-rose-500 rounded-full shadow-2xl" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300 mb-6">
            Your Fourth Gift
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12" />

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              The first gift was the message, Just a few words for your endless.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              The second gift is the 7 quotes for 7 days starting with 7 letters of your name.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              The third gift is this website, a prespective on what i think about you in my mind.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              This app is my fourth gift to you — something that will be there for you, whenever you need it.
            </p>

            <p className="text-lg md:text-xl text-rose-300 font-semibold leading-relaxed mt-8">
              A small piece of my heart, in your pocket.
            </p>
          </div>

          <div className="mt-16">
            <a
              href="https://github.com/Abishekraja28/Athulya/releases/download/main/Senorita.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <Download size={24} />
              <span>Download APK</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-rose-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            </a>

          </div>

          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className="text-red-500 animate-pulse"
                size={24}
                fill="currentColor"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>

          <p className="mt-12 text-gray-400 text-sm">
            I don't know whether you like all these are not, if you dont like it. I am sorry, your highness.
          </p>
        </div>
      </div>
    </section>
  );
}
