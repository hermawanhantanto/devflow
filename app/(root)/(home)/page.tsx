import HomePage from "@/components/home/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constant/filter";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    id: 1,
    title: "Cara Mengoptimalkan Kinerja Website",
    tag: [
      { name: "Optimasi", route: "/optimasi", count: 3 },
      { name: "Web Development", route: "/web-development", count: 7 },
    ],
    author: {
      id: 1,
      profilImg: "/assets/icons/account.svg",
      name: "Alice Johnson",
    },
    date: new Date("2023-11-01"),
    likes: 150,
    answers: [],
    views: 5000,
  },
  {
    id: 2,
    title: "Pengenalan Pemrograman TypeScript",
    tag: [
      { name: "TypeScript", route: "/typescript", count: 10 },
      { name: "Programming", route: "/programming", count: 15 },
    ],
    author: {
      id: 2,
      profilImg: "/assets/icons/account.svg",
      name: "Bob Smith",
    },
    date: new Date("2023-10-28"),
    likes: 120,
    answers: [],
    views: 4500,
  },
  {
    id: 3,
    title: "Memahami Konsep React Hooks",
    tag: [
      { name: "React", route: "/react", count: 12 },
      { name: "Frontend Development", route: "/frontend", count: 8 },
    ],
    author: {
      id: 3,
      profilImg: "/assets/icons/account.svg",
      name: "Eva Davis",
    },
    date: new Date("2023-10-25"),
    likes: 180,
    answers: [],
    views: 6000,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          imgUrl="/assets/icons/search.svg"
          position="left"
          placeholder="Search a question"
          className="flex-1"
        />
        <Filter
          filter={HomePageFilters}
          otherClass={`min-h-[56px] sm:min-w-[170px]`}
          containerClass={`max-md:flex hidden`}
        />
      </div>
      <HomePage />
      {questions.length > 1 ? (
        <div className="mt-12 flex w-full flex-1 flex-col gap-12">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tag}
              author={question.author}
              date={question.date}
              likes={question.likes}
              answers={question.answers}
              views={question.views}
            />
          ))}
        </div>
      ) : (
        <NoResult
          title="There are no question to show"
          body="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          path="/ask-question"
        />
      )}
    </>
  );
}
