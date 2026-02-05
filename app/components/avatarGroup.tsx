import Image from "next/image";
import avatar1 from "@/public/assets/avartar1.png";
import avatar2 from "@/public/assets/avarta2.png";
import avatar3 from "@/public/assets/avata4.png";
import avatar4 from "@/public/assets/avart.png";
import avatar5 from "@/public/assets/avat5.png";
import avatar6 from "@/public/assets/avart6.png";

export default function AvartarGroup() {
  return (
    <>
      <div className="avatar-group -space-x-2">
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar1} alt="avatar1" />
          </div>
        </div>
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar2} alt="avatar1" />
          </div>
        </div>
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar3} alt="avatar1" />
          </div>
        </div>
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar4} alt="avatar1" />
          </div>
        </div>
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar5} alt="avatar1" />
          </div>
        </div>
        <div className="avatar h-8 w-8 border-[1px] border-white">
          <div className="w-12">
            <Image src={avatar6} alt="avatar1" />
          </div>
        </div>
      </div>
    </>
  );
}
