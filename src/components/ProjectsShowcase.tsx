import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronRight, ArrowRight } from "lucide-react";

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

interface ProjectsShowcaseProps {
  projects?: Project[];
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

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects = defaultProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-forest-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <div className="h-1 w-24 bg-forest-600 mx-auto mb-4"></div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Projetos de Impacto
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça alguns dos nossos projetos de regeneração ambiental e veja a
            transformação que promovemos em diferentes ecossistemas.
          </motion.p>
        </div>

        <Tabs
          defaultValue="todos"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TabsList className="flex flex-wrap justify-center gap-3 mb-10 bg-transparent">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="px-5 py-2.5 border-2 border-forest-200 rounded-full data-[state=active]:bg-forest-700 data-[state=active]:text-white data-[state=active]:border-forest-700 text-forest-700 font-medium transition-all duration-300 hover:border-forest-400"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="flex">
                          <motion.div
                            className="w-1/2 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1.5 rounded-md z-10 font-semibold shadow-md">
                              Antes
                            </div>
                            <img
                              src={project.beforeImage}
                              alt={`Antes - ${project.title}`}
                              className="w-full h-72 object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </motion.div>
                          <motion.div
                            className="w-1/2 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="absolute top-3 right-3 bg-forest-600 text-white text-xs px-3 py-1.5 rounded-md z-10 font-semibold shadow-md">
                              Depois
                            </div>
                            <img
                              src={project.afterImage}
                              alt={`Depois - ${project.title}`}
                              className="w-full h-72 object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-forest-800 mb-3 font-display">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {project.metrics.map((metric, index) => (
                            <motion.div
                              key={index}
                              className="bg-forest-50 p-4 rounded-lg text-center shadow-sm border border-forest-100"
                              whileHover={{ y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <p className="text-forest-800 font-semibold text-sm mb-1">
                                {metric.label}
                              </p>
                              <p className="text-forest-700 font-bold text-lg">
                                {metric.value}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="text-forest-700 border-2 border-forest-600 hover:bg-forest-700 hover:text-white mt-2 font-medium px-6 py-2.5 rounded-full transition-all duration-300 group"
                        >
                          Ver detalhes
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
                            <ChevronRight className="h-4 w-4" />
                          </motion.span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button className="bg-forest-700 hover:bg-forest-800 text-white px-10 py-7 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
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
    </section>
  );
};

export default ProjectsShowcase;
