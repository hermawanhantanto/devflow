import React from "react";
import FilterTag from "../shared/FilterTag";
import { HomePageFilters } from "@/constant/filter";

const HomeFilter = () => {
  return (
    <div className="flex items-center gap-4 max-lg:hidden">
      {HomePageFilters.map((item) => (
        <FilterTag key={item.name} filter={item} />
      ))}
    </div>
  );
};

export default HomeFilter;
