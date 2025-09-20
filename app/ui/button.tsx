import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick: () => void;
  className?: string;
}>;

export default function Button({ onClick, className, children }: Props) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
