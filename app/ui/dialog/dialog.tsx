import Image from 'next/image';
import Button from '../button';
import Input from './dialog-input';

type Props = {
  closeDialog: () => void;
};

export default function Dialog({ closeDialog }: Props) {
  return (
    <div className="fixed inset-0 z-2 flex items-center justify-center bg-[#0C0117]">
      <div className="absolute -bottom-[30%] left-[10%] w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-[0.6]" />

      <div className='px-[50px] pb-[73px] pt-[90px] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] rounded-[16px] w-[410px] relative'>
        <button onClick={closeDialog} className='cursor-pointer absolute right-[29px] top-[28px]'>
          <Image width={32} height={32} src="/close.svg" alt="Close icon" />
        </button>

        <form
          action=""
          className='flex flex-col'
        >
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
            className="bg-white h-[50px] rounded-[12px] p-[2px] bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#DF93FF]"
            onClick={closeDialog}
          >
            <span className="block rounded-[12px] bg-white text-sm py-3 text-[#0C0117] font-semibold">
              Відправити
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
