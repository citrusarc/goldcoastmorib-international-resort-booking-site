import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type MenuKey = string | null;

export type ItemStatus = {
  isDisabled?: boolean;
  isHidden?: boolean;
  isComingSoon?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  target?: string;
  rel?: string;
  position?: "start" | "end";
  status?: ItemStatus;
  submenu?: {
    label: string;
    href: string;
    description?: string;
    status?: ItemStatus;
  }[];
};

export type FooterLink = {
  label?: string;
  icon?: React.FC<IconSvgProps>;
  alt?: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

export type FooterItem = Record<
  "section 1" | "section 2" | "section 3" | "section 4" | "section 5",
  FooterLink[]
>;

export type BrandLogo = {
  icon: React.FC<IconSvgProps>;
  alt: string;
};

export type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type QuoteItem = {
  message: string;
  author: string;
};

export type InfiniteScrollItem = BrandLogo | ImageProps | QuoteItem;

export type InfiniteScrollListProps = {
  items: InfiniteScrollItem[];
  duration?: number;
};
