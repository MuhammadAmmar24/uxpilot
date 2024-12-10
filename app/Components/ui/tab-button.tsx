import Image from "next/image";

interface tabButtonInterface {
  icon?: string;
  label: string;
  active: boolean;
}

const TabButton = ({ icon, label, active }: tabButtonInterface) => {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 bg-white hover:shadow-lg rounded-full shadow-md border cursor-pointer 
      
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
  );
};

export default TabButton;
