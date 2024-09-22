import React, { useState, useCallback, useMemo } from "react";
import { Icon } from "@iconify/react";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // Mars 2024

  const days = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const specialDays = useMemo(
    () => ({
      "2024-03-03": { style: "bg-red-100 text-red-500" },
      "2024-03-05": { style: "bg-red-500 text-white" },
      "2024-03-16": { style: "bg-red-500 text-white" },
      "2024-03-20": { style: "bg-red-500 text-white" },
      "2024-03-21": { style: "bg-red-500 text-white" },
    }),
    []
  );

  const getDaysInMonth = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  }, []);

  const changeMonth = useCallback((increment) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + increment);
      return newDate;
    });
  }, []);

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentDate),
    [currentDate, getDaysInMonth]
  );
  const firstDayOfMonth = useMemo(
    () =>
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(),
    [currentDate]
  );

  return (
    <div className="w-full h-full border border-black-300 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-700">Calendário</h2>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-gray-600">{`${
            months[currentDate.getMonth()]
          } | ${currentDate.getFullYear()}`}</span>
          <div className="flex">
            <Icon
              icon="ph:caret-left-fill"
              className="w-4 h-4 text-gray-400 cursor-pointer"
              onClick={() => changeMonth(1)}
            />
            <Icon
              icon="ph:caret-right-fill"
              className="w-4 h-4 text-gray-400 cursor-pointer"
              onClick={() => changeMonth(1)}
            />
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
          {Array.from({
            length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
          }).map((_, index) => (
            <div key={`empty-${index}`} className="w-8 h-8" />
          ))}
          {daysInMonth.map((date) => {
            const dateString = date.toISOString().split("T")[0];
            const isSpecialDay = specialDays[dateString];
            return (
              <div
                key={date.getTime()}
                className={`flex items-center justify-center w-8 h-8 text-sm
                  ${isSpecialDay ? isSpecialDay.style : "text-gray-700"}
                  ${date.getDate() === 4 ? "ring-1 ring-gray-300" : ""}
                  rounded-full
                `}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
