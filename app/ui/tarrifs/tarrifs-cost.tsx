type Props = {
  previousCost: string;
  currentCost: string;
  className?: string;
};

export default function TariffCost({ previousCost, currentCost, className }: Props) {
  return (
    <div className={`flex gap-4 items-end ${className}`}>
      <p className={`text-[74px] max-md:text-[64px] font-bold leading-[1.25]`}>{previousCost}</p>
      <p className={`text-[20px] font-bold line-through`}>{currentCost}</p>
    </div>
  );
}
