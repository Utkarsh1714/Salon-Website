import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useAuth, useClerk } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavServiceBtn = () => {
  const services = [
    {
      label: "Hair",
      items: ["Haircuts", "Blow-dry & Styling", "More..."],
      auth: true,
    },
    {
      label: "Nail",
      items: ["Manicure", "Pedicure", "More..."],
      auth: true,
    },
    {
      label: "Skin & Face",
      items: [
        "Facials (basic to advanced)",
        "Face Cleanup",
        "Chemical Peels",
        "More...",
      ],
      auth: true,
    },
    {
      label: "Massage & Relaxation",
      items: [
        "Head Massage",
        "Back / Neck / Shoulder Massage",
        "Full Body Massage",
      ],
      auth: true,
    },
    {
      label: "Makeup",
      items: [
        "Party Makeup",
        "Bridal Makeup",
        "Engagement / Photoshoot Makeup",
        "More...",
      ],
      auth: true,
    },
  ];

  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={"cursor-pointer"}>
          Services <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-[#F2E9DF] text-[#5B3728]">
        <DropdownMenuGroup>
          {services.map(({ label, items }) => (
            <DropdownMenuSub key={label}>
              <DropdownMenuSubTrigger>{label}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {items.map((item, idx) => (
                    <Link
                      key={item}
                      href={"/services"}
                      onClick={(e) => {
                        if (!isSignedIn) {
                          e.preventDefault();
                          return clerk.openSignIn();
                        }
                      }}
                    >
                      <DropdownMenuItem>{item}</DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
          <Separator className={"border-2 bg-[#5B3728] px-2"} />
          <Link
            href={"/services"}
            onClick={(e) => {
              if (!isSignedIn) {
                e.preventDefault();
                return clerk.openSignIn();
              }
            }}
          >
            <DropdownMenuItem>More...</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavServiceBtn;
