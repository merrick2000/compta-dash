"use client";
import dynamic from "next/dynamic";
import React, { useState, Fragment } from "react";
import Card from "@/components/ui/Card";
import RecentActivity from "@/components/partials/widget/recent-activity";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import { Tab } from "@headlessui/react";
import Fileinput from "@/components/ui/Fileinput";
import Textarea from "@/components/ui/Textarea";
import Select from "react-select";
import AnalyticTable from "./company-table";
import { Text } from "recharts";

const MostSales = dynamic(
  () => import("@/components/partials/widget/most-sales"),
  {
    ssr: false,
  }
);

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

const furits = [
  { value: "chocolate", label: "Extrato Bancário (Inter)" },
  { value: "strawberry", label: "Extrato Bancário (Inter)" },
  { value: "vanilla", label: "Extrato Bancário (Inter)" },
];

const furits1 = [
  { value: "chocolate", label: "Março/2024" },
  { value: "strawberry", label: "Março/2024" },
  { value: "vanilla", label: "Março/2024" },
];

const categories = [
  {
    value: "facebook_ads",
    label: "NFSe Facebook Ads",
  },
  {
    value: "google_ads",
    label: "NFSe Google Ads",
  },
  {
    value: "email_marketing",
    label: "NFSe E-mail Marketing",
  },
  {
    value: "tiktok_ads",
    label: "NFSe Tiktok Ads",
  },
  {
    value: "marketplace",
    label: "NFSe Marketplace",
  },
  {
    value: "shopify",
    label: "NFSe Shopify",
  },
];

