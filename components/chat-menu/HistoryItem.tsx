import React from "react";
import Image from "next/image";
import { RiMessage3Fill } from "react-icons/ri";
import { BsTrash3 } from "react-icons/bs";

interface HistoryItemProps {
  label: string;
}
const HistoryItem: React.FC<HistoryItemProps> = ({ label }) => {
  return (
    <div className="grid grid-cols-4 w-full justify-center items-center gap-5">
      <button aria-label="delete">
        <BsTrash3 className="text-icon" />
      </button>
      <p dir="rtl" className="dark:text-white col-span-2">
        {label}
      </p>
      <div dir="rtl" className="w-full">
        <RiMessage3Fill size={20} className="text-icon" />
      </div>
    </div>
  );
};
export default HistoryItem;
