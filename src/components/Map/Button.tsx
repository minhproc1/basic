interface ButtonProps {
  src: string;
  buttonText: string;
}

const Button = ({ src, buttonText }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 rounded-[40px] border-[1.5px] border-solid border-[#f2542d80] px-4 py-2 cursor-pointer bg-white h-11">
      <img src={src} width={24} />
      <span className="text-xl font-medium">{buttonText}</span>
    </button>
  );
};

export default Button;
