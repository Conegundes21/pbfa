import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Seedling, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SeedCardProps {
  name: string;
  scientificName: string;
  image: string;
  category: string;
  price: string;
  available: boolean;
  index: number;
}

const SeedCard: React.FC<SeedCardProps> = ({
  name,
  scientificName,
  image,
  category,
  price,
  available,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="bg-[#12141a] rounded-xl overflow-hidden border border-[#1e2028] hover:border-emerald-500/20 transition-all duration-300 h-full">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md z-10 font-medium">
            {category}
          </div>
          {available ? (
            <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md z-10 font-medium flex items-center">
              <Check className="h-3 w-3 mr-1" /> Disponível
            </div>
          ) : (
            <div className="absolute top-3 right-3 bg-gray-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md z-10 font-medium">
              Sob Encomenda
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors duration-300">
            {name}
          </h4>
          <p className="text-gray-500 text-sm italic mb-4">{scientificName}</p>
          <div className="flex justify-between items-center">
            <span className="text-emerald-500 font-bold">{price}</span>
            <div className="flex items-center text-emerald-500 font-medium text-sm group-hover:text-emerald-400 transition-colors duration-300">
              <span>Encomendar</span>
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SeedsSection = () => {
  const seeds = [
    {
      name: "Ipê Amarelo",
      scientificName: "Handroanthus albus",
      image:
        "https://images.unsplash.com/photo-1615887509566-01083ae4e4a4?w=600&q=80",
      category: "Nativa",
      price: "R$ 180,00/kg",
      available: true,
    },
    {
      name: "Jatobá",
      scientificName: "Hymenaea courbaril",
      image:
        "https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=600&q=80",
      category: "Nativa",
      price: "R$ 220,00/kg",
      available: true,
    },
    {
      name: "Pau Brasil",
      scientificName: "Paubrasilia echinata",
      image:
        "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?w=600&q=80",
      category: "Nativa",
      price: "R$ 350,00/kg",
      available: false,
    },
    {
      name: "Jacarandá",
      scientificName: "Jacaranda mimosifolia",
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80",
      category: "Nativa",
      price: "R$ 240,00/kg",
      available: true,
    },
  ];

  return (
    <section id="sementes" className="py-24 bg-[#0a0c10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-sm uppercase tracking-wider text-emerald-500 font-semibold mb-2">
                Sementes Florestais
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Sementes de Alta Qualidade para Projetos de Reflorestamento
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fornecemos sementes florestais nativas e exóticas de alta
                qualidade, com certificação de origem e garantia de germinação
                para projetos de reflorestamento, recuperação de áreas
                degradadas e paisagismo sustentável.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">
                      Certificação de Origem
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Todas as nossas sementes possuem certificação de origem,
                      garantindo a procedência e qualidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">
                      Garantia de Germinação
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Oferecemos garantia de taxa de germinação para todas as
                      sementes comercializadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">
                      Consultoria Especializada
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Nossa equipe oferece consultoria para escolha das espécies
                      mais adequadas para cada projeto.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
                Solicitar Catálogo Completo
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seeds.map((seed, index) => (
                  <SeedCard
                    key={index}
                    name={seed.name}
                    scientificName={seed.scientificName}
                    image={seed.image}
                    category={seed.category}
                    price={seed.price}
                    available={seed.available}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedsSection;
