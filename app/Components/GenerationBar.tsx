import Image from "next/image";

export default function GenerationBar() {
  return (
    <div className="flex items-center gap-4 p-1 m-auto  max-w-[35em] mb-2  border rounded-[12px] bg-[#E6E6E6]">
      <span>
        {" "}
        <Image
          src={"/generationIcon1.svg"}
          alt="Profile"
          width={20}
          height={20}
          priority
          className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-300"
        />
      </span>
      <span className="font-medium text-[#303034]">Generation 1</span>
      <span>
        {" "}
        <Image
          src={"/generationIcon2.svg"}
          alt="Profile"
          width={20}
          height={20}
          priority
          className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-300"
        />
      </span>
      <span>
        {" "}
        <Image
          src={"/generationIcon3.svg"}
          alt="Profile"
          width={20}
          height={20}
          priority
          className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-300"
        />
      </span>

      <span>
        {" "}
        <Image
          src={"/options.svg"}
          alt="Profile"
          width={20}
          height={20}
          priority
          className="w-6 h-6 ml-2 cursor-pointer rounded-full p-1 hover:bg-gray-300"
        />
      </span>
    </div>
  );
}
