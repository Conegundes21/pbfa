import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("sobre");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1500&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/80 via-[#0c0e12]/70 to-[#0c0e12]" />
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1)_0,transparent_25%)] opacity-70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Regeneração Ambiental & Consultoria Florestal
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Transformando o Futuro com </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 animate-text-gradient">
              Soluções Sustentáveis
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Especialistas em recuperação de nascentes, restauração de áreas
            degradadas e soluções florestais de alto impacto para um planeta
            mais verde e sustentável.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto">
              Nossos Serviços
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/5 px-8 py-6 rounded-md text-lg w-full sm:w-auto"
            >
              Agendar Consultoria
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-400 text-sm">
              Confiado por empresas líderes em sustentabilidade:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Petrobras&backgroundColor=0000&fontFamily=Verdana&fontSize=36&fontWeight=500&textColor=10b981"
                alt="Logo Cliente"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Vale&backgroundColor=0000&fontFamily=Verdana&fontSize=36&fontWeight=500&textColor=10b981"
                alt="Logo Cliente"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Natura&backgroundColor=0000&fontFamily=Verdana&fontSize=36&fontWeight=500&textColor=10b981"
                alt="Logo Cliente"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Suzano&backgroundColor=0000&fontFamily=Verdana&fontSize=36&fontWeight=500&textColor=10b981"
                alt="Logo Cliente"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
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
          <ChevronDown className="h-10 w-10 text-emerald-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
