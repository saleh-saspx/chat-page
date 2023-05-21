import { ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";

interface CalendarModalProps {
  isOpen: boolean;
  day: string;
  month: string;
  year: string;
  onClose: () => void;
  onSubmit: () => void;
  handleYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMonthChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDayChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  day,
  month,
  year,
  onClose,
  onSubmit,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
}) => {
  let bodyContent = (
    <>
      <div className="grid grid-cols-3 gap-5 max-w-2xl">
        <div className="text-center mx-auto">
          <p>سال</p>
          <input
            onChange={handleYearChange}
            type="number"
            defaultValue={year}
            min={1300}
            className="bg-secondary px-3 py-2 w-full text-center rounded-2xl"
          />
        </div>
        <div className="text-center">
          <p>ماه</p>
          <input
            onChange={handleMonthChange}
            type="number"
            defaultValue={month}
            min={1}
            max={12}
            className="bg-secondary px-3 py-2 w-full text-center rounded-2xl"
          />
        </div>
        <div className="text-center">
          <p>روز</p>
          <input
            onChange={handleDayChange}
            type="number"
            defaultValue={day}
            min={1}
            max={31}
            className="bg-secondary px-3 py-2 w-full text-center rounded-2xl"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-full px-3 py-2 bg-orange-400 text-white rounded-full"
      >
        ذخیره
      </button>
    </>
  );
  if (isOpen) {
    return <Modal bodyContent={bodyContent} onClose={onClose} />;
  } else {
    return null;
  }
};
export default CalendarModal;
