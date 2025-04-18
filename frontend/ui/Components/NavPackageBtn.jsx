import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import React from "react";

const NavPackageBtn = () => {
  const packages = [
    {
      name: "Basic Grooming",
    },
    {
      name: "Pre-Bridal",
    },
    {
      name: "Glam Party Ready",
    },
    {
      name: "Relax & Rejuvenate",
    }
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={"cursor-pointer"}>
          Packages <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center justify-center bg-[#F2E9DF]">
        <DropdownMenuGroup>
          <DropdownMenuItem>Basic Grooming</DropdownMenuItem>
          <DropdownMenuItem>Pre-Bridal</DropdownMenuItem>
          <DropdownMenuItem>Glam Party Ready</DropdownMenuItem>
          <DropdownMenuItem>Relax & Rejuvenate</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavPackageBtn;
