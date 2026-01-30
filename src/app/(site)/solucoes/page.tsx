import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Testimonials from "@/components/Home/Testimonials";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções Sob Medida | Qnext",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solucoes", text: "Soluções" },
  ];

  return (
    <>
      {/* HERO */}
      <HeroSub
        title="Sistemas sob medida para o seu negócio"
        description="Desenvolvemos sistemas personalizados, automações e soluções com Inteligência Artificial integradas à realidade da sua empresa."
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* SOLUÇÕES */}
      <section className="dark:bg-darkmode py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <h2 className="pb-6">
              O que a Qnext desenvolve na prática
            </h2>
            <p className="text-lg text-SlateBlueText dark:text-opacity-80">
              Construímos sistemas sob demanda, pensados para resolver problemas
              reais de operação, vendas e gestão. A Inteligência Artificial entra
              como ferramenta estratégica — não como promessa vazia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-2xl font-bold text-secondary dark:text-white pb-4">
                🧩 Sistemas Sob Medida
              </h3>
              <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
                Desenvolvemos sistemas personalizados para gestão, operação,
                controle interno e fluxos específicos do seu negócio, substituindo
                planilhas e softwares genéricos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-2xl font-bold text-secondary dark:text-white pb-4">
                ⚙️ Automação de Processos
              </h3>
              <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
                Automatizamos rotinas operacionais, atendimento, vendas e
                backoffice, reduzindo erros, retrabalho e dependência de tarefas
                manuais.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-2xl font-bold text-secondary dark:text-white pb-4">
                🤖 Inteligência Artificial Aplicada
              </h3>
              <p className="text-SlateBlueText dark:text-opacity-80 leading-relaxed">
                Implementamos agentes de IA para atendimento, suporte interno,
                análise de dados e apoio à decisão, sempre integrados aos seus
                sistemas existentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="bg-IcyBreeze dark:bg-darklight py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <h2 className="pb-6">
              Como construímos sistemas inteligentes
            </h2>
            <p className="text-lg text-SlateBlueText dark:text-opacity-80">
              Nosso processo é simples, transparente e orientado a resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold pb-3">Diagnóstico</h4>
              <p className="text-SlateBlueText">
                Mapeamos processos, dores e objetivos do negócio.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold pb-3">Arquitetura</h4>
              <p className="text-SlateBlueText">
                Definimos a melhor solução técnica, com ou sem IA.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold pb-3">Desenvolvimento</h4>
              <p className="text-SlateBlueText">
                Construímos o sistema e integramos aos fluxos existentes.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold pb-3">Evolução Contínua</h4>
              <p className="text-SlateBlueText">
                Evoluímos o sistema de forma contínua, com suporte e melhorias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="dark:bg-darkmode py-20">
        <div className="container text-center">
          <h2 className="pb-6">
            Precisa de um sistema sob medida?
          </h2>
          <p className="text-lg text-SlateBlueText dark:text-opacity-80 max-w-2xl mx-auto pb-10">
            Fale com a Qnext e descubra como podemos construir um sistema
            personalizado, com automações e IA aplicadas à realidade do seu
            negócio.
          </p>

          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-secondary font-medium hover:bg-white transition"
          >
            Solicitar uma conversa
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
