import HomePage from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constant/filter";
import Link from "next/link";

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
    </>
  );
}
