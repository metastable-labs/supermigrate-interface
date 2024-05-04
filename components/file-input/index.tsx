"use client";

import { DragEvent, useRef, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { ISMFileInput } from "./types";
import { UploadIcon } from "@/public/icons";

const SMFileInput = ({
  name,
  handleFileChange,
  disabled,
  isRequired,
  label,
  network = "base",
}: ISMFileInput) => {
  const documentInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleButtonClick = () => {
    if (documentInputRef.current) {
      documentInputRef.current.click();
    }
  };

  const handleDocumentDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const fileEvent = { target: { files: event.dataTransfer.files } };
      handleFileChange(fileEvent);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div
      className={classNames(
        "w-full text-sm tracking-[-0.084px] text-primary-50 flex flex-col items-start gap-1",
        {
          "pointer-events-none": disabled,
        }
      )}
    >
      <label
        htmlFor={name}
        className={classNames("", {
          "flex items-center justify-center gap-2 text-primary-50 font-medium":
            isRequired,
        })}
      >
        {label}
        <span className="text-primary-1950 font-normal">{"(Required)"}</span>
      </label>

      <div
        className={classNames(
          "w-full p-8 flex flex-col gap-5 items-center bg-white rounded-xl border border-dashed transition-colors duration-300",
          {
            "border-primary-1300": !isDragOver,
            "border-primary-1650": network === "base" && isDragOver,
            "border-primary-1950": network === "optimism" && isDragOver,
            "border-primary-500": network === "mode" && isDragOver,
            "border-primary-550": network === "scroll" && isDragOver,
          }
        )}
        onDrop={handleDocumentDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragOver(false)}
      >
        <motion.div animate={{ scale: isDragOver ? 1.5 : 1 }}>
          <UploadIcon />
        </motion.div>

        <p className="flex flex-col self-stretch gap-1 text-center">
          <span className="text-primary-50 text-sm tracking-[-0.084px] font-medium">
            Choose a file or drag & drop it here.
          </span>
          <span className="text-primary-2050 text-xs font-normal">
            SVG formats, up to 5 MB.
          </span>
        </p>

        <button
          onClick={handleButtonClick}
          className="px-4 py-[6px] flex items-center justify-center shadow-fade-dark rounded-lg bg-white border border-primary-250"
        >
          <span className="text-sm tracking-[-0.084px] text-primary-200 font-medium text-center px-1">
            Browse
          </span>
        </button>
      </div>

      <input
        ref={documentInputRef}
        id="file-input"
        type="file"
        accept=".svg"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default SMFileInput;
