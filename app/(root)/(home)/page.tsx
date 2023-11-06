import HomePage from "@/components/home/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constant/filter";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";
import { getQuestions } from "@/lib/action/question.action";

export default async function Home() {
  const { questions } = await getQuestions({});
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
      {questions.length >= 1 ? (
        <div className="mt-12 flex w-full flex-1 flex-col gap-12">
          {questions.map((question) => (
            <QuestionCard
              key={question._id}
              id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              date={question.createdAt}
              likes={question.upvotes.length}
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
