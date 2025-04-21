import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Carolina Silva",
    role: "Diretora de Sustentabilidade",
    company: "Natura Cosméticos",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&backgroundColor=b6e3f4",
    content:
      "A parceria com o Projeto Beija Flor transformou completamente nossa abordagem de sustentabilidade. A recuperação das nascentes em nossa área de atuação não só melhorou nossa imagem corporativa, mas também trouxe benefícios reais para as comunidades locais e para o meio ambiente.",
  },
  {
    id: "2",
    name: "Roberto Mendes",
    role: "Proprietário Rural",
    company: "Fazenda Boa Esperança",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto&backgroundColor=c0aede",
    content:
      "Depois de anos vendo minha propriedade sofrer com a erosão e a escassez de água, o trabalho de recuperação realizado pelo Projeto Beija Flor trouxe vida de volta à terra. As nascentes voltaram a fluir e a biodiversidade retornou. Um investimento que valeu cada centavo.",
  },
  {
    id: "3",
    name: "Fernanda Oliveira",
    role: "Secretária de Meio Ambiente",
    company: "Prefeitura de Águas Claras",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda&backgroundColor=ffdfbf",
    content:
      "A implementação do corredor ecológico em nossa cidade foi um marco na gestão ambiental municipal. A equipe do Projeto Beija Flor demonstrou excelência técnica e compromisso com resultados sustentáveis, envolvendo a comunidade em todas as etapas do processo.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-nature-green font-semibold mb-2">
              Depoimentos
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              O Que Nossos Clientes Dizem
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-nature-green to-nature-blue rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Conheça as experiências de quem já transformou seus desafios
              ambientais em oportunidades de regeneração com nossa ajuda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-dark-200 rounded-xl p-8 border border-dark-400 hover:border-nature-green/20 transition-all duration-300 h-full relative shadow-dark hover:shadow-glow-lg hover:shadow-nature-green/10">
                  <div className="absolute -top-5 -left-5">
                    <div className="bg-dark-300 rounded-full p-3 border border-dark-400 group-hover:border-nature-green/20 transition-all duration-300 group-hover:bg-nature-green/10">
                      <Quote className="h-6 w-6 text-nature-green" />
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 relative z-10 pt-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full border-2 border-dark-400 group-hover:border-nature-green transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-nature-green transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-dark-200 border border-dark-400">
              <p className="text-gray-300 text-sm">
                Junte-se a mais de{" "}
                <span className="text-nature-green font-bold">
                  200+ clientes satisfeitos
                </span>{" "}
                que transformaram seus desafios ambientais em oportunidades
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
