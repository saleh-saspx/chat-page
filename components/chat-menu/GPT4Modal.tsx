import React, { useEffect, useState } from "react";
import Modal from "../Modal";
interface GPT4ModalProps {

  onOpen:(data:boolean)=>void,
}
const GPT4Modal: React.FC<GPT4ModalProps> = ({ onOpen }) => {
  const bodyContent = (
    <div className="text-center w-full">
      <p>برای استفاده از نسخه 4 امتیاز خود را افزایش دهید</p>
    </div>
  );
  return <Modal onClose={()=>onOpen(false)}  bodyContent={bodyContent} />;
};
export default GPT4Modal;
