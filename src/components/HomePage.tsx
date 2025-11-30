import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-red-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-rose-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12 flex justify-center">
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Red Tulips"
              className="w-full max-w-md h-96 object-cover rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-shadow duration-500"
            />
          </div>

          {/* FIXED HEADING */}
          <h1 className="text-5xl md:text-7xl font-black leading-relaxed bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-6 tracking-tight pb-4">
            <span className="block">Happy Birthday,</span>
            <span className="block">My Dear Senorita</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-8" />

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Don't be surprised sweetie, its just a gift for the thangam from a thagara dappa
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I wanna say a lot of things but atha pathi namba aprm pesalam, iniki let me tell a kutty story about the 4 main aspects that i absolutely love about you
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              This is a small offering from my side for the many greater things that are yet to come to you.
            </p>

            <div className="flex justify-center mt-8">
              <Heart className="text-red-500 animate-pulse" size={32} fill="currentColor" />
            </div>
          </div>

          <div className="mt-16 animate-bounce-slow">
            <p className="text-red-400 text-sm font-semibold">Scroll to continue</p>
            <div className="mt-3 flex justify-center">
              <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-red-500 rounded-full animate-scroll-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
