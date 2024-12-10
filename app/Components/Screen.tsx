import React from "react";
import GenerationBar from "./GenerationBar";
import Image from "next/image";
import AddNewSection from "./AddNewSection";

export default function Screen() {
  return (
    <>

    {/* Generation Bar  */}
      <GenerationBar />

    {/* Screen  */}
      <div className="m-auto h-[50em] max-w-[35em] p-[1.5rem] border rounded-[4px] bg-[#F1F1F2]">
        <div className="flex items-center justify-end gap-6 -mt-[1.3rem] p-1">
          <span className="flex items-center gap-2 text-textPrimary">
            {" "}
            <Image
              src={"/saveScreen.svg"}
              alt="Profile"
              width={20}
              height={20}
              priority
              className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-200"
            />
            Save & Retrieve Figma
          </span>

          <span className="flex items-center gap-2 text-textPrimary">
            {" "}
            <Image
              src={"/edit.svg"}
              alt="Profile"
              width={20}
              height={20}
              priority
              className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-200"
            />
            Edit
          </span>

          <span>
            {" "}
            <Image
              src={"/options.svg"}
              alt="Profile"
              width={20}
              height={20}
              priority
              className="w-6 h-6  cursor-pointer rounded-full p-1 hover:bg-gray-200"
            />
          </span>
        </div>

        <div className="bg-[#C0C0C0] rounded-[4px]  h-full">

        </div>

      </div>


      {/* New Section  */}
      <AddNewSection />

    </>
  );
}
