export const Recalculo = ({ isEnabled }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        isEnabled ? "bg-green-500 text-white" : "bg-green-200 text-gray-500"
      }`}
      disabled={!isEnabled}
    >
      Recalcular
    </button>
  );
};
