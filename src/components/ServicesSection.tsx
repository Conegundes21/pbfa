import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Mountain,
  Droplets,
  TreePine,
  Sprout,
  Users,
  Flower,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  color,
  index,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`h-full group relative ${featured ? "z-10" : ""}`}
    >
      <div
        className={`h-full bg-[#12141a] border border-[#1e2028] ${featured ? "border-emerald-500/30" : ""} 
        rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg relative`}
      >
        {featured && (
          <div className="absolute top-0 right-0">
            <div className="bg-emerald-500 text-[#0c0e12] text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Destaque
            </div>
          </div>
        )}
        <div className="p-6">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full ${color} mb-6`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-emerald-500 font-medium text-sm group-hover:text-emerald-400 transition-colors duration-300">
            <span>Saiba mais</span>
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
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Consultoria Florestal",
      description:
        "Assessoria técnica especializada para projetos florestais, com foco em sustentabilidade e maximização de resultados.",
      color: "bg-emerald-600",
    },
    {
      icon: <Mountain className="h-6 w-6 text-white" />,
      title: "Restauração de Áreas Degradadas",
      description:
        "Recuperação de ecossistemas danificados através de técnicas avançadas de regeneração e manejo sustentável.",
      color: "bg-emerald-700",
    },
    {
      icon: <Droplets className="h-6 w-6 text-white" />,
      title: "Recuperação de Nascentes",
      description:
        "Revitalização de fontes hídricas com metodologias inovadoras para garantir a qualidade e disponibilidade da água.",
      color: "bg-blue-600",
    },
    {
      icon: <TreePine className="h-6 w-6 text-white" />,
      title: "Silvicultura",
      description:
        "Cultivo e manejo de espécies nativas e exóticas com técnicas científicas avançadas para diversos fins.",
      color: "bg-emerald-800",
    },
    {
      icon: <Sprout className="h-6 w-6 text-white" />,
      title: "Projetos Hídricos",
      description:
        "Desenvolvimento de soluções integradas para gestão de recursos hídricos e preservação de bacias hidrográficas.",
      color: "bg-blue-700",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Programas ESG",
      description:
        "Implementação de estratégias ambientais, sociais e de governança para empresas comprometidas com a sustentabilidade.",
      color: "bg-emerald-600",
    },
    {
      icon: <Flower className="h-6 w-6 text-white" />,
      title: "Venda de Sementes sob Encomenda",
      description:
        "Fornecimento de sementes florestais nativas e exóticas de alta qualidade, com certificação de origem e garantia de germinação.",
      color: "bg-amber-600",
      featured: true,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0a0c10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-500 font-semibold mb-2">
              Nossos Serviços
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Soluções Completas em Regeneração Ambiental
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços ambientais,
              combinando excelência técnica e compromisso com a sustentabilidade
              para transformar desafios em oportunidades de regeneração.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                index={index}
                featured={service.featured}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
              Solicitar Orçamento
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
