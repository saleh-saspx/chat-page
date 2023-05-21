const PaymentCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 items-center">
      <div className="px-2 py-1 flex items-center text-sm text-center justify-center rounded-xl bg-green-100 text-green-700">
        <p>پرداخت شده</p>
      </div>
      <div className="flex items-center text-icon justify-center gap-2">
        <p>تومان</p>
        <p>76000</p>
      </div>
      <p className="text-icon">#1234534</p>
    </div>
  );
};
export default PaymentCard;
