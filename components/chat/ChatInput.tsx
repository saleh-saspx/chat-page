import { HiPaperAirplane } from "react-icons/hi";
import Textarea from "../Textarea";
import { useCallback, useState } from "react";
import cuid from "cuid";

interface messageInterFace{
  id:string,
  isBot:boolean,
  message:string | undefined,
}
interface ChatInputProps {
  onSubmit: (message: messageInterFace) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>('');

  const handleInput = useCallback((data: string) => {
    setInput(data);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      onSubmit({ id: cuid(), isBot: false, message: input });
      setInput('');
    }
  }, [input, onSubmit]);

  return (
    <div className="py-4 px-40 fixed bottom-0 left-0 w-4/5 max-md:w-full max-md:px-8 bg-background dark:bg-background-dark ">
      <div className="flex my-5 justify-between w-full h-[60px] items-center rounded-full bg-white px-3 py-2 dark:bg-primary-dark  ">
        <HiPaperAirplane
          onClick={() => {
            onSubmit({ id: cuid(), isBot: false, message: input });
            setInput('')
          }}
          size={30}
          className="text-primary -rotate-90 cursor-pointer mx-5 dark:text-secondary"
        />
        <Textarea
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          value={input}
          placeholder="از لیبرا بپرسید"
        />
      </div>
    </div>
  );
};
export default ChatInput;