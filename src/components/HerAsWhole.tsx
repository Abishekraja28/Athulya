import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function HerAsWhole() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    const section = document.getElementById('her-whole');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const qualities = [
    'Princess',
    'My Sweetheart',
    'Healer',
    'My Aphrodite',
    'Angel',
    'My Witch',
  ];

  return (
    <section id="her-whole" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-8 text-center">
            You As A Whole
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12" />

          <div className="mb-12">
            <img
              src="/Images/1 .jpeg"
              alt="Celebration"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-shadow duration-500"
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              What?... Did you really think i would just have 4 main favourite aspects of you and end it, whatever i said above are the things i admire physically toward you.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              YOU (i.e) Ms Athulya, is everything i could ask for when it comes to love, care and fight. You have never let me down even though i might have been a complete idiot in many ways.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              Nan ipovum solluren una mathri ponnu sathiyama enaku enga thedunalum kedaika maata enna than namba epovumae pesitae ilanalum, there will come a time when both our chats will always in first in our chatboxes.  
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-red-950/60 transition-colors duration-300 hover:shadow-lg hover:shadow-red-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-gray-200 font-semibold text-sm md:text-base">{quality}</p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              Enna sagichikittu ivlo naal enkuuda irundhu ena pathukutathuku romba nanri, Nee epovum enga irundhalum, enna aanalum sandhosama irukanum athu mattum thaan enaku venum. nan unaku correct aanavana nu ena vida unaku than theriyum. 
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              Poidathaaaaaa iru, i got one more gift for you. Hope you will like it. 
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              Once again, Happiest birthday to the most lovable person I know.
            </p>
            

            <div className="flex justify-center mt-8">
              <Heart className="text-red-400 animate-pulse" size={40} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
