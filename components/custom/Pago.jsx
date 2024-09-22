export const Pago = ({ status }) => {
  return (
    <div className="flex items-center">
      {/* Affichage du point coloré */}
      <span
        className={`w-3 h-3 rounded-full mr-2 ${
          status ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      {/* Affichage du texte "Sim" ou "Não" */}
      <span>{status ? "Sim" : "Não"}</span>
    </div>
  );
};
