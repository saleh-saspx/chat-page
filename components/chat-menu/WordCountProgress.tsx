interface WordCountProgressProps {
  className?: string;
}
const WordCountProgress: React.FC<WordCountProgressProps> = ({ className }) => {
  return (
    <div className={`w-full space-y-4 ${className}`}>
      <p dir="rtl" className="px-10 text-sm dark:text-icon">
        شما 60 درصد از اعتبار ماهانه را استفاده کردید
      </p>
      <div className="w-[80%] mx-auto rounded-full h-2 bg-icon flex justify-end">
        <div className="w-[60%] bg-primary h-full rounded-full"></div>
      </div>
      <div className="flex px-10 gap-3 text-sm dark:text-icon justify-end items-center">
        <p>کلمه</p>
        <p>1000/603</p>
      </div>
    </div>
  );
};
export default WordCountProgress;
