// import Image from "next/image";
import { FaPlus } from "react-icons/fa6";


export default function AddNewSection() {
  return (
    <div className="group flex items-center gap-2 justify-center p-1 m-auto max-w-[35em] mt-10 text-center border rounded-[12px] bg-secondary text-accent font-bold cursor-pointer hover:bg-accent hover:text-white transition-all duration-100 ease-in-out">
     
<FaPlus         className="w-4 h-4 cursor-pointer group-hover:text-white group-hover:brightness-0 group-hover:invert"
 />
<span>

      New Section
      </span>
    </div>
  );
}
