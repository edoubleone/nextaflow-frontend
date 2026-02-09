import React from "react";

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
}

export default function Input({
  placeholder,
  className,
  id,
  required,
  type,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      id={id}
      name={name}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 h-[40px] mt-[5px] border outline-none border-gray-200 rounded-[5px] font-[300] focus:ring-black focus:border-black sm:text-sm text-[#1a1a1a] ${className}`}
    />
  );
}
