"use client";
import React from "react";
import Link from "next/link";

const AboutQnext = () => {
  return (
    <section className="bg-white dark:bg-darkmode py-24">
      <div className="max-w-1200 mx-auto px-6">
        {/* Título */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">
            Qnext — Sistemas sob demanda que geram resultado
          </h2>
          <p className="text-lg text-SlateBlueText dark:text-opacity-80 max-w-3xl mx-auto">
            Desenvolvemos sistemas personalizados para empresas que precisam
            automatizar processos, escalar operações e ganhar eficiência. Quando
            faz sentido, aplicamos inteligência artificial para potencializar os
            resultados.
          </p>
        </div>

        {/* Blocos de serviços */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Serviço 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border border-solid dark:border-dark_border rounded-22 p-10 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              Sistemas Sob Medida
            </h3>
            <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
              Criamos sistemas do zero, totalmente adaptados à realidade do seu
              negócio, substituindo planilhas, processos manuais e softwares
              genéricos que não escalam.
            </p>
          </div>

          {/* Serviço 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border border-solid dark:border-dark_border rounded-22 p-10 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              Automação Inteligente
            </h3>
            <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
              Automatizamos fluxos operacionais, vendas, atendimento e processos
              internos, reduzindo custos, erros manuais e aumentando a
              produtividade da equipe.
            </p>
          </div>

          {/* Serviço 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="border border-solid dark:border-dark_border rounded-22 p-10 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              IA Aplicada ao Negócio
            </h3>
            <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
              Implementamos agentes de IA, análises inteligentes e automações
              avançadas integradas aos seus sistemas (CRM, ERP, APIs e
              plataformas internas), com segurança e controle total.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="btn_outline btn-2 btn_outline hover-outline-slide-down"
          >
            <span>Falar sobre meu sistema</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutQnext;
