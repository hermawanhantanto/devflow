import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  body: string;
  path: string;
}

const NoResult = ({ title, body, path }: Props) => {
  return (
    <div className="text-dark200_light900 mt-12 flex w-full flex-col  items-center">
      <Image
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        alt="No found"
        className="object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        alt="No found"
        className="hidden object-contain dark:block"
      />
      <h2 className="h2-bold mt-8">{title}</h2>
      <p className="body-regular mt-4 max-w-md text-center">{body}</p>
      <Link
        href={path}
        className="flex-center body-regular mt-8 rounded bg-primary-500 px-5 py-3 text-light-900"
      >
        Ask a Question
      </Link>
    </div>
  );
};

export default NoResult;
