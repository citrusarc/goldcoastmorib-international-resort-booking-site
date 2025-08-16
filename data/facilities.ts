import { FacilitiesItems } from "@/types";
import { Clock, DoubleCheck, Pin } from "iconoir-react";

export const facilities: FacilitiesItems[] = [
  {
    id: "game-room",
    name: "Game Room",
    image: "/Images/facilities-banner-1.png",
    alt: "Game Room Banner",
    description:
      "Challenge your family and friends with arcade games, air hockey, and more in our casual game lounge.",
    facilities: [
      { icon: Clock, label: "Operating hours: 10AM – 10PM" },
      { icon: DoubleCheck, label: "Included for all guests" },
      { icon: Pin, label: "Located near the main lobby" },
    ],
  },
  {
    id: "fitnes-centre",
    name: "Fitness Centre",
    image: "/Images/facilities-banner-2.png",
    alt: "Fitness Centre Banner",
    description:
      "Fully equipped with cardio and strength machines to help you keep up your routine.",
    facilities: [
      { icon: Clock, label: "Open daily: 7AM – 10PM" },
      { icon: DoubleCheck, label: "Free access for all staying guests" },
      { icon: Pin, label: "Next to the pool deck" },
    ],
  },
  {
    id: "laundry-room",
    name: "24/7 Laundry Room",
    image: "/Images/facilities-banner-3.png",
    alt: "Laundry Room Banner",
    description:
      "Travel light and stay fresh with our coin-operated washers and dryers.",
    facilities: [
      { icon: Clock, label: "Available 24/7" },
      { icon: DoubleCheck, label: "Payment via coins or card" },
      { icon: Pin, label: "Level 1, near lift lobby" },
    ],
  },
];
