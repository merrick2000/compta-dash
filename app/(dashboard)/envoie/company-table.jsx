/* eslint-disable react/display-name */
import React, { useState, useMemo, useEffect } from "react";
import { homeTable } from "../../../constant/table-data";
import Card from "@/components/ui/Card";
import InputGroup from "@/components/ui/InputGroup";

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

const AnalyticTable = ({ data, type, screen, tableColumns, title }) => {
  return (
    <>
      <DetailsTable
        tableColumns={tableColumns}
        type={type}
        rows={data ? data : []}
        tableTitle={title}
      />
    </>
  );
};

const TableHeader = ({ onChange }) => {
  const { width, breakpoints } = useWidth();
  const { mobileTodoSidebar } = useSelector((state) => state.todo);
  const actions = [
    {
      name: "Redefinir classificação",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Data de envio",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Competência",
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
          <Icon width={18} icon="heroicons-adjustments-horizontal" />
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

export const DetailsTable = ({
  rows,
  type,
  screen,
  tableColumns,
  tableTitle,
}) => {
  const columns =
    tableColumns && tableColumns.length > 0
      ? tableColumns
      : [
          { label: "Arquivos", field: "file" },
          { label: "Data de envio", field: "uploadDate" },
          { label: "Competência", field: "competence" },
          { label: "Comentário", field: "comment" },
          { label: "Ver / Baixar", field: "actions" },
        ];

  let tableCells;

  if (rows && rows.length > 0) {
    tableCells = rows.map((row, i) => (
      <tr key={i} className="even:bg-slate-200 dark:even:bg-slate-700">
        {/* Affichage dynamique des données */}
        {Object.keys(row).map((key, j) => {
          if (type === "pessoal" && key === "comment") {
            return null; // Ignore la clé "comment" si type = "pessoal"
          }
          return (
            <td key={j} className="table-td">
              {row[key]}
            </td>
          );
        })}
        {/* Ajout des deux colonnes pour les icônes à la fin de chaque ligne */}
        <td className="table-td flex justify-start pl-[18%] gap-4">
          {/* Icône "œil" pour la visualisation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>

          {/* Icône de téléchargement */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cloud-download-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z"
            />
          </svg>
        </td>
      </tr>
    ));
  }

  return (
    <Card title="">
      <div className="-mx-6">
        <div className="inline-block min-w-full align-middle">
          <div className="flex justify-between items-center ml-[2%] mr-[5%] mb-5">
            <span className="font-[inter] font-semibold text-xl ">
              {" "}
              {tableTitle ?? "Historico"}{" "}
            </span>
            <TableHeader onChange={() => console.log("change")} />
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
              <thead>
                <tr>
                  {columns.map((column, i) => {
                    if (type === "pessoal" && column.field === "comment") {
                      return null;
                    }
                    return (
                      <th key={i} scope="col" className="table-th">
                        {column.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                {tableCells}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnalyticTable;
