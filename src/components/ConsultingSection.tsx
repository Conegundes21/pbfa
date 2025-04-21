import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultingSection = () => {
  const steps = [
    {
      icon: <Calendar className="h-6 w-6 text-emerald-500" />,
      title: "Agendamento",
      description:
        "Escolha a data e horário mais convenientes para sua consulta inicial com nossa equipe de especialistas.",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      title: "Reunião Diagnóstica",
      description:
        "Nossa equipe realizará uma análise detalhada das necessidades do seu projeto ou propriedade.",
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-500" />,
      title: "Proposta Personalizada",
      description:
        "Desenvolveremos um plano de ação customizado com soluções específicas para seus objetivos.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      title: "Implementação",
      description:
        "Após aprovação, nossa equipe implementará as soluções propostas com acompanhamento contínuo.",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
                    alt="Consultoria Ambiental"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#12141a]/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3">
                      Agende uma Consultoria
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Nossa equipe de especialistas está pronta para ajudar no
                      seu projeto de regeneração ambiental.
                    </p>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-md shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
                      Agendar Agora
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
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-sm uppercase tracking-wider text-emerald-500 font-semibold mb-2">
                  Consultoria Especializada
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Transforme Desafios em Oportunidades Sustentáveis
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"></div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Nossa consultoria ambiental oferece soluções personalizadas para
                empresas, propriedades rurais e órgãos públicos que buscam
                implementar práticas sustentáveis, cumprir legislações
                ambientais e transformar desafios em oportunidades de
                regeneração.
              </p>

              <div className="space-y-6 mt-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center border border-[#1e2028]">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
                  Solicitar Consultoria
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
