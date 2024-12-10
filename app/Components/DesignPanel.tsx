"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import TabButton from "./ui/tab-button";
import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

export default function DesignPanel() {
  const [screenType, setScreenType] = useState<"desktop" | "mobile">("desktop");
  const [fromType, setFromType] = useState<"prompt" | "diagram">("prompt");
  const [variations, setVariations] = useState<number>(1);
  const [open, setOpen] = useState(false);

  const designModes = [
    {
      id: "wireframes",
      label: "Wireframes",
      icon: "/wireframe.svg",
      isActive: false,
    },
    {
      id: "hifi",
      label: "Hifi Designs",
      icon: "/generationIcon2.svg",
      isActive: true,
    },
  ];

  const variationOptions = [1, 2, 3, 4];

  return (
    <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
      <DropdownMenuTrigger asChild>
        <span className={open ? "invisible" : "block"}>
          <TabButton
            icon={"/generation.svg"}
            label="Generation"
            active={false}
          />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="max-w-[20rem]  sm:ml-5 rounded-xl">
        <div className="w-[320px]  p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span>
                {" "}
                <Image
                  src={"/generation.svg"}
                  alt="Generation"
                  width={20}
                  height={20}
                  priority
                  className="w-5 h-5"
                />{" "}
              </span>
              <span className="text-textPrimary font-medium">Generation</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM6 18H2V2H6V18ZM18 18H8V2H18V18Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          {/* Design Mode */}
          <div className="mb-4">
            <label className="text-heading block font-medium mb-2">
              Design Mode
            </label>
            <div className="grid grid-cols-2 gap-2 ">
              {designModes.map((mode) => (
                <button
                  key={mode.id}
                  className={`px-4 py-3 rounded-lg border text-sm transition-colors
                ${
                  mode.isActive
                    ? " border-accent text-accent"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                >
                    <div className="flex flex-col items-center gap-1">

                  <Image
                    src={mode.icon}
                    alt="Generation"
                    width={20}
                    height={20}
                    priority
                    className="w-5 h-5"
                    />{" "}
                    <span className=" font-medium">

                  {mode.label}
                    </span>
                    </div>
                </button>
              ))}
            </div>
          </div>

          {/* Screen Type */}
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <label className="text-heading block font-medium mb-2">
              Screen type
            </label>
            <div className="flex  gap-2 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setScreenType("desktop")}
                className={`p-2 rounded ${
                  screenType === "desktop" ? "bg-white shadow-sm" : ""
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setScreenType("mobile")}
                className={`p-2 rounded ${
                  screenType === "mobile" ? "bg-white shadow-sm" : ""
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* From Type */}
          <div className="mb-4 flex flex-col sm:flex-row justify-between sm:items-center">
            <label className="text-heading block font-medium mb-2">From</label>
            <div className="flex gap-2 border rounded-lg">
              <button
                onClick={() => setFromType("prompt")}
                className={`px-4 py-2 rounded-l-lg  text-sm transition-colors ${
                  fromType === "prompt"
                    ? "bg-purple-100 text-accent"
                    : "hover:bg-gray-50"
                }`}
              >
                Prompt
              </button>
              <button
                onClick={() => setFromType("diagram")}
                className={`px-4 py-2 rounded-r-lg  text-sm transition-colors ${
                  fromType === "diagram"
                    ? "bg-purple-100 text-accent"
                    : "hover:bg-gray-50"
                }`}
              >
                Diagram
              </button>
            </div>
          </div>

          {/* Prompt */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-heading ">
              Prompt
            </label>
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg text-sm min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your prompt here..."
              defaultValue="landing page for a travel booking website, highlighting vacation packages, user testimonials, and a search bar"
            />
          </div>

          {/* Number of Variations */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-heading ">
              Number of variations
            </label>
            <div className="flex border rounded-lg justify-between">
              {variationOptions.map((number) => (
                <button
                  key={number}
                  onClick={() => setVariations(number)}
                  className={`w-12 h-8  text-sm transition-colors  ${
                    variations === number
                      ? "bg-purple-100 text-accent"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-gradient-to-t from-purple-500 to-accent text-white text-sm font-medium rounded-full shadow-md hover:from-purple-600 hover:to-accent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition">

          <Image
                  src={"/generation2.svg"}
                  alt="Generation"
                  width={20}
                  height={20}
                  priority
                  className="w-5 h-5 text-white"
                />{"   "} 
                <span>
                    Generate
                    </span>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
