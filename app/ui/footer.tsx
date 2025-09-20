import Image from "next/image";
import ProposalButton from "./proposal-button";

type Props = {
  openDialog: () => void;
};

export default function Footer({ openDialog }: Props) {
  return (
    <footer className="overflow-hidden mb-[59px] pt-[60px] pb-[66px] flex items-center justify-center relative border-y border-solid border-t-[#7375FF] border-b-[#7375FF]">
      <Image width={513} height={488} src="/footer.svg" alt="footer" className="absolute top-0 left-0 -z-1" loading="lazy" />

      <div className="flex flex-col gap-[44px] relative w-[40%]">
        <div className="flex flex-col px-[44px] gap-5">
          <p className="text-[36px] font-bold uppercase text-center">Дізнайся як створити контент, який <span className="bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] bg-clip-text text-transparent">підкорює аудиторію</span></p>
          <p className="text-2xl font-medium text-center leading-[1.2]">Матеріали, які мають змогу охопити тисячі людей</p>
        </div>

        <ProposalButton
          showDiscont
          size="large"
          onClick={openDialog}
          className="w-full bg-gradient-to-r from-[#5BDBFD] to-[#7375FF] text-white"
        />
      </div>
    
      <div className="z-2 h-[97px] flex items-center justify-center bg-gradient-to-t from-[#5BDBFD] to-[#7375FF] absolute -right-[38%] bottom-[13%] w-full blur-[3px] -rotate-35">
        <p className="text-[34px] uppercase font-bold">Секрети вірусних відео</p>
      </div>
      
      <div className="z-1 absolute -right-[20%] w-1/2 h-[500px] bg-gradient-to-br from-[#7375FF] to-[#DF93FF] blur-3xl opacity-[0.6]" />
    </footer>
  );
}
