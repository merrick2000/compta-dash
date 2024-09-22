"use client";
import React, { Fragment } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import { ResumeTable } from "./SubTab";
import RecentActivity from "@/components/partials/widget/recent-activity copy";
import AnalyticTable, { DetailsTable } from "../envoie/company-table";
import { Pago } from "@/components/custom/Pago";
import { Recalculo } from "@/components/custom/Recalculo";
import CustomCalendar from "@/components/custom/CustomCalendar";
const hResumeColumns = [
  { field: "funcionarios", label: "Funcionários" },
  { field: "competencia", label: "Competência" },
  { field: "vencimento", label: "Vencimento" },
  { field: "valorPagar", label: "Valor a pagar" },
  { field: "impostos", label: "Impostos" },
  { field: "baixar", label: "Baixar" },
];

const hResumeData = [
  {
    funcionarios: "Adiantamento mensal",
    competencia: "Abril/2024",
    vencimento: "20/04/2024",
    valorPagar: "R$ 5.239,20",
    impostos: "R$ --,--",
  },
  {
    funcionarios: "Salário mensal",
    competencia: "Abril/2024",
    vencimento: "05/05/2024",
    valorPagar: "R$ 13.098,00",
    impostos: "R$ 1.047,84",
  },
];

const impostosResumeData = [
  {
    guiaImposto: "ICMS Substituição Tributária",
    vencimento: "04/06/2024",
  },
  {
    guiaImposto: "ICMS Diferença de Alíquota",
    vencimento: "15/06/2024",
  },
  {
    guiaImposto: "DCTF WEB",
    vencimento: "15/06/2024",
  },
  {
    guiaImposto: "FGTS",
    vencimento: "19/06/2024",
  },
  {
    guiaImposto: "IRRF Aluguel",
    vencimento: "20/06/2024",
  },
  {
    guiaImposto: "Simples Nacional",
    vencimento: "20/06/2024",
  },
  {
    guiaImposto: "ICMS Antecipação",
    vencimento: "20/06/2024",
  },
];
const impostosResumeColumns = [
  { field: "guiaImposto", label: "Guia de Imposto" },
  { field: "vencimento", label: "Vencimento" },
  { field: "verBaixar", label: "Ver/Baixar" },
];

