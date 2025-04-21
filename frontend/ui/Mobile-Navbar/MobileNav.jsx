import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { HeartHandshake, House, Menu, Package, User } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "../authButton/auth-btn";
import { useAuth, useClerk } from "@clerk/nextjs";

const MobileNav = () => {
  const navOptions = [
    {
      label: "Home",
      icon: <House color="#E5C682" />,
    },
    {
      label: "About",
      icon: <User color="#E5C682" />,
    },
    {
      label: "Services",
      icon: <HeartHandshake color="#E5C682" />,
      auth: true,
    },
    {
      label: "Packages",
      icon: <Package color="#E5C682" />,
      auth: true,
    },
  ];

  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'mr-10'}>
        <DropdownMenuGroup>
          {navOptions.map((option, index) => (
            <DropdownMenuItem key={index}>
              <Link
                href={`/${option.label.toLowerCase()}`}
                className="flex items-center justify-center gap-2 text-[#5B3728]"
                onClick={(e) => {
                    if (!isSignedIn) {
                        e.preventDefault();
                        return clerk.openSignIn();
                    }
                }}
              >
                {option.icon} {option.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <Separator />
        <Button variant={"ghost"} className={"cursor-pointer"}>
          <AuthButton />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
