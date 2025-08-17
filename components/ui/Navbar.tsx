"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { cormorantGaramond } from "@/lib/font";
import { Archive, Phone } from "iconoir-react";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  const navItems = siteConfig.navItems.filter((item) => !item.status?.isHidden);

  const isHome = pathname === "/";
  const textColor = isHome ? "text-white" : "text-black";

  return (
    <HeroUINavbar
      isMenuOpen={openMobileMenu}
      onMenuOpenChange={setOpenMobileMenu}
      maxWidth="xl"
      className={clsx(
        "transition-colors duration-300 ease-in-out",
        openMobileMenu ? "bg-background/70" : "bg-transparent"
      )}
    >
      <NavbarContent justify="start">
        <NavbarBrand className="max-w-fit">
          <Link className="flex items-center justify-center gap-2" href="/">
            <Image
              src="/Images/brand-logo.png"
              alt="brand logo"
              width={48}
              height={48}
              className="object-contain pl-2 sm:pl-0"
            />
            <p
              className={clsx(
                `${cormorantGaramond.className} sm:hidden text-xl font-medium`,
                textColor
              )}
            >
              Gold Coast Resort
            </p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex items-center justify-start ml-2 gap-4">
          {navItems
            .filter((item) => item.position === "start")
            .map((item) => (
              <NavbarItem key={item.label}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    textColor,
                    item.status?.isDisabled
                      ? "cursor-not-allowed !opacity-50"
                      : "hover:text-blue-800"
                  )}
                  href={item.status?.isDisabled ? "#" : item.href}
                  onClick={(e) => item.status?.isDisabled && e.preventDefault()}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <Link href="tel:+60331981028" className={clsx("text-sm", textColor)}>
          <div className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </span>
            <span className="hover:underline">+6 03 3198 1028</span>
          </div>
        </Link>
        <Link
          href="mailto:reservation@goldcoastresort.com.my"
          className={clsx("text-sm", textColor)}
        >
          <div className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1">
              <Archive className="w-4 h-4" />
              <span>Book A Reservation</span>
            </span>
            <span className="hover:underline">
              reservation@goldcoastresort.com.my
            </span>
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent
        className={clsx("sm:hidden flex-1 pl-4", textColor)}
        justify="end"
      >
        <NavbarMenuToggle aria-label="Toggle navigation menu" />
      </NavbarContent>

      <NavbarMenu className="px-6 py-6">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavbarMenuItem
              key={item.label}
              className={clsx(
                "py-2",
                item.status?.isDisabled && "cursor-not-allowed !opacity-50"
              )}
            >
              <Link
                className={clsx(
                  "flex items-center gap-2",
                  !item.status?.isDisabled && "cursor-not-allowed !opacity-50"
                )}
                href={item.href}
                onClick={(e) => {
                  if (item.status?.isDisabled) {
                    e.preventDefault();
                  } else {
                    setOpenMobileMenu(false);
                  }
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Button
            // onClick={handleClick}
            as="a"
            href="https://www.agoda.com/en-gb/gold-coast-morib-international-resort/hotel/banting-my.html?cid=1450498&ds=qSflqjSDAunJhkhz"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-gradient-to-r from-blue-900 to-blue-500 text-amber-400"
          >
            Check Availability
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
