import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Shield } from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "200+", label: "Projetos Concluídos" },
    { value: "5000+", label: "Hectares Restaurados" },
    { value: "50+", label: "Espécies Preservadas" },
  ];

  const values = [
    {
      icon: <Leaf className="h-6 w-6 text-emerald-500" />,
      title: "Excelência Técnica",
      description:
        "Combinamos conhecimento científico avançado com anos de experiência prática em campo.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      title: "Inovação Sustentável",
      description:
        "Pioneiros em técnicas de silvicultura e recuperação ambiental com metodologias exclusivas.",
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-500" />,
      title: "Compromisso Ambiental",
      description:
        "Cada projeto é desenvolvido com foco na sustentabilidade e no impacto positivo duradouro.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0c0e12]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586974710160-55f48f417990?w=800&q=80"
                    alt="Equipe Projeto Beija Flor"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#12141a]/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-emerald-500">
                            {stat.value}
                          </div>
                          <div className="text-xs md:text-sm text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="space-y-6"
            >
              <div>
                <h2 className="text-sm uppercase tracking-wider text-emerald-500 font-semibold mb-2">
                  Sobre Nós
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Regenerando o Futuro com Expertise e Paixão
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"></div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                O Projeto Beija Flor nasceu da paixão por preservar e regenerar
                os ecossistemas brasileiros. Há mais de 15 anos, combinamos
                conhecimento técnico, inovação científica e compromisso
                ambiental para desenvolver soluções que transformam áreas
                degradadas em ambientes prósperos e sustentáveis.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Nossa equipe multidisciplinar de engenheiros florestais,
                biólogos e especialistas ambientais trabalha com metodologias
                exclusivas, garantindo resultados excepcionais em cada projeto
                que realizamos, desde a recuperação de nascentes até a
                implementação de programas completos de ESG para empresas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={index + 2}
                    className="bg-[#12141a] p-6 rounded-xl border border-[#1e2028] hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1c24] mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
