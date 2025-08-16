import { ActivitiesItem } from "@/types";
import { Clock, DoubleCheck, Pin } from "iconoir-react";

export const activities: ActivitiesItem[] = [
  {
    id: "bukit-jugra",
    name: "Bukit Jugra Hiking & Paragliding",
    image: "/Images/activities-banner-2.png",
    alt: "Bukit Jugra Banner",
    description:
      "Enjoy a peaceful hike through forest trails and take in breathtaking views from the top. ",
    facilities: [
      { icon: Clock, label: "Morning recommended | 6AM–11AM" },
      { icon: DoubleCheck, label: "Suitable for teens & adults" },
      { icon: Pin, label: "Within 30 minutes from resort" },
    ],
  },
  {
    id: "local-market",
    name: "Local Market Visits",
    image: "/Images/activities-banner-3.png",
    alt: "Local Market Banner",
    description:
      "A cultural feast for all your senses, perfect for evening strolls and souvenir hunting.",
    facilities: [
      { icon: Clock, label: "Open daily: 7AM – 10PM" },
      {
        icon: DoubleCheck,
        label: "Food stalls, handmade items, local delights",
      },
      { icon: Pin, label: "Within 15–20 minutes from the resort" },
    ],
  },
];
