interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
}

const Input = ({ label, name, placeholder }: InputProps) => {
  return (
    <div className="flex items-center gap-x-8">
      <label className="w-24 text-[#562C2C] font-medium text-[16px]">
        {label}:
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="flex py-3 px-4 h-10 w-full rounded-[123px] border border-[rgba(86,44,44,0.30)] bg-white shadow-[0px_0px_30px_0px_rgba(242,84,45,0.10)]"
        name={name}
      />
    </div>
  );
};

export default Input;
