import { RoomItem } from "@/types";
import { Bed } from "iconoir-react";

export const rooms: RoomItem[] = [
  {
    id: "deluxe-001",
    name: "Deluxe Seaview Room",
    image: "/Images/hero-banner-1.png",
    alt: "Room 1",
    description: "Spacious room with panoramic sea view.",
    facilities: [
      { icon: Bed, label: "King Size Bed" },
      { icon: Bed, label: "Rain Shower" },
      { icon: Bed, label: "Free Wi-Fi" },
      { icon: Bed, label: "Coffee Maker" },
    ],
    price: { currency: "RM", current: "22.90", original: "22.90" },
    isDiscount: true,
    isRecommended: true,
  },
];
