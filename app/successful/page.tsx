import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Nextaflow-allblk.png";

export default function SuccessfulModal() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex items-center justify-center">
        <div className="bg-[#f7f7f7] my-[8rem] w-[455px] rounded-[24px] p-6 relative dm-font leading-[100%] shadow-md">
          <div className="text-center">
            <h2 className="text-[26px] font-[500] pt-10 text-[#1a1a1a]">
              Congratulations! 🎉
            </h2>
            <p className="text-[16px] font-[300] text-[#1a1a1a] pt-6">
              You’ve sign-up for the NextaFlow 30-Days Trial.
            </p>
            <p className="text-[16px] font-[300] text-[#1a1a1a] py-6">
              Check Your Inbox: We’ve sent a confirmation email To Book Your
              Setup Call Now and get your account configured perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
