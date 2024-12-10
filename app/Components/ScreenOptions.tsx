"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ImageIcon, FlowerIcon as Flow, Code, FileOutputIcon as FileExport, Share2, Trash2 } from 'lucide-react'

// Define the menu items array with icons
const menuItems = [
  {
    label: "Generate images",
    icon: ImageIcon,
  },
  {
    label: "Generate screens flow",
    icon: Flow,
  },
  {
    label: "Source Code",
    icon: Code,
  },
  {
    label: "Export as...",
    icon: FileExport,
  },
  {
    label: "Share",
    icon: Share2,
  },
  {
    label: "Delete forever",
    icon: Trash2,
  }
]

export default function ScreenOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span>
          <Image
            src={"/options.svg"}
            alt="Options"
            width={20}
            height={20}
            priority
            className="w-6 h-6 cursor-pointer rounded-full p-1 hover:bg-gray-200"
          />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuItems.map((item, index) => (
          <DropdownMenuItem 
            key={index}
            className="flex items-center cursor-pointer"
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

