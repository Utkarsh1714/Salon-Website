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
      <DropdownMenuContent>
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
          {/* <DropdownMenuItem>
            <Link href={"/about"} className="flex items-center justify-center gap-2 text-[#5B3728]"><User color="#E5C682"/>About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/services"} className="flex items-center justify-center gap-2 text-[#5B3728]"><HeartHandshake color="#E5C682"/>Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/packages"} className="flex items-center justify-center gap-2 text-[#5B3728]"><Package color="#E5C682"/>Packages</Link>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <Separator />
        <Button variant={"ghost"} className={"cursor-pointer my-2"}>
          <AuthButton />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
