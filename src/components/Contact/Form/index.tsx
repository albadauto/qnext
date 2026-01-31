"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    solucao: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSuccess(true);
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        whatsapp: "",
        solucao: "",
        mensagem: "",
      });
    } catch (err) {
      setError("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-40">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-center">

          {/* FORM */}
          <div className="col-span-6">
            <h2 className="max-w-xl text-[40px] leading-[3.4rem] font-bold mb-6 text-secondary">
              Vamos entender seu desafio
            </h2>

            <p className="text-lg text-SlateBlueText mb-10">
              Conte-nos um pouco sobre seu cenário atual.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-wrap w-full justify-between">
              {/* NOME / EMPRESA */}
              <div className="sm:flex gap-3 w-full">
                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base">Nome*</label>
                  <input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base">Empresa*</label>
                  <input
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
              </div>

              {/* EMAIL / WHATSAPP */}
              <div className="sm:flex gap-3 w-full">
                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base">WhatsApp</label>
                  <input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
              </div>

              {/* SOLUÇÃO */}
              <div className="my-2.5 w-full">
                <label className="pb-3 inline-block text-base">
                  Tipo de solução
                </label>
                <select
                  name="solucao"
                  value={formData.solucao}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border"
                >
                  <option value="">Selecione</option>
                  <option>Sistema sob medida</option>
                  <option>Automação de processos</option>
                  <option>Agentes de IA</option>
                  <option>IA para vendas ou atendimento</option>
                  <option>Integração entre sistemas</option>
                  <option>Não tenho certeza ainda</option>
                </select>
              </div>

              {/* MENSAGEM */}
              <div className="my-2.5 w-full">
                <label className="pb-3 inline-block text-base">
                  Descreva seu desafio*
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border resize-none"
                />
              </div>

              {/* FEEDBACK */}
              {success && (
                <p className="text-green-600 mt-3">
                  ✅ Mensagem enviada com sucesso!
                </p>
              )}

              {error && (
                <p className="text-red-600 mt-3">
                  ❌ {error}
                </p>
              )}

              {/* BOTÃO */}
              <div className="my-4 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-9 text-lg font-medium bg-primary hover:bg-blue-700 rounded-lg text-white"
                >
                  {loading ? "Enviando..." : "Solicitar diagnóstico"}
                </button>
              </div>
            </form>
          </div>

          {/* IMAGEM */}
          <div className="col-span-6">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Contato Qnext"
              width={1300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
