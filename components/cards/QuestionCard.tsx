import React from "react";
import Tags from "../shared/Tags";
import { formatDate, formatNumber } from "@/lib/utils";
import Metric from "../shared/Metric";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  tags: {
    name: string;
  }[];
  author: {
    clerkId: string;
    picture: string;
    name: string;
  };
  date: Date;
  likes: number;
  answers: Object[];
  views: number;
}

const QuestionCard = ({
  id,
  title,
  tags,
  author,
  date,
  likes,
  answers,
  views,
}: Props) => {
  return (
    <section className="card-wrapper text-dark200_light900 w-full rounded-lg p-9 max-sm:p-5 sm:px-12">
      <div className=" flex flex-col gap-4">
        <p className="small-medium sm:hidden">- asked {formatDate(date)}</p>
        <Link href={`/question/${id}`}>
          <h2 className="h2-bold sm:h3-bold sm:base-bold line-clamp-1">
            {title}
          </h2>
        </Link>
        <div className="flex gap-4 max-sm:flex-col sm:items-center">
          {tags.map((tag) => {
            return <Tags key={tag.name} tag={tag} />;
          })}
        </div>
        <div className="flex w-full flex-wrap justify-between max-md:flex-col max-md:gap-4">
          <Metric
            title={formatDate(date)}
            value={author.name}
            href={`/profile/${author.clerkId}`}
            imgUrl="assets/icons/avatar.svg"
            isAuthor
            alt="author"
          />
          <div className="flex flex-wrap items-center gap-2 ">
            <Metric
              title="likes"
              value={formatNumber(likes)}
              imgUrl="assets/icons/like.svg"
              alt="likes"
            />
            <Metric
              title="answers"
              value={formatNumber(answers.length)}
              imgUrl="assets/icons/message.svg"
              alt="answers"
            />
            <Metric
              title="views"
              value={formatNumber(views)}
              imgUrl="assets/icons/eye.svg"
              alt="views"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCard;
