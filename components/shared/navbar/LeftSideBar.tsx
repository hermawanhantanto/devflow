"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constant/constant";
import { SignedOut, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  return (
    <nav className="background-light900_dark200 shadow-light100_dark100 sticky left-0 flex h-screen flex-col border-r p-6 pt-36 dark:border-none dark:shadow-none max-sm:hidden lg:min-w-[266px]">
      <div className="flex h-screen w-full flex-col gap-6 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.route}
              href={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4 ${
                !isSignedIn && link.route === "/profile" && "hidden"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
        <div className="flex h-full flex-col justify-end gap-3">
          <SignedOut>
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/account.svg"
                  width={20}
                  height={20}
                  className="invert-colors hidden max-lg:block"
                  alt="sign-in"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Button>
            </Link>
          </SignedOut>
          <SignedOut>
            <Link href="/sign-up">
              <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  width={20}
                  height={20}
                  className="invert-colors hidden max-lg:block"
                  alt="sign-in"
                />
                <span className="text-dark300_light900 max-lg:hidden">
                  Sign Up
                </span>
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
