// app/integration/[platform]/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function IntegrationDetailPage({ params }) {
  const { platform } = params;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <a href="/" passHref>
          <a className="hover:text-gray-700">Inicio</a>
        </a>
        <span>&gt;</span>
        <a href="/integration" passHref>
          <a className="hover:text-gray-700">Integração</a>
        </a>
        <span>&gt;</span>
        <span className="text-gray-900 capitalize">{platform}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne gauche */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Tutorial de integração</h2>
            <p className="text-sm text-gray-600 mb-4">
              Confira o video abaixo para um guia passo a passo sobre como
              integrar o aplicativo da {platform} à nossa plataforma via API. Se
              encontrar alguma dificuldade, entre em contato conosco clicando
              aqui.
            </p>

            {/* Placeholder pour la vidéo */}
            <div className="relative mb-4">
              <Image
                src="https://via.placeholder.com/800x450"
                alt="Video tutorial"
                width={800}
                height={450}
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <div className="w-0 h-0 border-l-[20px] border-l-red-500 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
            >
              Acessar o site da API
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="font-medium mb-3">Objetivo de integração</h3>
            <ul className="space-y-2">
              {[
                "Importação dos produtos",
                "Importação e gerenciamento de pedidos",
                "Controle de estoque",
                "Emissão de notas fiscais eletrônicas",
                "Controle de custos",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-2.5 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Desativar o aplicativo
          </button>
        </div>

        {/* Colonne droite */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={`https://via.placeholder.com/48?text=${platform
                .charAt(0)
                .toUpperCase()}`}
              alt={`${platform} logo`}
              width={48}
              height={48}
              className="object-contain rounded-full"
            />
            <div>
              <h3 className="font-medium">Aplicativo {platform}</h3>
              <span className="text-sm text-gray-500">E-commerce</span>
            </div>
          </div>

          <form className="space-y-4">
            {[
              { label: "Seu domínio Shopify:", placeholder: "myshopify.com" },
              { label: "Chave de API:", placeholder: "" },
              { label: "Token de acesso:", placeholder: "" },
              {
                label: "Chave secreta da API:",
                placeholder: "",
                type: "password",
              },
            ].map((input, index) => (
              <div key={index} className="space-y-1.5">
                <label className="text-sm text-gray-600">{input.label}</label>
                <input
                  type={input.type || "text"}
                  placeholder={input.placeholder}
                  className="w-full p-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Conectar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
