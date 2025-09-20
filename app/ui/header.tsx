import { Sansation } from "next/font/google";
import Image from "next/image";
import ProposalButton from "./proposal-button";

const sansation = Sansation({
  subsets: ["latin"],
  weight: '700'
});

type Props = {
  openDialog: () => void;
};

export default function Header({ openDialog }: Props) {
  return (
    <header className="z-3 flex items-center justify-between pt-10 pb-[67px] px-20 sticky top-0 bg-[#0C0117]">
        <p className={`${sansation.className} font-bold text-lg uppercase flex-[1]`}>Aleko{' '}
          <span className="bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] bg-clip-text text-transparent">
            Sokurashvili
          </span>
        </p>

        <div className="flex items-center justify-between flex-[2]">
          <ul className="flex gap-7 items-center">
            <li className="cursor-pointer text-base font-medium">Структура</li>
            <li className="cursor-pointer text-base font-medium">Про мене</li>
            <li className="cursor-pointer text-base font-medium">Плюси</li>
            <li className="cursor-pointer text-base font-medium">Відгуки</li>
            <li className="cursor-pointer text-base font-medium">FAQ</li>
          </ul>

          <div className="flex items-center gap-[9px] cursor-pointer">
            <p className="text-base font-bold">UA</p>
            <Image width={16} height={16} src='/arrow.svg' alt='arrow' />
          </div>

          <ProposalButton
            showDiscont={false}
            size="small"
            onClick={openDialog}
            className="w-[190px] bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] text-white"
          />
        </div>
      </header>
  )
}
