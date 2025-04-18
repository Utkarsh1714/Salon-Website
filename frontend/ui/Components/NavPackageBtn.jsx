import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth, useClerk } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavPackageBtn = () => {
  const packages = [
    "Basic Grooming",
    "Pre-Bridal",
    "Glam Party Ready",
    "Relax & Rejuvenate",
  ];

  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={"cursor-pointer"}>
          Packages <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center justify-center bg-[#F2E9DF] text-[#5B3728]">
        <DropdownMenuGroup>
          {packages.map((pkg) => (
            <DropdownMenuItem key={pkg}>
              <Link
                href={"/packages"}
                className="w-full h-full"
                onClick={(e) => {
                  if (!isSignedIn) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                {pkg}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>Basic Grooming</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavPackageBtn;
