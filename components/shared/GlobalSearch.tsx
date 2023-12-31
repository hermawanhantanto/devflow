import Image from "next/image";

import React from "react";
import { Input } from "../ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          className="no-focus paragraph-regular placeholder background-light800_darkgradient border-none outline-none"
          type="text"
          placeholder="Search globally"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
