import { ReactNode } from "react";

interface TextContainerProps {
  children: ReactNode;
}
const TextContainer: React.FC<TextContainerProps> = ({ children }) => {
  return (
    <div dir="rtl" className="w-full border border-neutral-400 rounded-full py-2 flex  items-center text-black justify-center dark:bg-icon max-md:flex-col">
      {children}
    </div>
  );
};
export default TextContainer;
