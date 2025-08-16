import { FacilitiesItems } from "@/types";
import { Bed } from "iconoir-react";

export const facilities: FacilitiesItems[] = [
  {
    id: "gym",
    name: "Game Room",
    image: "/Images/hero-banner-1.png",
    alt: "Room 1",
    description: "Spacious room with panoramic sea view.",
    facilities: [
      { icon: Bed, label: "King Size Bed" },
      { icon: Bed, label: "Rain Shower" },
      { icon: Bed, label: "Free Wi-Fi" },
    ],
  },
  {
    id: "fitnes-centre",
    name: "No Room",
    image: "/Images/hero-banner-1.png",
    alt: "Room 2",
    description: "Spacious room with panoramic sea view.",
    facilities: [
      { icon: Bed, label: "Queen Size Bed" },
      { icon: Bed, label: "No Shower" },
      { icon: Bed, label: "No Wi-Fi" },
    ],
  },
  {
    id: "laundry-centre",
    name: "Laundry Room",
    image: "/Images/hero-banner-1.png",
    alt: "Room 2",
    description: "Spacious room with panoramic sea view.",
    facilities: [
      { icon: Bed, label: "Queen Size Bed" },
      { icon: Bed, label: "No Shower" },
      { icon: Bed, label: "No Wi-Fi" },
    ],
  },
];
