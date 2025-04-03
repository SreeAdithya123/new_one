import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Mail, Star } from 'lucide-react';
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

// Sections components
const Landing = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ff758c 0%, #ff7eb3 100%)'
      }}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=1600')] bg-cover bg-center opacity-20" />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center z-10 p-8"
      >
        <h1 className="text-5xl font-bold text-white mb-8">A Path of Love</h1>
        <p className="text-xl text-white mb-12 max-w-2xl">
          My love, today is your special day. Walk with me, and let me show you how much you mean to me.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all"
        >
          Begin Our Journey
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const FirstMeeting = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-pink-400 to-purple-500"
    >
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" 
              alt="First Meeting" 
              className="rounded-lg shadow-2xl mb-8 w-full h-[300px] object-cover"
            />
            
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">The First Time We Met</h2>
            <p className="text-xl text-white/90 mb-8">
              This was the moment my heart found its home.
            </p>
            <p className="text-lg text-white/80">
              Every detail of that day is forever etched in my memory - your smile, your laugh, the way time seemed to stand still when our eyes met.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const LittleThings = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const items = [
    "The way you laugh when you're truly happy",
    "The way you hold my hand when you're sleepy",
    "The way you always know how to make my day brighter",
    "The way you love me, unconditionally"
  ];

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600 p-8 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1600" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">The Little Things I Love About You</h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <Heart className="text-pink-300 w-6 h-6 flex-shrink-0" />
              <p className="text-white text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SecretLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-600 to-blue-700 p-8 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
        >
          <h2 className="text-4xl font-bold text-white mb-8">A Secret Just for You</h2>
          {!isOpen ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-white/20 backdrop-blur-sm p-8 rounded-xl"
            >
              <Mail className="w-16 h-16 text-white mx-auto mb-4" />
              <p className="text-white">Click to open your letter</p>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white"
            >
              <p className="text-lg leading-relaxed">
              My Love, My Forever, My Everything,

From the moment I first saw you in college, I lost myself in the beautiful ocean of your eyes. That day, I didn’t just see you—I felt you. It was like the universe paused for a moment just to let me drown in your gaze. I knew then, even before my heart could understand, that you were the one who would change my life forever.

I love everything about you. Your chubby face that I can’t stop holding, your adorable stupidity that makes every moment with you feel so light and full of joy, your childish ways that remind me that love is meant to be playful, pure, and innocent. And that smile of yours—God, your smile. It’s the light that brightens up even my darkest days. It’s the reason I wake up every morning with a heart full of love.

You are the most beautiful mess I have ever fallen in love with. You make me laugh when I need to cry, you make me feel safe when the world feels too big, and you remind me that life is not about being perfect—it’s about being real, being silly, and being deeply, madly in love.

Your innocence, your kindness, your warmth—it’s everything I never knew I needed. With you, I don’t have to be anything other than just me. You accept me, love me, and make me feel like the luckiest person alive.

If I could, I would pause time just to stay in this moment with you forever. But since I can’t, I promise to spend every second of my life loving you in every way you deserve.

Happy birthday, my love. Today is special, not just because it’s the day you were born, but because it’s the day the world was blessed with you.

Forever yours,
The one who loves you more than words can ever say. ❤️
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const HiddenGift = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-700 to-purple-900 p-8 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1600" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        className="text-center relative z-10"
      >
        <Gift className="w-24 h-24 text-white mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-white mb-4">A Hidden Gift</h2>
        <p className="text-xl text-white/90 max-w-xl mx-auto">
          This isn't just a virtual surprise... 
          Your real gift is waiting for you. 
          just right here....
        </p>
      </motion.div>
    </motion.div>
  );
};

const FinalStep = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-900 to-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=1600" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0, 1, 0] } : {}}
            transition={{
              delay: i * 0.1,
              duration: 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center z-10 p-8"
      >
        <Star className="w-16 h-16 text-white mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-white mb-4">Forever & Always</h2>
        <p className="text-xl text-white/90 max-w-xl mx-auto">
          No matter where life takes us, I will always walk this path with you. 
          Happy Birthday, my love.
        </p>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [started, setStarted] = useState(false);
  const [play, { stop }] = useSound('/path/to/romantic-music.mp3', { 
    volume: 0.5,
    loop: true 
  });

  useEffect(() => {
    if (started) {
      play();
      return () => stop();
    }
  }, [started, play, stop]);

  return (
    <div className="relative">
      <AnimatePresence>
        {!started ? (
          <Landing onContinue={() => setStarted(true)} />
        ) : (
          <>
            <FirstMeeting />
            <LittleThings />
            <SecretLetter />
            <HiddenGift />
            <FinalStep />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;