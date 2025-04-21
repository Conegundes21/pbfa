import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  backgroundUrl?: string;
  videoUrl?: string;
  headline?: string;
  subheadline?: string;
}

const Hero = ({
  backgroundUrl = "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80", // Imagem mais escura e dramática
  videoUrl,
  headline = "Regeneração ambiental para um futuro sustentável",
  subheadline = "Especialistas em recuperação de nascentes, matas degradadas e soluções florestais de alto impacto",
}: HeroProps) => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-dark-100">
      {/* Background Video or Image */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <motion.div
          initial={{ scale: 1.1, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100/90 via-dark-200/70 to-dark-300/90" />

      {/* Animated Particles/Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08)_0,transparent_25%)] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="h-1 w-32 bg-gradient-to-r from-forest-600 to-forest-500 mx-auto mb-8 rounded-full shadow-glow-sm"></div>
        </motion.div>

        <motion.h1
          className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl font-display tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">{headline}</span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-2xl text-lg text-light-500 md:text-xl lg:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-forest-600 text-white hover:bg-forest-500 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-glow-md transition-all duration-300"
            >
              Conheça o Projeto
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Fale com um Especialista
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-12 w-12 text-forest-500 drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
