"use client";
import React from "react";
import Image from "next/image";

const ContactForm = () => {
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
              Conte-nos um pouco sobre seu cenário atual. Avaliamos seus
              processos e indicamos a melhor solução — seja um sistema sob
              medida, uma automação ou o uso estratégico de Inteligência
              Artificial.
            </p>

            <form className="flex flex-wrap w-full justify-between">
              {/* NOME / EMPRESA */}
              <div className="sm:flex gap-3 w-full">
                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base text-SlateBlueText">
                    Nome*
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base text-SlateBlueText">
                    Empresa*
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              {/* EMAIL / WHATSAPP */}
              <div className="sm:flex gap-3 w-full">
                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base text-SlateBlueText">
                    Email corporativo*
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0"
                  />
                </div>

                <div className="my-2.5 flex-1">
                  <label className="pb-3 inline-block text-base text-SlateBlueText">
                    WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="(DDD) 9 0000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              {/* TIPO DE SOLUÇÃO */}
              <div className="my-2.5 w-full">
                <label className="pb-3 inline-block text-base text-SlateBlueText">
                  Qual tipo de solução você busca?
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0">
                  <option value="">Selecione uma opção</option>
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
                <label className="pb-3 inline-block text-base text-SlateBlueText">
                  Descreva brevemente seu desafio*
                </label>
                <textarea
                  rows={4}
                  placeholder="Ex: processos manuais, sistemas que não se conversam, dificuldade em escalar operações, necessidade de automação ou relatórios..."
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white focus:border-primary focus:outline-0 resize-none"
                />
              </div>

              {/* BOTÃO */}
              <div className="my-4 w-full">
                <button
                  type="submit"
                  className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg"
                >
                  <span>Solicitar diagnóstico</span>
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
              quality={100}
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
