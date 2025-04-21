import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="relative w-24 h-24">
        {/* Hummingbird Body */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            d="M60,40 C70,38 75,45 75,50 C75,55 70,62 60,60 C55,59 50,55 48,50 C46,45 50,41 55,40 C57,39.5 59,39.5 60,40Z"
            fill="#2F855A"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M48,50 C46,52 42,53 38,52 C34,51 30,48 32,44 C34,40 38,38 42,39 C46,40 48,45 48,50Z"
            fill="#276749"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          {/* Beak */}
          <motion.path
            d="M75,50 L90,48 L75,52Z"
            fill="#D69E2E"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          {/* Wing */}
          <motion.path
            d="M48,50 C45,60 35,65 25,60 C15,55 10,45 15,40 C20,35 30,38 40,42 C45,44 47,47 48,50Z"
            fill="#38A169"
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Loading Text */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-green-800 font-medium text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Carregando...
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
