import { Manrope } from "next/font/google";
import Button from "../button";
import TariffCost from "./tarrifs-cost";
import TariffBenefits from "./traffic-benefits";
import TariffHeader from "./tarrifs-header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: '600'
});

const baseBenefits = ['Базовий курс', '38 уроків'];
const proBenefits = ['База', 'Додаткові уроки', '38 уроків', 'чат-ком’юніті для творців контента'];
const expertBenefits = ['База', 'Додаткові уроки', 'чат-ком’юніті для творців контента', 'Розбір вашої сторінки в форматі відеозвінка'];;

type Props = {
  openDialog: () => void;
};

export default function Tariffs({ openDialog }: Props) {
  return (
    <div className="flex flex-col items-center gap-[79px] relative">
      <div className="-z-1 absolute right-0 -top-20 w-[368px] h-[346px] bg-[#A75DF3] blur-3xl opacity-[0.2]" />

      <p className="text-[48px] font-bold uppercase">Тарифи</p>

      <div className="flex items-center gap-5 w-full h-[466px]">
        <div className="relative overflow-hidden rounded-[16px] w-full pt-9 px-9 pb-[26px] flex flex-col h-full bg-[#0C0117] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]">
          <div className="absolute -right-16 -top-12 w-[184px] h-[173px] bg-[#A75DF3] blur-3xl opacity-[0.3]" />
          
          <div className="flex flex-col gap-[29px] h-full">
            <div className="flex flex-col gap-[18px]">
              <TariffHeader title="Базовий" />

              <TariffCost
                currentCost="139$"
                previousCost="99$"
                className={manrope.className}
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <TariffBenefits
                benefits={baseBenefits}
                className="text-white [&>span]:bg-white"
              />

              <Button
                className={`${manrope.className} z-1 h-[57px] text-[#0C0117] w-full bg-white text-base rounded-full`}
                onClick={openDialog}
              >
                Купити
              </Button>
            </div>
          </div>

          <div className="absolute -left-16 -bottom-12 w-[184px] h-[173px] bg-[#13B8FF] blur-3xl opacity-[0.3]" />
        </div>

        
        <div className="relative rounded-[16px] w-full pt-9 px-9 pb-[26px] flex flex-col h-full bg-white shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]">
          <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 flex items-center shadow-[0px_4px_16px_1px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#5BDBFD] to-[#7375FF] justify-center h-[42px] px-[34px] my-auto rounded-[16px]">
            <p className="uppercase font-bold text-base">Best seller</p>
          </div>
          
          <div className="flex flex-col gap-[29px] h-full">
            <div className="flex flex-col gap-[18px]">              
              <TariffHeader
                title='Продвинутий'
                className="text-[#0C0117]"
              >
                <div className="flex items-center justify-center rounded-full w-full bg-[#0C0117] h-[42px]">
                  <p className="uppercase font-bold bg-gradient-to-r from-[#5BDBFD] to-[#7375FF] bg-clip-text text-transparent">Pro</p>
                </div>
              </TariffHeader>

              <TariffCost
                currentCost="149$"
                previousCost="199$"
                className={`${manrope.className} text-[#0C0117]`}
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <TariffBenefits
                benefits={proBenefits}
                className="text-[#0C0117] [&>span]:bg-[#0C0117]"
              />

              <Button
                className={`${manrope.className} h-[57px] bg-[#0C0117] w-full text-base rounded-full`}
                onClick={openDialog}
              >
                Купити
              </Button>
            </div>
          </div>
        </div>
        
        <div className="rounded-[16px] bg-gradient-to-br from-[#5BDBFD] to-[#7375FF] w-full pt-9 px-9 pb-[26px] flex flex-col h-full shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]">
          <div className="flex flex-col gap-[29px] h-full">
            <div className="flex flex-col gap-[18px]">
              <TariffHeader title='Expert'>
                <div className="flex items-center justify-center rounded-full bg-white px-[30px] h-[42px]">
                  <p className="uppercase font-bold bg-gradient-to-br from-[#5BDBFD] to-[#7375FF] bg-clip-text text-transparent">Експерт</p>
                </div>
              </TariffHeader>

              <TariffCost
                currentCost="299$"
                previousCost="500$"
                className={manrope.className}
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <TariffBenefits
                benefits={expertBenefits}
                className="text-white [&>span]:bg-white"
              />

              <Button
                className={`${manrope.className} h-[57px] bg-white w-full text-base text-[#0C0117] rounded-full`}
                onClick={openDialog}
              >
                Купити
              </Button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
