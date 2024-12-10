import Image from "next/image";
import TabButton from "./tab-button";


const TabGroup = () => {
    const active = false
    const label = "Diagrams"
    const icon = "/diagrams.svg"
  return (
    <div
      className={`flex items-center gap-4 px-1 py-1 shadow-md border  bg-white rounded-full`}
    >
       {/* <TabButton icon={"/diagrams.svg"} label="Diagrams" active={false} /> */}
       <div
      className={`flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-full  cursor-pointer 
      
      `}
    >
      <Image
        src={icon!}
        alt="Profile"
        width={20}
        height={20}
        priority
        className="w-5 h-5"
      />{" "}
      <span  className={`font-medium
        ${
          active
            ? "text-accent"
            : "text-textPrimary "
        }
      `}>{label}</span>
    </div>
       <TabButton icon={"/screens.svg"} label="Screens" active={true} />
    </div>
  );
};

export default TabGroup;
