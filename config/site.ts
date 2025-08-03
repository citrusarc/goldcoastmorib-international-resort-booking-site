import { NavItem, FooterItem, ItemStatus } from "@/types";

export type SiteConfig = typeof siteConfig;

const defaultStatus = {
  isDisabled: false,
  isHidden: false,
  isComingSoon: false,
};

export const siteConfig = {
  name: "Gold Coast Resort",
  description:
    "Gold Coast Morib International Resort is a beachfront destination nestled along the tranquil shores of Selangor. Boasting over 600 well-appointed suites — many with private jacuzzis and sea views — the resort features a large water theme park, multiple dining options, and direct access to Morib Beach. Whether you’re planning a family holiday, company retreat, or romantic escape, Gold Coast Resort offers a complete vacation experience with fun, comfort, and convenience all in one place.",
  navItems: [
    {
      label: "The Resort",
      href: "/the-resort",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      label: "Rooms & Suites",
      href: "/rooms-suites",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      label: "Facilities",
      href: "/facilities",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      label: "Activities",
      href: "/activities",
      position: "start",
      status: { ...defaultStatus },
    },
  ] satisfies (ItemStatus | NavItem)[],
  footerItems: {
    "section 1": [
      {
        label: "Label 1",
        href: "/",
        status: { ...defaultStatus },
      },
    ],
  },
  links: {
    contact: "https://wassap.my/",
    tiktok: "https://www.tiktok.com/",
  },
};
