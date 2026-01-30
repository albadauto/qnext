import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Testimonials from "@/components/Home/Testimonials";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Uso | Qnext",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solucoes", text: "Soluções" },
  ];

  return (
    <>
      {/* CASOS DE USO */}
      <section className="dark:bg-darkmode py-20 mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <h2 className="pb-6">
              Casos de uso na prática
            </h2>
            <p className="text-lg text-SlateBlueText dark:text-opacity-80">
              Exemplos reais de sistemas, automações e Inteligência Artificial
              aplicados para gerar eficiência, escala e controle operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Caso 1 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                📞 Atendimento Automatizado 24/7
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Sistemas de atendimento com IA integrados a WhatsApp, chat e
                CRM, capazes de resolver demandas comuns e encaminhar apenas
                casos estratégicos para humanos.
              </p>
            </div>

            {/* Caso 2 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                📈 Sistemas de Vendas e Leads
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Automação do funil comercial com IA para qualificação de leads,
                atualização de CRM, follow-ups automáticos e apoio à tomada
                de decisão do time de vendas.
              </p>
            </div>

            {/* Caso 3 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                🧾 Automação de Backoffice
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Sistemas que automatizam rotinas administrativas, leitura de
                documentos, e-mails, geração de relatórios e execução de
                processos internos com mínima intervenção manual.
              </p>
            </div>

            {/* Caso 4 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                🧠 Sistemas de Suporte Interno
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Assistentes internos com IA treinados com dados da empresa,
                manuais e políticas para apoiar equipes de RH, TI, jurídico
                e operações no dia a dia.
              </p>
            </div>

            {/* Caso 5 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                🔍 Análise de Dados e Relatórios
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Sistemas inteligentes que analisam grandes volumes de dados,
                geram relatórios automáticos e permitem consultas em linguagem
                natural para apoiar decisões estratégicas.
              </p>
            </div>

            {/* Caso 6 */}
            <div className="bg-white dark:bg-darklight rounded-22 p-10">
              <h3 className="text-xl font-bold pb-4">
                🔗 Integração com Sistemas Existentes
              </h3>
              <p className="text-SlateBlueText leading-relaxed">
                Desenvolvimento de soluções integradas a ERPs, CRMs, bancos
                de dados, APIs e sistemas legados, garantindo automação sem
                interromper fluxos já consolidados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
