"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight testimonial py-20">
                <div className="container">

                    {/* Título geral */}
                    <div className="text-center mb-14">
                        <h2 className="pb-4">Empresas que confiam na Qnext</h2>
                        <p className="text-lg text-SlateBlueText max-w-2xl mx-auto">
                            Sistemas sob medida, automações inteligentes e IA aplicada
                            ao negócio real — com impacto mensurável no dia a dia.
                        </p>
                    </div>

                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-8 md:ml-28 ml-0">
                                    <p className="text-lg font-normal text-SlateBlueText py-10 max-w-632">
                                        A Qnext desenvolveu um sistema totalmente sob medida
                                        para nossa operação. Conseguimos centralizar processos,
                                        eliminar planilhas e automatizar rotinas críticas,
                                        reduzindo erros e ganhando muito mais controle.
                                    </p>

                                    <p className="text-xl font-medium text-secondary pb-1">
                                        Lucas Ferreira
                                    </p>
                                    <p className="text-sm text-SlateBlueText">
                                        Diretor de Operações
                                    </p>

                                    <div className="flex items-center mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-500 ms-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-8 md:ml-28 ml-0">
                                    <p className="text-lg font-normal text-SlateBlueText py-10 max-w-632">
                                        O sistema de vendas com automações e IA trouxe
                                        previsibilidade para o funil comercial. Hoje temos
                                        leads qualificados automaticamente e indicadores claros
                                        para tomar decisões mais rápidas.
                                    </p>

                                    <p className="text-xl font-medium text-secondary pb-1">
                                        Mariana Costa
                                    </p>
                                    <p className="text-sm text-SlateBlueText">
                                        Head Comercial
                                    </p>

                                    <div className="flex items-center mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-500 ms-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-8 md:ml-28 ml-0">
                                    <p className="text-lg font-normal text-SlateBlueText py-10 max-w-632">
                                        Implementamos um sistema interno com automação e
                                        suporte inteligente. O tempo de resposta caiu
                                        drasticamente e a equipe consegue focar no que realmente
                                        gera valor para o negócio.
                                    </p>

                                    <p className="text-xl font-medium text-secondary pb-1">
                                        Rafael Mendes
                                    </p>
                                    <p className="text-sm text-SlateBlueText">
                                        Coordenador de Tecnologia
                                    </p>

                                    <div className="flex items-center mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-500 ms-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
