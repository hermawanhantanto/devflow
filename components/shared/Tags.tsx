import Link from "next/link";
import React from "react";

interface Props {
  tag: {
    name: string;
    route: string;
    count: number;
  };
  viewCount?: boolean;
}

const Tags = ({ tag, viewCount }: Props) => {
  if (viewCount) {
    return (
      <Link href={tag.route} className="flex items-center justify-between">
        <p className="background-light800_darkgradient subtle-regular flex w-fit items-center justify-center rounded px-4 py-2 uppercase text-light-500 shadow">
          {tag.name}
        </p>
        <p className="text-dark300_light700 small-regular">{tag.count}</p>
      </Link>
    );
  }
  return (
    <Link
      href={tag.route}
      className="background-light800_darkgradient flex w-fit items-center justify-center rounded px-4 py-2 shadow"
    >
      <p className="subtle-regular uppercase text-light-500">{tag.name}</p>
    </Link>
  );
};

export default Tags;
