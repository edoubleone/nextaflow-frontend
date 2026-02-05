import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({ text, className, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-[10px] px-2 py-3 text-base font-[300] flex items-center gap-4 ${className}`}
    >
      {text}
      <span>
        <IoIosArrowRoundForward size={20}/>
      </span>
    </button>
  );
}
