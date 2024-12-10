import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-2 md:px-5 py-3 md:py-5 border-b-2 bg-white">
      {/* logo and home button */}
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <Link href="/" className="flex items-center">
          <AiOutlineHome className="w-5 h-5 md:w-6 md:h-6 hover:text-accent"  />
        </Link>

        <div className="w-px h-4 md:h-5 bg-gray-300" />

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="UXPilots"
            width={100}
            height={100}
            priority
            className="w-20 md:w-[120px] h-auto"
          />
        </Link>
      </div>

      {/* profile  */}
      <div className="flex justify-center items-center p-1 md:p-2 rounded-[33px] gap-1 md:gap-2 lg:gap-4 bg-[#F9F8FF] border border-[#ECE9FF]">
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <Image
            src="/coins.svg"
            alt="Coins"
            width={20}
            height={20}
            priority
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <div className="font-medium flex items-baseline">
            <span className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-accent">70</span>
            <span className="text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] text-textPrimary">/600 + </span>
            <span className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-accent">400</span>
          </div>
        </div>
        <Link href="/" className="flex items-center">
          <Image
            src="/profileInfoIcon.svg"
            alt="Profile Info"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </Link>
        <Link href="/" className="flex items-center">
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

