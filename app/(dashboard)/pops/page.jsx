import React from "react";
import { ChevronDown, Edit } from "lucide-react";
import Icon from "@/components/ui/Icon";

const CompanyInformationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Company Information */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Informações da empresa</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Razão social da empresa
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CNPJ
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Inscrição Estadual
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Inscrição Municipal
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                CEP
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700">
                Rua
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                N°
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Complemento
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                UF
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>Selecione</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Município
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail de contato
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
        </form>
      </div>

      {/* File Management */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Gerenciamento de arquivos a serem enviados
        </h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Departamento contábil</span>
            <ChevronDown size={20} />
          </div>
          <div className="pl-4 space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Boleto de Aluguel</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Boleto Internet</span>
            </div>
            {/* Add more checkboxes here */}
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Departamento fiscal</span>
            <ChevronDown size={20} />
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Departamento Pessoal</span>
            <ChevronDown size={20} />
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Contratação e demissão</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Social Contracts */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Contratos sociais e alvarás</h2>
          <button className="text-blue-600">?</button>
        </div>
        <div className="space-y-2">
          {[
            {
              name: "Contrato social 31-07-2024",
              status: "Ativo",
              date: "01-08-2024",
            },
            {
              name: "Contrato social 01-04-2019",
              status: "Alterado",
              date: "02-04-2019",
            },
            { name: "Alvará 04-03-2019", status: "Ativo", date: "05-03-2019" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <div className="flex items-center space-x-2">
                <img
                  src="/api/placeholder/20/20"
                  alt="PDF icon"
                  className="w-5 h-5"
                />
                <span>{item.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{item.status}</span>
                <span className="text-sm text-gray-500">
                  Adicionado em: {item.date}
                </span>
                <button>
                  <Edit size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Hierarchy */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Hierarquia da empresa</h2>
          <button className="text-blue-600">?</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Sócio administrador", "Sócio 2", "Gerente"].map((role, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{role}</h3>
                <button>
                  <Edit size={16} />
                </button>
              </div>
              <div className="space-y-1 text-sm">
                <p>Nome: João da Silva</p>
                <p>Participação: 50%</p>
                <p>Contato: (11) 99999-9999</p>
                <p>E-mail: joao@email.com</p>
                <p>Sócio em outra empresa: Não</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branches */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Filiais</h2>
          <button className="text-blue-600">?</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((branch) => (
            <div key={branch} className="bg-gray-50 p-4 rounded">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Filial {branch}</h3>
                <button>
                  <Edit size={16} />
                </button>
              </div>
              <div className="space-y-1 text-sm">
                <p>CNPJ: 00.000.000/0001-00</p>
                <p>Razão Social: Minha Empresa LTDA</p>
                <p>Cidade: São Paulo</p>
                <p>UF: SP</p>
                <p>Responsável: Marcelo Santos</p>
                <p>Contato: (11) 8888-8888</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Users */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Usuários da plataforma</h2>
          <button className="text-blue-600">?</button>
        </div>
        <div className="space-y-4">
          {["Administrador", "SU: Carla Fernandez", "SU: Miranda Gomes"].map(
            (user, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold">{user}</h3>
                  <p className="text-sm text-gray-600">
                    Cargo: Assistente Financeiro
                  </p>
                  <p className="text-sm text-gray-600">
                    E-mail: user@email.com
                  </p>
                  <p className="text-sm text-gray-600">
                    Contato: (11) 7777-7777
                  </p>
                </div>
                <button>
                  <Edit size={16} />
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Informações complementares
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Regime de tributação
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>Selecione</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Porte da empresa
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>Selecione</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Periodicidade IRPJ/CSLL
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>Selecione</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Envio das demonstrações
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>Selecione</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Benefício(s) fiscal(ais)
            </label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="3"
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Apresentar em forma de lista os diferentes benefícios fiscais
              concedidos pela empresa, bem como a portaria onde tais informações
              foram publicadas
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CNAE Principal
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CNAEs Secundários
            </label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="3"
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Apresentar em forma de lista os CNAEs secundários da empresa
              seguindo o exemplo abaixo:
            </p>
            <p className="text-sm text-gray-500">
              82.11-3-00 - Serviços combinados de escritório e apoio
              administrativo
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyInformationPage;
