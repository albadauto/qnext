import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventTicket = () => {
  return (
    <section className="dark:bg-darkmode pt-0">
      <div className="container">
        {/* Texto principal */}
        <div className="text-center md:pb-20 pb-8">
          <h2
            className="pb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Sistemas sob demanda com automação e inteligência artificial
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text-SlateBlueText dark:text-opacity-80 text-lg font-normal max-w-920 m-auto"
          >
            Desenvolvemos sistemas personalizados para empresas que precisam
            organizar processos, integrar ferramentas e ganhar eficiência.
            Quando faz sentido, aplicamos inteligência artificial para
            automatizar tarefas, apoiar decisões e escalar operações com
            segurança e controle.
          </p>
        </div>

        {/* Bloco principal */}
        <div
          className="flex flex-wrap items-stretch"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          {/* Imagem / Ilustração */}
          <div className="bg-primary flex items-center justify-center lg:px-16 px-8 lg:py-0 py-8 lg:rounded-l-22 rounded-t-22 md:rounded-tr-none md:rounded-bl-22 rounded-bl-none md:w-2/4 w-full">
            <Image
              src="https://img.freepik.com/fotos-gratis/robo-com-ia-olhando-para-codigo-uma-visao-cyberpunk-futurista_23-2152000915.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Sistemas sob demanda com automação"
              width={0}
              height={0}
              quality={100}
              layout="responsive"
              sizes="100vh"
            />
          </div>

          {/* Card de informações */}
          <div className="bg-ElectricAqua lg:py-14 py-6 lg:px-16 px-8 lg:rounded-r-22 rounded-b-22 md:rounded-bl-none md:rounded-tr-22 rounded-tr-none md:w-2/4 w-full">
            <div className="bg-white dark:bg-darklight rounded-22 lg:px-11 px-4 pt-8 pb-10">
              <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white pb-5">
                O que desenvolvemos
              </h6>

              <div className="space-y-5">
                <div>
                  <p className="text-xl font-semibold text-secondary dark:text-white">
                    Sistemas personalizados
                  </p>
                  <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Criamos sistemas sob medida para gestão, controle de
                    processos, painéis administrativos e fluxos internos,
                    adaptados à realidade do seu negócio.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold text-secondary dark:text-white">
                    Automação de processos
                  </p>
                  <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Automatizamos tarefas repetitivas, integrações entre
                    sistemas e rotinas operacionais para reduzir erros,
                    retrabalho e custos.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold text-secondary dark:text-white">
                    Inteligência artificial aplicada
                  </p>
                  <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Utilizamos IA para análise de dados, atendimento automatizado,
                    apoio à tomada de decisão e classificação de informações,
                    sempre quando gera valor real.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold text-secondary dark:text-white">
                    Integrações e evolução contínua
                  </p>
                  <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Integramos o sistema às ferramentas que sua empresa já
                    utiliza e cuidamos da evolução contínua, infraestrutura e
                    operação.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="btn btn-1 hover-filled-slide-down w-full text-center rounded-lg overflow-hidden mt-6"
                >
                  <span>Falar sobre meu projeto</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTicket;