const TributarioTableData = [
  {
    file: "NFSe Facebook Ads",
    uploadDate: "2024-09-21T10:00:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
  {
    file: "NFSe Google Ads",
    uploadDate: "2024-09-21T10:05:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
  {
    file: "NFSe E-mail Marketing",
    uploadDate: "2024-09-21T10:10:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
  {
    file: "NFSe Tiktok Ads",
    uploadDate: "2024-09-21T10:15:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
  {
    file: "NFSe Marketplace",
    uploadDate: "2024-09-21T10:20:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
  {
    file: "NFSe Shopify",
    uploadDate: "2024-09-21T10:25:00",
    competence: "Septembre/2024",
    comment: "1 comentário",
  },
];

const ComptabilTableData = [
  {
    file: "Extrato bancário (Inter)",
    uploadDate: "2024-04-05T16:34:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Boletos Pagos",
    uploadDate: "2024-04-05T16:40:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Pagamento dos Holerites",
    uploadDate: "2024-04-05T16:43:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Boleto Energia",
    uploadDate: "2024-04-05T16:47:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Boleto Água",
    uploadDate: "2024-04-05T16:47:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Boleto Internet",
    uploadDate: "2024-04-05T16:48:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Comprovante de pgto ICMS",
    uploadDate: "2024-04-05T16:49:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Fatura do Cartão de Crédito",
    uploadDate: "2024-04-05T17:01:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Boleto Aluguel",
    uploadDate: "2024-04-05T17:05:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
  {
    file: "Extrato bancário (Nubank)",
    uploadDate: "2024-04-05T17:15:00",
    competence: "March/2024",
    comment: "1 comentário",
  },
];
const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};

const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="">
      {/* <HomeBredCurbs title="Dashboard" /> */}
      <div className="">
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
            {/* Comptabil */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className=" lg:col-span-8 col-span-12">
                  <Card className="border border-[#CACACA] rounded-[10px] bg-white">
                    <div class="grid grid-cols-12 gap-5">
                      <div className="md:col-span-8 col-span-12  space-y-4">
                        <div>
                          <label htmlFor=" hh" className="form-label ">
                            Arquivo a enviar
                          </label>
                          <Select
                            className="react-select"
                            classNamePrefix="select"
                            defaultValue={furits[0]}
                            options={furits}
                            styles={styles}
                            id="hh"
                          />
                        </div>
                        <Fileinput
                          name="basic"
                          placeholder="arraste e solte o PDF aqui..."
                          selectedFile={selectedFile}
                          onChange={handleFileChange}
                        />
                        <Textarea
                          label="Comentário (Opcional)"
                          id="pn4"
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-4 col-span-12 space-y-4">
                        <div>
                          <label htmlFor=" hh" className="form-label ">
                            Competência
                          </label>
                          <Select
                            className="react-select"
                            classNamePrefix="select"
                            defaultValue={furits1[0]}
                            options={furits1}
                            styles={styles}
                            id="hh"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        text="Enviar"
                        className="bg-[#DB3A34] text-white rounded-[100px] "
                      />
                    </div>
                  </Card>
                </div>
                <div className="lg:col-span-4 col-span-12 h-full">
                  <Card className="h-full bg-white border border-[#CACACA] rounded-[10px]">
                    <RecentActivity type="comptable" />
                  </Card>
                </div>
                <div className="h-[65vh] custom-scrollbar lg:col-span-12 col-span-12">
                  <Card className="border border-[#CACACA] rounded-[10px] bg-white">
                    <AnalyticTable data={ComptabilTableData} screen="send" />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
            {/* Tributario */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-8 col-span-12">
                  <Card className="border border-[#CACACA] rounded-[10px] bg-white">
                    <div class="grid grid-cols-12 gap-5">
                      <div className="md:col-span-8 col-span-12  space-y-4">
                        <div>
                          <label htmlFor=" hh" className="form-label ">
                            Categoria do arquivo
                          </label>
                          <Select
                            className="react-select"
                            classNamePrefix="select"
                            defaultValue={categories[0]}
                            options={categories}
                            styles={categories}
                            id="hh"
                          />
                        </div>
                        <Fileinput
                          name="basic"
                          placeholder="arraste e solte o PDF aqui..."
                          selectedFile={selectedFile}
                          onChange={handleFileChange}
                        />
                        <Textarea
                          label="Comentário (Opcional)"
                          id="pn4"
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-4 col-span-12 space-y-4">
                        <div>
                          <label htmlFor=" hh" className="form-label ">
                            Competência
                          </label>
                          <Select
                            className="react-select"
                            classNamePrefix="select"
                            defaultValue={furits1[0]}
                            options={furits1}
                            styles={styles}
                            id="hh"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        text="Enviar"
                        className="bg-[#DB3A34] text-white rounded-3xl"
                      />
                    </div>
                  </Card>
                </div>
                <div className="lg:col-span-4 col-span-12 h-full">
                  <Card className="h-full bg-white border border-[#CACACA] rounded-[10px]">
                    <RecentActivity type="tributario" />
                  </Card>
                </div>
                <div className="lg:col-span-12 col-span-12">
                  <Card className="border border-[#CACACA] rounded-[10px] bg-white">
                    <AnalyticTable data={TributarioTableData} />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
            {/* Pessoal */}
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <Text className="text-lg font-bold">
                    Relatório mensal de pontos dos funcionários | Competência:
                    &nbsp;
                  </Text>
                  <Text>Nov/2024</Text>
                  <Card className=" bg-white border border-[#CACACA] rounded-[10px] border-dashed">
                    <div className="h-full w-[90%] inline-block text-center space-y-4">
                      <div className="flex flex-col items-center justify-center">
                        <Icon
                          icon="bi:cloud-plus"
                          className="text-gray-300"
                          width={150}
                          height={150}
                        />
                        <span className="text-gray-500">
                          Solte arquivo aqui ou clique para fazer upload
                        </span>
                      </div>
                    </div>

                    <div className="inline-block absolute top-[22.8em] ">
                      <Button
                        text="Enviar"
                        className="bg-[#DB3A34] pb-1 pt-1 text-white rounded-3xl"
                      />
                    </div>
                  </Card>
                </div>
                {/* <div className="lg:col-span-4 col-span-12 h-full">
                  <Card className="h-full bg-white">
                    <RecentActivity type="tributario" />
                  </Card>
                </div> */}
                <div className="lg:col-span-12 col-span-12">
                  <Card className="border border-[#CACACA] rounded-[10px] bg-white">
                    <AnalyticTable type="pessoal" data={TributarioTableData} />
                  </Card>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Dashboard;
