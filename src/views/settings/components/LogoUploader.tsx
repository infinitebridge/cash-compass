import React, { useState } from 'react';

interface LogoUploadProps {
  onFileSelect: (file: File | null) => void;
}

const LogoUploader = ({ onFileSelect }: LogoUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onFileSelect(file);
    } else {
      setPreview(null);
      onFileSelect(null);
    }
  };

  return (
    <div className="my-5 flex">
      <label
        htmlFor="logo-upload"
        className="relative flex h-36 w-36 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-400 bg-gray-100"
      >
        {preview ? (
          <img
            src={preview}
            alt="Logo Preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-500">Upload Logo</span>
        )}
      </label>
      <input
        id="logo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default LogoUploader;
