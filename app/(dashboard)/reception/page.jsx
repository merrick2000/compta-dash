"use client";
import React, { Fragment } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import { ResumeTable, DetailsTable } from "./SubTab";
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
    title: "Guia de impostos",
    icon: "heroicons-outline:home",
  },
  {
    title: "Departamento Pessoal",
    icon: "heroicons-outline:chat-alt-2",
  },
  {
    title: "Demonstrações financeiras",
    icon: "heroicons-outline:user",
  },
];
const rows = [
  {
    employee: "Andrea Gonçalves",
    position: "Ger. Atendimento",
    type: "Salário mensal",
    competence: "March/2024",
    gross: "R$ 2,086.00",
    amountPaid: "R$ 1,891.24",
  },
  {
    employee: "Janilson Borges",
    position: "Atendente",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,520.00",
    amountPaid: "R$ 608.00",
  },
  {
    employee: "Joaquim Paula",
    position: "Ger. Financeiro",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 2,410.00",
    amountPaid: "R$ 684.00",
  },
  {
    employee: "Marcelo Leite",
    position: "Ger. Logística",
    type: "Salário mensal",
    competence: "March/2024",
    gross: "R$ 2,700.00",
    amountPaid: "R$ 2,477.18",
  },
  {
    employee: "Susi Lazarini",
    position: "Empacotador",
    type: "Salário mensal",
    competence: "March/2024",
    gross: "R$ 1,470.00",
    amountPaid: "R$ 1,358.88",
  },
  {
    employee: "Marcos Alves",
    position: "Atendente",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,520.00",
    amountPaid: "R$ 608.00",
  },
  {
    employee: "Bruna Pimentel",
    position: "Aux. Logística",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,141.20",
    amountPaid: "R$ 564.80",
  },
  {
    employee: "Marcos Alves",
    position: "Atendente",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,520.00",
    amountPaid: "R$ 608.00",
  },
  {
    employee: "Bruna Pimentel",
    position: "Aux. Logística",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,141.20",
    amountPaid: "R$ 564.80",
  },
  {
    employee: "Marcos Alves",
    position: "Atendente",
    type: "Adiantamento",
    competence: "March/2024",
    gross: "R$ 1,520.00",
    amountPaid: "R$ 608.001",
  },
];
const TabAccrodain = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-6">
      <Card title="">
        <Tab.Group>
          <Tab.List className=" space-x-0 rtl:space-x-reverse flex">
            {buttons.map((item, i) => (
              <Tab className=" " as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` inline-flex grow justify-between	 items-start text-sm font-medium mb-7 text-[#282828]  capitalize  dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-3 py-2 transition duration-150
              ${selected ? "bg-white" : "bg-[#D9D9D9]"}
              `}
                  >
                    <span>{item.title}</span>
                    <span
                      class={`inline-block w-4 h-4  rounded-full  ${
                        selected ? "bg-white" : "bg-[#DB3A34]"
                      }`}
                    ></span>
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mb-5">
                <ResumeTable columns={columns} rows={rows.slice(0, 2)} />
              </div>
              <div className="w-10/10">
                <DetailsTable columns={columns} rows={rows} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-5">
                <ResumeTable columns={columns} rows={rows.slice(0, 2)} />
              </div>
              <div className="w-10/10">
                <DetailsTable columns={columns} rows={rows} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-5">
                <ResumeTable columns={columns} rows={rows.slice(0, 2)} />
              </div>
              <div className="w-10/10">
                <DetailsTable columns={columns} rows={rows} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </div>
  );
};

export default TabAccrodain;
