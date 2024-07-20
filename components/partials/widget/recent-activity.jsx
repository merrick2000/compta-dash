const activity = [
  {
    id: 1,
    img: "Extrato bancário (Inter)",
  },
  {
    id: 2,
    img: "Comprovantes de pgto dos Holerites",
  },
  {
    id: 3,
    img: "Comprovante de pgto do Aluguel",
  },
  {
    id: 4,
    img: "Fatura do cartão (Inter)",
  },
  {
    id: 5,
    img: "Fatura Cartão (Nubank)",
  },

  

];

const RecentActivity = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium "> Arquivos pendentes </h3>
      </div>
      <div className="h-full overflow-y-auto">
        
      <ul className="list-item space-y-3 h-full overflow-x-auto">
        {activity.map((item, i) => (
          <li
            className="flex items-center space-x-3 rtl:space-x-reverse bg-[#E7E7E7] rounded-lg dark:border-slate-700 last:border-b-0 p-2"
            key={i}
          >
           
            <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
              <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">
                {item.img}
              </div>
            </div>
          
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RecentActivity;
