import Image from "next/image";

import ProposalButton from "./proposal-button";

type Props = {
  openDialog: () => void;
};

export default function Footer({ openDialog }: Props) {
  return (
    <footer className="overflow-hidden max-md:mb-12 mb-[59px] relative">
      <div className="h-[1px] w-full bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF]" />

      <div className="max-md:block absolute hidden -left-[55%] -top-[40%] w-[315px] h-[282px] bg-[#7375FF] blur-3xl opacity-[0.6]" />
      
      <div className="overflow-hidden max-md:px-16 pt-[60px] max-md:pt-[113px] pb-[66px] max-md:pb-[114px] flex items-center justify-center max-md:justify-between relative">
        <Image width={513} height={488} src="/footer.svg" alt="footer" className="max-md:hidden absolute top-0 left-0 -z-1" loading="lazy" />

        <div className="max-md:hidden absolute -z-1 top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-full bg-[#0C0117] blur-xl" />

        <div className="flex flex-col gap-[44px] max-md:w-full w-[40%]">
          <div className="flex flex-col max-md:px-0 px-[44px] gap-5">
            <p className="text-[36px] max-md:text-[20px] font-bold uppercase text-center">Дізнайся як створити контент, який <span className="bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF] bg-clip-text text-transparent">підкорює аудиторію</span></p>
            <p className="text-2xl max-md:text-md font-medium text-center leading-[1.2]">Матеріали, які мають змогу охопити тисячі людей</p>
          </div>

          <ProposalButton
            showDiscont
            size="large"
            onClick={openDialog}
            className="max-md:[&>p]:mr-2 w-full max-md:w-auto bg-gradient-to-r from-[#5BDBFD] to-[#7375FF] text-white"
          />
        </div>
      
        <div className="max-md:hidden z-2 h-[97px] flex items-center justify-center bg-gradient-to-t from-[#5BDBFD] to-[#7375FF] absolute -right-[38%] bottom-[13%] w-full blur-[3px] -rotate-35">
          <p className="text-[34px] uppercase font-bold">Секрети вірусних відео</p>
        </div>
        
        <div className="max-md:hidden z-1 absolute -right-[20%] w-1/2 h-[500px] bg-gradient-to-br from-[#7375FF] to-[#DF93FF] blur-3xl opacity-[0.6]" />
      </div>

      <div className="max-md:block absolute hidden -right-[55%] -bottom-[40%] w-[315px] h-[282px] bg-[#5BDBFD] blur-3xl opacity-[0.6]" />
      
      <div className="h-[1px] w-full bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF]" />
    </footer>
  );
}
