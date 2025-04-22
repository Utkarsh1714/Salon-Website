import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeartHandshake, House, Menu, Package, User } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "../authButton/auth-btn";
import { useAuth, useClerk } from "@clerk/nextjs";
import { Sidebar, SidebarContent, SidebarGroup, SidebarTrigger } from "@/components/ui/sidebar";

const MobileNav = () => {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();

  const navOptions = [
    {
      label: "Home",
      route: "/",
      icon: <House color="#E5C682" />,
      auth: false,
    },
    {
      label: "About",
      route: "/about",
      icon: <User color="#E5C682" />,
      auth: false,
    },
    {
      label: "Services",
      route: "/services",
      icon: <HeartHandshake color="#E5C682" />,
      auth: true,
    },
    {
      label: "Packages",
      route: "/packages",
      icon: <Package color="#E5C682" />,
      auth: true,
    },
  ];

  return (
    <div className="flex items-end justify-end">
      <Button variant="ghost" className="cursor-pointer">
        <AuthButton />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={'w-full'}>
          <DropdownMenuGroup>
            {navOptions.map(({ label, route, icon, auth }, index) => (
              <DropdownMenuItem key={index} className="p-0">
                <Link
                  href={route}
                  className="w-full px-3 py-2 flex items-center gap-2 text-[#5B3728]"
                  onClick={(e) => {
                    if (auth && !isSignedIn) {
                      e.preventDefault();
                      clerk.openSignIn();
                    }
                  }}
                >
                  {icon} {label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
