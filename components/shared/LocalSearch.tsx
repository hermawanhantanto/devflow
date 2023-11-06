"use client";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

interface Props {
  route: string;
  position: string;
  imgUrl: string;
  placeholder: string;
  className?: string;
}

const LocalSearch = ({
  route,
  position,
  imgUrl,
  placeholder,
  className,
}: Props) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`relative flex min-h-[56px] grow items-center gap-1 rounded-xl bg-light-800 px-4 dark:bg-dark-200 ${
          position === "right" && "flex-row-reverse"
        }`}
      >
        <Image
          src={imgUrl}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          className="no-focus paragraph-regular placeholder border-none bg-light-800 outline-none dark:bg-dark-200"
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default LocalSearch;
