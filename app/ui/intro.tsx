import Image from "next/image";
import ProposalButton from "./proposal-button";

type Props = {
  openDialog: () => void;
};

export default function Intro({ openDialog }: Props) {
  return (
    <div className="flex flex-col gap-[42px] relative">
      <div className="flex gap-10">
        <Image height={466} width={644} alt="Avtor" src="/avtor.svg" />

        <div className="pt-[84px]">
          <p className="text-lg leading-[normal]">
            Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[11px] w-1/2 pr-9">
        <ProposalButton
          showDiscont
          size="large"
          onClick={openDialog}
          className="w-full bg-white text-[#000000] [&>div]:text-white"
        />

        <div className="flex items-center justify-center gap-4">
          <p className="text-2xl text-[#FF4A77]">1000грн</p>
          <p className="text-sm line-through text-[#C5C5C5]">2000грн</p>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] absolute w-1/2 right-0 bottom-0">
        <p className="text-[32px] font-bold bg-gradient-to-r from-[#90E8FF] via-[#9C9EFF] to-[#E3A1FF] bg-clip-text text-transparent">Від 0 до 100,000 за 90 днів</p>
    
        <p className="text-[96px] font-[800] leading-[1.25]">Секрети вірусних відео</p>
      </div>
    </div>
  );
}
