type Props = {
  placeholder: string;
  required?: boolean;
  name: string;
};

export default function Input({ placeholder, required, name }: Props) {
  return (
    <input
      name={name}
      required={required}
      className='shadow-[0px_10px_78px_1px_rgba(121,121,121,0.12)] text-[#0C0117] bg-white rounded-[14px] h-[46px] px-5 placeholder-[#0C0117]' type="text" placeholder={placeholder}
    />
  );
}
