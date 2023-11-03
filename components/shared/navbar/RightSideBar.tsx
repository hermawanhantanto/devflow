import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tags from "../Tags";

const Questions = [
  "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  "Can I get the course for free?",
  "Redux Toolkit Not Updating State as Expected",
  "Async/Await Function Not Handling Errors Properly",
  "How do I use express as a custom server in NextJS?",
];

const tags = [
  { name: "JAVASCRIPT", route: "/JAVASCRIPT", count: 12 },
  { name: "REACT", route: "/REACT", count: 14 },
  { name: "NEXTJS", route: "/NEXTJS", count: 10 },
  { name: "CSS", route: "/CSS", count: 8 },
  { name: "HTML", route: "/HTML", count: 6 },
];

const RightSideBar = () => {
  return (
    <section className=" background-light900_dark200 shadow-light100_dark100 sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 dark:border-none dark:shadow-none max-xl:hidden lg:min-w-[350px]">
      <div className="flex flex-col gap-6">
        <h2 className="h3-bold lg:h2-bold text-dark200_light800">
          Top Questions
        </h2>
        {Questions.map((question) => (
          <Link
            href="/"
            key={question}
            className="flex items-center justify-between"
          >
            <p className="text-dark500_light700 body-regular max-w-[250px]">
              {question}
            </p>
            <Image
              src="assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="chevron-right"
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-6">
        <h2 className="h3-bold lg:h2-bold text-dark200_light800">
          Popular Tags
        </h2>
        {tags.map((tag) => (
          <Tags tag={tag} key={tag.name} viewCount={true} />
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;
