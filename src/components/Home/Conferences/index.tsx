import React from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";

const Conferences = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid-cols-1 items-center lg:gap-24 gap-5">

            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>
                Desenvolvemos sistemas sob demanda para a realidade do seu negócio
              </h2>

              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 md:pt-9 pt-5 md:pb-14 pb-6">
                Criamos sistemas personalizados para empresas que precisam organizar
                processos, integrar ferramentas, automatizar tarefas e ter mais controle
                sobre dados e operações. Cada projeto é pensado sob medida, com foco em
                eficiência, escalabilidade e simplicidade no uso.
              </p>

              <Link
                href="/como-funciona"
                className="btn_outline btn-2 hover-outline-slide-down"
              >
                <span>Entenda como funciona</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
