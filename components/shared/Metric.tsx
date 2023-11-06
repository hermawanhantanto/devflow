import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  imgUrl: string;
  value: string | number;
  alt: string;
  isAuthor?: boolean;
  href?: string;
}

const Metric = ({ title, imgUrl, value, alt, isAuthor, href }: Props) => {
  if (href) {
    <Link className="flex-center gap-4" href={href}>
      <Image
        src={imgUrl}
        height={16}
        width={16}
        className="rounded"
        alt={alt}
      />
      <div className="flex-center gap-2">
        <p className="body-medium">{value}</p>
        <p className={`small-medium ${isAuthor ? "max-sm:hidden" : ""}`}>
          {title}
        </p>
      </div>
    </Link>;
  }

  return (
    <div className="flex items-center gap-1">
      <Image
        src={imgUrl}
        height={16}
        width={16}
        className="invert-colors"
        alt={alt}
      />
      <p className="small-medium">
        {value} {title}
      </p>
    </div>
  );
};

export default Metric;
