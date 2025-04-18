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

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/"} className="flex items-center justify-center gap-2 text-[#5B3728]"><House color="#E5C682"/> Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about"} className="flex items-center justify-center gap-2 text-[#5B3728]"><User color="#E5C682"/>About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/services"} className="flex items-center justify-center gap-2 text-[#5B3728]"><HeartHandshake color="#E5C682"/>Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/packages"} className="flex items-center justify-center gap-2 text-[#5B3728]"><Package color="#E5C682"/>Packages</Link>
          </DropdownMenuItem>
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
