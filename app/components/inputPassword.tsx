import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputPasswordProps {
  id: string;
  placeholder?: string;
  className?: string;
  showVisibility: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void;
  
}

export default function InputPassword({
  id,
  placeholder,
  className,
  showVisibility,
  onChange,
  value,
  name,
  togglePasswordVisibility,
}: InputPasswordProps) {
  return (
    <div className="">
      <div
        className={`flex focus:ring-black py-3 focus:border-black mt-[5px] items-center justify-between rounded-md border border-gray-300 px-2 text-[#1a1a1a] ${className}`}
      >
        <span className="flex w-full gap-[5px]">
          <input
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            required
            type={showVisibility ? "text" : "password"}
            placeholder={placeholder}
            className="w-full outline-none border-gray-200 font-[300]"
          />
        </span>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-[#888D93]"
        >
          {showVisibility ? (
            <FiEyeOff className="w-5 h-5" />
          ) : (
            <FiEye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
