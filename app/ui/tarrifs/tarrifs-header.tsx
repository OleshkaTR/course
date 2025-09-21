import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export default function TariffHeader({ title, className, children }: Props) {
  return (
    <div className={`flex items-center justify-between gap-[11px] ${className}`}>
      <p className="text-[20px] max-sm:text-base font-semibold uppercase">{title}</p>

      {children}
    </div>
  );
}
