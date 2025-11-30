import { useEffect, useState } from 'react';

export default function HerSmile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    const section = document.getElementById('her-smile');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="her-smile" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-8 text-center">
            Your Smile
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/Images/3.jpeg"
                alt="Her Smile"
                className="w-full h-96 object-cover object-[0_20%] rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-shadow duration-500"
              />



            </div>

            <div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Lets say your smile is a drug for me, a very addicting one to be exact...   
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  You got a smile that could literally turn any sorrow into complete happiness for me. lets it be a worst day for me or a me just in a very low mood, just seeing your smile is all it takes for me return back normal.
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  I wish to see this smile for the rest of my life or our life. 
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  So this is your motivation to have that smile always whereever you go, spread good vibes everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
