import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const phone = "+55 (61) 99999-9999";
    // Format phone number for WhatsApp link
    const formattedPhone = phone.replace(/\D/g, "");
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre o Projeto Beija Flor.",
    );
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[#0c0e12]">
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
              Entre em Contato
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Estamos Prontos para Ajudar
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Estamos prontos para ajudar em seu projeto de regeneração
              ambiental. Preencha o formulário abaixo e nossa equipe entrará em
              contato em breve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#12141a] rounded-xl border border-[#1e2028] overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-300 mb-1 block"
                      >
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-[#1a1c24] border-[#2a2c34] text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-gray-300 mb-1 block"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="bg-[#1a1c24] border-[#2a2c34] text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-gray-300 mb-1 block"
                        >
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="bg-[#1a1c24] border-[#2a2c34] text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="text-gray-300 mb-1 block"
                      >
                        Empresa (opcional)
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                        className="bg-[#1a1c24] border-[#2a2c34] text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-300 mb-1 block"
                      >
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        required
                        className="bg-[#1a1c24] border-[#2a2c34] text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-6 rounded-md shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-md flex items-center gap-2 text-emerald-400"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>
                        Mensagem enviada com sucesso! Entraremos em contato em
                        breve.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-2 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>
                        Ocorreu um erro ao enviar sua mensagem. Por favor, tente
                        novamente.
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-[#12141a] rounded-xl border border-[#1e2028] p-8">
                <h4 className="text-xl font-bold mb-6">
                  Informações de Contato
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Telefone</h5>
                      <p className="text-gray-400">+55 (61) 99999-9999</p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="text-emerald-500 text-sm flex items-center gap-1 mt-1 hover:text-emerald-400 transition-colors"
                      >
                        <span>Falar pelo WhatsApp</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Email</h5>
                      <p className="text-gray-400">
                        contato@projetobeijaflor.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Endereço</h5>
                      <p className="text-gray-400">Av. das Araucárias, 4.500</p>
                      <p className="text-gray-400">
                        Águas Claras, Brasília - DF
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#12141a] rounded-xl border border-[#1e2028] p-8">
                <h4 className="text-xl font-bold mb-6">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1a1c24] rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1a1c24] rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#1a1c24] rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">
                  Horário de Atendimento
                </h4>
                <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
