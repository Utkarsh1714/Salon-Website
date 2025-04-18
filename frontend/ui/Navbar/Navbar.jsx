import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavServiceBtn from "../Components/NavServiceBtn";
import NavPackageBtn from "../Components/NavPackageBtn";
import { Instagram, Menu, Phone } from "lucide-react";
import { AuthButton } from "../authButton/auth-btn";
import MobileNav from "../Mobile-Navbar/MobileNav";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-[#F2E9DF] px-10 py-4 text-[#5B3728]">
      <div>
        <h1 className="text-2xl logo font-bold">Pooja Salon</h1>
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
          <Button variant={"ghost"} className={"cursor-pointer"}>
            <NavPackageBtn />
          </Button>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <AuthButton />
      </div>
      <div className="flex items-center justify-center md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
