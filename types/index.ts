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
  id: string;
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

export type FooterItem = {
  id: string;
  category: string;
  label?: string;
  icon?: React.FC<IconSvgProps>;
  alt?: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

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

export type PriceItem = {
  currency: string;
  original: string;
  current: string;
};

export type FacilitiesProps = {
  icon?: React.FC<IconSvgProps>;
  label?: string;
};

export type RoomItem = {
  id: string;
  slug: string;
  name: string;
  image: string;
  alt: string;
  description?: string;
  facilities?: FacilitiesProps[];
  price: PriceItem;
  isDiscount: boolean;
  isRecommended: boolean;
};

export type FacilitiesItems = {
  id: string;
  name: string;
  image: string;
  alt: string;
  description?: string;
  facilities?: FacilitiesProps[];
};

export type ActivitiesProps = {
  icon?: React.FC<IconSvgProps>;
  label?: string;
};

export type ActivitiesItem = {
  id: string;
  name: string;
  image: string;
  alt: string;
  description?: string;
  facilities?: ActivitiesProps[];
};
