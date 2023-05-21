import { ChangeEvent } from "react";
import TextContainer from "./TextContainer";
import { type } from "os";

interface InputContainerProps {
  type: string;
  value?: string;
  step?:number,
  min?:number,
  max?:number
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  onBlur?:()=>void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const InputContainer: React.FC<InputContainerProps> = ({
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  type,
  min,
  max,
  step,
  label,
}) => {
  return (
    <TextContainer>
      <div className="relative w-[90%] mx-auto">
        <input
          type={type}
          className="bg-transparent w-full outline-none text-center"
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          min={min}
          max={max}
          step={step}
          onBlur={onBlur}
          onChange={onChange}
        />
        <span className="absolute left-0">{label}</span>
      </div>
    </TextContainer>
  );
};
export default InputContainer;
