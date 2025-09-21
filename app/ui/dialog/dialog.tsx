import Image from 'next/image';

import Button from '../button';
import Input from './dialog-input';

type Props = {
  closeDialog: () => void;
};

export default function Dialog({ closeDialog }: Props) {
  return (
    <div className="fixed inset-0 max-sm:h-full max-sm:z-5 z-2 max-sm:pt-0 pt-[159px] bg-[#0C0117]">

      <div className='px-[50px] max-px:[42px] max-sm:h-full pb-[73px] mx-auto pt-[90px] max-sm:shadow-none shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] rounded-[16px] w-[410px] relative'>
        <button onClick={closeDialog} className='cursor-pointer absolute right-[29px] top-[28px]'>
          <Image width={32} height={32} src="/close.svg" alt="Close icon" />
        </button>

        <form
          action=""
          className='flex flex-col max-sm:h-full'
        >
          <div className="-z-1 hidden max-sm:block absolute top-[17%] -left-[30%] w-[184px] h-[174px] bg-[#13B8FF] rounded-full blur-3xl opacity-[0.6]" />

          <p className='text-[24px] font-bold uppercase text-center'>Укажіть свої дані</p>

          <div className='flex flex-col gap-[18px] pt-9 pb-10'>
            <Input
              name="name"
              placeholder="Ім'я"
            />
            <Input
              name="nikname"
              placeholder="Нік Telegram"
            />
            <Input
              name="email"
              required
              placeholder="Email*"
            />
          </div>

          <Button
            className="bg-white max-sm:mt-auto h-[50px] rounded-[12px] p-[2px] bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF]"
            onClick={closeDialog}
          >
            <span className="block rounded-[12px] bg-white text-sm py-3 text-[#0C0117] font-semibold">
              Відправити
            </span>
          </Button>
        </form>
      </div>

      <div className="max-sm:hidden absolute -bottom-[30%] left-[10%] w-96 h-96 bg-[#A75DF3] rounded-full blur-3xl opacity-[0.6]" />

      <div className="-z-1 hidden max-sm:block absolute bottom-[8%] -right-[25%] w-[184px] h-[174px] bg-[#A75DF3] rounded-full blur-3xl opacity-[0.6]" />
    </div>
  );
}
