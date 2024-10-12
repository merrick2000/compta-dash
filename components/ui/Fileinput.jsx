import React from "react";

const Fileinput = ({
  name,
  label = "Selecionar arquivo PDF",
  onChange,
  placeholder = "arraste e solte o PDF aqui",
  multiple,
  preview,
  className = "custom-class",
  id,
  selectedFile,
  badge,
  selectedFiles,
}) => {
  return (
    <div>
      <div className="filegroup">
        <label>
          <input
            type="file"
            onChange={onChange}
            className="bg-red-400 w-full hidden"
            name={name}
            id={id}
            multiple={multiple}
            placeholder={placeholder}
          />
          <div
            className={`w-full file-control flex items-center justify-between p-2 border border-gray-300 rounded-md ${className}`}
          >
            {!multiple && (
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
                {selectedFile && (
                  <span className={badge ? "badge-title" : "text-gray-700"}>
                    {selectedFile.name}
                  </span>
                )}
                {!selectedFile && <span>{placeholder}</span>}
              </span>
            )}

            {multiple && (
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
                {selectedFiles.length > 0 && (
                  <span className={badge ? "badge-title" : "text-gray-700"}>
                    {selectedFiles.length > 0
                      ? selectedFiles.length + " files selected"
                      : ""}
                  </span>
                )}
                {selectedFiles.length === 0 && <span>{placeholder}</span>}
              </span>
            )}
            <span className="file-name flex-none cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              {label}
            </span>
          </div>
          {!multiple && preview && selectedFile && (
            <div className="w-[200px] h-[200px] mx-auto mt-6">
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
                className="w-full h-full block rounded object-contain border p-2 border-slate-200"
                alt={selectedFile?.name}
              />
            </div>
          )}
          {multiple && preview && selectedFiles.length > 0 && (
            <div className="flex flex-wrap space-x-5 rtl:space-x-reverse">
              {selectedFiles.map((file, index) => (
                <div
                  className="xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2 border-slate-200"
                  key={index}
                >
                  <img
                    src={file ? URL.createObjectURL(file) : ""}
                    className="object-cover w-full h-full rounded"
                    alt={file?.name}
                  />
                </div>
              ))}
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default Fileinput;
