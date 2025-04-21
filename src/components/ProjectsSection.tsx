import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Recuperação de Nascente em Minas Gerais",
    description:
      "Restauração completa de nascente degradada por atividades agrícolas, com replantio de espécies nativas e recuperação do fluxo hídrico.",
    category: "nascentes",
    beforeImage:
      "https://images.unsplash.com/photo-1597245623626-3293df1a7caf?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    metrics: [
      { label: "Área Recuperada", value: "2.5 hectares" },
      { label: "Espécies Plantadas", value: "15+" },
      { label: "Aumento de Vazão", value: "300%" },
    ],
  },
  {
    id: "2",
    title: "Reflorestamento em Área de Pastagem",
    description:
      "Transformação de área de pastagem degradada em floresta produtiva com espécies nativas e exóticas de alto valor comercial.",
    category: "reflorestamento",
    beforeImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    metrics: [
      { label: "Área Reflorestada", value: "12 hectares" },
      { label: "Árvores Plantadas", value: "15.000+" },
      { label: "Captura de CO₂", value: "1.200 ton/ano" },
    ],
  },
  {
    id: "3",
    title: "Corredor Ecológico em Goiás",
    description:
      "Criação de corredor ecológico conectando fragmentos florestais, permitindo o fluxo de fauna e aumentando a biodiversidade local.",
    category: "biodiversidade",
    beforeImage:
      "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    metrics: [
      { label: "Extensão", value: "3.8 km" },
      { label: "Espécies Observadas", value: "120+" },
      { label: "Fragmentos Conectados", value: "4" },
    ],
  },
  {
    id: "4",
    title: "Recuperação de APP em Beira de Rio",
    description:
      "Restauração de Área de Preservação Permanente em margem de rio, controlando erosão e melhorando qualidade da água.",
    category: "hidricos",
    beforeImage:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    metrics: [
      { label: "Margem Recuperada", value: "1.2 km" },
      { label: "Redução de Erosão", value: "95%" },
      { label: "Melhoria na Qualidade da Água", value: "Significativa" },
    ],
  },
];

const categories = [
  { value: "todos", label: "Todos os Projetos" },
  { value: "nascentes", label: "Recuperação de Nascentes" },
  { value: "reflorestamento", label: "Reflorestamento" },
  { value: "biodiversidade", label: "Biodiversidade" },
  { value: "hidricos", label: "Recursos Hídricos" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? defaultProjects
      : defaultProjects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section id="projetos" className="py-24 bg-[#0c0e12]">
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
              Nossos Projetos
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transformações Reais e Impactantes
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos de regeneração ambiental e veja
              a transformação que promovemos em diferentes ecossistemas.
            </p>
          </motion.div>

          <Tabs
            defaultValue="todos"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TabsList className="flex flex-wrap justify-center gap-3 mb-12 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="px-5 py-2.5 border border-[#1e2028] rounded-md data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:border-emerald-600 text-gray-300 font-medium transition-all duration-300 hover:border-emerald-500/50"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-[#12141a] rounded-xl overflow-hidden border border-[#1e2028] hover:border-emerald-500/20 transition-all duration-300 h-full">
                      <div className="relative">
                        <div className="flex">
                          <div className="w-1/2 relative overflow-hidden">
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1.5 rounded-md z-10 font-semibold">
                              Antes
                            </div>
                            <img
                              src={project.beforeImage}
                              alt={`Antes - ${project.title}`}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="w-1/2 relative overflow-hidden">
                            <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-md z-10 font-semibold">
                              Depois
                            </div>
                            <img
                              src={project.afterImage}
                              alt={`Depois - ${project.title}`}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {project.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="bg-[#0a0c10] p-4 rounded-lg text-center border border-[#1e2028] group-hover:border-emerald-500/20 transition-all duration-300"
                            >
                              <p className="text-gray-400 text-xs mb-1">
                                {metric.label}
                              </p>
                              <p className="text-emerald-500 font-bold">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-emerald-500 font-medium text-sm group-hover:text-emerald-400 transition-colors duration-300">
                          <span>Ver detalhes</span>
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
              Ver Todos os Projetos
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

export default ProjectsSection;
