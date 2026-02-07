import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({
  text,
  className,
  type = "button",
  isLoading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`
        group
        rounded-[10px]
        px-4 py-3
        text-base font-[300]
        flex items-center justify-center gap-4
        transition-all duration-300 ease-out

        ${
          isDisabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer transform hover:scale-105"
        }

        ${className}
      `}
    >
      <span>{isLoading ? "Creating account..." : text}</span>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
      ) : (
        <span
          className="
            inline-flex
            transition-transform duration-300 ease-out
            group-hover:translate-x-2
          "
        >
          <IoIosArrowRoundForward size={20} />
        </span>
      )}
    </button>
  );
}
