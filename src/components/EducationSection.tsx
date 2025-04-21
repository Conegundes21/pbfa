import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  image: string;
  description: string;
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  image,
  description,
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
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
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

const EducationSection = () => {
  const books = [
    {
      title: "O Beija Flor e a Floresta - Volume 1",
      image:
        "https://images.unsplash.com/photo-1533417457911-4ec1e50bba0f?w=800&q=80",
      description:
        "Uma aventura encantadora que ensina às crianças sobre a importância das árvores e da preservação florestal.",
    },
    {
      title: "O Beija Flor e a Floresta - Volume 2",
      image:
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&q=80",
      description:
        "Nesta continuação, as crianças aprendem sobre a importância da água e como as nascentes são vitais para o ecossistema.",
    },
  ];

  const materials = [
    {
      title: "Guia de Identificação de Espécies Nativas",
      icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
      description:
        "Material completo para identificação de espécies nativas brasileiras, com ilustrações detalhadas e informações técnicas.",
    },
    {
      title: "Manual de Recuperação de Nascentes",
      icon: <Download className="h-6 w-6 text-blue-500" />,
      description:
        "Guia prático com técnicas e metodologias para recuperação e preservação de nascentes e cursos d'água.",
    },
  ];

  return (
    <section id="educacao" className="py-24 bg-[#0c0e12]">
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
              Educação Ambiental
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Conhecimento que Transforma
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Acreditamos que a conscientização começa na infância. Conheça
              nossos livros infantis e materiais educativos que ensinam sobre a
              importância da preservação ambiental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                image={book.image}
                description={book.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#12141a] rounded-xl border border-[#1e2028] p-8 md:p-10"
          >
            <h4 className="text-2xl font-bold mb-6">
              Materiais Técnicos e Educativos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1a1c24] rounded-lg flex items-center justify-center">
                    {material.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">
                      {material.title}
                    </h5>
                    <p className="text-gray-400 text-sm mb-3">
                      {material.description}
                    </p>
                    <div className="flex items-center text-emerald-500 font-medium text-sm hover:text-emerald-400 transition-colors duration-300">
                      <span>Download Gratuito</span>
                      <motion.span
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
              Ver Todos os Materiais Educativos
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

export default EducationSection;
