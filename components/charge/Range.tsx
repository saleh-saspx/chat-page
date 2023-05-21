import { ChangeEvent, useEffect, useState } from "react";

interface RangeProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Range: React.FC<RangeProps> = ({ value, onChange }) => {
  const [Inputvalue, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <div className="relative">
      <input
        type="range"
        value={Inputvalue}
        min="10"
        max="10000"
        onChange={onChange}
        className="custom-range w-full my-2"
      />{" "}
      <label className="absolute left-0 -top-4 dark:text-white">10</label>
      <label className="absolute right-0 -top-4 dark:text-white">10000</label>
    </div>
  );
};
export default Range;
