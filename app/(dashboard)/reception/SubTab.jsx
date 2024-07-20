import React from "react";

import Card from "@/components/ui/Card";
import InputGroup from "@/components/ui/InputGroup";
import Button from "@/components/ui/Button";

export const ResumeTable = ({ rows }) => {
  const columns = [
    {
      label: "Funcionários",
      field: "employee",
    },
    {
      label: "Competência",
      field: "competence",
    },

    {
      label: "Vencimento",
      field: "gross",
    },

    {
      label: "Valor a pagar",
      field: "amountPaid",
    },
    {
      label: "Impostos",
      field: "taxes",
    },
    {
      label: "Baixar",
      field: "download",
    },
  ];

  return (
    <Card title="">
      <div className="overflow-x-auto -mx-6">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
              <thead className="bg-slate-200 dark:bg-slate-700">
                <tr>
                  {columns.map((column, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={
                        "bg-red-500 table-th text-white " +
                        (i == 0
                          ? "rounded-l-full"
                          : i == columns.length - 1
                          ? "rounded-r-full"
                          : "")
                      }
                    >
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
                    <td className="table-td ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cloud-download-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};
export const DetailsTable = ({ rows }) => {
  const columns = [
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

  return (
    <Card title="">
      <div className="overflow-x-auto -mx-6">
        <div className="inline-block min-w-full align-middle">
          {/*serche*/}
          <div className="flex justify-end mb-5">
            <InputGroup
              type="text"
              placeholder="Pesquise por arquivo"
              append={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                </svg>
              }
            />
          </div>
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
                    <td className="table-td ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cloud-download-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default function SubTab() {
  return <div>SubTab</div>;
}
