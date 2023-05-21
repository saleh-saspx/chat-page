import { useCallback, useState } from "react";
import Button from "../Button";
import HistoryItem from "./HistoryItem";
import cuid from "cuid";
import { RiMessage3Fill } from "react-icons/ri";
import GPT4Modal from "./GPT4Modal";
import Score from "../navbar/Score";
import WordCountProgress from "./WordCountProgress";

const buttons = [
  { label: "ChatGPT 3.5" },
  { label: "ChatGPT Plus" },
  { label: "ChatGPT Pro" },
];
const demoHistory = [
  { id: cuid(), label: "انواع ماساژ" },
  { id: cuid(), label: "نام دکتر تهرانی" },
  { id: cuid(), label: "برنامه نویسی پایتون" },
  { id: cuid(), label: "بهترین روش نظرسنجی" },
  { id: cuid(), label: "دین شیعه" },
  { id: cuid(), label: "سینمای بالیوود" },
];

const ChatMenu = () => {
  const [activeButton, setActiveButton] = useState("ChatGPT 3.5");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (data: boolean) => {
    setShowModal(data);
  };
  const handleClick = useCallback((label: string) => {
    setActiveButton(label);
  }, []);
  return (
    <div className="px-10 py-5 relative w-1/4 max-md:w-full max-md:pb-0 max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 ">
      <div className="flex items-center gap-3 dark:text-white md:hidden">
        <RiMessage3Fill  className="text-icon" size={20} />
        <p>سابقه</p>
      </div>
      <div className="flex rounded-full my-4 text-sm bg-white dark:bg-primary-dark">
        {buttons.map((button) => (
          <Button
            onClick={
              "ChatGPT 3.5" !== button.label
                ? () => handleShowModal(true)
                : undefined
            }
            active={"ChatGPT 3.5" === button.label}
            key={button.label}
            label={button.label}
          />
        ))}
      </div>
      <div className="space-y-4 max-md:hidden">
        {demoHistory.map((item) => (
          <HistoryItem key={item.id} label={item.label} />
        ))}
      </div>
      {/*{showModal && <GPT4Modal onOpen={handleShowModal} />}*/}
      {/*<WordCountProgress className="absolute -bottom-12 right-3 max-md:hidden" />*/}
    </div>
  );
};
export default ChatMenu;
