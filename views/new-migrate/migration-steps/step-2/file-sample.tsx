"use client";

import { DeleteIcon, CheckSmallIcon } from "@/public/icons";
import { AnimatePresence, motion } from "framer-motion";

const FileSample = ({
  file,
  deleteFile,
}: {
  file: File | null | undefined;
  deleteFile: () => void;
}) => {
  const formatFileSize = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  };

  const fileSize = file ? formatFileSize(file.size) : "";

  return (
    <AnimatePresence>
      {file && (
        <motion.div
          key={file.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-start items-start md:justify-between md:items-center gap-3 py-4 pl-[14px] pr-4 rounded-xl bg-white border border-primary-250"
        >
          <div className="flex items-center justify-center gap-3">
            <div></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <span className="text-primary-50 tracking-[-0.084px] font-medium text-sm">
                {file.name}
              </span>
              <div className="flex items-center gap-1 text-xs font-normal">
                <span className="text-primary-200 uppercase">
                  {fileSize} <span className="lowercase">of</span> {fileSize}
                </span>

                <span className="w-[2px] h-[2px] bg-primary-200 rounded-full" />

                <CheckSmallIcon />

                <span className="text-primary-50">Completed</span>
              </div>
            </div>
          </div>

          <div
            onClick={deleteFile}
            className="flex items-center justify-center p-[2px] cursor-pointer"
          >
            <DeleteIcon />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FileSample;
