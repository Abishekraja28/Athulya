import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function HerEyes() {
  const [visible, setVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    const section = document.getElementById('her-eyes');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);
  }, [visible]);

  return (
    <section id="her-eyes" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
      </div>

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.id * 0.3}s`,
          }}
        >
          <Sparkles className="text-red-400/50" size={20} />
        </div>
      ))}

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-black leading-relaxed bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-6 tracking-tight pb-4 text-center">
            Your Eyes
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Even pearls lose when comes to the shine that your eyes give, anybody can get lost just seeing your eyes for more than 3 seconds. 
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  When it comes to me looking at your eyes, you might have noticed it whenever we are in video call but only god knows how many times i would see your eyes through your photos and smile like an complete idiot
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Its not always about the physical structure that is defined intimacy for a person, the eyes are something that is too intimate to get lost into.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/Images/5.jpeg"
                alt="Her Eyes"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
