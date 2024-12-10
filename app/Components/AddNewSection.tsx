import Image from "next/image";

export default function AddNewSection() {
  return (
    <div className="group flex items-center gap-2 justify-center p-1 m-auto max-w-[35em] mt-10 text-center border rounded-[12px] bg-secondary text-accent font-bold cursor-pointer hover:bg-accent hover:text-white transition-all duration-100 ease-in-out">
      <Image
        src={"/addNewSection.svg"}
        alt="Add New Section"
        width={20}
        height={20}
        priority
        className="w-5 h-5 cursor-pointer group-hover:text-white group-hover:brightness-0 group-hover:invert"
      />{" "}
      New Section
    </div>
  );
}
