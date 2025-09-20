import { PropsWithChildren } from "react";

import Button from "./button";

type Props = PropsWithChildren<{
  showDiscont: boolean;
  size: 'small' | 'large';
  className: string;
  onClick: () => void;
}>;

export default function ProposalButton({
  showDiscont,
  size,
  className,
  onClick
}: Props) {
  return (
    <Button
      onClick={onClick}
      className={`
        shadow-[inset_7px_11px_18px_7px_rgba(167,93,243,0.2) relative rounded-full
        ${size === 'large' ? ' h-[74px]' : 'h-10'}
        ${className}
      `}
    >
      <p className={`${size === 'large' ? 'text-[22px]' : 'text-xs'} font-semibold`}>Придбати зi знижкою</p>

      {showDiscont && (
        <div className="w-[74px] h-[74px] absolute right-0 bg-[#FF4A77] rounded-full top-0 flex items-center justify-center">
          <p className="text-2xl font-semibold">-50%</p>
        </div>
      )}
    </Button>
  );
}
