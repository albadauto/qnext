"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="dark:bg-darkmode py-20 mt-20">
      <div className="container">
        {/* TÍTULO */}
        <div className="text-center max-w-3xl mx-auto pb-16">
          <h2 className="pb-6">Sobre a Qnext</h2>
          <p className="text-lg text-SlateBlueText dark:text-opacity-80">
            A Qnext é uma empresa especializada no desenvolvimento de sistemas
            sob demanda, criados para resolver problemas reais de negócio com
            tecnologia moderna, integrações eficientes e inteligência artificial
            aplicada de forma estratégica.
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <div>
            <h3 className="text-2xl font-bold text-secondary dark:text-white pb-6">
              Sistemas pensados para operar, escalar e evoluir
            </h3>

            <p className="text-SlateBlueText leading-relaxed pb-6">
              Muitas empresas crescem utilizando planilhas, ferramentas
              desconectadas e processos manuais. Com o tempo, isso gera perda de
              controle, retrabalho e decisões baseadas em dados incompletos.
              A Qnext nasce exatamente para resolver esse cenário.
            </p>

            <p className="text-SlateBlueText leading-relaxed pb-6">
              Desenvolvemos sistemas personalizados que organizam processos,
              centralizam informações e integram plataformas já utilizadas
              pela empresa. Quando faz sentido, aplicamos inteligência
              artificial para automatizar tarefas, acelerar atendimentos e
              apoiar decisões estratégicas.
            </p>

            <p className="text-SlateBlueText leading-relaxed">
              Nossos projetos são construídos para longo prazo, com evolução
              contínua, suporte técnico e infraestrutura em nuvem, garantindo
              estabilidade, segurança e crescimento sustentável.
            </p>
          </div>

          {/* VALORES / PILARES */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-darklight rounded-22 p-8">
              <h4 className="text-xl font-semibold pb-3">
                🚀 Foco em Resultado
              </h4>
              <p className="text-SlateBlueText">
                Cada sistema é desenvolvido para gerar eficiência operacional,
                reduzir custos e apoiar o crescimento do negócio.
              </p>
            </div>

            <div className="bg-white dark:bg-darklight rounded-22 p-8">
              <h4 className="text-xl font-semibold pb-3">
                🔗 Integração de Sistemas
              </h4>
              <p className="text-SlateBlueText">
                Conectamos CRMs, ERPs, APIs, bancos de dados e ferramentas
                internas em fluxos claros e automatizados.
              </p>
            </div>

            <div className="bg-white dark:bg-darklight rounded-22 p-8">
              <h4 className="text-xl font-semibold pb-3">
                🤖 IA aplicada com propósito
              </h4>
              <p className="text-SlateBlueText">
                Utilizamos IA quando ela realmente gera valor: automação,
                análise de dados, suporte e tomada de decisão — sem promessas
                irreais.
              </p>
            </div>

            <div className="bg-white dark:bg-darklight rounded-22 p-8">
              <h4 className="text-xl font-semibold pb-3">
                🔒 Segurança e Confiabilidade
              </h4>
              <p className="text-SlateBlueText">
                Arquiteturas seguras, controle de acesso, dados protegidos e
                sistemas preparados para operação crítica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
