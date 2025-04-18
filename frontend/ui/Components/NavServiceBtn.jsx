// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Separator } from "@/components/ui/separator";
// import { useAuth, useClerk } from "@clerk/nextjs";
// import { ChevronDown } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const NavServiceBtn = () => {
//   const services = [
//     {
//       label: "Hair",
//       auth: true,
//     },
//     {
//       label: "Nail",
//       auth: true,
//     },
//     {
//       label: "Skin & Face",
//       auth: true,
//     },
//     {
//       label: "Massage & Relaxation",
//       auth: true,
//     },
//     {
//       label: "Makeup",
//       auth: true,
//     },
//   ];

//   const clerk = useClerk();
//   const { isSignedIn } = useAuth();
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className={"cursor-pointer"}>
//           Services <ChevronDown />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="bg-[#F2E9DF] text-[#5B3728]">
//         <DropdownMenuGroup>
//           {services.map(({ label }) => (
//             <DropdownMenuItem key={label}>
//               <Link href={`/services`} className="flex items-center justify-center gap-2 text-[#5B3728]"
//                 onClick={(e) => {
//                     if (!isSignedIn) {
//                         e.preventDefault();
//                         return clerk.openSignIn();
//                     }
//                 }}>
//                   {label}
//               </Link>
//             </DropdownMenuItem>
//           ))}
//           <Separator className={"border-2 bg-[#5B3728] px-2"} />
//           <Link
//             href={"/services"}
//             onClick={(e) => {
//               if (!isSignedIn) {
//                 e.preventDefault();
//                 return clerk.openSignIn();
//               }
//             }}
//           >
//             <DropdownMenuItem>More...</DropdownMenuItem>
//           </Link>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default NavServiceBtn;


import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useAuth, useClerk } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavServiceBtn = () => {
  const services = [
    "Hair",
    "Skin & Face",
    "Massage & Relaxation",
    "Makeup",
  ];

  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          Services <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#F2E9DF] text-[#5B3728]">
        <DropdownMenuGroup>
          {services.map((label) => (
            <DropdownMenuItem key={label} className="cursor-pointer">
              <Link
                href="/services"
                className="w-full h-full"
                onClick={(e) => {
                  if (!isSignedIn) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                {label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <Separator className="my-2 border border-[#E5C682]" />
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href="/services"
            className="w-full h-full"
            onClick={(e) => {
              if (!isSignedIn) {
                e.preventDefault();
                return clerk.openSignIn();
              }
            }}
          >
            More...
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavServiceBtn;
