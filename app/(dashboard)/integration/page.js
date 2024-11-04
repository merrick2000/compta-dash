// app/integration/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const platforms = [
  { id: "shopify", name: "Shopify" },
  { id: "woocommerce", name: "Woocommerce" },
  { id: "cartx", name: "Cartx" },
  { id: "yampi", name: "Yampi" },
  { id: "nuvemshop", name: "Nuvemshop" },
  { id: "loja-integrada", name: "Loja integrada" },
  { id: "wix", name: "Wix" },
  { id: "magento", name: "Magento" },
  { id: "tray", name: "Tray" },
];

const IntegrationCard = ({ id, name }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
    <Image
      src={`https://via.placeholder.com/64?text=${name
        .charAt(0)
        .toUpperCase()}`}
      alt={`${name} logo`}
      width={64}
      height={64}
      className="object-contain rounded-full"
    />
    <span className="text-sm text-gray-700 font-medium">{name}</span>
    {id && (
      <a href={`/integration/${id}`} passHref>
        <a
          className="mt-2 px-6 py-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
          aria-label={`Intégrer avec ${name}`}
        >
          Intégrer
        </a>
      </a>
    )}
  </div>
);

export default function IntegrationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-lg mb-6">
        <button className="flex-1 py-2.5 px-4 bg-white rounded-md text-sm font-medium shadow-sm">
          E-commerce
        </button>
        <button className="flex-1 py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-gray-900">
          Marketplace
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Filtrer les applications"
          className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Filtrer les applications"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Catalogue d'applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <IntegrationCard key={platform.id} {...platform} />
        ))}
      </div>
    </div>
  );
}
