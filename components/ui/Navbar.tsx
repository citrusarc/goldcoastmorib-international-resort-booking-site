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
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { Logo } from "./Icons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const navItems = siteConfig.navItems.filter((item) => !item.status?.isHidden);

  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <HeroUINavbar
      isMenuOpen={openMobileMenu}
      onMenuOpenChange={setOpenMobileMenu}
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "transition-colors duration-300 ease-in-out",
        openMobileMenu ? "bg-background/70" : "bg-transparent"
      )}
    >
      <NavbarContent justify="start">
        <NavbarBrand className="max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold">Gold Coast Resort</p>
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
                    item.status?.isDisabled && "cursor-not-allowed !opacity-50"
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

      <NavbarContent className="hidden sm:flex" justify="end">
        <Button onClick={handleClick}>Login</Button>
      </NavbarContent>

      <NavbarContent className="sm:hidden flex-1 pl-4" justify="end">
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
          <Button size="lg" onClick={handleClick}>
            Login
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
