import React, { useCallback, useState } from "react";

interface TextareaProps {
  value: string | undefined;
  placeholder: string;
  onChange: (data: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  onKeyDown,
  value,
  placeholder,
  onChange,
}) => {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        onChange(`${value}\n`);
      } else {
        onKeyDown(event);
      }
    },
    [value, onChange, onKeyDown]
  );

  return (
    <textarea
      value={value}
      onKeyDown={handleKeyDown}
      dir="rtl"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      className="rounded-xl pt-4 px-3 w-full h-[55px] focus:outline-none resize-none dark:text-white dark:bg-primary-dark"
    />
  );
};

export default Textarea;