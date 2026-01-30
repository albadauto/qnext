"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-darkmode">
      <div className="container">
        {/* Top */}
        <div className="grid md:grid-cols-12 grid-cols-1 gap-10 py-20 border-b border-dark_border">
          {/* Logo + descrição */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Qnext"
                width={160}
                height={40}
                quality={100}
              />
            </Link>

            <p className="text-PaleCerulean text-lg max-w-md leading-relaxed">
              A Qnext desenvolve <strong>sistemas sob medida</strong> para empresas,
              automatizando processos, integrando tecnologias e aplicando
              inteligência artificial quando ela realmente gera resultado.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xl font-semibold mb-6">
              Navegação
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-PaleCerulean hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes"
                  className="text-PaleCerulean hover:text-primary"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-PaleCerulean hover:text-primary"
                >
                  Sobre a Qnext
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-PaleCerulean hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA / Contato */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xl font-semibold mb-6">
              Vamos conversar?
            </h4>
            <p className="text-PaleCerulean mb-6 leading-relaxed">
              Precisa de um sistema personalizado, automação ou solução com IA
              integrada ao seu negócio? Fale com nosso time e entenda como podemos
              construir isso sob medida.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-secondary font-medium hover:bg-white transition"
            >
              Falar com a Qnext
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          <p className="text-PaleCerulean text-sm">
            © {new Date().getFullYear()} Qnext. Todos os direitos reservados.
          </p>

          {/* Social */}
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white hover:text-primary"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-white hover:text-primary"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-white hover:text-primary"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
