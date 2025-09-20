type Props = {
  benefits: string[];
  className?: string;
};

export default function TariffBenefits({ benefits, className }: Props) {
  return (
    <ul className="flex flex-col gap-3.5">
      {benefits.map((benefit) => (
        <li
          key={benefit}
          className={`uppercase text-base font-semibold flex items-center gap-2 leading-[1.1] ${className}`}
        >
          <span className="shrink-0 inline-block w-[15px] h-[15px] rounded-full" />{' '}
            {benefit}
        </li>
      ))}
    </ul>
  );
}
