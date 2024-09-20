"use client";
import React, { Fragment } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab, Disclosure, Transition } from "@headlessui/react";

const columns = [
  {
    label: "Employee",
    field: "employee",
  },
  {
    label: "Position",
    field: "position",
  },

  {
    label: "Type",
    field: "type",
  },

  {
    label: "Competence",
    field: "competence",
  },
  {
    label: "Gross",
    field: "gross",
  },
  {
    label: "Amount Paid",
    field: "amountPaid",
  },
];

const buttons = [
  {
    title: "Departamento Contábil",
    icon: "heroicons-outline:home",
  },
  {
    title: "Departamento Tributário",
    icon: "heroicons-outline:user",
  },
  {
    title: "Departamento Pessoal",
    icon: "heroicons-outline:chat-alt-2",
  },
  
];
const rows =[
  {
      employee: "Andrea Gonçalves",
      position: "Ger. Atendimento",
      type: "Salário mensal",
      competence: "March/2024",
      gross: "R$ 2,086.00",
      amountPaid: "R$ 1,891.24"
  },
  {
      employee: "Janilson Borges",
      position: "Atendente",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,520.00",
      amountPaid: "R$ 608.00"
  },
  {
      employee: "Joaquim Paula",
      position: "Ger. Financeiro",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 2,410.00",
      amountPaid: "R$ 684.00"
  },
  {
      employee: "Marcelo Leite",
      position: "Ger. Logística",
      type: "Salário mensal",
      competence: "March/2024",
      gross: "R$ 2,700.00",
      amountPaid: "R$ 2,477.18"
  },
  {
      employee: "Susi Lazarini",
      position: "Empacotador",
      type: "Salário mensal",
      competence: "March/2024",
      gross: "R$ 1,470.00",
      amountPaid: "R$ 1,358.88"
  },
  {
      employee: "Marcos Alves",
      position: "Atendente",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,520.00",
      amountPaid: "R$ 608.00"
  },
  {
      employee: "Bruna Pimentel",
      position: "Aux. Logística",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,141.20",
      amountPaid: "R$ 564.80"
  },
  {
      employee: "Marcos Alves",
      position: "Atendente",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,520.00",
      amountPaid: "R$ 608.00"
  },
  {
      employee: "Bruna Pimentel",
      position: "Aux. Logística",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,141.20",
      amountPaid: "R$ 564.80"
  },
  {
      employee: "Marcos Alves",
      position: "Atendente",
      type: "Adiantamento",
      competence: "March/2024",
      gross: "R$ 1,520.00",
      amountPaid: "R$ 608.00"
  }
]
const TabAccrodain = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-6">
      
      <Card title="">
        <Tab.Group>
          <Tab.List className="lg:space-x-8 md:space-x-3 space-x-0 rtl:space-x-reverse">
            {buttons.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` text-sm font-medium mb-7 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150
              
              ${
                selected
                  ? "text-black bg-white dark:bg-slate-800 dark:text-slate-500 "
                  : "text-black bg-gray-100 dark:bg-slate-700 dark:text-slate-300"
              }
              `}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
            <div className="flex">
              <div className="w-7/10 bg-white p-4 rounded">
                <div className="bg-white p-4 rounded shadow w-full max-w-lg">
                  <div className="flex justify-between mb-4">
                    <div className="w-7/10 pr-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileType">
                        Arquivo a enviar
                      </label>
                      <select
                        id="fileType"
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>Extrato Bancário (Inter)</option>
                        <option>Comprovantes de pgto dos Holerites</option>
                        <option>Comprovante de pgto do Aluguel</option>
                        <option>Fatura do cartão (Inter)</option>
                        <option>Fatura Cartão (Nubank)</option>
                        <option>Comissões do Checkout</option>
                      </select>
                    </div>
                    <div className="w-3/10 pl-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="competencia">
                        Competência
                      </label>
                      <select
                        id="competencia"
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>Março/2024</option>
                        <option>Abril/2024</option>
                        <option>Maio/2024</option>
                        {/* Add more months as needed */}
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Arraste e solte o PDF aqui
                    </label>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Selecionar arquivo PDF
                    </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                      Comentário (Opcional)
                    </label>
                    <textarea
                      id="comment"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-3/10 bg-white p-4 rounded">
                <h2 className="text-gray-700 text-lg font-bold mb-4">Arquivos pendentes</h2>
                <ul>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Extrato bancário (Inter)</li>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Comprovantes de pgto dos Holerites</li>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Comprovante de pgto do Aluguel</li>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Fatura do cartão (Inter)</li>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Fatura Cartão (Nubank)</li>
                  <li className="mb-2 bg-gray-200 p-2 rounded">Comissões do Checkout</li>
                </ul>
              </div>
            </div>
              <div className="w-10/10">
                <Card title="Historico dos arquivos enviados  " noborder>
                  <div className="overflow-x-auto -mx-6">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden ">
                        <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                          <thead className="bg-slate-200 dark:bg-slate-700">
                            <tr>
                              {columns.map((column, i) => (
                                <th key={i} scope="col" className=" table-th ">
                                  {column.label}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                            {rows.map((row, i) => (
                              <tr
                                key={i}
                                className=" even:bg-slate-200 dark:even:bg-slate-700"
                              >
                                <td className="table-td">{row.employee}</td>
                                <td className="table-td">{row.position}</td>
                                <td className="table-td ">{row.type}</td>
                                <td className="table-td ">{row.competence}</td>
                                <td className="table-td ">{row.gross}</td>
                                <td className="table-td ">{row.amountPaid}</td>
                                
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
     
    </div>
  );
};

export default TabAccrodain;
