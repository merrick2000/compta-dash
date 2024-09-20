/* eslint-disable react/display-name */
import React, { useState, useMemo } from "react";
import { homeTable } from "../../../constant/table-data";

import Icon from "@/components/ui/Icon";

import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
import useWidth from "@/hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    label: "Arquivos*",
    field: "Arquivos*",
  },
  {
    label: "Data de envio*",
    field: "Data de envio*",
  },

  {
    label: "Competência*",
    field: "Competência*",
  },
  {
    label: "Comentário*",
    field: "Comentário*",
  },
  {
    label: "Ver / Baixar*",
    field: "Ver / Baixar*",
  },
];

const TableData = [
  {
      "file": "Extrato bancário (Inter)",
      "uploadDate": "2024-04-05T16:34:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Boletos Pagos",
      "uploadDate": "2024-04-05T16:40:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Pagamento dos Holerites",
      "uploadDate": "2024-04-05T16:43:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Boleto Energia",
      "uploadDate": "2024-04-05T16:47:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Boleto Água",
      "uploadDate": "2024-04-05T16:47:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Boleto Internet",
      "uploadDate": "2024-04-05T16:48:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Comprovante de pgto ICMS",
      "uploadDate": "2024-04-05T16:49:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Fatura do Cartão de Crédito",
      "uploadDate": "2024-04-05T17:01:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Boleto Aluguel",
      "uploadDate": "2024-04-05T17:05:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  },
  {
      "file": "Extrato bancário (Nubank)",
      "uploadDate": "2024-04-05T17:15:00",
      "competence": "March/2024",
      "comment": "1 comentário"
  }
]


const AnalyticTable = () => {


 

  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="md:col-span-6 col-span-12">
            <h3 className="text-xl font-semibold" >Historico dos arquivos enviados  </h3>
         </div>
          <div className="md:col-span-6 col-span-12 flex justify-end">
          <TableHeader></TableHeader>
          </div>
        </div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className=" border-t border-slate-100 dark:border-slate-800">
                  <tr>
                    {columns.map((column, i) => (
                      <th key={i} scope="col" className=" table-th ">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {TableData.map((row, i) => (
                    <tr key={i}>
                      <td className="table-td">{row.file}</td>
                      <td className="table-td">{row.uploadDate}</td>
                      <td className="table-td ">{row.competence}</td>
                      <td className="table-td ">{row.comment}</td>
                      <td className="table-td ">
                        <div className="flex space-x-4">
                          <Icon icon="heroicons:eye" />
                          <Icon icon="heroicons:cloud" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};




const TableHeader = ({ onChange }) => {
  const { width, breakpoints } = useWidth();
  const { mobileTodoSidebar } = useSelector((state) => state.todo);
  const actions = [
    {
      name: "Reset Sort",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Sort A-Z ",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: " Sort Z-A ",
      icon: "heroicons-outline:sort-descending",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div className="w-[fit-content] md:flex justify-end gap-x-2 items-center sticky bg-[#E7E7E7] mb-2 rounded-xl dark:bg-slate-800 top-0 pt-2 pb-2 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 ">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        {width < breakpoints.lg && (
          <div
            className="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900
           dark:text-slate-400 flex flex-col justify-center items-center md:text-base
            text-sm rounded-full cursor-pointer"
            onClick={() =>
              dispatch(toggleMobileTodoSidebar(!mobileTodoSidebar))
            }
          >
            <Icon icon="heroicons-outline:menu-alt-2" />
          </div>
        )}
        <div className="max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse">
          <div className="flex-1">
            <input
              onChange={onChange}
              type="text"
              placeholder="Pesquise por arquivo"
              className="bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"
            />
          </div>
        </div>
          <div className="flex-none dark:text-slate-300">
            <Icon icon="heroicons-outline:search" />
          </div>
      </div>
      <div className="md:block hidden">
        <Dropdown
          classMenuItems="w-[130px]"
          label={
            <span className="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100">
              <Icon icon="heroicons-outline:dots-vertical" />
            </span>
          }
        >
          {actions.map((item, i) => (
            <Menu.Item key={i}>
              <div
                className={`
                
                  ${"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `}
              >
                <span className="text-base">
                  <Icon icon={item.icon} />
                </span>
                <span>{item.name}</span>
              </div>
            </Menu.Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default AnalyticTable;
