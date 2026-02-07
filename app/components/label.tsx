interface LabelProps {
  text?: string;
}
export default function Label({ text }: LabelProps) {
  return (
    <>
      <label htmlFor="" className="text-sm font-[300] text-[#1a1a1a]">
        {text}
      </label>
    </>
  );
}
