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
      id: "the-resort",
      label: "The Resort",
      href: "/the-resort",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      id: "rooms-suites",
      label: "Rooms & Suites",
      href: "/rooms-suites",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      id: "facilities",
      label: "Facilities",
      href: "/facilities",
      position: "start",
      status: { ...defaultStatus },
    },
    {
      id: "activities",
      label: "Activities",
      href: "/activities",
      position: "start",
      status: { ...defaultStatus },
    },
  ] satisfies (ItemStatus | NavItem)[],
  footerItems: [
    {
      id: "the-resort",
      category: "explore",
      label: "The Resort",
      href: "/the-resort",
      status: { ...defaultStatus },
    },
    {
      id: "rooms-suites",
      category: "explore",
      label: "Rooms & Suites",
      href: "/rooms-suites",
      status: { ...defaultStatus },
    },
    {
      id: "facilities",
      category: "explore",
      label: "Facilities",
      href: "/facilities",
      status: { ...defaultStatus },
    },
    {
      id: "activities",
      category: "explore",
      label: "Activities",
      href: "/activities",
      status: { ...defaultStatus },
    },
    {
      id: "disclaimer",
      category: "legal",
      label: "Disclaimer",
      href: "/disclaimer",
      status: { ...defaultStatus },
    },
    {
      id: "term-of-use",
      category: "legal",
      label: "Term of Use",
      href: "/term-of-use",
      status: { ...defaultStatus },
    },
    {
      id: "privacy-policy",
      category: "legal",
      label: "Privacy Policy",
      href: "/privacy-policy",
      status: { ...defaultStatus },
    },
  ],
  links: {
    contact: "https://wassap.my/",
    tiktok: "https://www.tiktok.com/",
  },
};