const buttons = [
  {
    title: "Guia de impostos",
    icon: "heroicons-outline:home",
  },
  {
    title: "Holerites",
    icon: "heroicons-outline:chat-alt-2",
  },
  {
    title: "Demonstrações financeiras",
    icon: "heroicons-outline:user",
  },
];
const rows = [
  {
    guia: "ICMS Substituição Tributária",
    date: "04/05/2024",
    pago: <Pago status={true} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
  {
    guia: "ICMS Diferença de Alíquota",
    date: "15/05/2024",
    pago: <Pago status={false} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
  {
    guia: "DCTF WED",
    date: "15/05/2024",
    pago: <Pago status={true} />,
    recalculo: <Recalculo isEnabled={false} />,
  },
  {
    guia: "FGTS",
    date: "19/05/2024",
    pago: <Pago status={false} />,
    recalculo: <Recalculo isEnabled={false} />,
  },
  {
    guia: "IRRF Re-Inf",
    date: "10/05/2024",
    pago: <Pago status={true} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
  {
    guia: "SIMPLES NACIONAL",
    date: "20/05/2024",
    pago: <Pago status={true} />,
    recalculo: <Recalculo isEnabled={false} />,
  },
  {
    guia: "FGTS Rescisório",
    date: "21/05/2024",
    pago: <Pago status={false} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
  {
    guia: "INSS",
    date: "20/05/2024",
    pago: <Pago status={false} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
  {
    guia: "ICMS Antecipação",
    date: "20/05/2024",
    pago: <Pago status={true} />,
    recalculo: <Recalculo isEnabled={false} />,
  },
  {
    guia: "IMCS COMÉRCIO",
    date: "02/06/2024",
    pago: <Pago status={false} />,
    recalculo: <Recalculo isEnabled={true} />,
  },
];
const holeritesData = [
  {
    funcionarios: "Andrea Gonçalves",
    cargo: "Ger. Atendimento",
    tipo: "Salário mensal",
    competencia: "Março/2024",
    bruto: "R$ 2.066,00",
    valorPago: "R$ 1.901,24",
  },
  {
    funcionarios: "Janilson Borges",
    cargo: "Atendente",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.520,00",
    valorPago: "R$ 608,00",
  },
  {
    funcionarios: "Joaquim Paulo",
    cargo: "Ger. Financeiro",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 2.410,00",
    valorPago: "R$ 964,00",
  },
  {
    funcionarios: "Marcelo Leite",
    cargo: "Ger. Logística",
    tipo: "Salário mensal",
    competencia: "Março/2024",
    bruto: "R$ 2.700,00",
    valorPago: "R$ 2.477,18",
  },
  {
    funcionarios: "Susi Lazarini",
    cargo: "Empacotador",
    tipo: "Salário mensal",
    competencia: "Março/2024",
    bruto: "R$ 1.470,00",
    valorPago: "R$ 1.358,88",
  },
  {
    funcionarios: "Marcos Alves",
    cargo: "Atendente",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.520,00",
    valorPago: "R$ 608,00",
  },
  {
    funcionarios: "Bruna Pimentel",
    cargo: "Aux. Logística",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.412,00",
    valorPago: "R$ 564,80",
  },
  {
    funcionarios: "Marcos Alves",
    cargo: "Atendente",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.520,00",
    valorPago: "R$ 608,00",
  },
  {
    funcionarios: "Bruna Pimentel",
    cargo: "Aux. Logística",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.412,00",
    valorPago: "R$ 564,80",
  },
  {
    funcionarios: "Marcos Alves",
    cargo: "Atendente",
    tipo: "Adiantamento",
    competencia: "Março/2024",
    bruto: "R$ 1.520,00",
    valorPago: "R$ 608,00",
  },
];

const holeritesColumns = [
  {
    label: "Funcionários",
    field: "employee",
  },
  {
    label: "Cargo",
    field: "position",
  },

  {
    label: "Tipo",
    field: "type",
  },

  {
    label: "Competência",
    field: "competence",
  },
  {
    label: "Bruto",
    field: "gross",
  },
  {
    label: "Valor Pago",
    field: "amountPaid",
  },
  {
    label: "Baixar",
    field: "download",
  },
];

const tableColumns = [
  {
    label: "Guia",
    field: "Guia",
  },
  {
    label: "Vencimento",
    field: "Vencimento",
  },
  {
    label: "Pago",
    field: "Pago",
  },
  {
    label: "Recalculo",
    field: "Recalculo",
  },
  {
    label: "Baixar",
    field: "Baixar",
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
            {/* Guia de impostos */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="h-[35vh] custom-scrollbar border border-[#CACACA] rounded-[10px] lg:col-span-8 col-span-12">
                  <Card className="h-full bg-white">
                    <ResumeTable
                      tableColumns={impostosResumeColumns}
                      rows={impostosResumeData}
                    />
                  </Card>
                </div>
                <div className="h-[35vh] lg:col-span-4 col-span-12">
                  <CustomCalendar />
                </div>
                <div className="h-[65vh] custom-scrollbar border border-[#CACACA] rounded-[10px] lg:col-span-12 col-span-12">
                  <Card noborder>
                    <AnalyticTable
                      data={rows}
                      tableColumns={tableColumns}
                      type="bof"
                    />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
            {/* Holerites */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 border border-[#CACACA] rounded-[10px] h-full">
                  <Card className="">
                    <ResumeTable
                      tableColumns={hResumeColumns}
                      rows={hResumeData}
                    />
                  </Card>
                </div>
                <div className="col-span-12 border border-[#CACACA] rounded-[10px]">
                  <Card noborder>
                    <DetailsTable
                      tableColumns={holeritesColumns}
                      rows={holeritesData}
                    />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
            {/* Demonstrato financeiras */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 border border-[#CACACA] rounded-[10px] h-full">
                  <Card className="">
                    <ResumeTable
                      tableColumns={hResumeColumns}
                      rows={hResumeData}
                    />
                  </Card>
                </div>
                <div className="col-span-12 border border-[#CACACA] rounded-[10px]">
                  <Card noborder>
                    <DetailsTable
                      tableColumns={holeritesColumns}
                      rows={holeritesData}
                    />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </div>
  );
};

export default TabAccrodain;
