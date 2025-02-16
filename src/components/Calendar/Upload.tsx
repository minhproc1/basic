import { useState, ChangeEvent } from "react";
import PaperclipIcon from "../../assets/paperclip.svg";

const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label className="w-24 text-[#562C2C] font-medium text-[16px]">
        Fichier:
      </label>
      {/* Hidden File Input */}
      <input
        type="file"
        multiple
        className="hidden"
        id="fileInput"
        onChange={handleFileChange}
      />
      {/* Upload Button */}
      <label htmlFor="fileInput" className="flex items-center">
        <img src={PaperclipIcon} />
        <span className="text-[#1E88F9] text-1xl">Pièce jointe</span>
      </label>
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium">Selected Files:</h3>
          <ul className="mt-2 space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-2 border rounded-lg"
              >
                {/* Image Preview */}
                {file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                )}
                <span className="text-sm">{file.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
