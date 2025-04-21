import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-dark-300 pt-16 pb-8 border-t border-dark-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                className="text-nature-green"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60,40 C70,38 75,45 75,50 C75,55 70,62 60,60 C55,59 50,55 48,50 C46,45 50,41 55,40 C57,39.5 59,39.5 60,40Z"
                  fill="currentColor"
                />
                <path
                  d="M48,50 C46,52 42,53 38,52 C34,51 30,48 32,44 C34,40 38,38 42,39 C46,40 48,45 48,50Z"
                  fill="#10b981"
                />
                <path d="M75,50 L90,48 L75,52Z" fill="#fbbf24" />
                <path
                  d="M48,50 C45,60 35,65 25,60 C15,55 10,45 15,40 C20,35 30,38 40,42 C45,44 47,47 48,50Z"
                  fill="#34d399"
                />
              </svg>
              <div>
                <span className="text-xl font-bold text-white">Projeto</span>
                <span className="text-xl font-bold text-nature-green">
                  BeijaFlor
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transformando desafios ambientais em oportunidades de regeneração
              e sustentabilidade para um futuro mais verde e equilibrado.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center text-gray-400 hover:bg-nature-green hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center text-gray-400 hover:bg-nature-green hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center text-gray-400 hover:bg-nature-green hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center text-gray-400 hover:bg-nature-green hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Consultoria Florestal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Recuperação de Nascentes
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Restauração de Áreas
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Projetos Hídricos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-nature-green transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                  Programas ESG
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nature-green mt-0.5 mr-3" />
                <span className="text-gray-400">
                  Av. das Araucárias, 4.500
                  <br />
                  Águas Claras, Brasília - DF
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-nature-green mr-3" />
                <span className="text-gray-400">+55 (61) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-nature-green mr-3" />
                <span className="text-gray-400">
                  contato@projetobeijaflor.com.br
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-dark-400 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Projeto Beija Flor. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-nature-green text-sm transition-colors duration-300"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-nature-green text-sm transition-colors duration-300"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
