"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  filter: {
    name: string;
    value: string;
  };
}

const FilterTag = ({ filter }: Props) => {
  const searchParams = useSearchParams();
  return (
    <Link href={`?filter=${filter.value}`} className="mt-10 flex items-center">
      <p
        className={`body-medium flex w-fit items-center justify-center rounded-lg px-4 py-2 text-light-500 shadow ${
          searchParams.get("filter") === filter.value
            ? "!bg-primary-100 !text-primary-500 dark:!bg-dark-400"
            : "background-light800_darkgradient"
        }`}
      >
        {filter.name}
      </p>
    </Link>
  );
};

export default FilterTag;
