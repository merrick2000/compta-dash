import React from "react";

import Card from "@/components/ui/Card";

export const ResumeTable = ({ rows, tableColumns }) => {
  const columns = tableColumns && tableColumns.length > 0 ? tableColumns : [];

  let tableCells;

  if (rows && rows.length > 0) {
    tableCells = rows.map((row, i) => (
      <tr key={i} className="even:bg-slate-200 dark:even:bg-slate-700">
        {/* Affichage dynamique des données */}
        {Object.keys(row).map((key, j) => {
          return (
            <td key={j} className="table-td">
              {row[key]}
            </td>
          );
        })}
        {/* Ajout des deux colonnes pour les icônes à la fin de chaque ligne */}
        <td className="table-td flex justify-start gap-4">
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
      <div className="overflow-x-auto -mx-6">
        <div className="inline-block min-w-full align-middle">
          {/* <div className="flex justify-end mb-5">
            <TableHeader onChange={() => console.log("change")} />
          </div> */}
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
              <thead>
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
                {tableCells}
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
