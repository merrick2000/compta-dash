"use client";
import dynamic from "next/dynamic";
import React, { useState, Fragment } from "react";
import Card from "@/components/ui/Card";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import RevenueBarChart from "@/components/partials/widget/chart/revenue-bar-chart";
import RadialsChart from "@/components/partials/widget/chart/radials";
import SelectMonth from "@/components/partials/SelectMonth";
import CompanyTable from "@/components/partials/table/company-table";
import RecentActivity from "@/components/partials/widget/recent-activity";
import RadarChart from "@/components/partials/widget/chart/radar-chart";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import Fileinput from "@/components/ui/Fileinput";
import Textarea from "@/components/ui/Textarea";
import Select from "react-select";
import AnalyticTable from "./company-table";

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
    <div>
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
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-8 col-span-12">
                  <Card >
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
                        <Button text="Enviar" className="bg-[#DB3A34] text-white rounded-3xl" />
                      </div>
                  </Card>
                </div>
                <div className="lg:col-span-4 col-span-12 h-full">
                  <Card className="h-full bg-white" >
                    <RecentActivity />
                  </Card>
                </div>
                <div className="lg:col-span-12 col-span-12">
                  <Card
               
                    noborder
                  >

                    <AnalyticTable
      />
                  </Card>
                </div>
               
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
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};



export default Dashboard;
