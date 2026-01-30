"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Highlight = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-IcyBreeze dark:bg-darklight">
      <div className="container">
        <div className="items-center max-w-[125rem] mx-auto">
          {/* TEXTO */}
          <div
            className="col-span-5 py-0 px-7"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2>Sistemas sob demanda com foco em eficiência</h2>

            <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 pt-7 pb-11">
              Desenvolvemos sistemas personalizados que resolvem problemas reais
              do dia a dia das empresas. Quando a inteligência artificial faz
              sentido, ela é aplicada para automatizar processos, apoiar
              decisões e aumentar a eficiência operacional — sempre de forma
              integrada ao negócio.
            </p>

            <div className="flex items-center flex-wrap gap-30">
              <div className="text-start sm:pb-0 pb-5">
                <h2 className="text-primary">60</h2>
                <p className="text-lg font-medium text-secondary dark:text-darktext">
                  Projetos sob demanda concluídos
                </p>
              </div>

              <div className="text-start sm:pb-0 pb-5">
                <h2 className="text-primary">6m</h2>
                <p className="text-lg font-medium text-secondary dark:text-darktext">
                  De linhas de código desenvolvidas
                </p>
              </div>

              <div className="text-start sm:pb-0 pb-5">
                <h2 className="text-primary">100%</h2>
                <p className="text-lg font-medium text-secondary dark:text-darktext">
                  Dos clientes satisfeitos com nossas soluções
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
