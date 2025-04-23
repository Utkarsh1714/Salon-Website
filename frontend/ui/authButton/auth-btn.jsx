"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const AuthButton = () => {
  const router = useRouter();

  return (
    <>
      <SignedIn>
        <div className="flex items-center justify-center gap-2">
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverFooter: "hidden",
              },
            }}
            afterSignOutUrl="/"
            userProfileMode="modal"
            userProfileProps={{
              additionalNavigationEntries: [
                {
                  label: "Appointment",
                  icon: "calendar",
                  onClick: () => router.push("/appointment"),
                },
              ],
            }}
          />
        </div>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-[#5B3728] cursor-pointer hover:text-blue-500 border-[#E5C682] rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
