"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavServiceBtn from "../Components/NavServiceBtn";
import NavPackageBtn from "../Components/NavPackageBtn";
import { Instagram, Menu, Phone } from "lucide-react";
import { AuthButton } from "../authButton/auth-btn";
import MobileNav from "../Mobile-Navbar/MobileNav";
import { useAuth, useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  return (
    <div className="w-full flex items-center justify-between bg-[#F2E9DF] px-10 py-4 text-[#5B3728] z-50 overflow-hidden">
      <div>
        <h1 className="text-xl md:text-2xl logo font-bold">Pooja Salon</h1>
      </div>
      <div className="items-center justify-center gap-4 hidden md:block">
        <div>
          <Link href={"/"}>
            <Button variant={"ghost"} className={"cursor-pointer"}>
              Home
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button variant={"ghost"} className={"cursor-pointer"}>
              About
            </Button>
          </Link>
          <Link href={''} className={"cursor-pointer"}>
            <NavServiceBtn />
          </Link>
          <Link href={''} className={"cursor-pointer"}>
            <NavPackageBtn />
          </Link>
          <Link href={"/account"} onClick={(e) => {
            if (!isSignedIn) {
              e.preventDefault();
              return clerk.openSignIn();
            }
          }}>
            <Button variant={"ghost"} className={"cursor-pointer"}>
              Profile
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <AuthButton />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
