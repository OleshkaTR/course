import Image from "next/image";
import ProposalButton from "./proposal-button";
import { sansation } from "./fonts";

type Props = {
  openDialog: () => void;
};

export default function Header({ openDialog }: Props) {
  return (
    <header className="z-3 flex items-center justify-between max-sm:pt-[51px] max-sm:px-10 pt-10 max-sm:pb-6 pb-[67px] px-20 sticky top-0 bg-[#0C0117]">
        <p className={`${sansation.className} font-bold max-sm:text-base text-lg uppercase`}>Aleko{' '}
          <span className="bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] bg-clip-text text-transparent">
            Sokurashvili
          </span>
        </p>

        <div className="flex items-center justify-end gap-[57px]">
          <ul className="flex gap-7 items-center max-sm:hidden">
            <li className="cursor-pointer text-base font-medium">Структура</li>
            <li className="cursor-pointer text-base font-medium">Про мене</li>
            <li className="cursor-pointer text-base font-medium">Плюси</li>
            <li className="cursor-pointer text-base font-medium">Відгуки</li>
            <li className="cursor-pointer text-base font-medium">FAQ</li>
          </ul>

          <div className="flex items-center gap-[9px] cursor-pointer">
            <p className="text-base max-sm:text-sm font-bold">UA</p>
            <Image width={16} height={16} src='/arrow.svg' alt='arrow' />
          </div>

          <ProposalButton
            showDiscont={false}
            size="small"
            onClick={openDialog}
            className="w-[190px] bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] text-white max-sm:hidden"
          />
        </div>

        <Image width={35} height={35} src='/menu.svg' alt='menu' className="max-sm:block hidden" />
      </header>
  )
}
