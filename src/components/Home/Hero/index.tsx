import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30 mt-20">
                    <div className="col-span-6">
                       
                        <h1
                            className="py-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Sistemas sob medida para automatizar e escalar seu negócio
                        </h1>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                        >
                            Desenvolvemos sistemas personalizados para empresas que precisam
                            organizar processos, reduzir trabalho manual e ganhar eficiência.
                            Utilizamos tecnologia moderna e inteligência artificial quando
                            faz sentido para o seu negócio.
                        </p>

                        <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
                            <Link
                                href="/contact"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
                            >
                                <span className="!flex !items-center gap-14">
                                    Falar sobre meu projeto
                                </span>
                            </Link>

                            <Link
                                href="#como-funciona"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                className="btn_outline btn-2 hover-outline-slide-down group"
                            >
                                <span className="!flex !items-center gap-14">
                                    Como funciona
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6 lg:flex hidden items-center gap-3"
                    >
                        <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">
                            <Image
                                src="https://img.freepik.com/fotos-gratis/robo-com-ia-olhando-para-codigo-uma-visao-cyberpunk-futurista_23-2152000915.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Sistema sob medida com automação"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="w-full h-full"
                            />
                        </div>

                        <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
                            <Image
                                src="https://img.freepik.com/fotos-gratis/macro-iris-ocular_23-2151618522.jpg?semt=ais_user_personalization&w=740&q=80"
                                alt="Tecnologia aplicada a processos empresariais"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
