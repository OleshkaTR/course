import Image from "next/image";

import ProposalButton from "./proposal-button";

type Props = {
  openDialog: () => void;
};

export default function Intro({ openDialog }: Props) {
  return (
    <div className="flex flex-col gap-[42px] max-md:gap-8 relative">
      <div className="flex gap-10 max-md:hidden">
        <Image height={466} width={644} alt="Avtor" src="/avtor.svg" priority />

        <div className="pt-[84px] max-md:hidden">
          <p className="text-lg leading-[normal]">
            Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[11px] w-1/2 pr-9 max-md:hidden">
        <ProposalButton
          showDiscont
          size="large"
          onClick={openDialog}
          className="w-full bg-white text-[#000000] [&>div]:text-white"
        />

        <div className="flex items-center justify-center gap-4">
          <p className="text-2xl text-[#FF4A77]">1000грн</p>
          <p className="text-md line-through text-[#C5C5C5]">2000грн</p>
        </div>
      </div>


      <Image height={354} width={313} alt="Avtor" src="/avtor-mobile.svg" className="w-full max-md:block hidden rounded-[18px]" />

      <div className="flex flex-col max-md:-mt-[115px] max-md:gap-1 gap-[15px] max-md:text-center max-md:relative max-md:w-full absolute w-1/2 right-0 bottom-0">
        <p className="text-[32px] max-md:text-[21px] font-bold bg-gradient-to-r from-[#90E8FF] to-[#9C9EFF] bg-clip-text text-transparent">Від 0 до 100,000 за 90 днів</p>
    
        <p className="text-[96px] max-md:text-[54px] font-[800] leading-[1.25]">Секрети вірусних відео</p>

        <div className="max-md:block hidden z-1 absolute -left-16 -bottom-20 w-[173px] h-[184px] bg-[#13B8FF] blur-3xl opacity-[0.3]" />
      </div>

      <p className="max-md:block hidden text-md text-center leading-[normal]">
        Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
      </p>

      <div className="max-md:block hidden flex flex-col gap-[11px]">
        <ProposalButton
          showDiscont
          size="large"
          onClick={openDialog}
          className="w-full bg-white text-[#000000] [&>div]:text-white"
        />

        <div className="flex items-center justify-center gap-4">
          <p className="text-2xl max-md:text-[20px] text-[#FF4A77]">1000грн</p>
          <p className="text-sm line-through text-[#C5C5C5]">2000грн</p>
        </div>
      </div>
    </div>
  );
}
